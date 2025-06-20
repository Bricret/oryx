'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from '@/components/ui/card'
import { Code, Users, Award, Clock } from 'lucide-react'
import ScrollReveal from '../projects/scroll-reveal'
import AnimatedCounter from './animated-counter'
import { useDictionary } from '@/context/LanguageContext'

export default function StatsSection() {
	const dictionary = useDictionary()

	const stats = [
		{
			icon: <Users className='h-8 w-8 text-white' />,
			value: 10,
			label: dictionary.statsSection.stats.clients,
			suffix: '+',
		},
		{
			icon: <Code className='h-8 w-8 text-white' />,
			value: 20,
			label: dictionary.statsSection.stats.projects,
			suffix: '+',
		},
		{
			icon: <Award className='h-8 w-8 text-white' />,
			value: 2,
			label: dictionary.statsSection.stats.associations,
			suffix: '',
		},
		{
			icon: <Clock className='h-8 w-8 text-white' />,
			value: 3,
			label: dictionary.statsSection.stats.years,
			suffix: '+',
		},
	]
	return (
		<section className='py-24 relative overflow-hidden bg-[#1467D0]'>
			<section className='container mx-auto px-4'>
				<ScrollReveal>
					<div className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white'>
							{dictionary.statsSection.title}
						</h2>
						<p className='text-lg max-w-2xl mx-auto text-zinc-300'>
							{dictionary.statsSection.subtitle}
						</p>
					</div>
				</ScrollReveal>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{stats.map((stat, index) => (
						<ScrollReveal key={stat.value} delay={index * 0.1} direction='up'>
							<Card className='border-2 hover:border-primary/50 transition-all duration-300'>
								<CardContent className='p-6 text-center'>
									<motion.div
										className='rounded-full bg-[#1467D0] p-4 mx-auto mb-4 w-fit'
										whileHover={{ scale: 1.05 }}
										transition={{
											type: 'spring',
											stiffness: 400,
											damping: 10,
										}}
									>
										{stat.icon}
									</motion.div>
									<AnimatedCounter end={stat.value} suffix={stat.suffix} />
									<p className='text-muted-foreground mt-2'>{stat.label}</p>
								</CardContent>
							</Card>
						</ScrollReveal>
					))}
				</div>
			</section>
		</section>
	)
}
