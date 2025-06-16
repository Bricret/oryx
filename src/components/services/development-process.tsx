'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	Zap,
	Shield,
	Target,
	Rocket,
	Code,
	TestTube,
	CheckCircle,
	ArrowRight,
	GitBranch,
	Database,
	Smartphone,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import ScrollReveal from '@/components/ui/scroll-reveal'

const processPhases = [
	{
		id: 'discovery',
		icon: <Target className='h-6 w-6' />,
		title: 'Descubrimiento',
		subtitle: 'Entendemos tu visión',
		duration: '1-2 semanas',
		description:
			'Análisis profundo de requerimientos, objetivos y contexto del proyecto',
		activities: [
			'Reunión de kickoff presencial/virtual',
			'Análisis de requerimientos funcionales',
			'Definición de objetivos y KPIs',
			'Investigación de usuarios y mercado',
			'Arquitectura de información',
			'Planificación de cronograma',
		],
		deliverables: [
			'Documento de requerimientos',
			'Wireframes y flujos de usuario',
			'Cronograma detallado',
			'Propuesta técnica',
		],
		color: 'from-blue-500 to-cyan-400',
	},
	{
		id: 'design',
		icon: <Code className='h-6 w-6' />,
		title: 'Diseño & Arquitectura',
		subtitle: 'Creamos la base sólida',
		duration: '2-3 semanas',
		description:
			'Diseño UX/UI y arquitectura técnica que garantiza escalabilidad y rendimiento',
		activities: [
			'Diseño de experiencia de usuario (UX)',
			'Creación de interfaces visuales (UI)',
			'Arquitectura de base de datos',
			'Definición de APIs y servicios',
			'Selección de tecnologías',
			'Prototipado interactivo',
		],
		deliverables: [
			'Diseños finales aprobados',
			'Prototipo interactivo',
			'Documentación técnica',
			'Guía de estilos',
		],
		color: 'from-emerald-500 to-green-400',
	},
	{
		id: 'development',
		icon: <Rocket className='h-6 w-6' />,
		title: 'Desarrollo',
		subtitle: 'Construimos tu solución',
		duration: '4-12 semanas',
		description:
			'Desarrollo ágil con entregas incrementales y comunicación constante',
		activities: [
			'Configuración del entorno de desarrollo',
			'Desarrollo por sprints de 2 semanas',
			'Integración continua (CI/CD)',
			'Reviews semanales de progreso',
			'Testing automatizado',
			'Optimización de rendimiento',
		],
		deliverables: [
			'Código fuente documentado',
			'Aplicación funcional',
			'Tests automatizados',
			'Documentación técnica',
		],
		color: 'from-violet-500 to-purple-400',
	},
	{
		id: 'testing',
		icon: <TestTube className='h-6 w-6' />,
		title: 'Testing & QA',
		subtitle: 'Garantizamos la calidad',
		duration: '1-2 semanas',
		description:
			'Pruebas exhaustivas para asegurar funcionamiento perfecto en todos los escenarios',
		activities: [
			'Testing funcional completo',
			'Pruebas de rendimiento',
			'Testing de seguridad',
			'Pruebas en múltiples dispositivos',
			'Testing de usabilidad',
			'Corrección de bugs',
		],
		deliverables: [
			'Reporte de testing',
			'Aplicación libre de bugs',
			'Documentación de pruebas',
			'Certificado de calidad',
		],
		color: 'from-amber-500 to-orange-400',
	},
	{
		id: 'deployment',
		icon: <Shield className='h-6 w-6' />,
		title: 'Despliegue',
		subtitle: 'Llevamos tu proyecto al mundo',
		duration: '1 semana',
		description:
			'Lanzamiento seguro y monitoreo continuo para garantizar estabilidad',
		activities: [
			'Configuración de servidores',
			'Despliegue en producción',
			'Configuración de dominios y SSL',
			'Monitoreo y alertas',
			'Capacitación del equipo',
			'Documentación de usuario',
		],
		deliverables: [
			'Aplicación en producción',
			'Manual de usuario',
			'Credenciales de acceso',
			'Plan de mantenimiento',
		],
		color: 'from-rose-500 to-pink-400',
	},
]

