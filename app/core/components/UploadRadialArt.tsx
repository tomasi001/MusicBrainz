import { Flex, useColorMode } from "@chakra-ui/react"
import { FC } from "react"

const UploadRadialArt: FC = () => {
  const { colorMode } = useColorMode()
  return (
    <>
      <Flex
        height="500px"
        width="1000px"
        borderRadius="100px"
        bgGradient={
          colorMode === "light"
            ? "radial(#FE7A15 30%, white 70%, white 100%)"
            : "radial(#FE7A15 30%, #171310, #171310)"
        }
        position="absolute"
        left="auto"
        top="27%"
        opacity="30%"
        zIndex={-10}
      />
    </>
  )
}

export default UploadRadialArt
