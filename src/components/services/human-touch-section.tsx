'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
	Users,
	MessageSquare,
	Video,
	Phone,
	Calendar,
	Heart,
	Handshake,
	Eye,
	CheckCircle,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import ScrollReveal from '@/components/ui/scroll-reveal'
import { HoverBorderGradient } from '../ui/hover-border-gradient'

const humanTouchFeatures = [
	{
		icon: <Users className='h-6 w-6' />,
		title: 'Equipo Dedicado',
		description: 'Un equipo específico asignado exclusivamente a tu proyecto',
		details: [
			'Project Manager personal',
			'Desarrollador líder asignado',
			'Diseñador UX/UI dedicado',
			'Especialista en QA',
		],
		color: 'from-blue-500 to-cyan-400',
	},
	{
		icon: <MessageSquare className='h-6 w-6' />,
		title: 'Comunicación Directa',
		description: 'Acceso directo a tu equipo sin intermediarios ni bots',
		details: [
			'WhatsApp directo con el equipo',
			'Linear workspace compartido',
			'Email directo con desarrolladores',
			'Respuesta en menos de 4 horas',
		],
		color: 'from-emerald-500 to-green-400',
	},
	{
		icon: <Video className='h-6 w-6' />,
		title: 'Reuniones Regulares',
		description: 'Sesiones cara a cara para mantener la conexión humana',
		details: [
			'Kickoff meeting presencial/virtual',
			'Reviews semanales por videollamada',
			'Demos en vivo del progreso',
			'Sesiones de feedback interactivas',
		],
		color: 'from-violet-500 to-purple-400',
	},
	{
		icon: <Eye className='h-6 w-6' />,
		title: 'Transparencia Total',
		description: 'Visibilidad completa del proceso y progreso del proyecto',
		details: [
			'Link de acceso a la aplicación en construcción (si aplica)',
			'Dashboard de progreso en tiempo real',
			'Acceso al repositorio de código',
			'Reportes semanales detallados',
		],
		color: 'from-amber-500 to-orange-400',
	},
]

const communicationChannels = [
	{
		icon: <Phone className='h-5 w-5' />,
		channel: 'Llamadas',
		description: 'Disponibilidad telefónica en horario laboral',
		availability: 'Lun-Vie 9:00-18:00',
	},
	{
		icon: <MessageSquare className='h-5 w-5' />,
		channel: 'Chat directo',
		description: 'WhatsApp y Telegram para comunicación rápida',
		availability: 'Respuesta < 4 horas',
	},
	{
		icon: <Calendar className='h-5 w-5' />,
		channel: 'Reuniones',
		description:
			'Sesiones presenciales o virtuales regulares (Kickoff, Reviews, etc.)',
		availability: 'Semanales',
	},
]

