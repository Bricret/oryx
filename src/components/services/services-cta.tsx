'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
	ArrowRight,
	Calendar,
	MessageSquare,
	Phone,
	Heart,
	Users,
	Zap,
	Shield,
	CheckCircle,
} from 'lucide-react'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/scroll-reveal'

const guarantees = [
	{
		icon: <Heart className='h-5 w-5' />,
		title: 'Toque humano garantizado',
		description: 'Interacción directa con personas reales en cada etapa',
	},
	{
		icon: <Zap className='h-5 w-5' />,
		title: 'Desarrollo ágil',
		description: 'Entregas rápidas sin comprometer la calidad',
	},
	{
		icon: <Shield className='h-5 w-5' />,
		title: 'Código robusto',
		description: 'Mejores prácticas y arquitectura escalable',
	},
	{
		icon: <Users className='h-5 w-5' />,
		title: 'Equipo dedicado',
		description: 'Un equipo específico asignado a tu proyecto',
	},
]

const contactOptions = [
	{
		icon: <Calendar className='h-6 w-6' />,
		title: 'Agendar consulta',
		description: 'Reunión de 30 min para discutir tu proyecto',
		action: 'Agendar ahora',
		highlight: true,
	},
	{
		icon: <MessageSquare className='h-6 w-6' />,
		title: 'Chat directo',
		description: 'Habla con nuestro equipo por WhatsApp',
		action: 'Iniciar chat',
		highlight: false,
	},
	{
		icon: <Phone className='h-6 w-6' />,
		title: 'Llamada rápida',
		description: 'Conversación telefónica de 15 minutos',
		action: 'Llamar ahora',
		highlight: false,
	},
]

export default function ServicesCTA() {
	return (
		<section className='py-24 relative overflow-hidden w-full mx-auto'>
			<div className='absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background' />

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
								<Heart className='h-4 w-4 inline mr-2' />
								Comienza tu proyecto hoy
							</motion.div>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold tracking-tight mb-4'>
							¿Listo para trabajar con{' '}
							<span className='relative inline-block'>
								<span className='relative z-10'>personas reales</span>
								<motion.span
									className='absolute bottom-2 left-0 h-3 bg-primary/20 w-full'
									initial={{ width: 0 }}
									whileInView={{ width: '100%' }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: 0.5 }}
								/>
							</span>
							?
						</h2>
						<p className='text-muted-foreground text-lg max-w-3xl mx-auto'>
							Nuestro equipo está preparado para convertir tu idea en una
							solución digital exitosa. Comienza con una consulta gratuita y
							descubre la diferencia del toque humano.
						</p>
					</div>
				</ScrollReveal>

				{/* Main CTA Card */}
				<ScrollReveal>
					<div className='max-w-5xl mx-auto mb-16'>
						<Card className='border-2 border-primary/20 shadow-2xl overflow-hidden'>
							<div className='bg-gradient-to-br from-primary/10 to-primary/5'>
								<CardContent className='p-8 md:p-12'>
									<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
										<div>
											<Badge className='mb-4 bg-primary/10 text-primary border-primary/20'>
												<CheckCircle className='h-3 w-3 mr-1' />
												Consulta gratuita incluida
											</Badge>
											<h3 className='text-3xl font-bold mb-4'>
												Comienza tu proyecto con una consulta gratuita
											</h3>
											<p className='text-muted-foreground mb-6 text-lg'>
												En 30 minutos analizaremos tu proyecto, te daremos
												recomendaciones personalizadas y conocerás al equipo que
												trabajará contigo.
											</p>

											<div className='space-y-3 mb-8'>
												<div className='flex items-center'>
													<CheckCircle className='h-5 w-5 text-green-500 mr-3' />
													<span>Análisis gratuito de requerimientos</span>
												</div>
												<div className='flex items-center'>
													<CheckCircle className='h-5 w-5 text-green-500 mr-3' />
													<span>Propuesta técnica personalizada</span>
												</div>
												<div className='flex items-center'>
													<CheckCircle className='h-5 w-5 text-green-500 mr-3' />
													<span>Conoce a tu equipo de desarrollo</span>
												</div>
												<div className='flex items-center'>
													<CheckCircle className='h-5 w-5 text-green-500 mr-3' />
													<span>Cronograma y presupuesto estimado</span>
												</div>
											</div>

											<Button
												size='lg'
												className='bg-gradient-to-r from-primary to-primary/80 text-lg px-8 py-6'
												asChild
											>
												<Link href='/contacto'>
													Agendar consulta gratuita{' '}
													<ArrowRight className='ml-2 h-5 w-5' />
												</Link>
											</Button>
										</div>

										<div className='space-y-4'>
											{guarantees.map((guarantee, index) => (
												<motion.div
													key={`guarantee-${guarantee.title}`}
													className='bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-border'
													initial={{ opacity: 0, x: 20 }}
													whileInView={{ opacity: 1, x: 0 }}
													viewport={{ once: true }}
													transition={{ duration: 0.5, delay: index * 0.1 }}
												>
													<div className='flex items-center'>
														<div className='w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4'>
															<div className='text-primary'>
																{guarantee.icon}
															</div>
														</div>
														<div>
															<h4 className='font-semibold'>
																{guarantee.title}
															</h4>
															<p className='text-sm text-muted-foreground'>
																{guarantee.description}
															</p>
														</div>
													</div>
												</motion.div>
											))}
										</div>
									</div>
								</CardContent>
							</div>
						</Card>
					</div>
				</ScrollReveal>

				{/* Contact Options */}
				<ScrollReveal>
					<div className='text-center mb-8'>
						<h3 className='text-2xl font-bold mb-4'>
							Múltiples formas de contactarnos
						</h3>
						<p className='text-muted-foreground'>
							Elige la opción que más te convenga para comenzar la conversación
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
						{contactOptions.map((option, index) => (
							<motion.div
								key={`contact-${option.title}`}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								whileHover={{ y: -5 }}
							>
								<Card
									className={`h-full border-2 transition-all duration-300 cursor-pointer ${
										option.highlight
											? 'border-primary/50 bg-primary/5'
											: 'border-border hover:border-primary/30'
									}`}
								>
									<CardContent className='p-6 text-center'>
										<div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
											<div className='text-primary'>{option.icon}</div>
										</div>
										<h4 className='font-semibold text-lg mb-2'>
											{option.title}
										</h4>
										<p className='text-muted-foreground text-sm mb-4'>
											{option.description}
										</p>
										<Button
											variant={option.highlight ? 'default' : 'outline'}
											className='w-full'
										>
											{option.action}
										</Button>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</ScrollReveal>

				{/* Final Message */}
				<ScrollReveal>
					<div className='text-center mt-16'>
						<div className='max-w-2xl mx-auto'>
							<p className='text-muted-foreground mb-4'>
								<strong>¿Tienes preguntas específicas?</strong> Nuestro equipo
								está disponible para resolver cualquier duda sobre nuestros
								servicios, procesos o tecnologías.
							</p>
							<div className='flex flex-col sm:flex-row gap-4 justify-center'>
								<Button variant='ghost' asChild>
									<Link href='/costos'>Ver precios y paquetes</Link>
								</Button>
								<Button variant='ghost' asChild>
									<Link href='#testimonials'>Leer más testimonios</Link>
								</Button>
							</div>
						</div>
					</div>
				</ScrollReveal>
			</div>
		</section>
	)
}
