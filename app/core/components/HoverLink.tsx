import { Flex, Text, useColorMode } from "@chakra-ui/react"
import { Link as BlitzLink, Routes } from "blitz"
import { FC } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { scrollBarPosEnum, scrollBarStateEnum } from "../constants/types"
import { scrollBarPositionAtom, scrollBarStateAtom } from "../state/Atoms"
import { convertEnumToString } from "../utils"

type HoverLinkProps = {
  scrollState: scrollBarStateEnum
  scrollPos: string
  key: number
}

const HoverLink: FC<HoverLinkProps> = ({ scrollState, scrollPos, key }) => {
  const { colorMode } = useColorMode()
  const setScrollBarPos = useSetRecoilState(scrollBarPositionAtom)
  const [scrollBarState, setScrollBarState] = useRecoilState(scrollBarStateAtom)
  const textHoverColor = "#FE7A15"

  const url =
    scrollState === scrollBarStateEnum.HOME
      ? Routes.Home()
      : scrollState === scrollBarStateEnum.UPLOAD
      ? Routes.Upload()
      : scrollState === scrollBarStateEnum.LIBRARY
      ? Routes.Library()
      : Routes.Home()

  return (
    <Flex key={key} fontSize="16px" fontFamily="Poppins, sans-serif">
      <BlitzLink href={url}>
        <a>
          <Text
            color={
              scrollBarState === scrollState
                ? "#FE7A15"
                : colorMode === "light"
                ? "#403731"
                : "#FEFBF9"
            }
            opacity={
              scrollBarState === scrollState ? "100%" : colorMode === "light" ? "100%" : "70%"
            }
            _hover={{ transform: "scale(1.1)", color: `${textHoverColor}`, opacity: "100%" }}
            fontWeight={scrollBarState === scrollState ? "bold" : "normal"}
            textDecoration={scrollBarState === scrollState ? "underline" : "normal"}
            textDecorationThickness={scrollBarState === scrollState ? "1px" : ""}
            textUnderlineOffset={scrollBarState === scrollState ? "2px" : ""}
            onClick={() => {
              setScrollBarPos(scrollPos as scrollBarPosEnum)
              setScrollBarState(scrollState)
            }}
            mt="30px"
          >
            {convertEnumToString(scrollState as unknown as string)}
          </Text>
        </a>
      </BlitzLink>
    </Flex>
  )
}

export default HoverLink
