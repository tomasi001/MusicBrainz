import { Flex, useColorMode } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FC } from "react"
import { animation } from "../utils"

const RadialArt: FC = () => {
  const { colorMode } = useColorMode()

  return (
    <Flex zIndex={-10}>
      <Flex
        as={motion.div}
        animation={animation("0", "0", "-100", "100", "-50", "50", "20")}
        height="200px"
        width="200px"
        bgGradient={
          colorMode === "light"
            ? "radial(#FE7A15 30%, white, white)"
            : "radial(#FE7A15 30%, #171310, #171310)"
        }
        position="absolute"
        borderRadius="100%"
        left="100px"
        top="350px"
        opacity="20%"
      />
      <Flex
        as={motion.div}
        animation={animation("0", "0", "50", "-200", "50", "50", "15")}
        height="600px"
        width="600px"
        bgGradient={
          colorMode === "light"
            ? "radial(#FE7A15 40%, white, white)"
            : "radial(#FE7A15 40%, #171310, #171310)"
        }
        position="absolute"
        borderRadius="100%"
        left="270px"
        top="350px"
        opacity="23%"
      />
      <Flex
        as={motion.div}
        animation={animation("0", "0", "100", "100", "50", "50", "10")}
        height="600px"
        width="300px"
        bgGradient={
          colorMode === "light"
            ? "radial(at center right, #FE7A15 30%, white, white, white)"
            : "radial(at center right, #FE7A15 30%, #171310, #171310, #171310)"
        }
        position="absolute"
        borderBottomLeftRadius="300px"
        borderTopLeftRadius="300px"
        right="0"
        bottom="0x"
        opacity="30%"
      />
    </Flex>
  )
}

export default RadialArt
