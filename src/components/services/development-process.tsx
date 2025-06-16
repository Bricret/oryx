'use client'

import { useState, useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
	Zap,
	Shield,
	Target,
	Rocket,
	Code,
	TestTube,
	CheckCircle,
	ArrowRight,
	GitBranch,
	Database,
	Smartphone,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import ScrollReveal from '@/components/ui/scroll-reveal'
import Link from 'next/link'
import { HoverBorderGradient } from '../ui/hover-border-gradient'
import { useDictionary } from '@/context/LanguageContext'

type ProcessPhaseText = {
	id: string
	title: string
	subtitle: string
	duration: string
	description: string
	activities_title: string
	activities: string[]
	deliverables_title: string
	deliverables: string[]
}

type RobustPracticeText = {
	title: string
	description: string
}

type RapidDevelopmentText = {
	metric: string
	label: string
	description: string
}

type ProcessPhase = ProcessPhaseText & {
	icon: ReactNode
	color: string
}

type RobustPractice = RobustPracticeText & {
	icon: ReactNode
}

const phaseIcons: { [key: string]: ReactNode } = {
	discovery: <Target className='h-6 w-6' />,
	design: <Code className='h-6 w-6' />,
	development: <Rocket className='h-6 w-6' />,
	testing: <TestTube className='h-6 w-6' />,
	deployment: <Shield className='h-6 w-6' />,
}

const phaseColors: { [key: string]: string } = {
	discovery: 'from-blue-500 to-cyan-400',
	design: 'from-emerald-500 to-green-400',
	development: 'from-violet-500 to-purple-400',
	testing: 'from-amber-500 to-orange-400',
	deployment: 'from-rose-500 to-pink-400',
}

const robustPracticesIcons: ReactNode[] = [
	<GitBranch key='git' className='h-5 w-5' />,
	<TestTube key='test' className='h-5 w-5' />,
	<Database key='db' className='h-5 w-5' />,
	<Shield key='shield' className='h-5 w-5' />,
	<Zap key='zap' className='h-5 w-5' />,
	<Smartphone key='smartphone' className='h-5 w-5' />,
]

export default function DevelopmentProcess() {
	const dictionary = useDictionary().developmentProcess

	const processPhases: ProcessPhase[] = (
		dictionary.processPhases as ProcessPhaseText[]
	).map((phase) => ({
		...phase,
		icon: phaseIcons[phase.id],
		color: phaseColors[phase.id],
	}))

	const robustPractices: RobustPractice[] = (
		dictionary.robustPractices as RobustPracticeText[]
	).map((practice, index) => ({
		...practice,
		icon: robustPracticesIcons[index],
	}))

	const rapidDevelopment: RapidDevelopmentText[] = dictionary.rapidDevelopment

	const [activePhase, setActivePhase] = useState<string | null>(
		processPhases[0]?.id || null,
	)
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	})

	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '5%'])

	return (
		<section
			className='py-24 relative overflow-hidden w-full mx-auto'
			ref={ref}
		>
			<div className='absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background' />
			<motion.div
				className='absolute inset-0 pointer-events-none'
				style={{ y: backgroundY }}
			>
				{Array.from({ length: 12 }).map((_, i) => (
					<motion.div
						key={`sparkle-${i + 1}`}
						className='absolute rounded-full bg-primary/5'
						style={{
							width: Math.random() * 200 + 100,
							height: Math.random() * 200 + 100,
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
								<Zap className='h-4 w-4 inline mr-2' />
								{dictionary.banner}
							</HoverBorderGradient>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold tracking-tight mb-4'>
							{dictionary.title}
						</h2>
						<p className='text-muted-foreground text-lg max-w-3xl mx-auto'>
							{dictionary.subtitle}
						</p>
					</div>
				</ScrollReveal>

				{/* Process Phases */}
				<div className='mb-24'>
					<ScrollReveal>
						<h3 className='text-3xl font-bold text-center mb-12'>
							{dictionary.phases_title}
						</h3>
					</ScrollReveal>
					<div className='flex flex-col lg:flex-row gap-8'>
						{/* Phase List */}
						<div className='w-full lg:w-1/3 space-y-4'>
							{processPhases.map((phase) => (
								<motion.div
									key={phase.id}
									onClick={() => setActivePhase(phase.id)}
									className={cn(
										'p-4 rounded-lg cursor-pointer transition-all duration-300 relative overflow-hidden border-2',
										activePhase === phase.id
											? 'border-primary/50 shadow-xl'
											: 'border-border hover:border-primary/30',
									)}
									whileHover={{ y: -5 }}
								>
									<div
										className={cn(
											'absolute inset-0 opacity-0 transition-opacity duration-500',
											activePhase === phase.id && 'opacity-100',
										)}
									>
										<div
											className={cn(
												'absolute inset-0 bg-gradient-to-br opacity-5',
												phase.color,
											)}
										/>
									</div>
									<div className='flex items-center space-x-4 relative z-10'>
										<div
											className={cn(
												'p-3 rounded-md text-white bg-gradient-to-br',
												phase.color,
											)}
										>
											{phase.icon}
										</div>
										<div>
											<h4 className='font-bold text-lg'>{phase.title}</h4>
											<p className='text-sm text-muted-foreground'>
												{phase.subtitle}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</div>

						{/* Phase Details */}
						<div className='w-full lg:w-2/3'>
							{processPhases.map((phase) =>
								activePhase === phase.id ? (
									<motion.div
										key={phase.id}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.5 }}
									>
										<Card
											className={cn(
												'p-8 border-2 relative overflow-hidden h-full',
												'border-primary/30',
											)}
										>
											<div
												className={cn(
													'absolute inset-0 bg-gradient-to-br opacity-5',
													phase.color,
												)}
											/>
											<div className='relative z-10'>
												<div className='flex justify-between items-start mb-4'>
													<div>
														<h4 className='text-2xl font-bold mb-1'>
															{phase.title}
														</h4>
														<p className='text-muted-foreground'>
															{phase.description}
														</p>
													</div>
													<span className='text-sm font-medium bg-secondary text-secondary-foreground py-1 px-3 rounded-full'>
														{phase.duration}
													</span>
												</div>
												<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
													<div>
														<h5 className='font-bold mb-3'>
															{phase.activities_title}
														</h5>
														<ul className='space-y-2'>
															{phase.activities.map((activity) => (
																<li key={activity} className='flex items-start'>
																	<CheckCircle className='h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0' />
																	<span>{activity}</span>
																</li>
															))}
														</ul>
													</div>
													<div>
														<h5 className='font-bold mb-3'>
															{phase.deliverables_title}
														</h5>
														<ul className='space-y-2'>
															{phase.deliverables.map((deliverable) => (
																<li
																	key={deliverable}
																	className='flex items-start'
																>
																	<CheckCircle className='h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0' />
																	<span>{deliverable}</span>
																</li>
															))}
														</ul>
													</div>
												</div>
											</div>
										</Card>
									</motion.div>
								) : null,
							)}
						</div>
					</div>
				</div>

				{/* Robust Practices */}
				<div className='mb-24'>
					<ScrollReveal>
						<h3 className='text-3xl font-bold text-center mb-12'>
							{dictionary.robust_title}
						</h3>
					</ScrollReveal>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{robustPractices.map((practice, index) => (
							<motion.div
								key={practice.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<Card className='p-6 text-center h-full'>
									<div className='inline-block bg-primary/10 p-3 rounded-lg mb-4 text-primary'>
										{practice.icon}
									</div>
									<h4 className='text-lg font-bold mb-2'>{practice.title}</h4>
									<p className='text-muted-foreground text-sm'>
										{practice.description}
									</p>
								</Card>
							</motion.div>
						))}
					</div>
				</div>

				{/* Rapid Development */}
				<div className='mb-24'>
					<ScrollReveal>
						<h3 className='text-3xl font-bold text-center mb-12'>
							{dictionary.rapid_title}
						</h3>
					</ScrollReveal>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{rapidDevelopment.map((item, index) => (
							<motion.div
								key={item.metric}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<Card className='p-6 text-center h-full bg-muted/50'>
									<p className='text-5xl font-bold text-primary mb-2'>
										{item.metric}
									</p>
									<h4 className='text-lg font-bold mb-1'>{item.label}</h4>
									<p className='text-muted-foreground text-sm'>
										{item.description}
									</p>
								</Card>
							</motion.div>
						))}
					</div>
				</div>

				{/* CTA */}
				<ScrollReveal>
					<Card className='bg-primary/5 border-primary/20 p-8 md:p-12'>
						<div className='flex flex-col md:flex-row justify-between items-center text-center md:text-left'>
							<div className='mb-6 md:mb-0'>
								<h3 className='text-3xl font-bold mb-2'>
									{dictionary.cta.title}
								</h3>
							</div>
							<div>
								<Button size='lg' asChild>
									<Link href='/contact'>
										{dictionary.cta.button}
										<ArrowRight className='ml-2 h-5 w-5' />
									</Link>
								</Button>
							</div>
						</div>
					</Card>
				</ScrollReveal>
			</div>
		</section>
	)
}
