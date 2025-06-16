'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	Check,
	X,
	Globe,
	Database,
	Smartphone,
	Clock,
	DollarSign,
	Users,
	Zap,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import ScrollReveal from '@/components/ui/scroll-reveal'
import { HoverBorderGradient } from '../ui/hover-border-gradient'
import { CalEmbed } from '../ui/cal-embed'
import { useDictionary } from '@/context/LanguageContext'

type ComparisonDataText = {
	feature: string
	website: string
	systems: string
	mobile: string
}

type ServiceFeaturesText = {
	[key: string]: {
		title: string
		idealFor_title: string
		idealFor: string[]
		includes_title: string
		includes: string[]
		notIncludes_title: string
		notIncludes: string[]
	}
}

const comparisonIcons: React.ReactNode[] = [
	<Clock key='clock' className='h-4 w-4' />,
	<DollarSign key='dollar' className='h-4 w-4' />,
	<Users key='users' className='h-4 w-4' />,
	<Zap key='zap' className='h-4 w-4' />,
	<Check key='check1' className='h-4 w-4' />,
	<Check key='check2' className='h-4 w-4' />,
]

const serviceIcons: { [key: string]: React.ReactNode } = {
	website: <Globe className='h-6 w-6' />,
	systems: <Database className='h-6 w-6' />,
	mobile: <Smartphone className='h-6 w-6' />,
}

const serviceColors: { [key: string]: string } = {
	website: 'from-blue-500 to-cyan-400',
	systems: 'from-emerald-500 to-green-400',
	mobile: 'from-violet-500 to-purple-400',
}

