'use client'

import { type Dictionary, LanguageContext } from '@/context/LanguageContext'

export function LanguageProvider({
	dictionary,
	children,
}: {
	dictionary: Dictionary
	children: React.ReactNode
}) {
	return (
		<LanguageContext.Provider value={dictionary}>
			{children}
		</LanguageContext.Provider>
	)
}
