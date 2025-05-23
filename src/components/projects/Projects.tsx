'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import ScrollReveal from './scroll-reveal'
import Link from 'next/link'
import { useDictionary } from '@/context/LanguageContext'

const categories = [
	{ id: 'all', label: 'All Projects' },
	{ id: 'web', label: 'Web Development' },
	{ id: 'mobile', label: 'Mobile Apps' },
	{ id: 'systems', label: 'Web Systems' },
]

export default function Projects() {
	const dictionary = useDictionary()
	const [activeCategory, setActiveCategory] = useState('all')
	const ref = useRef<HTMLElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	})

	const projects = [
		{
			id: 1,
			title: dictionary.projects.list[0].title,
			description: dictionary.projects.list[0].description,
			image: '/images/taxibargain-mk.png',
			category: 'web',
			tags: ['Next.js', 'Tailwind CSS', 'Shadcn UI', 'Typescript'],
			link: 'https://www.taxibargain.com/',
		},
		{
			id: 2,
			title: dictionary.projects.list[1].title,
			description: dictionary.projects.list[1].description,
			image: '/images/taxiBargain-app.png',
			category: 'mobile',
			tags: [
				'React Native',
				'NestJS',
				'WebSocket',
				'PostgreSQL',
				'Typescript',
				'Expo',
			],
			link: '',
		},
		{
			id: 3,
			title: dictionary.projects.list[2].title,
			description: dictionary.projects.list[2].description,
			image: '/images/hersis-mk.png',
			category: 'systems',
			tags: [
				'Next.js',
				'Nest.js',
				'PostgreSQL',
				'Typescript',
				'Tailwind CSS',
				'Tanstack Query',
				'Shadcn UI',
			],
			link: '#',
		},
		{
			id: 4,
			title: dictionary.projects.list[3].title,
			description: dictionary.projects.list[3].description,
			image: '/images/melissaTaxi-mk.png',
			category: 'web',
			tags: ['Next.js', 'Tailwind CSS', 'Shadcn UI', 'Typescript'],
			link: 'https://melissataxipr.com/es',
		},
		{
			id: 5,
			title: dictionary.projects.list[4].title,
			description: dictionary.projects.list[4].description,
			image: '/images/di-que-si.png',
			category: 'systems',
			tags: ['Flutter', 'Firebase', 'Google Maps API'],
			link: '',
		},
		{
			id: 6,
			title: dictionary.projects.list[5].title,
			description: dictionary.projects.list[5].description,
			image: '/images/SakuraCoffee.webp',
			category: 'systems',
			tags: ['Angular', 'Django', 'MySQL'],
			link: '#',
		},
	]

	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

	const filteredProjects =
		activeCategory === 'all'
			? projects
			: projects.filter((project) => project.category === activeCategory)

	return (
		<section className='py-24 bg-muted/30 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background'>
			<section id='projects' className='container mx-auto px-4' ref={ref}>
				{/* Animated background */}
				<motion.div
					className='absolute inset-0 pointer-events-none'
					style={{ y: backgroundY, opacity }}
				>
					{Array.from({ length: 15 }).map((_, i) => (
						<motion.div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i}
							className='absolute rounded-full bg-primary/5'
							style={{
								width: Math.random() * 400 + 200,
								height: Math.random() * 400 + 200,
								top: `${Math.random() * 100}%`,
								left: `${Math.random() * 100}%`,
								opacity: Math.random() * 0.5,
							}}
						/>
					))}
				</motion.div>

				<div className='container px-4 md:px-6 relative z-10'>
					<ScrollReveal>
						<div className='text-center mb-16'>
							<h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-4'>
								{dictionary.projects.sectionTitle}
							</h2>
							<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
								{dictionary.projects.sectionSubtitle}
							</p>
						</div>
					</ScrollReveal>

					<Tabs
						defaultValue='all'
						className='w-full'
						onValueChange={setActiveCategory}
					>
						<ScrollReveal direction='down'>
							<div className='flex justify-center mb-12'>
								<TabsList className='grid grid-cols-2 md:grid-cols-4'>
									{categories.map((category) => (
										<TabsTrigger
											key={category.id}
											value={category.id}
											className='text-sm md:text-base'
										>
											{dictionary.projects.categories[category.id]}
										</TabsTrigger>
									))}
								</TabsList>
							</div>
						</ScrollReveal>

						{categories.map((category) => (
							<TabsContent
								key={category.id}
								value={category.id}
								className='mt-0'
							>
								<AnimatePresence mode='wait'>
									<motion.div
										key={category.id}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 0.5 }}
									>
										<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
											{filteredProjects.map((project, index) => (
												<ScrollReveal
													key={project.id}
													delay={index * 0.1}
													threshold={0.1}
													className='h-full'
												>
													<motion.div
														whileHover={{ y: -10 }}
														className='h-full'
													>
														<Card className='overflow-hidden h-full border-2 hover:border-primary/50 transition-all duration-300 pt-0'>
															<div className='relative aspect-video overflow-hidden'>
																<Image
																	src={project.image || '/placeholder.svg'}
																	alt={project.title}
																	fill
																	className='object-cover transition-transform duration-500 hover:scale-105'
																/>
															</div>
															<CardContent className='p-6'>
																<h3 className='text-xl font-bold mb-2'>
																	{project.title}
																</h3>
																<p className='text-muted-foreground mb-4'>
																	{project.description}
																</p>
																<div className='flex flex-wrap gap-2 mb-4'>
																	{project.tags.map((tag, i) => (
																		<motion.span
																			// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
																			key={i}
																			className='bg-primary/10 text-primary text-xs px-2 py-1 rounded-full'
																			initial={{ opacity: 0, scale: 0.8 }}
																			whileInView={{ opacity: 1, scale: 1 }}
																			viewport={{ once: true }}
																			transition={{ delay: i * 0.1 + 0.2 }}
																		>
																			{tag}
																		</motion.span>
																	))}
																</div>
																<div className='flex gap-2 mt-auto'>
																	<Button
																		size='sm'
																		variant='outline'
																		className='gap-1'
																		asChild
																	>
																		<Link
																			href={project.link}
																			target='_blank'
																			rel='noopener'
																		>
																			<ExternalLink className='h-4 w-4' />{' '}
																			{dictionary.projects.viewProject}
																		</Link>
																	</Button>
																	<Button
																		size='sm'
																		variant='ghost'
																		className='gap-1'
																	>
																		<Github className='h-4 w-4' />{' '}
																		{dictionary.projects.code}
																	</Button>
																</div>
															</CardContent>
														</Card>
													</motion.div>
												</ScrollReveal>
											))}
										</div>
									</motion.div>
								</AnimatePresence>
							</TabsContent>
						))}
					</Tabs>
				</div>
			</section>
		</section>
	)
}
