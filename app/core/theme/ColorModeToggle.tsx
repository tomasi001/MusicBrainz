import { Flex, FormControl, FormLabel, Switch, useColorMode } from "@chakra-ui/react"
import { FC } from "react"

const ColorModeToggle: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="email-alerts" mb="0">
          {colorMode === "light" ? "Light" : "Dark"}
        </FormLabel>
        <Switch id="email-alerts" onChange={toggleColorMode} colorScheme="orange" />
      </FormControl>
    </Flex>
  )
}

export default ColorModeToggle
