'use client'

import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useDictionary } from '@/context/LanguageContext'

interface CalEmbedProps {
	calLink: string
	buttonText?: string
	className?: string
}

export function CalEmbed({ calLink, buttonText, className }: CalEmbedProps) {
	const [isOpen, setIsOpen] = useState(false)
	const dictionary = useDictionary()

	return (
		<>
			<Button onClick={() => setIsOpen(true)} className={className}>
				{buttonText || dictionary.header.ctaButton}
			</Button>

			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent className='max-w-4xl h-[80vh] p-0'>
					<iframe
						src={calLink}
						className='w-full h-full border-0'
						style={{ minHeight: '600px' }}
						title='Cal.com Calendar'
					/>
				</DialogContent>
			</Dialog>
		</>
	)
}
