import { Center, Flex, Input, Spinner, Text, useColorMode } from "@chakra-ui/react"
import { IoCloseOutline } from "@react-icons/all-files/io5/IoCloseOutline"
// import { mbQuery } from "app/api/musicBrainzQueries"
import { audioMetaDataObjectAtom } from "app/core/state/Atoms"
import { fileRead } from "app/core/utils"
import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { FileProcessing } from "./FileProcessing"
type FileReadProps = {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}

const FileUpload: FC<FileReadProps> = ({ loading, setLoading }) => {
  const { colorMode } = useColorMode()
  const iconColor = "#FE7A15"
  //   const [queryData, setQueryData] = useState({})
  const [audioMetaDataObjectState, setAudioMetaDataObjectState] =
    useRecoilState(audioMetaDataObjectAtom)
  const { isMetadataPresent } = FileProcessing(audioMetaDataObjectState)

  /*              
    Upload the files [x]
    Read the meta data  [x]
    Check if artist, song title and album are undefined [x]
    Add to respective arrays [x]
    Take songs that have artist, song title and album present [x]
    Clean up array by unique artist, or unique album, or unique song title [x]
    then take the data from that cleaned array and compile it for 
    MB queries
  */

  const onChangeHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    // get files from upload element
    const uploadFiles = event.target.files || []

    // convert file list to an Array of Type File
    const fileListAsArray = Array.from(uploadFiles)

    // call file read function
    try {
      const cleanMetaData = await fileRead(fileListAsArray)
      setAudioMetaDataObjectState(cleanMetaData)
    } catch (error) {}
    setLoading(false)
  }

  //   useEffect(() => {
  //     // run music brains query
  //     mbQuery().then((result) => {
  //       // store query result in state
  //       setQueryData(result)
  //       return result
  //     })
  //   }, [])

  return (
    <>
      {isMetadataPresent ? (
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
                setAudioMetaDataObjectState({
                  albumAndTitleOnly: null,
                  albumOnly: null,
                  titleOnly: null,
                  artistAndTitleOnly: null,
                  artistOnly: null,
                  artistAndAlbumOnly: null,
                  allUndefined: null,
                  allDefined: null,
                })
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
          {loading ? (
            <Spinner />
          ) : (
            <>
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
            </>
          )}
        </Center>
      )}
    </>
  )
}

export default FileUpload
