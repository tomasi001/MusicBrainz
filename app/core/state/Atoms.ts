import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"
const { persistAtom } = recoilPersist()
import { scrollBarPosEnum, scrollBarStateEnum } from "../constants/types"

export const scrollBarStateAtom = atom({
  key: "scrollBarStateAtom",
  default: scrollBarStateEnum.HOME,
  effects_UNSTABLE: [persistAtom],
})

export const scrollBarPositionAtom = atom({
  key: "scrollBarPositionAtom",
  default: scrollBarPosEnum.HOME,
  effects_UNSTABLE: [persistAtom],
})
