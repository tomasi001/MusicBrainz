import { Button, Center, Radio, RadioGroup, Stack, Text, useColorMode } from "@chakra-ui/react"
import { sortByEnum } from "app/core/constants/types"
import { audioMetaDataObjectAtom, sortByAtom } from "app/core/state/Atoms"
import { convertEnumToString } from "app/core/utils"
// import { MusicBrainzApi } from "musicbrainz-api"
import { useState } from "react"
import { useRecoilState } from "recoil"

// comments all present for work in progress, trying to figure out how to separate server and client
// import { GetServerSideProps } from "blitz"

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const [audioMetaDataObjectState, setAudioMetaDataObjectState] =
//     useRecoilState(audioMetaDataObjectAtom)
//   const mbApi = new MusicBrainzApi({
//     appName: "musicbrainz-web-app",
//     appVersion: "0.0.1",
//     appContactInfo: "tom.shields001@gmail.com",
//   })

//   const res = await mbApi.searchArtist({ query: "Stromae" }).then((response) => {
//     console.log(response)
//     return response
//   })

//   return {
//     props: { artistList: res },
//     revalidate: 1,
//   }
// }

const FileSort = () => {
  const { colorMode } = useColorMode()
  const iconColor = "#FE7A15"
  const [sort, setSort] = useRecoilState(sortByAtom)
  const [value, setValue] = useState(convertEnumToString(sort))
  const [audioMetaDataObjectState, setAudioMetaDataObjectState] =
    useRecoilState(audioMetaDataObjectAtom)

  return (
    <Center flexDirection="column">
      <RadioGroup
        color={colorMode === "light" ? "#403731" : "#FEFBF9"}
        height="35px"
        width="250px"
        mt="70px"
        mb="30px"
        pl="16px"
        onChange={setValue}
        value={value}
        borderBottom={colorMode === "light" ? "thin solid black" : "thin solid white"}
      >
        <Stack direction="row">
          <Radio colorScheme="purple" value={"Artist"}>
            Artist
          </Radio>
          <Radio colorScheme="purple" value={"Album"}>
            Album
          </Radio>
          <Radio colorScheme="purple" value={"Genre"}>
            Genre
          </Radio>
        </Stack>
      </RadioGroup>
      <Button
        bg="whiteAlpha.100"
        border={colorMode === "light" ? "thin solid black" : "thin solid white"}
        box-shadow="0 4px 7px rgba(0, 0, 0, 0.4)"
        color={colorMode === "light" ? "#403731" : "#FEFBF9"}
        cursor="default"
        display="block"
        fontWeight="bold"
        height="50px"
        position="relative"
        width="200px"
        transition="transform .2s ease-out"
        flexDirection="row"
        borderRadius="0px"
        _hover={{
          color: `${iconColor}`,
          cursor: "none",
          opacity: "100%",
        }}
        onClick={() => {
          setSort(sortByEnum[value.toUpperCase()])
          // sortFiles(audioMetaDataState, sortByEnum[value.toUpperCase()])
        }}
      >
        <Text>Sort by</Text>
      </Button>
    </Center>
  )
}

export default FileSort
