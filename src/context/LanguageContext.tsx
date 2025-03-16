'use client'

import { createContext, useContext } from 'react'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type Dictionary = Record<string, any>
export const LanguageContext = createContext<Dictionary>({})

export function useDictionary() {
	return useContext(LanguageContext)
}
