'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useRef } from 'react'
import ScrollReveal from './projects/scroll-reveal'
import { Textarea } from './ui/textarea'
import { useDictionary } from '@/context/LanguageContext'

export default function Contact() {
	const dictionary = useDictionary()
	const ref = useRef<HTMLElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	})

	const y = useTransform(scrollYProgress, [0, 1], ['5%', '0%'])
	const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

	return (
		<section className='py-24 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background'>
			<section id='contact' className='container mx-auto px-4' ref={ref}>
				<motion.div
					className='absolute inset-0 bg-gradient-to-b from-background to-primary/5 pointer-events-none'
					style={{ opacity: scrollYProgress }}
				/>

				<div className='container px-4 md:px-6 relative z-10'>
					<ScrollReveal>
						<div className='text-center mb-16'>
							<h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-4'>
								{dictionary.contact.title}
							</h2>
							<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
								{dictionary.contact.subtitle}
							</p>
						</div>
					</ScrollReveal>

					<div className='grid md:grid-cols-2 gap-12'>
						<ScrollReveal direction='left'>
							<h3 className='text-2xl font-bold mb-6'>
								{dictionary.contact.infoTitle}
							</h3>
							<div className='space-y-6'>
								<motion.div
									whileHover={{ y: -5 }}
									transition={{ type: 'spring', stiffness: 400, damping: 10 }}
								>
									<Card>
										<CardContent className='p-6 flex items-start gap-4'>
											<div className='rounded-full bg-primary/10 p-3 mt-1'>
												<Mail className='h-5 w-5 text-primary' />
											</div>
											<div>
												<h4 className='font-medium mb-1'>
													{dictionary.contact.emailLabel}
												</h4>
												<p className='text-muted-foreground'>
													{dictionary.contact.email}
												</p>
											</div>
										</CardContent>
									</Card>
								</motion.div>

								<motion.div
									whileHover={{ y: -5 }}
									transition={{ type: 'spring', stiffness: 400, damping: 10 }}
								>
									<Card>
										<CardContent className='p-6 flex items-start gap-4'>
											<div className='rounded-full bg-primary/10 p-3 mt-1'>
												<Phone className='h-5 w-5 text-primary' />
											</div>
											<div>
												<h4 className='font-medium mb-1'>
													{dictionary.contact.phoneLabel}
												</h4>
												<p className='text-muted-foreground'>
													{dictionary.contact.phone}
												</p>
											</div>
										</CardContent>
									</Card>
								</motion.div>

								<motion.div
									whileHover={{ y: -5 }}
									transition={{ type: 'spring', stiffness: 400, damping: 10 }}
								>
									<Card>
										<CardContent className='p-6 flex items-start gap-4'>
											<div className='rounded-full bg-primary/10 p-3 mt-1'>
												<MapPin className='h-5 w-5 text-primary' />
											</div>
											<div>
												<h4 className='font-medium mb-1'>
													{dictionary.contact.officeLabel}
												</h4>
												<p className='text-muted-foreground'>
													{dictionary.contact.addressLine1}
												</p>
												<p className='text-muted-foreground'>
													{dictionary.contact.addressLine2}
												</p>
											</div>
										</CardContent>
									</Card>
								</motion.div>
							</div>
						</ScrollReveal>

						<ScrollReveal direction='right'>
							<motion.div style={{ y, opacity }}>
								<h3 className='text-2xl font-bold mb-6'>
									{dictionary.contact.formTitle}
								</h3>
								<form className='space-y-6'>
									<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
										<div className='space-y-2'>
											<label htmlFor='name' className='text-sm font-medium'>
												{dictionary.contact.formName}
											</label>
											<Input
												id='name'
												placeholder={dictionary.contact.formNamePlaceholder}
											/>
										</div>
										<div className='space-y-2'>
											<label htmlFor='email' className='text-sm font-medium'>
												{dictionary.contact.formEmail}
											</label>
											<Input
												id='email'
												type='email'
												placeholder={dictionary.contact.formEmailPlaceholder}
											/>
										</div>
									</div>

									<div className='space-y-2'>
										<label htmlFor='subject' className='text-sm font-medium'>
											{dictionary.contact.formSubject}
										</label>
										<Input
											id='subject'
											placeholder={dictionary.contact.formSubjectPlaceholder}
										/>
									</div>

									<div className='space-y-2'>
										<label htmlFor='message' className='text-sm font-medium'>
											{dictionary.contact.formMessage}
										</label>
										<Textarea
											id='message'
											placeholder={dictionary.contact.formMessagePlaceholder}
											rows={5}
										/>
									</div>

									<Button type='submit' size='lg' className='w-full sm:w-auto'>
										{dictionary.contact.formSend}
									</Button>
								</form>
							</motion.div>
						</ScrollReveal>
					</div>
				</div>
			</section>
		</section>
	)
}
