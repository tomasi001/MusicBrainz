import { Flex } from "@chakra-ui/react"
import { FC, ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <Flex
      minH="100vh"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      px={0}
      py={0}
    >
      {children}
    </Flex>
  )
}

export default Container