export default function ServiceComparison() {
	const dictionary = useDictionary().serviceComparison
	const comparisonData = (dictionary.table.data as ComparisonDataText[]).map(
		(item, index) => ({
			...item,
			icon: comparisonIcons[index],
		}),
	)

	const serviceFeatures = dictionary.serviceFeatures as ServiceFeaturesText

	return (
		<section className='py-24 relative overflow-hidden w-full mx-auto'>
			<div className='container px-4 md:px-6 relative z-10 mx-auto max-w-7xl'>
				<ScrollReveal>
					<div className='text-center mb-16'>
						<div className='inline-block'>
							<HoverBorderGradient
								containerClassName='rounded-full inline-flex items-center mb-8'
								className='bg-secondary-background text-black/80 flex items-center space-x-2'
							>
								{dictionary.banner}
							</HoverBorderGradient>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold tracking-tight mb-4'>
							{dictionary.title_first}{' '}
							<span className='relative inline-block'>
								<span className='relative z-10'>
									{dictionary.title_highlight}
								</span>
								<motion.span
									className='absolute bottom-2 left-0 h-3 bg-primary/20 w-full'
									initial={{ width: 0 }}
									whileInView={{ width: '100%' }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: 0.5 }}
								/>
							</span>{' '}
							{dictionary.title_last}
						</h2>
						<p className='text-black/70 text-lg max-w-3xl mx-auto'>
							{dictionary.subtitle}
						</p>
					</div>
				</ScrollReveal>

				{/* Comparison Table */}
				<ScrollReveal>
					<div className='bg-background border border-border rounded-xl overflow-hidden shadow-lg mb-16'>
						<div className='overflow-x-auto'>
							<table className='w-full'>
								<thead className='bg-muted/50'>
									<tr>
										<th className='py-4 px-6 text-left font-semibold'>
											{dictionary.table.feature}
										</th>
										<th className='py-4 px-6 text-center font-semibold'>
											<div className='flex items-center justify-center'>
												<Globe className='h-4 w-4 mr-2 text-blue-500' />
												{dictionary.table.web_dev}
											</div>
										</th>
										<th className='py-4 px-6 text-center font-semibold'>
											<div className='flex items-center justify-center'>
												<Database className='h-4 w-4 mr-2 text-emerald-500' />
												{dictionary.table.business_systems}
											</div>
										</th>
										<th className='py-4 px-6 text-center font-semibold'>
											<div className='flex items-center justify-center'>
												<Smartphone className='h-4 w-4 mr-2 text-violet-500' />
												{dictionary.table.mobile_apps}
											</div>
										</th>
									</tr>
								</thead>
								<tbody>
									{comparisonData.map((item, index) => (
										<motion.tr
											key={item.feature}
											className={cn(
												'border-b border-border transition-colors',
												index % 2 === 0 ? 'bg-muted/20' : 'bg-background',
											)}
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.3, delay: index * 0.1 }}
										>
											<td className='py-4 px-6'>
												<div className='flex items-center'>
													<div className='text-muted-foreground mr-2'>
														{item.icon}
													</div>
													<span className='font-medium'>{item.feature}</span>
												</div>
											</td>
											<td className='py-4 px-6 text-center'>{item.website}</td>
											<td className='py-4 px-6 text-center'>{item.systems}</td>
											<td className='py-4 px-6 text-center'>{item.mobile}</td>
										</motion.tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</ScrollReveal>

				{/* Service Details */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{Object.entries(serviceFeatures).map(([key, service], index) => (
						<ScrollReveal
							key={key}
							delay={index * 0.1}
							threshold={0.1}
							className='h-full'
						>
							<Card className='h-full border-2 border-border hover:border-primary/30 transition-all duration-300'>
								<CardHeader>
									<div className='flex items-center mb-4'>
										<div
											className={cn(
												'w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center mr-4',
												serviceColors[key],
											)}
										>
											<div className='text-white'>{serviceIcons[key]}</div>
										</div>
										<CardTitle className='text-xl'>{service.title}</CardTitle>
									</div>
								</CardHeader>
								<CardContent>
									<div className='space-y-6'>
										{/* Ideal for */}
										<div>
											<h4 className='font-semibold text-green-600 mb-3'>
												{service.idealFor_title}
											</h4>
											<ul className='space-y-2'>
												{service.idealFor.map((item) => (
													<li key={item} className='flex items-center text-sm'>
														<Check className='h-4 w-4 text-green-500 mr-2 flex-shrink-0' />
														{item}
													</li>
												))}
											</ul>
										</div>

										{/* Includes */}
										<div>
											<h4 className='font-semibold text-primary mb-3'>
												{service.includes_title}
											</h4>
											<ul className='space-y-2'>
												{service.includes.map((item) => (
													<li key={item} className='flex items-center text-sm'>
														<Check className='h-4 w-4 text-primary mr-2 flex-shrink-0' />
														{item}
													</li>
												))}
											</ul>
										</div>

										{/* Not Includes */}
										<div>
											<h4 className='font-semibold text-red-600 mb-3'>
												{service.notIncludes_title}
											</h4>
											<ul className='space-y-2'>
												{service.notIncludes.map((item) => (
													<li key={item} className='flex items-center text-sm'>
														<X className='h-4 w-4 text-red-500 mr-2 flex-shrink-0' />
														{item}
													</li>
												))}
											</ul>
										</div>
									</div>
								</CardContent>
							</Card>
						</ScrollReveal>
					))}
				</div>

				{/* Help Section */}
				<ScrollReveal>
					<div className='mt-16 text-center'>
						<div className='bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto'>
							<h3 className='text-2xl font-bold mb-4'>¿Aún no estás seguro?</h3>
							<p className='text-black/70 mb-6'>
								Nuestro equipo puede ayudarte a identificar la mejor solución
								para tu proyecto específico. Agenda una consulta gratuita y
								recibe recomendaciones personalizadas.
							</p>
							<div className='flex flex-col sm:flex-row gap-4 justify-center'>
								<CalEmbed
									calLink='https://cal.com/oryx-development/30min'
									className='bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-6 rounded-lg font-medium hover:shadow-lg transition-all ease-in-out duration-300 relative z-20'
									buttonText='Consulta gratuita'
								/>
								<motion.a
									className='border border-border bg-background px-6 py-3 rounded-lg font-medium hover:border-primary/30 transition-all duration-300'
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									href='/projects'
								>
									Ver casos de éxito
								</motion.a>
							</div>
						</div>
					</div>
				</ScrollReveal>
			</div>
		</section>
	)
}
