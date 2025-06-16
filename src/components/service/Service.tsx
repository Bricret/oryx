'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import {
	Globe,
	Smartphone,
	Code,
	Layers,
	Database,
	Shield,
	HandCoins,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { HoverBorderGradient } from '../ui/hover-border-gradient'
import { useDictionary } from '@/context/LanguageContext'
import Link from 'next/link'

export default function ServicesRedesigned() {
	const dictionary = useDictionary()
	const [hoveredService, setHoveredService] = useState<number | null>(null)
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	})

	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%'])
	const backgroundOpacity = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		[0, 0.2, 0],
	)

	// Servicios traducidos
	const services = [
		{
			icon: <Globe className='h-10 w-10' />,
			color: 'from-violet-500 to-purple-700',
			shadowColor: 'shadow-violet-500/20',
			title: dictionary.services?.web?.title ?? 'Web Development',
			description: dictionary.services?.web?.description ?? '',
		},
		{
			icon: <Smartphone className='h-10 w-10' />,
			color: 'from-blue-500 to-cyan-600',
			shadowColor: 'shadow-blue-500/20',
			title: dictionary.services?.mobile?.title ?? 'Mobile App Development',
			description: dictionary.services?.mobile?.description ?? '',
		},
		{
			icon: <Code className='h-10 w-10' />,
			color: 'from-emerald-500 to-green-600',
			shadowColor: 'shadow-emerald-500/20',
			title: dictionary.services?.systems?.title ?? 'Web Systems Development',
			description: dictionary.services?.systems?.description ?? '',
		},
		{
			icon: <Layers className='h-10 w-10' />,
			color: 'from-amber-500 to-orange-600',
			shadowColor: 'shadow-amber-500/20',
			title: dictionary.services?.uiux?.title ?? 'UI/UX Design',
			description: dictionary.services?.uiux?.description ?? '',
		},
		{
			icon: <Database className='h-10 w-10' />,
			color: 'from-rose-500 to-red-600',
			shadowColor: 'shadow-rose-500/20',
			title: dictionary.services?.data?.title ?? 'Data Engineering',
			description: dictionary.services?.data?.description ?? '',
		},
		{
			icon: <Shield className='h-10 w-10' />,
			color: 'from-indigo-500 to-blue-700',
			shadowColor: 'shadow-indigo-500/20',
			title: dictionary.services?.cyber?.title ?? 'Cybersecurity',
			description: dictionary.services?.cyber?.description ?? '',
		},
	]

	return (
		<section className='py-24 relative overflow-hidden'>
			<section id='services' className='container mx-auto px-4' ref={ref}>
				{/* Animated background elements */}
				<div className='absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background' />
				<motion.div
					className='absolute inset-0 pointer-events-none'
					style={{ y: backgroundY, opacity: backgroundOpacity }}
				>
					{Array.from({ length: 20 }).map((_, i) => (
						<motion.div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i}
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
								<HandCoins className='w-6 h-6' />
								<span className='text-sm font-medium'>
									{dictionary.ourService?.banner ?? 'Our Services'}
								</span>
							</HoverBorderGradient>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold tracking-tight mb-4'>
							<span className='relative inline-block'>
								<span className='relative z-10'>
									{dictionary.ourService?.title?.split(' ')[0] ??
										'Transforming'}
								</span>
								<motion.span
									className='absolute bottom-2 left-0 h-3 bg-primary/20 w-full'
									initial={{ width: 0 }}
									whileInView={{ width: '100%' }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: 0.5 }}
								/>
							</span>{' '}
							{dictionary.ourService?.title?.replace(
								dictionary.ourService?.title?.split(' ')[0],
								'',
							) ?? 'Ideas Into Digital Reality'}
						</h2>
						<p className='text-muted-foreground text-lg max-w-3xl mx-auto'>
							{dictionary.ourService?.subtitle ??
								'We deliver exceptional digital solutions tailored to your specific needs, combining technical expertise with creative innovation to drive your business forward.'}
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{services.map((service, index) => (
							<motion.div
								key={service.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className='relative'
								onMouseEnter={() => setHoveredService(index)}
								onMouseLeave={() => setHoveredService(null)}
							>
								<motion.div
									className={cn(
										'relative h-full rounded-xl overflow-hidden border-2 transition-all duration-500',
										hoveredService === index
											? 'border-transparent shadow-2xl scale-[1.02]'
											: 'border-border shadow-lg',
									)}
									whileHover={{ y: -5 }}
									transition={{ type: 'spring', stiffness: 400, damping: 10 }}
								>
									{/* Background gradient */}
									<div
										className={cn(
											'absolute inset-0 opacity-0 transition-opacity duration-500',
											hoveredService === index && 'opacity-100',
										)}
									>
										<div
											className={cn(
												'absolute inset-0 bg-gradient-to-br',
												service.color,
												'opacity-10 transition-opacity duration-500',
											)}
										/>
									</div>

									<div className='relative z-10 p-6 h-full flex flex-col'>
										{/* Icon with animated background */}
										<div className='mb-6'>
											<motion.div
												className={cn(
													'relative w-16 h-16 rounded-lg flex items-center justify-center',
													'bg-gradient-to-br',
													service.color,
													service.shadowColor,
												)}
												whileHover={{ scale: 1.05, rotate: 5 }}
												transition={{
													type: 'spring',
													stiffness: 400,
													damping: 10,
												}}
											>
												<div className='text-white'>{service.icon}</div>
												<motion.div
													className='absolute -inset-0.5 rounded-lg opacity-0'
													initial={{ opacity: 0 }}
													whileHover={{ opacity: 0.4 }}
													style={{
														background:
															'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
														backgroundSize: '200% 100%',
													}}
													animate={{
														backgroundPosition: ['200% 0', '-200% 0'],
													}}
													transition={{
														duration: 1.5,
														repeat: Number.POSITIVE_INFINITY,
														ease: 'linear',
													}}
												/>
											</motion.div>
										</div>

										<h3 className='text-2xl font-bold mb-3'>{service.title}</h3>
										<p className='text-muted-foreground mb-6 flex-grow'>
											{service.description}
										</p>
									</div>
								</motion.div>

								{/* Decorative elements */}
								<motion.div
									className={cn(
										'absolute -z-10 rounded-xl',
										service.shadowColor,
										'opacity-0 transition-opacity duration-300',
										hoveredService === index && 'opacity-100',
									)}
									style={{
										top: -5,
										left: -5,
										right: -5,
										bottom: -5,
										filter: 'blur(20px)',
									}}
								/>
							</motion.div>
						))}
					</div>

					<motion.div
						className='mt-16 text-center'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.8 }}
					>
						<Button
							asChild
							size='lg'
							className='bg-gradient-to-r from-primary to-primary/80 gap-2 text-white hover:text-white py-6 px-12'
						>
							<Link href='/services'>
								{dictionary.ourService?.button ?? 'View All Services'}
							</Link>
						</Button>
					</motion.div>
				</div>
			</section>
		</section>
	)
}
