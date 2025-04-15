import { IUser } from "@/types"
import {create} from "zustand"

type Store = {
  currentContact: IUser | null
  setCurrentContact: (contact: IUser | null) => void
}

export const UseCurrentContact = create<Store>()(set => ({
  currentContact: null,
  setCurrentContact: (contact: IUser | null) => set({currentContact: contact}),
}))
