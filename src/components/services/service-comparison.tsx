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
} from 'lucide-react'
import { cn } from '@/lib/utils'
import ScrollReveal from '@/components/ui/scroll-reveal'

const comparisonData = [
	{
		feature: 'Tiempo de desarrollo',
		website: '2-6 semanas',
		systems: '6-16 semanas',
		mobile: '8-20 semanas',
		icon: <Clock className='h-4 w-4' />,
	},
	{
		feature: 'Inversión inicial',
		website: 'Desde $2,500',
		systems: 'Desde $8,000',
		mobile: 'Desde $12,000',
		icon: <DollarSign className='h-4 w-4' />,
	},
	{
		feature: 'Usuarios objetivo',
		website: 'Público general',
		systems: 'Equipos internos',
		mobile: 'Usuarios móviles',
		icon: <Users className='h-4 w-4' />,
	},
	{
		feature: 'Complejidad técnica',
		website: 'Baja-Media',
		systems: 'Alta',
		mobile: 'Media-Alta',
		icon: <Check className='h-4 w-4' />,
	},
	{
		feature: 'Mantenimiento',
		website: 'Básico',
		systems: 'Avanzado',
		mobile: 'Medio',
		icon: <Check className='h-4 w-4' />,
	},
	{
		feature: 'ROI esperado',
		website: '3-6 meses',
		systems: '6-12 meses',
		mobile: '4-8 meses',
		icon: <Check className='h-4 w-4' />,
	},
]

const serviceFeatures = {
	website: {
		title: 'Desarrollo Web',
		icon: <Globe className='h-6 w-6' />,
		color: 'from-blue-500 to-cyan-400',
		idealFor: [
			'Presencia online',
			'E-commerce',
			'Portafolios',
			'Blogs corporativos',
		],
		includes: [
			'Diseño responsivo',
			'SEO optimizado',
			'CMS integrado',
			'Hosting incluido',
		],
		notIncludes: ['App móvil', 'Sistema complejo', 'Integraciones avanzadas'],
	},
	systems: {
		title: 'Sistemas Empresariales',
		icon: <Database className='h-6 w-6' />,
		color: 'from-emerald-500 to-green-400',
		idealFor: [
			'Automatización',
			'Gestión interna',
			'Procesos complejos',
			'Reportes avanzados',
		],
		includes: ['CRM personalizado', 'Base de datos', 'APIs', 'Panel admin'],
		notIncludes: ['Sitio web público', 'App store', 'Marketing digital'],
	},
	mobile: {
		title: 'Aplicaciones Móviles',
		icon: <Smartphone className='h-6 w-6' />,
		color: 'from-violet-500 to-purple-400',
		idealFor: [
			'Engagement móvil',
			'Funciones nativas',
			'Notificaciones',
			'Uso offline',
		],
		includes: [
			'iOS y Android',
			'App stores',
			'Push notifications',
			'Diseño nativo',
		],
		notIncludes: ['Sitio web', 'Sistema interno', 'Funciones de escritorio'],
	},
}

export default function ServiceComparison() {
	return (
		<section className='py-24 relative overflow-hidden w-full mx-auto'>
			<div className='container px-4 md:px-6 relative z-10 mx-auto max-w-7xl'>
				<ScrollReveal>
					<div className='text-center mb-16'>
						<div className='inline-block'>
							<motion.div
								className='text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full mb-4 inline-block'
								initial={{ opacity: 0, y: -20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								Comparación de Servicios
							</motion.div>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold tracking-tight mb-4'>
							¿Cuál es la{' '}
							<span className='relative inline-block'>
								<span className='relative z-10'>mejor opción</span>
								<motion.span
									className='absolute bottom-2 left-0 h-3 bg-primary/20 w-full'
									initial={{ width: 0 }}
									whileInView={{ width: '100%' }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: 0.5 }}
								/>
							</span>{' '}
							para ti?
						</h2>
						<p className='text-muted-foreground text-lg max-w-3xl mx-auto'>
							Cada servicio está diseñado para diferentes necesidades y
							objetivos. Aquí te ayudamos a entender cuál se adapta mejor a tu
							proyecto.
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
											Característica
										</th>
										<th className='py-4 px-6 text-center font-semibold'>
											<div className='flex items-center justify-center'>
												<Globe className='h-4 w-4 mr-2 text-blue-500' />
												Desarrollo Web
											</div>
										</th>
										<th className='py-4 px-6 text-center font-semibold'>
											<div className='flex items-center justify-center'>
												<Database className='h-4 w-4 mr-2 text-emerald-500' />
												Sistemas Empresariales
											</div>
										</th>
										<th className='py-4 px-6 text-center font-semibold'>
											<div className='flex items-center justify-center'>
												<Smartphone className='h-4 w-4 mr-2 text-violet-500' />
												Apps Móviles
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
												service.color,
											)}
										>
											<div className='text-white'>{service.icon}</div>
										</div>
										<CardTitle className='text-xl'>{service.title}</CardTitle>
									</div>
								</CardHeader>
								<CardContent>
									<div className='space-y-6'>
										{/* Ideal for */}
										<div>
											<h4 className='font-semibold text-green-600 mb-3'>
												Ideal para:
											</h4>
											<ul className='space-y-2'>
												{service.idealFor.map((item, i) => (
													<li key={item} className='flex items-center text-sm'>
														<Check className='h-4 w-4 text-green-500 mr-2 flex-shrink-0' />
														{item}
													</li>
												))}
											</ul>
										</div>

										{/* Includes */}
										<div>
											<h4 className='font-semibold text-blue-600 mb-3'>
												Incluye:
											</h4>
											<ul className='space-y-2'>
												{service.includes.map((item, i) => (
													<li key={item} className='flex items-center text-sm'>
														<div className='w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0' />
														{item}
													</li>
												))}
											</ul>
										</div>

										{/* Not includes */}
										<div>
											<h4 className='font-semibold text-orange-600 mb-3'>
												No incluye:
											</h4>
											<ul className='space-y-2'>
												{service.notIncludes.map((item, i) => (
													<li key={item} className='flex items-center text-sm'>
														<X className='h-4 w-4 text-orange-500 mr-2 flex-shrink-0' />
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
							<p className='text-muted-foreground mb-6'>
								Nuestro equipo puede ayudarte a identificar la mejor solución
								para tu proyecto específico. Agenda una consulta gratuita y
								recibe recomendaciones personalizadas.
							</p>
							<div className='flex flex-col sm:flex-row gap-4 justify-center'>
								<motion.button
									className='bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300'
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									Consulta gratuita
								</motion.button>
								<motion.button
									className='border border-border bg-background px-6 py-3 rounded-lg font-medium hover:border-primary/30 transition-all duration-300'
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									Ver casos de éxito
								</motion.button>
							</div>
						</div>
					</div>
				</ScrollReveal>
			</div>
		</section>
	)
}
