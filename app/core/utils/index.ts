import { keyframes } from "@chakra-ui/react"
import { audioMetaData, audioMetaDataObject, sortByEnum } from "../constants/types"
import * as mmb from "music-metadata-browser"
import _ from "lodash"

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

// LOGS AND COMMENTS FOR FUTURE WORK IN PROGRESS
export const sortFiles = (files: audioMetaData[], sortBy: sortByEnum) => {
  // console.log({ sortBy })

  function compareValues(key, order = "asc") {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0
      }
      // console.log({ type: typeof a[key] })
      // console.log({ a, b })

      let varA, varB
      if (sortBy.toLowerCase() === "genre") {
        varA =
          a[key].common[sortBy.toLowerCase()] !== undefined
            ? a[key].common[sortBy.toLowerCase()][0].toUpperCase()
            : ""
        varB =
          b[key].common[sortBy.toLowerCase()] !== undefined
            ? b[key].common[sortBy.toLowerCase()][0].toUpperCase()
            : ""
      } else {
        varA =
          a[key].common[sortBy.toLowerCase()] !== undefined
            ? a[key].common[sortBy.toLowerCase()].toUpperCase()
            : a[key]
        varB =
          b[key].common[sortBy.toLowerCase()] !== undefined
            ? b[key].common[sortBy.toLowerCase()].toUpperCase()
            : b[key]
      }

      let comparison = 0
      if (varA > varB) {
        comparison = 1
      } else if (varA < varB) {
        comparison = -1
      }
      // console.log({ a, b, varA, varB, comparison })
      return order === "desc" ? comparison * -1 : comparison
    }
  }
  const sortedFiles = [...files].sort(compareValues("metadata"))
  // console.log({ sortedFiles })
}

const parseFile = async (file: File) => {
  return mmb.parseBlob(file).then((metadata) => {
    return metadata
  })
}

export const fileRead = async (dirtyArray: File[]) => {
  const tempArray: audioMetaData[] = []
  let i = 0
  // iterate over unsorted array
  for (const file of dirtyArray) {
    try {
      // parse meta data of each file
      const metadata = await parseFile(file)

      // set shape of meta data
      const parseResult: audioMetaData = {
        index: i++,
        file: file,
        metadata: metadata,
      }

      // store in temporary array
      tempArray.push(parseResult)
    } catch (err) {
      const parseResult: audioMetaData = {
        index: i++,
        file: file,
        error: err.message,
      }
      tempArray.push(parseResult)
    }
  }

  // call remove undefined function
  return groupUndefinedFiles(tempArray)
}

const groupUndefinedFiles = (dirtyArray: audioMetaData[]) => {
  // loop through if artist, album, track title is undefined add it to relevant files file

  const artistOnly: audioMetaData[] = []
  const albumOnly: audioMetaData[] = []
  const titleOnly: audioMetaData[] = []
  const artistAndAlbumOnly: audioMetaData[] = []
  const artistAndTitleOnly: audioMetaData[] = []
  const albumAndTitleOnly: audioMetaData[] = []
  const allUndefined: audioMetaData[] = []
  const allDefined: audioMetaData[] = []

  for (const file of dirtyArray) {
    if (
      file?.metadata?.common.artist === undefined &&
      file?.metadata?.common.album !== undefined &&
      file?.metadata?.common.title !== undefined
    ) {
      albumAndTitleOnly.push(file)
    } else if (
      file?.metadata?.common.artist === undefined &&
      file?.metadata?.common.album !== undefined &&
      file?.metadata?.common.title === undefined
    ) {
      albumOnly.push(file)
    } else if (
      file?.metadata?.common.artist === undefined &&
      file?.metadata?.common.album === undefined &&
      file?.metadata?.common.title !== undefined
    ) {
      titleOnly.push(file)
    } else if (
      file?.metadata?.common.artist !== undefined &&
      file?.metadata?.common.album === undefined &&
      file?.metadata?.common.title !== undefined
    ) {
      artistAndTitleOnly.push(file)
    } else if (
      file?.metadata?.common.artist !== undefined &&
      file?.metadata?.common.album === undefined &&
      file?.metadata?.common.title === undefined
    ) {
      artistOnly.push(file)
    } else if (
      file?.metadata?.common.artist !== undefined &&
      file?.metadata?.common.album !== undefined &&
      file?.metadata?.common.title === undefined
    ) {
      artistAndAlbumOnly.push(file)
    } else if (
      file?.metadata?.common.artist === undefined &&
      file?.metadata?.common.album === undefined &&
      file?.metadata?.common.title === undefined
    ) {
      allUndefined.push(file)
    } else {
      allDefined.push(file)
    }
  }

  return removeDuplicates(
    albumAndTitleOnly,
    albumOnly,
    titleOnly,
    artistAndTitleOnly,
    artistOnly,
    artistAndAlbumOnly,
    allUndefined,
    allDefined
  )
}

const removeDuplicates = (
  dirtyAlbumAndTitleOnly: audioMetaData[],
  dirtyAlbumOnly: audioMetaData[],
  dirtyTitleOnly: audioMetaData[],
  dirtyArtistAndTitleOnly: audioMetaData[],
  dirtyArtistOnly: audioMetaData[],
  dirtyArtistAndAlbumOnly: audioMetaData[],
  dirtyAllUndefined: audioMetaData[],
  dirtyAllDefined: audioMetaData[]
) => {
  // if a file has only an album and song title present
  // remove duplicates based on album
  const cleanAlbumAndTitleOnly =
    dirtyAlbumAndTitleOnly.length > 0
      ? _.uniqBy(dirtyAlbumAndTitleOnly, "metadata.common.album")
      : null

  // if a file has only an album title present
  // remove duplicates based on album
  const cleanAlbumOnly =
    dirtyAlbumOnly.length > 0 ? _.uniqBy(dirtyAlbumOnly, "metadata.common.album") : null

  // if a file has only a song title present
  // remove duplicates based on title
  const cleanTitleOnly =
    dirtyTitleOnly.length > 0 ? _.uniqBy(dirtyTitleOnly, "metadata.common.title") : null

  // if a file has only an artist and song title present
  // remove duplicates based on artist
  const cleanArtistAndTitleOnly =
    dirtyArtistAndTitleOnly.length > 0
      ? _.uniqBy(dirtyArtistAndTitleOnly, "metadata.common.artist")
      : null

  // if a file has only an artist present
  // remove duplicates based on artist
  const cleanArtistOnly =
    dirtyArtistOnly.length > 0 ? _.uniqBy(dirtyArtistOnly, "metadata.common.artist") : null

  // if a file has only an artist and album title present
  // remove duplicates based on artist
  const cleanArtistAndAlbumOnly =
    dirtyArtistAndAlbumOnly.length > 0
      ? _.uniqBy(dirtyArtistAndAlbumOnly, "metadata.common.artist")
      : null

  // if a file has only an artist, album and song title present
  // remove duplicates based on artist
  const cleanAllDefined =
    dirtyAllDefined.length > 0 ? _.uniqBy(dirtyAllDefined, "metadata.common.album") : null

  const audioMetaDataObjectOutput: audioMetaDataObject = {
    allDefined: cleanAllDefined,
    artistAndAlbumOnly: cleanArtistAndAlbumOnly,
    artistAndTitleOnly: cleanArtistAndTitleOnly,
    albumAndTitleOnly: cleanAlbumAndTitleOnly,
    artistOnly: cleanArtistOnly,
    albumOnly: cleanAlbumOnly,
    titleOnly: cleanTitleOnly,
    allUndefined: dirtyAllUndefined,
  }

  return audioMetaDataObjectOutput
}
