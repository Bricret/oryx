'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
	Calendar,
	MessageSquare,
	Heart,
	Users,
	Zap,
	Shield,
	CheckCircle,
	Mail,
} from 'lucide-react'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/scroll-reveal'
import { HoverBorderGradient } from '../ui/hover-border-gradient'
import { CalEmbed } from '../ui/cal-embed'
import { useDictionary } from '@/context/LanguageContext'

type GuaranteeText = {
	title: string
	description: string
}

type ContactOptionText = {
	title: string
	description: string
	action: string
}

const guaranteeIcons: React.ReactNode[] = [
	<Heart key='heart' className='h-5 w-5' />,
	<Zap key='zap' className='h-5 w-5' />,
	<Shield key='shield' className='h-5 w-5' />,
	<Users key='users' className='h-5 w-5' />,
]

const contactConfig = [
	{
		icon: <Calendar key='calendar' className='h-6 w-6' />,
		link: 'https://cal.com/oryx-development/30min',
		highlight: true,
	},
	{
		icon: <MessageSquare key='chat' className='h-6 w-6' />,
		link: 'https://wa.me/+50557971984',
		highlight: false,
	},
	{
		icon: <Mail key='mail' className='h-6 w-6' />,
		link: 'mailto:contact@oryx-development.com',
		highlight: false,
	},
]

export default function ServicesCTA() {
	const dictionary = useDictionary().servicesCTA

	const guarantees = (dictionary.guarantees as GuaranteeText[]).map(
		(guarantee, index) => ({
			...guarantee,
			icon: guaranteeIcons[index],
		}),
	)

	const contactOptions = (
		dictionary.contact.options as ContactOptionText[]
	).map((option, index) => ({
		...option,
		...contactConfig[index],
	}))

	return (
		<section className='py-24 relative overflow-hidden w-full mx-auto'>
			<div className='absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background' />

			<div className='container px-4 md:px-6 relative z-10 mx-auto max-w-7xl'>
				<ScrollReveal>
					<div className='text-center mb-16'>
						<div className='inline-block'>
							<HoverBorderGradient
								containerClassName='rounded-full inline-flex items-center mb-8'
								className='bg-secondary-background text-black/80 flex items-center space-x-2'
							>
								<Heart className='h-4 w-4 inline mr-2' />
								{dictionary.banner}
							</HoverBorderGradient>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold tracking-tight mb-4'>
							{dictionary.title_first}{' '}
							<span className='relative inline-block'>
								<span className='relative z-10'>
									{dictionary.title_highlight}
								</span>
								<motion.span
									className='absolute bottom-2 left-0 h-3 bg-primary/20 w-full'
									initial={{ width: 0 }}
									whileInView={{ width: '100%' }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: 0.5 }}
								/>
							</span>
							{dictionary.title_last}
						</h2>
						<p className='text-muted-foreground text-lg max-w-3xl mx-auto'>
							{dictionary.subtitle}
						</p>
					</div>
				</ScrollReveal>

				{/* Main CTA Card */}
				<ScrollReveal>
					<div className='max-w-5xl mx-auto mb-16'>
						<Card className='border-2 border-primary/20 shadow-2xl overflow-hidden'>
							<div className='bg-gradient-to-br from-primary/10 to-primary/5'>
								<CardContent className='p-8 md:p-12'>
									<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
										<div>
											<Badge className='mb-4 bg-primary/10 text-primary border-primary/20'>
												<CheckCircle className='h-3 w-3 mr-1' />
												{dictionary.main_cta.badge}
											</Badge>
											<h3 className='text-3xl font-bold mb-4'>
												{dictionary.main_cta.title}
											</h3>
											<p className='text-muted-foreground mb-6 text-lg'>
												{dictionary.main_cta.description}
											</p>

											<div className='space-y-3 mb-8'>
												{dictionary.main_cta.features.map((feature: string) => (
													<div key={feature} className='flex items-center'>
														<CheckCircle className='h-5 w-5 text-green-500 mr-3' />
														<span>{feature}</span>
													</div>
												))}
											</div>

											<CalEmbed
												calLink='https://cal.com/oryx-development/30min'
												className='z-20 relative bg-gradient-to-r from-primary to-primary/80 text-lg px-8 py-6'
												buttonText={dictionary.main_cta.button}
											/>
										</div>

										<div className='space-y-4'>
											{guarantees.map((guarantee, index) => (
												<motion.div
													key={`guarantee-${guarantee.title}`}
													className='bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-border'
													initial={{ opacity: 0, x: 20 }}
													whileInView={{ opacity: 1, x: 0 }}
													viewport={{ once: true }}
													transition={{ duration: 0.5, delay: index * 0.1 }}
												>
													<div className='flex items-center'>
														<div className='w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4'>
															<div className='text-primary'>
																{guarantee.icon}
															</div>
														</div>
														<div>
															<h4 className='font-semibold'>
																{guarantee.title}
															</h4>
															<p className='text-sm text-muted-foreground'>
																{guarantee.description}
															</p>
														</div>
													</div>
												</motion.div>
											))}
										</div>
									</div>
								</CardContent>
							</div>
						</Card>
					</div>
				</ScrollReveal>

				{/* Contact Options */}
				<ScrollReveal>
					<div className='text-center mb-8'>
						<h3 className='text-2xl font-bold mb-4'>
							{dictionary.contact.title}
						</h3>
						<p className='text-muted-foreground'>
							{dictionary.contact.subtitle}
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
						{contactOptions.map((option) => (
							<motion.div
								key={`contact-${option.title}`}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: option.highlight ? 0.1 : 0.2,
								}}
								whileHover={{ y: -5 }}
							>
								<Card
									className={`h-full border-2 transition-all duration-300 cursor-pointer ${
										option.highlight
											? 'border-primary/50 bg-primary/5'
											: 'border-border hover:border-primary/30'
									}`}
								>
									<CardContent className='p-6 text-center'>
										<div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
											<div className='text-primary'>{option.icon}</div>
										</div>
										<h4 className='font-semibold text-lg mb-2'>
											{option.title}
										</h4>
										<p className='text-muted-foreground text-sm mb-4'>
											{option.description}
										</p>
										<Button
											variant={option.highlight ? 'default' : 'outline'}
											className='w-full'
											asChild
										>
											<Link
												href={option.link}
												target='_blank'
												rel='noopener noreferrer'
											>
												{option.action}
											</Link>
										</Button>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</ScrollReveal>
			</div>
		</section>
	)
}
