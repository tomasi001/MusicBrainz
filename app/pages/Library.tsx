import { Button, Center, Text, useColorMode } from "@chakra-ui/react"
import { FiMusic } from "@react-icons/all-files/fi/FiMusic"
import Layout from "app/core/layouts/Layout"
import PageWrapper from "app/core/layouts/PageWrapper"
import { BlitzPage, Link as BlitzLink, Routes } from "blitz"

const Library: BlitzPage = () => {
  const { colorMode } = useColorMode()
  return (
    <PageWrapper>
      <Button
        height="400px"
        width="800px"
        borderRadius="100px"
        mt="70px"
        ml="50px"
        bgGradient={
          colorMode === "light"
            ? "radial(#FE7A15 30%, white, white)"
            : "radial(#FE7A15 30%, #1a202c, #1a202c)"
        }
        opacity="30%"
      >
        <BlitzLink href={Routes.Home()}>
          <a className="button small">
            <Center flexDirection="row">
              <Text fontFamily="Poppins, sans-serif" color="#FEFBF9" mr="8px">
                Home
              </Text>
              <FiMusic size="25px" color="#FEFBF9" />
            </Center>
          </a>
        </BlitzLink>
      </Button>
    </PageWrapper>
  )
}

Library.suppressFirstRenderFlicker = true
Library.getLayout = (page: JSX.Element) => <Layout title="Library">{page}</Layout>

export default Library