const robustPractices = [
	{
		icon: <GitBranch className='h-5 w-5' />,
		title: 'Control de versiones',
		description: 'Git con branching strategy y code reviews',
	},
	{
		icon: <TestTube className='h-5 w-5' />,
		title: 'Testing automatizado',
		description: 'Unit tests, integration tests y E2E testing',
	},
	{
		icon: <Database className='h-5 w-5' />,
		title: 'Backups automáticos',
		description: 'Respaldos diarios y recuperación ante desastres',
	},
	{
		icon: <Shield className='h-5 w-5' />,
		title: 'Seguridad integrada',
		description: 'Encriptación, autenticación y mejores prácticas',
	},
	{
		icon: <Zap className='h-5 w-5' />,
		title: 'CI/CD Pipeline',
		description: 'Integración y despliegue continuo automatizado',
	},
	{
		icon: <Smartphone className='h-5 w-5' />,
		title: 'Responsive design',
		description: 'Optimización para todos los dispositivos',
	},
]

const rapidDevelopment = [
	{
		metric: '50%',
		label: 'Más rápido',
		description: 'que el promedio de la industria',
	},
	{
		metric: '2 semanas',
		label: 'Sprints',
		description: 'entregas incrementales constantes',
	},
	{
		metric: '24h',
		label: 'Respuesta',
		description: 'tiempo máximo de respuesta',
	},
	{
		metric: '99.9%',
		label: 'Uptime',
		description: 'disponibilidad garantizada',
	},
]

