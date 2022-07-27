import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

export const theme = extendTheme({ config })

export const overrides = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      html: {
        maxWidth: "100%",
        overflowX: "hidden",
        p: 0,
        m: 0,
      },
      body: {
        bg: mode("#FEFBF9", "#171310")(props),
        maxWidth: "100%",
        overflowX: "hidden",
        p: 0,
        m: 0,
      },
    }),
  },
})
