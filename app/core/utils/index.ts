import { keyframes } from "@chakra-ui/react"

// convert an enum to a string
export const convertEnumToString = (enumString: string) => {
  if (!enumString) return ""

  const sentence = enumString.split("_").join(" ").toLowerCase()
  const words = sentence.split(" ")
  const newSentence = words
    ?.map((word) => {
      const capitalizeWord = word[0]?.toUpperCase()
      return capitalizeWord + word.substring(1)
    })
    .join(" ")

  return newSentence
}

// function to animate the position of an element
export const animationKeyframes = (
  x1: string,
  y1: string,
  x2: string,
  y2: string,
  x3: string,
  y3: string
) => keyframes`
  0% {  translate(${x1}px, ${y1}px);}
  25% { transform: translate(${x2}px, ${y2}px);}
  50% { transform: translate(${x3}px, ${y3}px);}
  75% { transform: translate(${x2}px, ${y2}px);}
  100% { transform: translate(${x1}px, ${y1}px);}
`

export const animation = (
  x1: string,
  y1: string,
  x2: string,
  y2: string,
  x3: string,
  y3: string,
  duration: string
) => `${animationKeyframes(x1, y1, x2, y2, x3, y3)} ${duration}s ease-in-out infinite `
