import { ColorModeScript } from "@chakra-ui/react"
import { BlitzScript, Document, DocumentHead, Html, Main } from "blitz"
import { overrides } from "../core/theme/theme"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <DocumentHead>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,700&display=swap"
            rel="stylesheet"
          />
          <link href="http://fonts.cdnfonts.com/css/clash-display?styles=106289" rel="stylesheet" />
        </DocumentHead>
        <body>
          <ColorModeScript initialColorMode={overrides.config.initialColorMode} />
          <Main />
          <BlitzScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
