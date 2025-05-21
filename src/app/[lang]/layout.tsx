import type { Metadata } from 'next'
import { Big_Shoulders_Stencil_Display, Sora } from 'next/font/google'
import '../globals.css'
import { LanguageProvider } from '@/components/common/LanguageProvider'

const sora = Sora({
	variable: '--font-Sora',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Oryx Development',
	description:
		'Crafting exceptional digital experiences with innovative solutions and a focus on quality.',
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ lang: string }>
}>) {
	const { lang } = await params
	const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(
		(m) => m.default,
	)

	return (
		<html lang={lang}>
			<body
				className={`${sora.variable} font-Sora antialiased bg-main-background`}
			>
				<LanguageProvider dictionary={dictionary}>{children}</LanguageProvider>
			</body>
		</html>
	)
}
