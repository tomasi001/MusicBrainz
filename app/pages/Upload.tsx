import { Center, Heading, useColorMode } from "@chakra-ui/react"
import UploadRadialArt from "app/core/components/UploadRadialArt"
import Layout from "app/core/layouts/Layout"
import PageWrapper from "app/core/layouts/PageWrapper"
import { BlitzPage } from "blitz"

const Upload: BlitzPage = () => {
  const { colorMode } = useColorMode()
  return (
    <PageWrapper>
      <UploadRadialArt />
      <Center flexDirection="row">
        <Heading
          pt="175px"
          fontSize="48px"
          fontWeight="semibold"
          fontFamily="'Clash Display', sans-serif"
          fontStyle="normal"
          color={colorMode === "light" ? "#403731" : "#FEFBF9"}
          zIndex="1"
        >
          Upload files
        </Heading>
        {/* <FiMusic size="25px" color={colorMode === "light" ? "#403731" : "#FEFBF9"} /> */}
      </Center>
    </PageWrapper>
  )
}

Upload.suppressFirstRenderFlicker = true
Upload.getLayout = (page: JSX.Element) => <Layout title="Upload">{page}</Layout>

export default Upload
