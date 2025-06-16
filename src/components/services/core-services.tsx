'use client'

import { useState, useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
	Globe,
	Smartphone,
	Database,
	ArrowRight,
	Check,
	Clock,
	Users,
	Zap,
	Shield,
	Target,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import ScrollReveal from '@/components/ui/scroll-reveal'
import { HoverBorderGradient } from '../ui/hover-border-gradient'
import Link from 'next/link'
import { useDictionary } from '@/context/LanguageContext'

type ServiceFromDict = {
	id: string
	title: string
	subtitle: string
	description: string
	features_title: string
	features: string[]
	benefits_title: string
	benefits: string[]
	technologies_title: string
	technologies: string[]
	timeline_title: string
	timeline: string
	price_title: string
	startingPrice: string
	process_title: string
	process: {
		step: string
		description: string
	}[]
}

type Service = ServiceFromDict & {
	icon: ReactNode
	color: string
	shadowColor: string
}

type HumanTouchPointFromDict = {
	title: string
	description: string
}

type HumanTouchPoint = HumanTouchPointFromDict & {
	icon: ReactNode
}

const serviceDetails: {
	[key: string]: { icon: ReactNode; color: string; shadowColor: string }
} = {
	website: {
		icon: <Globe className='h-8 w-8' />,
		color: 'from-blue-500 to-cyan-400',
		shadowColor: 'shadow-blue-500/20',
	},
	systems: {
		icon: <Database className='h-8 w-8' />,
		color: 'from-emerald-500 to-green-400',
		shadowColor: 'shadow-emerald-500/20',
	},
	mobile: {
		icon: <Smartphone className='h-8 w-8' />,
		color: 'from-violet-500 to-purple-400',
		shadowColor: 'shadow-violet-500/20',
	},
}

const humanTouchIcons = [
	<Users key='users-icon' className='h-5 w-5' />,
	<Target key='target-icon' className='h-5 w-5' />,
	<Clock key='clock-icon' className='h-5 w-5' />,
	<Shield key='shield-icon' className='h-5 w-5' />,
]

export default function CoreServices() {
	const dictionary = useDictionary()

	const services: Service[] = dictionary.coreServices.services.map(
		(s: ServiceFromDict) => ({
			...s,
			...(serviceDetails[s.id] || {}),
		}),
	)

	const humanTouchPoints: HumanTouchPoint[] =
		dictionary.coreServices.humanTouch.points.map(
			(point: HumanTouchPointFromDict, index: number) => ({
				...point,
				icon: humanTouchIcons[index],
			}),
		)

	const [activeService, setActiveService] = useState<string | null>(null)
	const [hoveredService, setHoveredService] = useState<string | null>(null)
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	})

	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%'])

	return (
		<section
			id='servicios'
			className='py-24 relative overflow-hidden w-full mx-auto'
			ref={ref}
		>
			<div className='absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background' />
			<motion.div
				className='absolute inset-0 pointer-events-none'
				style={{ y: backgroundY }}
			>
				{Array.from({ length: 15 }).map((_, i) => (
					<motion.div
						key={`sparkle-${i + 1}`}
						className='absolute rounded-full bg-primary/5'
						style={{
							width: Math.random() * 300 + 100,
							height: Math.random() * 300 + 100,
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
						}}
					/>
				))}
			</motion.div>

			<div className='container px-4 md:px-6 relative z-10 mx-auto max-w-7xl'>
				<ScrollReveal>
					<div className='text-center mb-16'>
						<div className='inline-block'>
							<HoverBorderGradient
								containerClassName='rounded-full inline-flex items-center mb-8'
								className='bg-secondary-background text-black/80 flex items-center space-x-2'
							>
								{dictionary.coreServices.banner}
							</HoverBorderGradient>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold tracking-tight mb-4'>
							{dictionary.coreServices.title}
						</h2>
						<p className='text-muted-foreground text-lg max-w-4xl mx-auto'>
							{dictionary.coreServices.subtitle}
						</p>
					</div>
				</ScrollReveal>

				{/* Services Grid */}
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16'>
					{services.map((service: Service) => (
						<ScrollReveal key={service.id} className='h-full'>
							<Card
								className={cn(
									'h-full border-2 rounded-2xl transition-all duration-300 flex flex-col',
									hoveredService === service.id
										? 'border-primary/50 shadow-2xl'
										: 'border-border hover:border-primary/20',
									activeService === service.id &&
										'border-primary/50 shadow-2xl',
								)}
								onMouseEnter={() => setHoveredService(service.id)}
								onMouseLeave={() => setHoveredService(null)}
								onClick={() =>
									setActiveService(
										activeService === service.id ? null : service.id,
									)
								}
							>
								<CardHeader className='flex-shrink-0'>
									<div className='flex items-center justify-between mb-4'>
										<div
											className={cn(
												'w-16 h-16 rounded-lg bg-gradient-to-br flex items-center justify-center',
												service.color,
												service.shadowColor,
											)}
										>
											<div className='text-white'>{service.icon}</div>
										</div>
										<div className='p-2'>
											<ArrowRight
												className={cn(
													'h-6 w-6 transition-transform duration-300',
													activeService === service.id && 'rotate-90',
												)}
											/>
										</div>
									</div>
									<CardTitle className='text-2xl font-bold'>
										{service.title}
									</CardTitle>
									<p className='text-muted-foreground'>{service.subtitle}</p>
								</CardHeader>
								<CardContent className='flex-grow flex flex-col justify-between'>
									<AnimatePresence>
										{activeService === service.id ? (
											<motion.div
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: 'auto' }}
												exit={{ opacity: 0, height: 0 }}
												transition={{ duration: 0.3 }}
												className='overflow-hidden'
											>
												<div className='pt-4 space-y-6'>
													<div>
														<h4 className='font-semibold mb-2'>
															{service.features_title}
														</h4>
														<ul className='space-y-2'>
															{service.features.map((feature) => (
																<li key={feature} className='flex items-start'>
																	<Check className='h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0' />
																	<span>{feature}</span>
																</li>
															))}
														</ul>
													</div>
													<div>
														<h4 className='font-semibold mb-2'>
															{service.benefits_title}
														</h4>
														<ul className='space-y-2'>
															{service.benefits.map((benefit) => (
																<li key={benefit} className='flex items-start'>
																	<Check className='h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0' />
																	<span>{benefit}</span>
																</li>
															))}
														</ul>
													</div>
													<div>
														<h4 className='font-semibold mb-2'>
															{service.technologies_title}
														</h4>
														<div className='flex flex-wrap gap-2'>
															{service.technologies.map((tech) => (
																<Badge key={tech} variant='secondary'>
																	{tech}
																</Badge>
															))}
														</div>
													</div>
													<div className='flex justify-between items-center text-sm bg-muted/50 p-3 rounded-lg'>
														<div>
															<p className='font-semibold'>
																{service.timeline_title}
															</p>
															<p>{service.timeline}</p>
														</div>
														<div className='text-right'>
															<p className='font-semibold'>
																{service.price_title}
															</p>
															<p className='font-bold text-lg'>
																{service.startingPrice}
															</p>
														</div>
													</div>
													<div>
														<h5 className='font-semibold mb-3'>
															{service.process_title}
														</h5>
														<div className='space-y-2'>
															{service.process.map((step) => (
																<div
																	key={step.step}
																	className='flex items-start text-xs'
																>
																	<Check className='h-3 w-3 text-primary mr-2 mt-0.5 flex-shrink-0' />
																	<div>
																		<span className='font-semibold'>
																			{step.step}:
																		</span>{' '}
																		{step.description}
																	</div>
																</div>
															))}
														</div>
													</div>
												</div>
											</motion.div>
										) : (
											<div className='space-y-4'>
												<p className='text-muted-foreground'>
													{service.description}
												</p>
												<div className='flex justify-between items-center text-sm bg-muted/50 p-3 rounded-lg'>
													<div>
														<p className='font-semibold'>
															{service.timeline_title}
														</p>
														<p>{service.timeline}</p>
													</div>
													<div className='text-right'>
														<p className='font-semibold'>
															{service.price_title}
														</p>
														<p className='font-bold text-lg'>
															{service.startingPrice}
														</p>
													</div>
												</div>
											</div>
										)}
									</AnimatePresence>
								</CardContent>
							</Card>
						</ScrollReveal>
					))}
				</div>

				{/* Human Touch Highlights */}
				<div className='bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 w-full'>
					<div className='container mx-auto px-4 md:px-6 max-w-5xl'>
						<ScrollReveal>
							<div className='text-center mb-12'>
								<h3 className='text-3xl font-bold mb-2'>
									{dictionary.coreServices.humanTouch.title}
								</h3>
								<p className='text-lg text-muted-foreground'>
									{dictionary.coreServices.humanTouch.subtitle}
								</p>
							</div>
						</ScrollReveal>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							{humanTouchPoints.map((point: HumanTouchPoint, index: number) => (
								<ScrollReveal key={point.title} delay={index * 0.1}>
									<div className='flex items-start'>
										<div className='w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0'>
											<div className='text-primary'>{point.icon}</div>
										</div>
										<div>
											<h4 className='font-semibold'>{point.title}</h4>
											<p className='text-sm text-muted-foreground'>
												{point.description}
											</p>
										</div>
									</div>
								</ScrollReveal>
							))}
						</div>
						<ScrollReveal className='text-center mt-12'>
							<Link href='/pricing' passHref>
								<Button size='lg'>
									{dictionary.coreServices.button}
									<ArrowRight className='h-4 w-4 ml-2' />
								</Button>
							</Link>
						</ScrollReveal>
					</div>
				</div>
			</div>
		</section>
	)
}
