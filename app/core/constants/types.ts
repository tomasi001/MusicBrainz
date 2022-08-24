import * as mmb from "music-metadata-browser"

export enum scrollBarStateEnum {
  HOME = "HOME",
  ABOUT = "ABOUT",
  UPLOAD = "UPLOAD",
  LIBRARY = "LIBRARY",
}

export enum scrollBarPosEnum {
  HOME = "30px",
  ABOUT = "85px",
  UPLOAD = "140px",
  LIBRARY = "195px",
}

export enum sortByEnum {
  ARTIST = "Artist",
  ALBUM = "Album",
  GENRE = "Genre",
}

export type audioMetaData = {
  index: number
  file: File
  metadata?: mmb.IAudioMetadata
  error?: string
}

export type audioMetaDataObject = {
  allDefined: audioMetaData[] | null
  artistAndAlbumOnly: audioMetaData[] | null
  artistAndTitleOnly: audioMetaData[] | null
  albumAndTitleOnly: audioMetaData[] | null
  artistOnly: audioMetaData[] | null
  albumOnly: audioMetaData[] | null
  titleOnly: audioMetaData[] | null
  allUndefined: audioMetaData[] | null
}
