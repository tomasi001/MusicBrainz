import { Flex } from "@chakra-ui/react"
import { FC, ReactNode } from "react"

type MainProps = {
  children: ReactNode
}

const Main: FC<MainProps> = ({ children }) => {
  return (
    <Flex
      width="100%"
      flex="1"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      {children && children}
    </Flex>
  )
}

export default Main
