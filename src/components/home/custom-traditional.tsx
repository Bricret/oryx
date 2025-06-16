'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
	Zap,
	Settings,
	Link2,
	Shield,
	TrendingUp,
	Users,
	ArrowRight,
	Check,
	X,
	Sparkles,
	Target,
	Gauge,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import ScrollReveal from '@/components/ui/scroll-reveal'
import { useDictionary } from '@/context/LanguageContext'
import { HoverBorderGradient } from '../ui/hover-border-gradient'
import Link from 'next/link'

export default function CustomVsTraditional() {
	const dictionary = useDictionary()
	const [activeAdvantage, setActiveAdvantage] = useState<number | null>(null)
	const [showComparison, setShowComparison] = useState(false)
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	})

	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

	const advantages = [
		{
			icon: <Settings className='h-8 w-8' />,
			title:
				dictionary.customTraditional?.advantages?.flexibility?.title ||
				'Flexibilidad Total',
			description:
				dictionary.customTraditional?.advantages?.flexibility?.description ||
				'Adapta cada función a tus procesos específicos sin limitaciones de plantillas predefinidas.',
			traditional:
				dictionary.customTraditional?.advantages?.flexibility?.traditional ||
				'Funciones limitadas por plantillas rígidas',
			custom:
				dictionary.customTraditional?.advantages?.flexibility?.custom ||
				'Diseño completamente personalizable según tus necesidades',
			color: 'from-blue-500 to-cyan-400',
			shadowColor: 'shadow-blue-500/20',
		},
		{
			icon: <Target className='h-8 w-8' />,
			title:
				dictionary.customTraditional?.advantages?.functionality?.title ||
				'Funcionalidad a Medida',
			description:
				dictionary.customTraditional?.advantages?.functionality?.description ||
				'Cada característica está diseñada específicamente para optimizar tu flujo de trabajo único.',
			traditional:
				dictionary.customTraditional?.advantages?.functionality?.traditional ||
				'Características genéricas que no se ajustan',
			custom:
				dictionary.customTraditional?.advantages?.functionality?.custom ||
				'Funciones diseñadas específicamente para tu industria',
			color: 'from-emerald-500 to-green-400',
			shadowColor: 'shadow-emerald-500/20',
		},
		{
			icon: <Link2 className='h-8 w-8' />,
			title:
				dictionary.customTraditional?.advantages?.integration?.title ||
				'Integración Perfecta',
			description:
				dictionary.customTraditional?.advantages?.integration?.description ||
				'Conecta sin problemas con todas tus herramientas existentes y sistemas empresariales.',
			traditional:
				dictionary.customTraditional?.advantages?.integration?.traditional ||
				'Integraciones limitadas con costos adicionales',
			custom:
				dictionary.customTraditional?.advantages?.integration?.custom ||
				'Integración nativa con todos tus sistemas actuales',
			color: 'from-violet-500 to-purple-400',
			shadowColor: 'shadow-violet-500/20',
		},
		{
			icon: <Shield className='h-8 w-8' />,
			title:
				dictionary.customTraditional?.advantages?.dataControl?.title ||
				'Control Total de Datos',
			description:
				dictionary.customTraditional?.advantages?.dataControl?.description ||
				'Mantén el control absoluto sobre tu información sin depender de servidores externos.',
			traditional:
				dictionary.customTraditional?.advantages?.dataControl?.traditional ||
				'Datos almacenados en servidores de terceros',
			custom:
				dictionary.customTraditional?.advantages?.dataControl?.custom ||
				'Control completo sobre ubicación y seguridad de datos',
			color: 'from-amber-500 to-orange-400',
			shadowColor: 'shadow-amber-500/20',
		},
		{
			icon: <Gauge className='h-8 w-8' />,
			title:
				dictionary.customTraditional?.advantages?.performance?.title ||
				'Rendimiento Optimizado',
			description:
				dictionary.customTraditional?.advantages?.performance?.description ||
				'Sistema ligero y rápido, optimizado específicamente para tus operaciones.',
			traditional:
				dictionary.customTraditional?.advantages?.performance?.traditional ||
				'Funciones innecesarias que ralentizan el sistema',
			custom:
				dictionary.customTraditional?.advantages?.performance?.custom ||
				'Código optimizado solo con lo que realmente necesitas',
			color: 'from-rose-500 to-pink-400',
			shadowColor: 'shadow-rose-500/20',
		},
		{
			icon: <TrendingUp className='h-8 w-8' />,
			title:
				dictionary.customTraditional?.advantages?.scalability?.title ||
				'Escalabilidad Inteligente',
			description:
				dictionary.customTraditional?.advantages?.scalability?.description ||
				'Crece y evoluciona junto con tu negocio sin restricciones de licencias.',
			traditional:
				dictionary.customTraditional?.advantages?.scalability?.traditional ||
				'Costos crecientes por usuarios y funciones adicionales',
			custom:
				dictionary.customTraditional?.advantages?.scalability?.custom ||
				'Escalabilidad sin límites ni costos ocultos',
			color: 'from-indigo-500 to-blue-400',
			shadowColor: 'shadow-indigo-500/20',
		},
	]

	const comparisonData = [
		{
			feature:
				dictionary.customTraditional?.comparison?.customization?.feature ||
				'Personalización',
			traditional:
				dictionary.customTraditional?.comparison?.customization?.traditional ||
				'Limitada',
			custom:
				dictionary.customTraditional?.comparison?.customization?.custom ||
				'Ilimitada',
			traditionalIcon: <X className='h-4 w-4 text-red-500' />,
			customIcon: <Check className='h-4 w-4 text-green-500' />,
		},
		{
			feature:
				dictionary.customTraditional?.comparison?.implementation?.feature ||
				'Tiempo de implementación',
			traditional:
				dictionary.customTraditional?.comparison?.implementation?.traditional ||
				'Configuración estándar',
			custom:
				dictionary.customTraditional?.comparison?.implementation?.custom ||
				'Desarrollo personalizado',
			traditionalIcon: <Check className='h-4 w-4 text-green-500' />,
			customIcon: <Check className='h-4 w-4 text-green-500' />,
		},
		{
			feature:
				dictionary.customTraditional?.comparison?.costs?.feature ||
				'Costos a largo plazo',
			traditional:
				dictionary.customTraditional?.comparison?.costs?.traditional ||
				'Licencias mensuales crecientes',
			custom:
				dictionary.customTraditional?.comparison?.costs?.custom ||
				'Inversión única',
			traditionalIcon: <X className='h-4 w-4 text-red-500' />,
			customIcon: <Check className='h-4 w-4 text-green-500' />,
		},
		{
			feature:
				dictionary.customTraditional?.comparison?.dataControl?.feature ||
				'Control de datos',
			traditional:
				dictionary.customTraditional?.comparison?.dataControl?.traditional ||
				'Limitado',
			custom:
				dictionary.customTraditional?.comparison?.dataControl?.custom ||
				'Total',
			traditionalIcon: <X className='h-4 w-4 text-red-500' />,
			customIcon: <Check className='h-4 w-4 text-green-500' />,
		},
		{
			feature:
				dictionary.customTraditional?.comparison?.integrations?.feature ||
				'Integraciones',
			traditional:
				dictionary.customTraditional?.comparison?.integrations?.traditional ||
				'APIs limitadas',
			custom:
				dictionary.customTraditional?.comparison?.integrations?.custom ||
				'Integración nativa',
			traditionalIcon: <X className='h-4 w-4 text-red-500' />,
			customIcon: <Check className='h-4 w-4 text-green-500' />,
		},
	]

	return (
		<section
			className='py-24 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background'
			ref={ref}
		>
			{/* Animated background */}
			<motion.div
				className='absolute inset-0 pointer-events-none'
				style={{ y: backgroundY, opacity }}
			>
				{Array.from({ length: 15 }).map((_, index) => {
					const id = `background-circle-${index}`
					const width = 200 + index * 20
					const height = 200 + index * 20
					const top = (index * 7) % 100
					const left = (index * 13) % 100
					const opacity = 0.1 + index * 0.03

					return (
						<motion.div
							key={id}
							className='absolute rounded-full bg-primary/5'
							style={{
								width,
								height,
								top: `${top}%`,
								left: `${left}%`,
								opacity,
							}}
						/>
					)
				})}
			</motion.div>

			<div className='container px-4 md:px-6 relative z-10 mx-auto'>
				<ScrollReveal>
					<div className='text-center mb-16'>
						<div className='inline-block'>
							<HoverBorderGradient
								containerClassName='rounded-full inline-flex items-center mb-8'
								className='bg-secondary-background text-black/80 flex items-center space-x-2'
							>
								<Sparkles className='w-6 h-6' />
								<span className='text-sm font-medium'>
									{dictionary.customTraditional?.banner ||
										'Sistema Personalizado vs CRM Tradicional'}
								</span>
							</HoverBorderGradient>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold tracking-tight mb-4'>
							{dictionary.customTraditional?.title?.first ||
								'¿Por qué elegir un'}{' '}
							<span className='relative inline-block'>
								<span className='relative z-10'>
									{dictionary.customTraditional?.title?.highlight ||
										'sistema personalizado'}
								</span>
								<motion.span
									className='absolute bottom-2 left-0 h-3 bg-primary/20 w-full'
									initial={{ width: 0 }}
									whileInView={{ width: '100%' }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: 0.5 }}
								/>
							</span>
							{dictionary.customTraditional?.title?.last || '?'}
						</h2>
						<p className='text-muted-foreground text-lg max-w-3xl mx-auto'>
							{dictionary.customTraditional?.subtitle ||
								'Descubre las ventajas competitivas que un sistema desarrollado a medida puede ofrecer a tu negocio frente a las soluciones tradicionales del mercado.'}
						</p>
					</div>
				</ScrollReveal>

				{/* Toggle between advantages and comparison */}
				<div className='flex justify-center mb-12'>
					<div className='bg-background border border-border rounded-lg p-1 inline-flex'>
						<Button
							variant={!showComparison ? 'default' : 'ghost'}
							onClick={() => setShowComparison(false)}
							className='rounded-md'
						>
							{dictionary.customTraditional?.tabs?.advantages ||
								'Ventajas Clave'}
						</Button>
						<Button
							variant={showComparison ? 'default' : 'ghost'}
							onClick={() => setShowComparison(true)}
							className='rounded-md'
						>
							{dictionary.customTraditional?.tabs?.comparison ||
								'Comparación Directa'}
						</Button>
					</div>
				</div>

				<AnimatePresence mode='wait'>
					{!showComparison ? (
						<motion.div
							key='advantages'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.5 }}
						>
							{/* Advantages Grid */}
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
								{advantages.map((advantage, index) => (
									<ScrollReveal
										key={`advantage-${advantage.title}`}
										delay={index * 0.1}
										threshold={0.1}
										className='h-full'
									>
										<motion.div
											className='h-full'
											onMouseEnter={() => setActiveAdvantage(index)}
											onMouseLeave={() => setActiveAdvantage(null)}
											whileHover={{ y: -5 }}
											transition={{
												type: 'spring',
												stiffness: 400,
												damping: 10,
											}}
										>
											<Card
												className={cn(
													'h-full border-2 transition-all duration-300 relative overflow-hidden',
													activeAdvantage === index
														? 'border-primary/50 shadow-xl'
														: 'border-border hover:border-primary/30',
												)}
											>
												{/* Background gradient overlay */}
												<div
													className={cn(
														'absolute inset-0 opacity-0 transition-opacity duration-500',
														activeAdvantage === index && 'opacity-100',
													)}
												>
													<div
														className={cn(
															'absolute inset-0 bg-gradient-to-br opacity-5',
															advantage.color,
														)}
													/>
												</div>

												<CardContent className='p-6 relative z-10'>
													{/* Icon */}
													<motion.div
														className={cn(
															'relative w-16 h-16 rounded-lg flex items-center justify-center mb-4',
															'bg-gradient-to-br',
															advantage.color,
															advantage.shadowColor,
														)}
														whileHover={{ scale: 1.05, rotate: 5 }}
														transition={{
															type: 'spring',
															stiffness: 400,
															damping: 10,
														}}
													>
														<div className='text-white'>{advantage.icon}</div>
													</motion.div>

													<h3 className='text-xl font-bold mb-3'>
														{advantage.title}
													</h3>
													<p className='text-muted-foreground mb-6'>
														{advantage.description}
													</p>

													{/* Comparison */}
													<div className='space-y-3'>
														<div className='flex items-start'>
															<X className='h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0' />
															<span className='text-sm text-muted-foreground'>
																{advantage.traditional}
															</span>
														</div>
														<div className='flex items-start'>
															<Check className='h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0' />
															<span className='text-sm font-medium'>
																{advantage.custom}
															</span>
														</div>
													</div>
												</CardContent>
											</Card>
										</motion.div>
									</ScrollReveal>
								))}
							</div>
						</motion.div>
					) : (
						<motion.div
							key='comparison'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.5 }}
						>
							{/* Comparison Table */}
							<div className='bg-background border border-border rounded-xl overflow-hidden shadow-lg'>
								<div className='overflow-x-auto'>
									<table className='w-full'>
										<thead className='bg-muted/50'>
											<tr>
												<th className='py-4 px-6 text-left font-semibold'>
													{dictionary.customTraditional?.table?.feature ||
														'Característica'}
												</th>
												<th className='py-4 px-6 text-center font-semibold'>
													{dictionary.customTraditional?.table?.traditional ||
														'CRM Tradicional'}
												</th>
												<th className='py-4 px-6 text-center font-semibold bg-primary/10'>
													<div className='flex items-center justify-center'>
														<Sparkles className='h-4 w-4 text-primary mr-2' />
														{dictionary.customTraditional?.table?.custom ||
															'Sistema Personalizado'}
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											{comparisonData.map((item, index) => (
												<motion.tr
													key={`comparison-${item.feature}`}
													className={cn(
														'border-b border-border transition-colors',
														index % 2 === 0 ? 'bg-muted/20' : 'bg-background',
													)}
													initial={{ opacity: 0, x: -20 }}
													whileInView={{ opacity: 1, x: 0 }}
													viewport={{ once: true }}
													transition={{ duration: 0.3, delay: index * 0.1 }}
												>
													<td className='py-4 px-6 font-medium'>
														{item.feature}
													</td>
													<td className='py-4 px-6 text-center'>
														<div className='flex items-center justify-center space-x-2'>
															{item.traditionalIcon}
															<span className='text-sm'>
																{item.traditional}
															</span>
														</div>
													</td>
													<td className='py-4 px-6 text-center bg-primary/5'>
														<div className='flex items-center justify-center space-x-2'>
															{item.customIcon}
															<span className='text-sm font-medium'>
																{item.custom}
															</span>
														</div>
													</td>
												</motion.tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Call to Action */}
				<ScrollReveal>
					<div className='text-center mt-16'>
						<motion.div
							className='bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
						>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
								<div className='text-left'>
									<Badge
										variant='outline'
										className='mb-4 bg-primary/10 border-primary/30'
									>
										<Users className='h-3 w-3 mr-1' />
										{dictionary.customTraditional?.cta?.badge ||
											'Más de 50 empresas confían en nosotros'}
									</Badge>
									<h3 className='text-2xl font-bold mb-4'>
										{dictionary.customTraditional?.cta?.title ||
											'¿Listo para un sistema que se adapte a ti?'}
									</h3>
									<p className='text-muted-foreground mb-6'>
										{dictionary.customTraditional?.cta?.description ||
											'Descubre cómo un sistema personalizado puede transformar la eficiencia de tu negocio y reducir costos operativos hasta en un 40%.'}
									</p>
									<div className='flex flex-col sm:flex-row gap-4'>
										<Button className='bg-gradient-to-r from-primary to-primary/80 gap-2'>
											{dictionary.customTraditional?.cta?.primaryButton ||
												'Solicitar demo gratuita'}{' '}
											<ArrowRight className='h-4 w-4' />
										</Button>
										<Button asChild variant='outline' className='mr-4'>
											<Link href='/services' className='gap-2'>
												{dictionary.customTraditional?.cta?.secondaryButton ||
													'Ver casos de éxito'}
												<ArrowRight className='h-4 w-4' />
											</Link>
										</Button>
									</div>
								</div>
								<div className='space-y-4'>
									<div className='bg-background rounded-lg p-4 border border-border'>
										<div className='flex items-center mb-2'>
											<Zap className='h-5 w-5 text-primary mr-2' />
											<span className='font-medium'>
												{dictionary.customTraditional?.cta?.features
													?.implementation?.title || 'Implementación rápida'}
											</span>
										</div>
										<p className='text-sm text-muted-foreground'>
											{dictionary.customTraditional?.cta?.features
												?.implementation?.description ||
												'Sistemas funcionales en 4-8 semanas vs 6+ meses de configuración tradicional'}
										</p>
									</div>
									<div className='bg-background rounded-lg p-4 border border-border'>
										<div className='flex items-center mb-2'>
											<TrendingUp className='h-5 w-5 text-primary mr-2' />
											<span className='font-medium'>
												{dictionary.customTraditional?.cta?.features?.roi
													?.title || 'ROI comprobado'}
											</span>
										</div>
										<p className='text-sm text-muted-foreground'>
											{dictionary.customTraditional?.cta?.features?.roi
												?.description ||
												'Retorno de inversión promedio del 300% en el primer año de uso'}
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</ScrollReveal>
			</div>
		</section>
	)
}
