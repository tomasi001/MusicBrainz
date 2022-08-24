import { Flex, useColorMode } from "@chakra-ui/react"
import { BlitzPage, Image } from "blitz"
import logoDark from "public/logoDark.svg"
import logoLight from "public/logoLight.svg"
import menuSlider from "public/menuSlider.svg"
import recordArmDark from "public/recordArmDark.svg"
import recordArmLight from "public/recordArmLight.svg"
import recordDark from "public/recordDark.svg"
import recordLight from "public/recordLight.svg"
import { useRecoilValue } from "recoil"
import HoverLink from "../components/HoverLink"
import { scrollBarPosEnum, scrollBarStateEnum } from "../constants/types"
import { scrollBarPositionAtom } from "../state/Atoms"

const Header: BlitzPage = () => {
  const { colorMode } = useColorMode()
  const scrollBarPos = useRecoilValue(scrollBarPositionAtom)
  const stateEnumKeys = Object.keys(scrollBarStateEnum).filter((item) => isNaN(Number(item)))
  const posEnumValues = Object.values(scrollBarPosEnum)

  return (
    <Flex width="100%">
      <Flex
        position="absolute"
        right="0px"
        zIndex="1"
        opacity={colorMode === "light" ? "100%" : "70%"}
      >
        <Image src={colorMode === "light" ? recordDark : recordLight} />
      </Flex>
      <Flex position="absolute" right="70px" top="60px" zIndex="2">
        <Image src={colorMode === "light" ? logoLight : logoDark} />
      </Flex>
      <Flex position="absolute" right="0px" top="10px" zIndex="2">
        <Image src={colorMode === "light" ? recordArmLight : recordArmDark} />
      </Flex>
      <Flex position="absolute" left="0px" top={scrollBarPos}>
        <Image src={menuSlider} />
      </Flex>
      <Flex
        ml="60px"
        mt="65px"
        flexDirection="column"
        fontSize="16px"
        fontFamily="Poppins, sans-serif"
      >
        {stateEnumKeys.map((item, i) => {
          return (
            <HoverLink
              scrollState={item as unknown as scrollBarStateEnum}
              scrollPos={posEnumValues[i] || ""}
              id={i}
              key={i}
            />
          )
        })}
      </Flex>
    </Flex>
  )
}

export default Header