export default function HumanTouchSection() {
	const [activeFeature, setActiveFeature] = useState<number | null>(null)
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	})

	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

	return (
		<section
			className='py-24 relative overflow-hidden bg-muted/30 w-full'
			ref={ref}
		>
			<motion.div
				className='absolute inset-0 pointer-events-none w-full'
				style={{ y: backgroundY }}
			>
				{Array.from({ length: 10 }).map((_, i) => {
					const baseSize = 100
					const sizeVariation = 100
					const width = baseSize + sizeVariation * (i % 3)
					const height = baseSize + sizeVariation * ((i + 1) % 3)
					const top = (i * 10) % 100
					const left = ((i + 5) * 10) % 100

					return (
						<motion.div
							key={`sparkle-${i + 1}`}
							className='absolute rounded-full bg-primary/5'
							style={{
								width,
								height,
								top: `${top}%`,
								left: `${left}%`,
							}}
						/>
					)
				})}
			</motion.div>

			<div className='container px-4 md:px-6 relative z-10 mx-auto max-w-7xl'>
				<ScrollReveal>
					<div className='text-center max-w-4xl mx-auto mb-16'>
						<div className='inline-block'>
							<HoverBorderGradient
								containerClassName='rounded-full inline-flex items-center mb-8'
								className='bg-secondary-background text-black/80 flex items-center space-x-2'
							>
								<Heart className='h-4 w-4 inline mr-2' />
								El Toque Humano
							</HoverBorderGradient>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold tracking-tight mb-4'>
							Personas reales,{' '}
							<span className='relative inline-block'>
								<span className='relative z-10'>resultados reales</span>
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
							En un mundo cada vez más automatizado, nosotros creemos en el
							poder de la conexión humana. Cada proyecto cuenta con personas
							reales que se preocupan por tu éxito.
						</p>
					</div>
				</ScrollReveal>

				{/* Human Touch Features */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
					{humanTouchFeatures.map((feature, index) => (
						<ScrollReveal
							key={`feature-${
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								index
							}`}
							delay={index * 0.1}
							threshold={0.1}
							className='h-full'
						>
							<motion.div
								className='h-full'
								onMouseEnter={() => setActiveFeature(index)}
								onMouseLeave={() => setActiveFeature(null)}
								whileHover={{ y: -5 }}
								transition={{ type: 'spring', stiffness: 400, damping: 10 }}
							>
								<Card
									className={cn(
										'h-full border-2 transition-all duration-300 relative overflow-hidden',
										activeFeature === index
											? 'border-primary/50 shadow-xl'
											: 'border-border hover:border-primary/30',
									)}
								>
									{/* Background gradient overlay */}
									<div
										className={cn(
											'absolute inset-0 opacity-0 transition-opacity duration-500',
											activeFeature === index && 'opacity-100',
										)}
									>
										<div
											className={cn(
												'absolute inset-0 bg-gradient-to-br opacity-5',
												feature.color,
											)}
										/>
									</div>

									<CardContent className='p-6 relative z-10'>
										{/* Icon */}
										<motion.div
											className={cn(
												'relative w-14 h-14 rounded-lg flex items-center justify-center mb-4',
												'bg-gradient-to-br',
												feature.color,
											)}
											whileHover={{ scale: 1.05, rotate: 5 }}
											transition={{
												type: 'spring',
												stiffness: 400,
												damping: 10,
											}}
										>
											<div className='text-white'>{feature.icon}</div>
										</motion.div>

										<h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
										<p className='text-muted-foreground mb-4'>
											{feature.description}
										</p>

										{/* Details */}
										<div className='space-y-2'>
											{feature.details.map((detail, i) => (
												<motion.div
													key={`detail-${index}-${
														// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
														i
													}`}
													className='flex items-center text-sm'
													initial={{ opacity: 0, x: -10 }}
													whileInView={{ opacity: 1, x: 0 }}
													viewport={{ once: true }}
													transition={{ delay: i * 0.1 + 0.2 }}
												>
													<CheckCircle className='h-4 w-4 text-primary mr-2 flex-shrink-0' />
													{detail}
												</motion.div>
											))}
										</div>
									</CardContent>
								</Card>
							</motion.div>
						</ScrollReveal>
					))}
				</div>

				{/* Communication Channels */}
				<ScrollReveal>
					<div className='bg-background border border-border rounded-xl p-8 mb-16'>
						<div className='text-center mb-8'>
							<h3 className='text-2xl font-bold mb-4 flex items-center justify-center'>
								<Handshake className='h-6 w-6 text-primary mr-2' />
								Canales de comunicación abiertos
							</h3>
							<p className='text-muted-foreground max-w-2xl mx-auto'>
								Múltiples formas de mantenerte conectado con tu equipo durante
								todo el proyecto
							</p>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
							{communicationChannels.map((channel, index) => (
								<motion.div
									key={`channel-${
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										index
									}`}
									className='text-center p-4 rounded-lg border border-border hover:border-primary/30 transition-colors'
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									whileHover={{ y: -5 }}
								>
									<div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3'>
										<div className='text-primary'>{channel.icon}</div>
									</div>
									<h4 className='font-semibold mb-2'>{channel.channel}</h4>
									<p className='text-sm text-muted-foreground mb-2'>
										{channel.description}
									</p>
									<Badge variant='outline' className='text-xs'>
										{channel.availability}
									</Badge>
								</motion.div>
							))}
						</div>
					</div>
				</ScrollReveal>
			</div>
		</section>
	)
}
