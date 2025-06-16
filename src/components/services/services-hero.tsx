'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Zap, Heart } from 'lucide-react'
import Link from 'next/link'
import { HoverBorderGradient } from '../ui/hover-border-gradient'
import { useDictionary } from '@/context/LanguageContext'
import { useEffect, useState } from 'react'
import { CalEmbed } from '../ui/cal-embed'

export default function ServicesHero() {
	const dictionary = useDictionary()
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

	useEffect(() => {
		setDimensions({
			width: window.innerWidth,
			height: window.innerHeight,
		})

		const handleResize = () => {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<section className='py-20 relative overflow-hidden w-full'>
			<div className='absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background mx-auto w-full' />

			{/* Animated background elements */}
			<div className='absolute inset-0 overflow-hidden'>
				{Array.from({ length: 20 }).map((_, i) => (
					<motion.div
						key={`sparkle-${i + 1}`}
						className='absolute rounded-full bg-primary/5'
						initial={{
							width: Math.random() * 100 + 50,
							height: Math.random() * 100 + 50,
							x: Math.random() * dimensions.width,
							y: Math.random() * dimensions.height,
							opacity: 0,
						}}
						animate={{
							x: [
								Math.random() * dimensions.width,
								Math.random() * dimensions.width,
							],
							y: [
								Math.random() * dimensions.height,
								Math.random() * dimensions.height,
							],
							opacity: [0, 0.3, 0],
						}}
						transition={{
							duration: Math.random() * 10 + 10,
							repeat: Number.POSITIVE_INFINITY,
							ease: 'easeInOut',
						}}
					/>
				))}
			</div>

			<div className='container px-4 md:px-6 relative z-10 mx-auto pt-10 md:pt-30'>
				<motion.div
					className='text-center max-w-4xl mx-auto'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<HoverBorderGradient
						containerClassName='rounded-full inline-flex items-center mb-8'
						className='bg-secondary-background text-black/80 flex items-center space-x-2'
					>
						<Heart className='h-4 w-4 inline mr-2' />
						{dictionary.servicesHero.banner}
					</HoverBorderGradient>

					<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6'>
						{dictionary.servicesHero.title_first}{' '}
						<span className='relative inline-block'>
							<span className='relative z-10 text-primary'>
								{dictionary.servicesHero.title_highlight}
							</span>
							<motion.span
								className='absolute bottom-2 left-0 h-3 bg-primary/20 w-full'
								initial={{ width: 0 }}
								animate={{ width: '100%' }}
								transition={{ duration: 0.8, delay: 0.5 }}
							/>
						</span>{' '}
						{dictionary.servicesHero.title_last}
					</h1>

					<p className='text-xl text-muted-foreground mb-8 max-w-3xl mx-auto'>
						{dictionary.servicesHero.subtitle}
					</p>

					<div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-12'>
						<motion.div
							className='flex items-center bg-muted/50 rounded-full px-6 py-3'
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							<Users className='h-5 w-5 text-primary mr-2' />
							<span className='text-sm font-medium'>
								{dictionary.servicesHero.feature1}
							</span>
						</motion.div>
						<motion.div
							className='flex items-center bg-muted/50 rounded-full px-6 py-3'
							initial={{ opacity: 0, x: 0 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
						>
							<Zap className='h-5 w-5 text-primary mr-2' />
							<span className='text-sm font-medium'>
								{dictionary.servicesHero.feature2}
							</span>
						</motion.div>
						<motion.div
							className='flex items-center bg-muted/50 rounded-full px-6 py-3'
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.6 }}
						>
							<Heart className='h-5 w-5 text-primary mr-2' />
							<span className='text-sm font-medium'>
								{dictionary.servicesHero.feature3}
							</span>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7, duration: 0.8 }}
						className='flex flex-col sm:flex-row gap-4 justify-center'
					>
						<Button
							size='lg'
							asChild
							className='bg-gradient-to-r from-primary to-primary/80'
						>
							<CalEmbed
								calLink='https://cal.com/oryx-development/30min'
								className='z-20 relative'
								buttonText={dictionary.hero.btn_contactUs}
							/>
						</Button>
						<Button size='lg' variant='outline' asChild>
							<Link href='/contact'>{dictionary.servicesHero.button_talk}</Link>
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
