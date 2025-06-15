'use client'

import { useDictionary } from '@/context/LanguageContext'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { motion } from 'motion/react'
import Image from 'next/image'
import { Button, buttonVariants } from './ui/button'

const Hero = () => {
	const heroRef = useRef<HTMLDivElement>(null)
	const sectionRef = useScrollAnimation()
	const dictionary = useDictionary()

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!heroRef.current) return

			const { clientX, clientY } = e
			const { left, top, width, height } =
				heroRef.current.getBoundingClientRect()

			const x = (clientX - left) / width
			const y = (clientY - top) / height

			heroRef.current.style.setProperty('--x', `${x}`)
			heroRef.current.style.setProperty('--y', `${y}`)
		}

		const element = heroRef.current
		if (element) {
			element.addEventListener('mousemove', handleMouseMove)

			return () => {
				element.removeEventListener('mousemove', handleMouseMove)
			}
		}
	}, [])

	return (
		<div
			ref={heroRef}
			className='relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden'
			style={
				{
					'--x': '0.5',
					'--y': '0.5',
				} as React.CSSProperties
			}
		>
			{/* Animated background */}
			<div className='absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-background via-background to-primary/5' />

			<div className='animated-bg' />

			{/* Decorative elements */}
			<div className='absolute inset-0 overflow-hidden'>
				<div
					className='absolute -right-10 top-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float'
					style={{ animationDelay: '0s' }}
				/>
				<div
					className='absolute -left-10 bottom-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float'
					style={{ animationDelay: '2s' }}
				/>
			</div>

			<div className='container px-4 mx-auto relative z-10'>
				<div
					ref={sectionRef as React.RefObject<HTMLDivElement>}
					className='max-w-3xl mx-auto text-center mb-16 stagger-animation'
				>
					<Image
						src='/images/logo.png'
						alt='Logo'
						width={100}
						height={100}
						className='mx-auto mb-4'
					/>
					<HoverBorderGradient
						containerClassName='rounded-full inline-flex items-center mb-8'
						className='bg-secondary-background text-black/80 flex items-center space-x-2'
					>
						<Sparkles className='w-6 h-6' />
						<span className='text-sm font-medium'>
							{dictionary.hero.banner}
						</span>
					</HoverBorderGradient>

					<h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-tight'>
						{dictionary.hero.title_First}{' '}
						<span className='text-gradient relative text-main-content'>
							{dictionary.hero.title_Second}
							<svg
								className='absolute w-full h-3 -bottom-2 left-0 text-primary/30'
								viewBox='0 0 100 12'
								preserveAspectRatio='none'
							>
								<title>Decorative underline</title>
								<path
									d='M0,0 Q50,12 100,0'
									stroke='#3abeff'
									strokeWidth='3'
									fill='none'
								/>
							</svg>
						</span>{' '}
						{dictionary.hero.title_Third}
					</h1>

					<p className='text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto'>
						{dictionary.hero.subtitle}
					</p>

					<div className='flex flex-col sm:flex-row items-center justify-center max-w-[320px] mx-auto gap-4'>
						<Button
							size='lg'
							className='text-lg py-6 px-8 w-full hover:scale-105 transition-all duration-300'
							asChild
						>
							<a href='#contact'>{dictionary.hero.btn_contactUs}</a>
						</Button>
						<Button
							asChild
							size='lg'
							variant='outline'
							className='text-lg py-6 px-8 w-full'
						>
							<a href='#services'>{dictionary.hero.btn_explore}</a>
						</Button>
					</div>
				</div>
				<div className='flex flex-col items-center'>
					<p className='text-sm text-muted-foreground mb-2'>
						Scroll to explore
					</p>
					<div className='w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center'>
						<motion.div
							className='w-1 h-2 bg-primary rounded-full mt-2'
							animate={{ y: [0, 12, 0] }}
							transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
