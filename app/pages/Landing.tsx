import { Button, Center, Flex, Heading, Text, useColorMode } from "@chakra-ui/react"
import { FiMusic } from "@react-icons/all-files/fi/FiMusic"
import { scrollBarPosEnum, scrollBarStateEnum } from "app/core/constants/types"
import { scrollBarPositionAtom, scrollBarStateAtom } from "app/core/state/Atoms"
import { animation } from "app/core/utils"
import { Image, Link as BlitzLink, Routes } from "blitz"
import { motion } from "framer-motion"
import HexagonDark from "public/hexagonDark.svg"
import HexagonLight from "public/hexagonLight.svg"
import { FC } from "react"
import { useSetRecoilState } from "recoil"

const Landing: FC = () => {
  const { colorMode } = useColorMode()
  const setScrollBarPos = useSetRecoilState(scrollBarPositionAtom)
  const setScrollBarState = useSetRecoilState(scrollBarStateAtom)
  const hoverBg = colorMode === "light" ? "#171310" : "#FEFBF9"
  return (
    <Flex width="100%" justify="center" mt="125px" ml="60px">
      <Flex flexDirection="column">
        <Flex position="absolute" top="20vh" right="415px" zIndex="-1">
          <Image src={colorMode === "light" ? HexagonDark : HexagonLight} />
        </Flex>
        <Heading
          fontSize="96px"
          fontWeight="semibold"
          fontFamily="'Clash Display', sans-serif"
          fontStyle="normal"
          color={colorMode === "light" ? "#403731" : "#FEFBF9"}
          ml="50px"
          zIndex="1"
        >
          MusicBrainz
        </Heading>
        <Button
          as={motion.div}
          animation={animation("0", "0", "-200", "50", "-130", "200", "50")}
          height="159px"
          width="159px"
          bg="#FE7A15"
          _hover={{
            bg: hoverBg,
            transition: "background 1s",
            transitionDuration: "1.5s",
          }}
          borderRadius="100%"
          mt="70px"
          ml="50px"
          onClick={() => {
            setScrollBarPos(scrollBarPosEnum.UPLOAD)
            setScrollBarState(scrollBarStateEnum.UPLOAD)
          }}
        >
          <BlitzLink href={Routes.Upload()}>
            <a className="button small">
              <Center flexDirection="row" color={colorMode === "light" ? "#FEFBF9" : "#403731"}>
                <Text fontFamily="Poppins, sans-serif" mr="8px">
                  Upload
                </Text>
                <FiMusic size="25px" />
              </Center>
            </a>
          </BlitzLink>
        </Button>
      </Flex>
    </Flex>
  )
}

export default Landing