export default function DevelopmentProcess() {
	const [activePhase, setActivePhase] = useState<string | null>(null)
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	})

	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '5%'])

	return (
		<section
			className='py-24 relative overflow-hidden w-full mx-auto'
			ref={ref}
		>
			<div className='absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background' />
			<motion.div
				className='absolute inset-0 pointer-events-none'
				style={{ y: backgroundY }}
			>
				{Array.from({ length: 12 }).map((_, i) => (
					<motion.div
						key={`sparkle-${i + 1}`}
						className='absolute rounded-full bg-primary/5'
						style={{
							width: Math.random() * 200 + 100,
							height: Math.random() * 200 + 100,
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
								<Zap className='h-4 w-4 inline mr-2' />
								Desarrollo Robusto y Rápido
							</motion.div>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold tracking-tight mb-4'>
							Proceso probado,{' '}
							<span className='relative inline-block'>
								<span className='relative z-10'>resultados garantizados</span>
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
							Nuestro proceso de desarrollo combina metodologías ágiles con las
							mejores prácticas de la industria, garantizando entregas rápidas
							sin comprometer la calidad.
						</p>
					</div>
				</ScrollReveal>

				{/* Process Timeline */}
				<div className='mb-16'>
					<div className='relative'>
						{/* Timeline line */}
						<div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-muted hidden lg:block'>
							<motion.div
								className='absolute top-0 left-0 w-full bg-primary'
								initial={{ height: '0%' }}
								whileInView={{ height: '100%' }}
								viewport={{ once: true }}
								transition={{ duration: 2, ease: 'easeInOut' }}
							/>
						</div>

						{processPhases.map((phase, index) => (
							<ScrollReveal
								key={phase.id}
								className='mb-12 last:mb-0'
								direction={index % 2 === 0 ? 'left' : 'right'}
								threshold={0.2}
							>
								<div
									className={`flex flex-col ${
										index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
									} items-center gap-8`}
								>
									{/* Timeline dot */}
									<motion.div
										className='relative z-10 rounded-full bg-background p-2 border-4 border-primary hidden lg:flex items-center justify-center'
										initial={{ scale: 0 }}
										whileInView={{ scale: 1 }}
										viewport={{ once: true }}
										transition={{
											type: 'spring',
											stiffness: 300,
											delay: index * 0.2,
										}}
									>
										<div
											className={cn(
												'rounded-full p-3 bg-gradient-to-br',
												phase.color,
											)}
										>
											<div className='text-white'>{phase.icon}</div>
										</div>
									</motion.div>

									{/* Content */}
									<div
										className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}
									>
										<motion.div
											className='cursor-pointer'
											onClick={() =>
												setActivePhase(
													activePhase === phase.id ? null : phase.id,
												)
											}
											whileHover={{ y: -5 }}
											transition={{
												type: 'spring',
												stiffness: 400,
												damping: 10,
											}}
										>
											<Card
												className={cn(
													'border-2 transition-all duration-300',
													activePhase === phase.id
														? 'border-primary shadow-xl'
														: 'border-border hover:border-primary/30',
												)}
											>
												<CardContent className='p-6'>
													{/* Mobile icon */}
													<div className='lg:hidden mb-4 flex justify-center'>
														<div
															className={cn(
																'rounded-full p-3 bg-gradient-to-br',
																phase.color,
															)}
														>
															<div className='text-white'>{phase.icon}</div>
														</div>
													</div>

													<div className='flex items-center justify-between mb-3'>
														<h3 className='text-xl font-bold'>{phase.title}</h3>
														<Badge variant='outline'>{phase.duration}</Badge>
													</div>
													<p className='text-primary font-medium mb-2'>
														{phase.subtitle}
													</p>
													<p className='text-muted-foreground mb-4'>
														{phase.description}
													</p>

													<Button
														variant='ghost'
														size='sm'
														className='text-primary hover:bg-primary/10'
													>
														{activePhase === phase.id
															? 'Ver menos'
															: 'Ver detalles'}
														<ArrowRight className='ml-1 h-3 w-3' />
													</Button>

													{/* Expanded content */}
													{activePhase === phase.id && (
														<motion.div
															initial={{ opacity: 0, height: 0 }}
															animate={{ opacity: 1, height: 'auto' }}
															exit={{ opacity: 0, height: 0 }}
															transition={{ duration: 0.3 }}
															className='mt-6 pt-6 border-t border-border'
														>
															<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
																<div>
																	<h5 className='font-semibold mb-3'>
																		Actividades principales
																	</h5>
																	<ul className='space-y-2'>
																		{phase.activities.map((activity, i) => (
																			<li
																				key={`activity-${activity}`}
																				className='flex items-start text-sm'
																			>
																				<CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0' />
																				{activity}
																			</li>
																		))}
																	</ul>
																</div>
																<div>
																	<h5 className='font-semibold mb-3'>
																		Entregables
																	</h5>
																	<ul className='space-y-2'>
																		{phase.deliverables.map(
																			(deliverable, i) => (
																				<li
																					key={`deliverable-${deliverable}`}
																					className='flex items-start text-sm'
																				>
																					<div className='w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0' />
																					{deliverable}
																				</li>
																			),
																		)}
																	</ul>
																</div>
															</div>
														</motion.div>
													)}
												</CardContent>
											</Card>
										</motion.div>
									</div>
								</div>
							</ScrollReveal>
						))}
					</div>
				</div>

				{/* Robust & Rapid Development */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
					{/* Robust Practices */}
					<ScrollReveal direction='left'>
						<div className='bg-background border border-border rounded-xl p-8'>
							<div className='flex items-center mb-6'>
								<Shield className='h-6 w-6 text-primary mr-3' />
								<h3 className='text-2xl font-bold'>Desarrollo Robusto</h3>
							</div>
							<p className='text-muted-foreground mb-6'>
								Implementamos las mejores prácticas de la industria para
								garantizar código de calidad, seguridad y mantenibilidad a largo
								plazo.
							</p>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
								{robustPractices.map((practice, index) => (
									<motion.div
										key={`practice-${practice.title}`}
										className='flex items-start p-3 rounded-lg border border-border hover:border-primary/30 transition-colors'
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.3, delay: index * 0.1 }}
									>
										<div className='w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0'>
											<div className='text-primary'>{practice.icon}</div>
										</div>
										<div>
											<h4 className='font-medium text-sm'>{practice.title}</h4>
											<p className='text-xs text-muted-foreground'>
												{practice.description}
											</p>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</ScrollReveal>

					{/* Rapid Development */}
					<ScrollReveal direction='right'>
						<div className='bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8'>
							<div className='flex items-center mb-6'>
								<Zap className='h-6 w-6 text-primary mr-3' />
								<h3 className='text-2xl font-bold'>Desarrollo Rápido</h3>
							</div>
							<p className='text-muted-foreground mb-6'>
								Metodologías ágiles y herramientas modernas nos permiten
								entregar resultados de calidad en tiempos récord.
							</p>
							<div className='grid grid-cols-2 gap-6'>
								{rapidDevelopment.map((metric, index) => (
									<motion.div
										key={`metric-${metric.metric}`}
										className='text-center'
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
									>
										<div className='text-3xl font-bold text-primary mb-1'>
											{metric.metric}
										</div>
										<div className='font-medium mb-1'>{metric.label}</div>
										<div className='text-xs text-muted-foreground'>
											{metric.description}
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</ScrollReveal>
				</div>

				{/* CTA */}
				<ScrollReveal>
					<div className='text-center'>
						<h3 className='text-2xl font-bold mb-4'>
							¿Listo para comenzar tu proyecto?
						</h3>
						<p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
							Nuestro equipo está preparado para convertir tu idea en una
							solución digital robusta y exitosa.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Button
								size='lg'
								className='bg-gradient-to-r from-primary to-primary/80'
							>
								Iniciar proyecto
							</Button>
							<Button size='lg' variant='outline'>
								Ver casos de éxito
							</Button>
						</div>
					</div>
				</ScrollReveal>
			</div>
		</section>
	)
}
