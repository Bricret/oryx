'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
	Globe,
	Smartphone,
	Database,
	ArrowRight,
	Check,
	Clock,
	Users,
	Zap,
	Shield,
	Target,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import ScrollReveal from '@/components/ui/scroll-reveal'

const services = [
	{
		id: 'website',
		icon: <Globe className='h-8 w-8' />,
		title: 'Desarrollo Web',
		subtitle: 'Sitios web que impactan y convierten',
		description:
			'Creamos sitios web modernos, responsivos y optimizados que no solo se ven increíbles, sino que también generan resultados reales para tu negocio.',
		color: 'from-blue-500 to-cyan-400',
		shadowColor: 'shadow-blue-500/20',
		features: [
			'Diseño responsivo y moderno',
			'Optimización SEO avanzada',
			'Velocidad de carga optimizada',
			'Integración con CMS',
			'E-commerce personalizado',
			'Analíticas y métricas',
		],
		benefits: [
			'Aumento del 40% en conversiones promedio',
			'Mejora del 60% en velocidad de carga',
			'Posicionamiento SEO mejorado',
			'Experiencia de usuario excepcional',
		],
		technologies: ['React', 'Next.js', 'WordPress', 'Shopify', 'Tailwind CSS'],
		timeline: '2-6 semanas',
		startingPrice: '$2,500',
		process: [
			{
				step: 'Consulta inicial',
				description: 'Entendemos tu visión y objetivos',
			},
			{
				step: 'Diseño UX/UI',
				description: 'Creamos wireframes y diseños visuales',
			},
			{
				step: 'Desarrollo',
				description: 'Programamos con las mejores prácticas',
			},
			{
				step: 'Testing',
				description: 'Pruebas exhaustivas en todos los dispositivos',
			},
			{ step: 'Lanzamiento', description: 'Despliegue y configuración final' },
		],
	},
	{
		id: 'systems',
		icon: <Database className='h-8 w-8' />,
		title: 'Sistemas Empresariales',
		subtitle: 'Automatización que transforma tu negocio',
		description:
			'Desarrollamos sistemas web personalizados que automatizan procesos, mejoran la eficiencia y proporcionan insights valiosos para la toma de decisiones.',
		color: 'from-emerald-500 to-green-400',
		shadowColor: 'shadow-emerald-500/20',
		features: [
			'CRM personalizado',
			'Gestión de inventarios',
			'Automatización de procesos',
			'Reportes en tiempo real',
			'Integraciones API',
			'Panel de administración',
		],
		benefits: [
			'Reducción del 50% en tareas manuales',
			'Mejora del 35% en productividad',
			'Datos centralizados y accesibles',
			'Procesos estandarizados',
		],
		technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker'],
		timeline: '6-16 semanas',
		startingPrice: '$8,000',
		process: [
			{
				step: 'Análisis de procesos',
				description: 'Mapeo detallado de flujos de trabajo',
			},
			{
				step: 'Arquitectura del sistema',
				description: 'Diseño de base de datos y APIs',
			},
			{
				step: 'Desarrollo modular',
				description: 'Construcción por módulos funcionales',
			},
			{ step: 'Integración', description: 'Conexión con sistemas existentes' },
			{
				step: 'Capacitación',
				description: 'Entrenamiento del equipo y documentación',
			},
		],
	},
	{
		id: 'mobile',
		icon: <Smartphone className='h-8 w-8' />,
		title: 'Aplicaciones Móviles',
		subtitle: 'Experiencias móviles que enamoran',
		description:
			'Desarrollamos aplicaciones móviles nativas y multiplataforma que ofrecen experiencias fluidas, intuitivas y que mantienen a tus usuarios comprometidos.',
		color: 'from-violet-500 to-purple-400',
		shadowColor: 'shadow-violet-500/20',
		features: [
			'Apps nativas iOS/Android',
			'Desarrollo multiplataforma',
			'Diseño UX centrado en móvil',
			'Notificaciones push',
			'Integración con APIs',
			'Publicación en stores',
		],
		benefits: [
			'Alcance del 95% de usuarios móviles',
			'Engagement 3x mayor que web',
			'Funcionalidades offline',
			'Experiencia nativa optimizada',
		],
		technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
		timeline: '8-20 semanas',
		startingPrice: '$12,000',
		process: [
			{
				step: 'Prototipado',
				description: 'Wireframes y flujos de usuario móvil',
			},
			{
				step: 'Diseño UI/UX',
				description: 'Interfaces optimizadas para móvil',
			},
			{
				step: 'Desarrollo nativo',
				description: 'Programación para cada plataforma',
			},
			{ step: 'Testing QA', description: 'Pruebas en dispositivos reales' },
			{
				step: 'Publicación',
				description: 'Lanzamiento en App Store y Google Play',
			},
		],
	},
]

