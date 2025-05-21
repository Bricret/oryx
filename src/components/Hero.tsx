'use client'

import { useDictionary } from '@/context/LanguageContext'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { motion } from 'motion/react'
import Image from 'next/image'

const Hero = () => {
	const heroRef = useRef<HTMLDivElement>(null)
	const sectionRef = useScrollAnimation()
	const dictionary = useDictionary()
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		// Set canvas dimensions
		const setCanvasDimensions = () => {
			if (!canvas) return
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
		}
		setCanvasDimensions()
		window.addEventListener('resize', setCanvasDimensions)

		// Particle class
		class Particle {
			x = 0
			y = 0
			size = 0
			speedX = 0
			speedY = 0
			color = ''

			constructor() {
				if (!canvas) return
				this.x = Math.random() * canvas.width
				this.y = Math.random() * canvas.height
				this.size = Math.random() * 3 + 1
				this.speedX = (Math.random() - 0.5) * 0.5
				this.speedY = (Math.random() - 0.5) * 0.5
				this.color = `rgba(62, 116, 170, ${Math.random() * 0.5 + 0.1})`
			}

			update() {
				if (!canvas) return
				this.x += this.speedX
				this.y += this.speedY

				if (this.x > canvas.width) this.x = 0
				else if (this.x < 0) this.x = canvas.width
				if (this.y > canvas.height) this.y = 0
				else if (this.y < 0) this.y = canvas.height
			}

			draw() {
				if (!ctx) return
				ctx.fillStyle = this.color
				ctx.beginPath()
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
				ctx.fill()
			}
		}

		// Create particles
		const particlesArray: Particle[] = []
		const numberOfParticles = Math.min(
			100,
			Math.floor((canvas.width * canvas.height) / 10000),
		)

		for (let i = 0; i < numberOfParticles; i++) {
			particlesArray.push(new Particle())
		}

		// Connect particles with lines
		function connect() {
			if (!ctx) return
			const maxDistance = 150
			for (let a = 0; a < particlesArray.length; a++) {
				for (let b = a; b < particlesArray.length; b++) {
					const dx = particlesArray[a].x - particlesArray[b].x
					const dy = particlesArray[a].y - particlesArray[b].y
					const distance = Math.sqrt(dx * dx + dy * dy)

					if (distance < maxDistance) {
						const opacity = 1 - distance / maxDistance
						ctx.strokeStyle = `rgba(62, 116, 170, ${opacity * 0.2})`
						ctx.lineWidth = 1
						ctx.beginPath()
						ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
						ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
						ctx.stroke()
					}
				}
			}
		}

		// Animation loop
		function animate() {
			if (!ctx || !canvas) return
			ctx.clearRect(0, 0, canvas.width, canvas.height)

			for (let i = 0; i < particlesArray.length; i++) {
				particlesArray[i].update()
				particlesArray[i].draw()
			}
			connect()
			requestAnimationFrame(animate)
		}

		animate()

		return () => {
			window.removeEventListener('resize', setCanvasDimensions)
		}
	}, [])

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
			<canvas
				ref={canvasRef}
				className='absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-background via-background to-primary/5'
			/>

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

					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<a
							href='#contact'
							className='inline-flex h-12 items-center justify-center rounded-md bg-[#6a958c] px-8 text-base font-medium text-primary-foreground shadow transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring w-full sm:w-auto'
						>
							{dictionary.hero.btn_contactUs}{' '}
							<ArrowRight className='ml-2 h-4 w-4' />
						</a>
						<a
							href='#services'
							className='inline-flex h-12 items-center justify-center rounded-md bg-secondary px-8 text-base font-medium text-secondary-foreground transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring w-full sm:w-auto'
						>
							{dictionary.hero.btn_explore}
						</a>
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
