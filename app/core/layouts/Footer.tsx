import { Center, Flex, Link as ChakraUILink, Text, useColorMode } from "@chakra-ui/react"
import { BsChevronDoubleDown } from "@react-icons/all-files/bs/BsChevronDoubleDown"
import { BsChevronDoubleUp } from "@react-icons/all-files/bs/BsChevronDoubleUp"
import { FiInfo } from "@react-icons/all-files/Fi/FiInfo"
import { FiTwitter } from "@react-icons/all-files/fi/FiTwitter"
import { IoGlobeOutline } from "@react-icons/all-files/io5/IoGlobeOutline"
import { IoReaderOutline } from "@react-icons/all-files/Io5/IoReaderOutline"
import { RiHandCoinLine } from "@react-icons/all-files/ri/RiHandCoinLine"
import { FC } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { scrollBarPosEnum, scrollBarStateEnum } from "../constants/types"
import { scrollBarPositionAtom, scrollBarStateAtom } from "../state/Atoms"
import ColorModeToggle from "../theme/ColorModeToggle"

const Footer: FC = () => {
  const { colorMode } = useColorMode()
  const [scrollBarState, setScrollBarState] = useRecoilState(scrollBarStateAtom)
  const setScrollBarPos = useSetRecoilState(scrollBarPositionAtom)
  const iconColor = "#FE7A15"
  const isLandingPage =
    scrollBarState === scrollBarStateEnum.HOME || scrollBarState === scrollBarStateEnum.ABOUT

  return (
    <Center width="100vw" height="75px" flexDirection="row" pb="190px" pt="120px" px="30px">
      {isLandingPage ? (
        <Flex flexDirection="column" ml="25px">
          <ChakraUILink
            href="https://musicbrainz.org/"
            isExternal
            color={colorMode === "light" ? "#403731" : "#FEFBF9"}
            opacity="70%"
            _hover={{
              transform: "scale(1.1)",
              color: `${iconColor}`,
              cursor: "none",
              opacity: "100%",
            }}
          >
            <IoGlobeOutline size="22px" color="currentColor" />
          </ChakraUILink>
          <ChakraUILink
            href="https://blog.metabrainz.org/"
            isExternal
            mt="30px"
            color={colorMode === "light" ? "#403731" : "#FEFBF9"}
            opacity="70%"
            _hover={{
              transform: "scale(1.1)",
              color: `${iconColor}`,
              cursor: "none",
              opacity: "100%",
            }}
          >
            <FiInfo size="22px" color="currentColor" />
          </ChakraUILink>
          <ChakraUILink
            href="https://metabrainz.org/donate"
            isExternal
            mt="30px"
            color={colorMode === "light" ? "#403731" : "#FEFBF9"}
            opacity="70%"
            _hover={{
              transform: "scale(1.1)",
              color: `${iconColor}`,
              cursor: "none",
              opacity: "100%",
            }}
          >
            <RiHandCoinLine size="22px" color="currentColor" />
          </ChakraUILink>

          <ChakraUILink
            href="https://twitter.com/musicbrainz"
            isExternal
            mt="30px"
            color={colorMode === "light" ? "#403731" : "#FEFBF9"}
            opacity="70%"
            _hover={{
              transform: "scale(1.1)",
              color: `${iconColor}`,
              cursor: "none",
              opacity: "100%",
            }}
          >
            <FiTwitter size="22px" color="currentColor" />
          </ChakraUILink>
          <ChakraUILink
            href="https://musicbrainz.org/doc/MusicBrainz_Documentation"
            isExternal
            mt="30px"
            color={colorMode === "light" ? "#403731" : "#FEFBF9"}
            opacity="70%"
            _hover={{
              transform: "scale(1.1)",
              color: `${iconColor}`,
              cursor: "none",
              opacity: "100%",
            }}
          >
            <IoReaderOutline size="22px" color="currentColor" />
          </ChakraUILink>
        </Flex>
      ) : (
        <></>
      )}
      <Flex width="100%">
        {isLandingPage ? (
          <Center
            m="auto"
            position="absolute"
            bottom="60px"
            left="50%"
            right="50%"
            flexDir="column"
          >
            <Text textAlign="center" width="200px" mb="14px">
              {scrollBarState === scrollBarStateEnum.ABOUT ? "View Less" : "See How It Works"}
            </Text>
            <Flex
              onClick={() => {
                if (scrollBarState === scrollBarStateEnum.HOME) {
                  setScrollBarState(scrollBarStateEnum.ABOUT)
                  setScrollBarPos(scrollBarPosEnum.ABOUT)
                } else {
                  setScrollBarState(scrollBarStateEnum.HOME)
                  setScrollBarPos(scrollBarPosEnum.HOME)
                }
              }}
              _hover={{ transform: "scale(1.1)", color: `${iconColor}` }}
            >
              {scrollBarState === scrollBarStateEnum.ABOUT ? (
                <BsChevronDoubleUp size="2vw" color="currentColor" />
              ) : (
                <BsChevronDoubleDown size="2vw" color="currentColor" />
              )}
            </Flex>
          </Center>
        ) : (
          <></>
        )}

        <Flex position="absolute" bottom="30px" right="30px">
          <ColorModeToggle />
        </Flex>
      </Flex>
    </Center>
  )
}

export default Footer
