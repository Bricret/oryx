'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Clock } from 'lucide-react'
import { useDictionary } from '@/context/LanguageContext'

export default function ContactHeader() {
	const dictionary = useDictionary()
	return (
		<section className='py-20 relative overflow-hidden w-full'>
			<div className='absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background' />
			<div className='container px-4 md:px-6 relative z-10 mx-auto'>
				<motion.div
					className='text-center max-w-3xl mx-auto'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<div className='inline-block'>
						<motion.div
							className='text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full mb-4 inline-block'
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							{dictionary.contactPage.contactHeader.badge}
						</motion.div>
					</div>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6'>
						{dictionary.contactPage.contactHeader.title}
					</h1>
					<p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
						{dictionary.contactPage.contactHeader.subtitle}
					</p>

					<div className='flex flex-col md:flex-row items-center justify-center gap-6 mb-8'>
						<motion.a
							href={`mailto:${dictionary.contactPage.contactHeader.email}`}
							className='flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors'
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							<Mail className='h-5 w-5 text-primary' />
							<span>{dictionary.contactPage.contactHeader.email}</span>
						</motion.a>
						<motion.a
							href={`tel:${dictionary.contactPage.contactHeader.phone}`}
							className='flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors'
							initial={{ opacity: 0, x: 0 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
						>
							<Phone className='h-5 w-5 text-primary' />
							<span>{dictionary.contactPage.contactHeader.phone}</span>
						</motion.a>
						<motion.div
							className='flex items-center space-x-2 text-muted-foreground'
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.6 }}
						>
							<Clock className='h-5 w-5 text-primary' />
							<span>{dictionary.contactPage.contactHeader.schedule}</span>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