const humanTouchPoints = [
	{
		icon: <Users className='h-5 w-5' />,
		title: 'Equipo dedicado',
		description: 'Un equipo específico asignado a tu proyecto desde el día uno',
	},
	{
		icon: <Target className='h-5 w-5' />,
		title: 'Comunicación directa',
		description:
			'Acceso directo a desarrolladores y diseñadores, sin intermediarios',
	},
	{
		icon: <Clock className='h-5 w-5' />,
		title: 'Updates regulares',
		description: 'Reuniones semanales y reportes de progreso en tiempo real',
	},
	{
		icon: <Shield className='h-5 w-5' />,
		title: 'Soporte continuo',
		description:
			'Acompañamiento personal durante todo el ciclo de vida del proyecto',
	},
]

export default function CoreServices() {
	const [activeService, setActiveService] = useState<string | null>(null)
	const [hoveredService, setHoveredService] = useState<string | null>(null)
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	})

	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%'])

	return (
		<section
			id='servicios'
			className='py-24 relative overflow-hidden w-full mx-auto'
			ref={ref}
		>
			<div className='absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background' />
			<motion.div
				className='absolute inset-0 pointer-events-none'
				style={{ y: backgroundY }}
			>
				{Array.from({ length: 15 }).map((_, i) => (
					<motion.div
						key={`sparkle-${i + 1}`}
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
								Nuestros Servicios
							</motion.div>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold tracking-tight mb-4'>
							Tres servicios principales,{' '}
							<span className='relative inline-block'>
								<span className='relative z-10'>infinitas posibilidades</span>
								<motion.span
									className='absolute bottom-2 left-0 h-3 bg-primary/20 w-full'
									initial={{ width: 0 }}
									whileInView={{ width: '100%' }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: 0.5 }}
								/>
							</span>
						</h2>
						<p className='text-muted-foreground text-lg max-w-3xl mx-auto'>
							Cada servicio está diseñado con un enfoque humano, donde la
							comunicación directa y el desarrollo robusto se combinan para
							crear soluciones que realmente transforman tu negocio.
						</p>
					</div>
				</ScrollReveal>

				{/* Services Grid */}
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16'>
					{services.map((service, index) => (
						<ScrollReveal
							key={service.id}
							delay={index * 0.1}
							threshold={0.1}
							className='h-full'
						>
							<motion.div
								className='h-full'
								onMouseEnter={() => setHoveredService(service.id)}
								onMouseLeave={() => setHoveredService(null)}
								onClick={() =>
									setActiveService(
										activeService === service.id ? null : service.id,
									)
								}
								whileHover={{ y: -5 }}
								transition={{ type: 'spring', stiffness: 400, damping: 10 }}
							>
								<Card
									className={cn(
										'h-full border-2 transition-all duration-300 cursor-pointer relative overflow-hidden',
										hoveredService === service.id ||
											activeService === service.id
											? 'border-primary/50 shadow-xl'
											: 'border-border hover:border-primary/30',
									)}
								>
									{/* Background gradient overlay */}
									<div
										className={cn(
											'absolute inset-0 opacity-0 transition-opacity duration-500',
											(hoveredService === service.id ||
												activeService === service.id) &&
												'opacity-100',
										)}
									>
										<div
											className={cn(
												'absolute inset-0 bg-gradient-to-br opacity-5',
												service.color,
											)}
										/>
									</div>

									<CardHeader className='relative z-10'>
										{/* Icon and Badge */}
										<div className='flex items-center justify-between mb-4'>
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
											</motion.div>
											<Badge variant='outline' className='bg-background/80'>
												Desde {service.startingPrice}
											</Badge>
										</div>

										<CardTitle className='text-2xl mb-2'>
											{service.title}
										</CardTitle>
										<p className='text-primary font-medium mb-3'>
											{service.subtitle}
										</p>
										<p className='text-muted-foreground'>
											{service.description}
										</p>
									</CardHeader>

									<CardContent className='relative z-10'>
										{/* Key Features */}
										<div className='mb-6'>
											<h4 className='font-semibold mb-3 flex items-center'>
												<Check className='h-4 w-4 text-primary mr-2' />
												Características principales
											</h4>
											<div className='grid grid-cols-1 gap-2'>
												{service.features.slice(0, 4).map((feature, i) => (
													<div
														key={`feature-${feature}`}
														className='flex items-center text-sm'
													>
														<div className='w-1.5 h-1.5 bg-primary rounded-full mr-2' />
														{feature}
													</div>
												))}
											</div>
										</div>

										{/* Timeline and CTA */}
										<div className='flex items-center justify-between'>
											<div className='flex items-center text-sm text-muted-foreground'>
												<Clock className='h-4 w-4 mr-1' />
												{service.timeline}
											</div>
											<Button
												variant='ghost'
												size='sm'
												className='text-primary hover:bg-primary/10'
												onClick={(e) => {
													e.stopPropagation()
													setActiveService(
														activeService === service.id ? null : service.id,
													)
												}}
											>
												{activeService === service.id ? 'Ver menos' : 'Ver más'}
												<ArrowRight className='ml-1 h-3 w-3' />
											</Button>
										</div>

										{/* Expanded Content */}
										{activeService === service.id && (
											<motion.div
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: 'auto' }}
												exit={{ opacity: 0, height: 0 }}
												transition={{ duration: 0.3 }}
												className='mt-6 pt-6 border-t border-border'
											>
												{/* Benefits */}
												<div className='mb-6'>
													<h5 className='font-semibold mb-3 text-green-600'>
														Beneficios comprobados
													</h5>
													<div className='space-y-2'>
														{service.benefits.map((benefit, i) => (
															<div
																key={`benefit-${benefit}`}
																className='flex items-center text-sm'
															>
																<Zap className='h-3 w-3 text-green-500 mr-2' />
																{benefit}
															</div>
														))}
													</div>
												</div>

												{/* Technologies */}
												<div className='mb-6'>
													<h5 className='font-semibold mb-3'>Tecnologías</h5>
													<div className='flex flex-wrap gap-2'>
														{service.technologies.map((tech, i) => (
															<Badge
																key={`tech-${tech}`}
																variant='outline'
																className='text-xs'
															>
																{tech}
															</Badge>
														))}
													</div>
												</div>

												{/* Process */}
												<div className='mb-6'>
													<h5 className='font-semibold mb-3'>
														Proceso de desarrollo
													</h5>
													<div className='space-y-3'>
														{service.process.map((step, i) => (
															<div
																key={`step-${step.step}`}
																className='flex items-start'
															>
																<div className='w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5'>
																	{i + 1}
																</div>
																<div>
																	<div className='font-medium text-sm'>
																		{step.step}
																	</div>
																	<div className='text-xs text-muted-foreground'>
																		{step.description}
																	</div>
																</div>
															</div>
														))}
													</div>
												</div>

												<Button className='w-full bg-gradient-to-r from-primary to-primary/80'>
													Solicitar cotización
												</Button>
											</motion.div>
										)}
									</CardContent>
								</Card>
							</motion.div>
						</ScrollReveal>
					))}
				</div>

				{/* Human Touch Highlights */}
				<ScrollReveal>
					<div className='bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12'>
						<div className='text-center mb-8'>
							<h3 className='text-2xl font-bold mb-4'>
								El toque humano que marca la diferencia
							</h3>
							<p className='text-muted-foreground max-w-2xl mx-auto'>
								En cada proyecto, garantizamos interacción directa con personas
								reales que entienden tu visión y se comprometen con tu éxito.
							</p>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
							{humanTouchPoints.map((point, index) => (
								<motion.div
									key={`touch-${point.title}`}
									className='text-center'
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
								>
									<div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
										<div className='text-primary'>{point.icon}</div>
									</div>
									<h4 className='font-semibold mb-2'>{point.title}</h4>
									<p className='text-sm text-muted-foreground'>
										{point.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</ScrollReveal>
			</div>
		</section>
	)
}
