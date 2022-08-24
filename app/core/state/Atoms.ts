import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"
const { persistAtom } = recoilPersist()
import {
  scrollBarPosEnum,
  scrollBarStateEnum,
  audioMetaData,
  sortByEnum,
  audioMetaDataObject,
} from "../constants/types"

export const scrollBarStateAtom = atom<scrollBarStateEnum>({
  key: "scrollBarStateAtom",
  default: scrollBarStateEnum.HOME,
  effects_UNSTABLE: [persistAtom],
})

export const scrollBarPositionAtom = atom<scrollBarPosEnum>({
  key: "scrollBarPositionAtom",
  default: scrollBarPosEnum.HOME,
  effects_UNSTABLE: [persistAtom],
})

export const sortByAtom = atom<sortByEnum>({
  key: "sortByAtom",
  default: sortByEnum.ARTIST,
  effects_UNSTABLE: [persistAtom],
})

export const audioFilesAtom = atom<File[]>({
  key: "audioFilesAtom",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
})

export const audioMetaDataAtom = atom<audioMetaData[]>({
  key: "audioMetaDataAtom",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
})

export const audioMetaDataObjectAtom = atom<audioMetaDataObject>({
  key: "audioMetaDataObjectAtom",
  default: {
    allDefined: null,
    artistAndAlbumOnly: null,
    artistAndTitleOnly: null,
    albumAndTitleOnly: null,
    artistOnly: null,
    albumOnly: null,
    titleOnly: null,
    allUndefined: null,
  },
  effects_UNSTABLE: [persistAtom],
})
