import { Center, Flex, Heading, useColorMode } from "@chakra-ui/react"
import UploadRadialArt from "app/core/components/UploadRadialArt"
import Layout from "app/core/layouts/Layout"
import PageWrapper from "app/core/layouts/PageWrapper"
import { audioMetaDataObjectAtom } from "app/core/state/Atoms"
import { FileProcessing } from "app/fileUtility/FileProcessing"
import FileSort from "app/fileUtility/FileSort"
import FileUpload from "app/fileUtility/FileUpload"
import { BlitzPage } from "blitz"
import { useState } from "react"
import { useRecoilValue } from "recoil"

const Upload: BlitzPage = () => {
  const { colorMode } = useColorMode()
  const audioMetaDataObjectState = useRecoilValue(audioMetaDataObjectAtom)
  const { isMetadataPresent, totalCount } = FileProcessing(audioMetaDataObjectState)

  const [loading, setLoading] = useState(false)

  const fileHeader =
    totalCount > 1 ? `${totalCount}\u00A0\u00A0 files` : `${totalCount}\u00A0\u00A0 file`

  const htmlMetadata = isMetadataPresent ? (
    <Center pt="75px">
      <Heading
        width="500px"
        fontSize="48px"
        fontFamily="'Clash Display', sans-serif"
        fontStyle="normal"
        color={colorMode === "light" ? "#403731" : "#FEFBF9"}
        zIndex="1"
      >
        {loading ? "Loading..." : `${fileHeader} uploaded`}
      </Heading>
    </Center>
  ) : (
    <Center>
      <Heading
        pt="75px"
        fontSize="48px"
        fontWeight="semibold"
        fontFamily="'Clash Display', sans-serif"
        fontStyle="normal"
        color={colorMode === "light" ? "#403731" : "#FEFBF9"}
        zIndex="1"
      >
        Upload files
      </Heading>
    </Center>
  )

  return (
    <PageWrapper>
      <UploadRadialArt />
      <Center flexDirection="column" justifyContent="center" width="100%" textAlign="center">
        {htmlMetadata}
        {/* {totalCount !== 0 && <FileSort />} */}
        <Flex
          fontFamily="'Clash Display', sans-serif"
          fontStyle="normal"
          color={colorMode === "light" ? "#403731" : "#FEFBF9"}
          mt="40px"
        >
          <FileUpload loading={loading} setLoading={setLoading} />
        </Flex>
      </Center>
    </PageWrapper>
  )
}

Upload.suppressFirstRenderFlicker = true
Upload.getLayout = (page: JSX.Element) => <Layout title="Upload">{page}</Layout>

export default Upload
