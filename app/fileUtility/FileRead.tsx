import { Center, Flex, Input, Text, useColorMode } from "@chakra-ui/react"
import { IoCloseOutline } from "@react-icons/all-files/io5/IoCloseOutline"
import { audioMetaData } from "app/core/constants/types"
import { audioMetaDataAtom } from "app/core/state/Atoms"
import * as mmb from "music-metadata-browser"
import { Dispatch, FC, SetStateAction } from "react"
import { useSetRecoilState } from "recoil"

type FileReadProps = {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  parseResults: audioMetaData[]
  setParseResults: Dispatch<SetStateAction<audioMetaData[]>>
}

const FileRead: FC<FileReadProps> = ({ loading, setLoading, parseResults, setParseResults }) => {
  const { colorMode } = useColorMode()
  const iconColor = "#FE7A15"
  // metadata and file data

  const setAudioMetaDataState = useSetRecoilState(audioMetaDataAtom)

  const parseFile = async (file: File) => {
    setLoading(true)

    return mmb.parseBlob(file).then((metadata) => {
      setLoading(false)
      return metadata
    })
  }

  const onChangeHandler = async (event) => {
    setParseResults([])

    let i = 0
    for (const file of event.target.files) {
      try {
        const metadata = await parseFile(file)
        const parseResult: audioMetaData = {
          index: i++,
          file: file,
          metadata: metadata,
        }
        // Update GUI
        setParseResults((arr) => [...arr, parseResult])
      } catch (err) {
        const parseResult: audioMetaData = {
          index: i++,
          file: file,
          error: err.message,
        }
        setParseResults((arr) => [...arr, parseResult])
      }
    }
  }
  setAudioMetaDataState(parseResults)

  return (
    <>
      {parseResults.length !== 0 ? (
        <Center
          color={colorMode === "light" ? "#403731" : "#FEFBF9"}
          cursor="default"
          justify-content="center"
          pt="12px"
          transition="transform .2s ease-out"
          flexDirection="row"
        >
          <Flex
            _hover={{
              color: `${iconColor}`,
              cursor: "none",
              opacity: "100%",
            }}
            onClick={() => {
              if (confirm("Are you sure you want to delete these files?")) {
                setParseResults([])
                setAudioMetaDataState([])
              }
            }}
          >
            <Flex>
              <IoCloseOutline size="3vw" color="currentColor" />
            </Flex>
          </Flex>
        </Center>
      ) : (
        <Center
          align-items="center"
          border={colorMode === "light" ? "thin solid black" : "thin solid white"}
          box-shadow="0 4px 7px rgba(0, 0, 0, 0.4)"
          color={colorMode === "light" ? "#403731" : "#FEFBF9"}
          cursor="default"
          display="block"
          fontWeight="bold"
          height="50px"
          position="relative"
          justify-content="center"
          pt="12px"
          width="200px"
          transition="transform .2s ease-out"
          flexDirection="row"
        >
          <Text cursor="default">Browse</Text>
          <Input
            opacity="0"
            type="file"
            name="file"
            multiple={true}
            onChange={(e) => onChangeHandler(e)}
            width="200px"
            height="50px"
            position="relative"
            top="-35px"
            cursor="default"
            accept=".mp3,audio/*"
          />
        </Center>
      )}
    </>
  )
}

export default FileRead
