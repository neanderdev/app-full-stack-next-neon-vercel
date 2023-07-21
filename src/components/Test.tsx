'use client'

import { useContext } from 'react'

import { myContext } from '@/contexts/my-context'

export function Test() {
  const text = useContext(myContext)

  return <h1 className="text-3xl text-white">{text}</h1>
}
