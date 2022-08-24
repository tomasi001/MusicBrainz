import { audioMetaDataObject } from "app/core/constants/types"

export const FileProcessing = (state: audioMetaDataObject) => {
  const isMetadataPresent =
    state.albumAndTitleOnly !== null ||
    state.albumOnly !== null ||
    state.titleOnly !== null ||
    state.artistAndTitleOnly !== null ||
    state.artistOnly !== null ||
    state.artistAndAlbumOnly !== null ||
    state.allUndefined !== null ||
    state.allDefined !== null

  const albumAndTitleOnlyCount = state.albumAndTitleOnly?.length || 0
  const albumOnlyCount = state.albumOnly?.length || 0
  const titleOnlyCount = state.titleOnly?.length || 0
  const artistAndTitleOnlyCount = state.artistAndTitleOnly?.length || 0
  const artistOnlyCount = state.artistOnly?.length || 0
  const artistAndAlbumOnlyCount = state.artistAndAlbumOnly?.length || 0
  const allUndefinedCount = state.allUndefined?.length || 0
  const allDefinedCount = state.allDefined?.length || 0
  const totalCount =
    albumAndTitleOnlyCount +
    albumOnlyCount +
    titleOnlyCount +
    artistAndTitleOnlyCount +
    artistOnlyCount +
    artistAndAlbumOnlyCount +
    allUndefinedCount +
    allDefinedCount

  const albumAndTitleOnly = state.albumAndTitleOnly
  const albumOnly = state.albumOnly
  const titleOnly = state.titleOnly
  const artistAndTitleOnly = state.artistAndTitleOnly
  const artistOnly = state.artistOnly
  const artistAndAlbumOnly = state.artistAndAlbumOnly
  const allUndefined = state.allUndefined
  const allDefined = state.allDefined

  const processedInformation = {
    isMetadataPresent,
    albumAndTitleOnlyCount,
    albumOnlyCount,
    titleOnlyCount,
    artistAndTitleOnlyCount,
    artistOnlyCount,
    artistAndAlbumOnlyCount,
    allUndefinedCount,
    allDefinedCount,
    totalCount,
    albumAndTitleOnly,
    albumOnly,
    titleOnly,
    artistAndTitleOnly,
    artistOnly,
    artistAndAlbumOnly,
    allUndefined,
    allDefined,
  }

  return processedInformation
}
