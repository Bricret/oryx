'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, ChevronUp, CircleHelp, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { HoverBorderGradient } from '../ui/hover-border-gradient'
import { useDictionary } from '@/context/LanguageContext'

export default function FAQSection() {
	const dictionary = useDictionary()
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	const faqs = dictionary.faqSection.faqs

	return (
		<section className='py-24 relative overflow-hidden'>
			<section className='container mx-auto px-4'>
				<div className='absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background' />
				<div className='container px-4 md:px-6 relative z-10'>
					<motion.div
						className='text-center mb-16'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<div className='inline-block'>
							<HoverBorderGradient
								containerClassName='rounded-full inline-flex items-center mb-8'
								className='bg-secondary-background text-black/80 flex items-center space-x-2'
							>
								<CircleHelp className='w-6 h-6' />
								<span className='text-sm font-medium'>
									{dictionary.faqSection.badge}
								</span>
							</HoverBorderGradient>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold tracking-tight mb-4'>
							{dictionary.faqSection.title}
						</h2>
						<p className='text-muted-foreground text-lg max-w-3xl mx-auto'>
							{dictionary.faqSection.subtitle}
						</p>
					</motion.div>

					<div className='max-w-3xl mx-auto'>
						{faqs.map(
							(faq: { question: string; answer: string }, index: number) => (
								<motion.div
									key={faq.question}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className={cn(
										'mb-4 border border-border rounded-xl overflow-hidden transition-all duration-300',
										openIndex === index
											? 'bg-muted/50 shadow-md'
											: 'bg-background',
									)}
								>
									<button
										type='button'
										className='w-full px-6 py-4 text-left flex justify-between items-center'
										onClick={() => toggleFAQ(index)}
									>
										<div className='flex items-center'>
											<HelpCircle
												className={cn(
													'h-5 w-5 mr-3',
													openIndex === index
														? 'text-primary'
														: 'text-muted-foreground',
												)}
											/>
											<span className='font-medium text-lg'>
												{faq.question}
											</span>
										</div>
										{openIndex === index ? (
											<ChevronUp className='h-5 w-5 text-primary transition-transform duration-300' />
										) : (
											<ChevronDown className='h-5 w-5 text-muted-foreground transition-transform duration-300' />
										)}
									</button>
									<AnimatePresence>
										{openIndex === index && (
											<motion.div
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: 'auto', opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.3 }}
											>
												<div className='px-6 pb-4 pt-0 text-muted-foreground'>
													<div className='border-t border-border pt-4'>
														{faq.answer}
													</div>
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</motion.div>
							),
						)}
					</div>
				</div>
			</section>
		</section>
	)
}
