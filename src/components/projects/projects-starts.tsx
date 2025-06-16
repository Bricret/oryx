'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, Users, Globe, Award, Clock, Star } from 'lucide-react'
import AnimatedCounter from '../process/animated-counter'

const stats = [
	{
		icon: TrendingUp,
		value: 150,
		suffix: '+',
		label: 'Projects Completed',
		description: 'Successfully delivered across various industries',
		color: 'text-blue-500',
		bgColor: 'bg-blue-500/10',
	},
	{
		icon: Users,
		value: 120,
		suffix: '+',
		label: 'Happy Clients',
		description: 'Long-term partnerships and satisfied customers',
		color: 'text-green-500',
		bgColor: 'bg-green-500/10',
	},
	{
		icon: Globe,
		value: 25,
		suffix: '+',
		label: 'Countries Served',
		description: 'Global reach with local expertise',
		color: 'text-purple-500',
		bgColor: 'bg-purple-500/10',
	},
	{
		icon: Award,
		value: 15,
		suffix: '+',
		label: 'Industry Awards',
		description: 'Recognition for excellence and innovation',
		color: 'text-yellow-500',
		bgColor: 'bg-yellow-500/10',
	},
	{
		icon: Clock,
		value: 98,
		suffix: '%',
		label: 'On-Time Delivery',
		description: 'Consistent project delivery within deadlines',
		color: 'text-red-500',
		bgColor: 'bg-red-500/10',
	},
	{
		icon: Star,
		value: 4.9,
		suffix: '/5',
		label: 'Client Rating',
		description: 'Average satisfaction score from client feedback',
		color: 'text-orange-500',
		bgColor: 'bg-orange-500/10',
	},
]

export default function ProjectsStats() {
	return (
		<section className='py-16 bg-gradient-to-b from-background via-background/95 to-background w-full'>
			<div className='container px-4 md:px-6 mx-auto'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='text-center mb-12'
				>
					<h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-4'>
						Our Track Record
					</h2>
					<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
						Numbers that speak to our commitment to excellence and client
						satisfaction
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{stats.map((stat, index) => (
						<motion.div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Card className='h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20'>
								<CardContent className='p-6'>
									<div className='flex items-start gap-4'>
										<div className={`p-3 rounded-lg ${stat.bgColor}`}>
											<stat.icon className={`h-6 w-6 ${stat.color}`} />
										</div>
										<div className='flex-1'>
											<div className='flex items-baseline gap-1 mb-2'>
												<span className='text-3xl font-bold'>
													<AnimatedCounter end={stat.value} duration={2000} />
												</span>
												<span className='text-xl font-semibold text-primary'>
													{stat.suffix}
												</span>
											</div>
											<h3 className='font-semibold text-lg mb-2'>
												{stat.label}
											</h3>
											<p className='text-muted-foreground text-sm leading-relaxed'>
												{stat.description}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				{/* Additional Metrics */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className='mt-16 text-center'
				>
					<div className='bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8'>
						<h3 className='text-2xl font-bold mb-6'>
							Why Choose Our Portfolio?
						</h3>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							<div>
								<div className='text-3xl font-bold text-primary mb-2'>100%</div>
								<div className='font-medium mb-1'>Success Rate</div>
								<div className='text-sm text-muted-foreground'>
									Every project delivered successfully
								</div>
							</div>
							<div>
								<div className='text-3xl font-bold text-primary mb-2'>50%</div>
								<div className='font-medium mb-1'>Faster Delivery</div>
								<div className='text-sm text-muted-foreground'>
									Compared to industry average
								</div>
							</div>
							<div>
								<div className='text-3xl font-bold text-primary mb-2'>90%</div>
								<div className='font-medium mb-1'>Repeat Clients</div>
								<div className='text-sm text-muted-foreground'>
									Long-term partnerships built
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
