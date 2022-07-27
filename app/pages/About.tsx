import { Flex, Heading, Text, useColorMode } from "@chakra-ui/react"

const About = () => {
  const { colorMode } = useColorMode()
  return (
    <Flex
      flexDirection="row"
      width="100%"
      px="200px"
      py="150px"
      color={colorMode === "light" ? "#403731" : "#FEFBF9"}
    >
      <Flex flexDir="column" pr="40px">
        <Heading
          fontSize="32px"
          fontWeight="semibold"
          fontFamily="'Clash Display', sans-serif"
          fontStyle="normal"
          zIndex="1"
        >
          Upload
        </Heading>
        <Text fontFamily="Poppins, sans-serif" fontSize="16px" mt="20px">
          Upload that folder you have been meaning to sort through.
        </Text>
      </Flex>
      <Flex flexDir="column" pl="40px">
        <Heading
          fontSize="32px"
          fontWeight="semibold"
          fontFamily="'Clash Display', sans-serif"
          fontStyle="normal"
          zIndex="1"
        >
          Organise
        </Heading>
        <Text fontFamily="Poppins, sans-serif" fontSize="16px" mt="20px">
          Select the manner in which you would like to organise your library.
        </Text>
      </Flex>
    </Flex>
  )
}

export default About
