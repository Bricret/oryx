'use client'

import { motion } from 'framer-motion'
import { HoverBorderGradient } from '../ui/hover-border-gradient'
import { useDictionary } from '@/context/LanguageContext'

export default function CalculatorHeader() {
	const dictionary = useDictionary()
	return (
		<section className='py-20 md:py-28 relative overflow-hidden w-full bg-background'>
			<div
				className='absolute top-0 left-0 right-0 bottom-0 opacity-10'
				style={{
					backgroundImage:
						'radial-gradient(circle at 50% 50%, hsl(var(--primary)), transparent 70%)',
				}}
			/>
			<div className='container px-4 md:px-6 relative z-10 mx-auto pt-32 pb-10'>
				<motion.div
					className='text-center max-w-3xl mx-auto'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<HoverBorderGradient
						containerClassName='rounded-full inline-flex items-center mb-8'
						className='bg-secondary-background text-black/80 flex items-center space-x-2'
					>
						{dictionary.pricingCalculator.hero.badge}
					</HoverBorderGradient>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70'>
						{dictionary.pricingCalculator.hero.title}
					</h1>
					<p className='text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
						{dictionary.pricingCalculator.hero.description}
					</p>
				</motion.div>
			</div>
		</section>
	)
}
