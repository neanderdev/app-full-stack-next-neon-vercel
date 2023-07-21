'use client'

import { ReactNode, createContext } from 'react'

export const myContext = createContext('oi')

export function MyContextProvider({ children }: { children: ReactNode }) {
  return <myContext.Provider value={'oi'}>{children}</myContext.Provider>
}
