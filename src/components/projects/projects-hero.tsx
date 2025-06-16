'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
	ArrowDown,
	Code,
	Smartphone,
	Globe,
	Database,
	Sparkles,
} from 'lucide-react'
import AnimatedCounter from '../process/animated-counter'
import { HoverBorderGradient } from '../ui/hover-border-gradient'

export default function ProjectsHero() {
	const scrollToProjects = () => {
		document
			.getElementById('projects-filter')
			?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30'>
			{/* Animated background elements */}
			<div className='absolute inset-0 overflow-hidden'>
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
						animate={{
							y: [0, -30, 0],
							opacity: [0.3, 0.6, 0.3],
						}}
						transition={{
							duration: Math.random() * 3 + 2,
							repeat: Number.POSITIVE_INFINITY,
							ease: 'easeInOut',
						}}
					/>
				))}
			</div>

			<div className='container px-4 md:px-6 relative z-10'>
				<div className='text-center max-w-4xl mx-auto'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className='mb-6'
					>
						<HoverBorderGradient
							containerClassName='rounded-full inline-flex items-center mb-8'
							className='bg-secondary-background text-black/80 flex items-center space-x-2'
						>
							<Sparkles className='w-6 h-6' />
							<span className='text-sm font-medium'>Portfolio Showcase</span>
						</HoverBorderGradient>
						<h1 className='text-4xl md:text-6xl font-bold tracking-tight mb-6'>
							Our{' '}
							<span className='bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
								Project Portfolio
							</span>
						</h1>
						<p className='text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed'>
							Explore our collection of successful projects across web
							development, mobile applications, and enterprise systems. Each
							project represents our commitment to excellence and innovation.
						</p>
					</motion.div>

					{/* Stats */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'
					>
						<div className='text-center'>
							<div className='flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3'>
								<Code className='h-6 w-6 text-primary' />
							</div>
							<div className='text-3xl font-bold text-primary mb-1'>
								<AnimatedCounter end={150} duration={2000} />+
							</div>
							<p className='text-sm text-muted-foreground'>
								Projects Completed
							</p>
						</div>
						<div className='text-center'>
							<div className='flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3'>
								<Globe className='h-6 w-6 text-primary' />
							</div>
							<div className='text-3xl font-bold text-primary mb-1'>
								<AnimatedCounter end={85} duration={2000} />+
							</div>
							<p className='text-sm text-muted-foreground'>Web Applications</p>
						</div>
						<div className='text-center'>
							<div className='flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3'>
								<Smartphone className='h-6 w-6 text-primary' />
							</div>
							<div className='text-3xl font-bold text-primary mb-1'>
								<AnimatedCounter end={45} duration={2000} />+
							</div>
							<p className='text-sm text-muted-foreground'>Mobile Apps</p>
						</div>
						<div className='text-center'>
							<div className='flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3'>
								<Database className='h-6 w-6 text-primary' />
							</div>
							<div className='text-3xl font-bold text-primary mb-1'>
								<AnimatedCounter end={20} duration={2000} />+
							</div>
							<p className='text-sm text-muted-foreground'>
								Enterprise Systems
							</p>
						</div>
					</motion.div>

					{/* CTA Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className='flex flex-col sm:flex-row gap-4 justify-center mb-12'
					>
						<Button
							size='lg'
							onClick={scrollToProjects}
							className='bg-gradient-to-r from-primary to-primary/80'
						>
							Explore Projects
							<ArrowDown className='ml-2 h-4 w-4' />
						</Button>
						<Button size='lg' variant='outline'>
							Start Your Project
						</Button>
					</motion.div>

					{/* Technology badges */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className='flex flex-wrap justify-center gap-2'
					>
						{[
							'React',
							'Next.js',
							'Node.js',
							'React Native',
							'Flutter',
							'Python',
							'AWS',
							'MongoDB',
						].map((tech) => (
							<Badge key={tech} variant='secondary' className='text-xs'>
								{tech}
							</Badge>
						))}
					</motion.div>
				</div>
			</div>

			{/* Scroll indicator */}
			<motion.div
				className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
				animate={{ y: [0, 10, 0] }}
				transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
			>
				<ArrowDown className='h-6 w-6 text-muted-foreground' />
			</motion.div>
		</section>
	)
}
