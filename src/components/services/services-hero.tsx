'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Zap, Heart } from 'lucide-react'
import Link from 'next/link'

export default function ServicesHero() {
	return (
		<section className='py-20 relative overflow-hidden w-full'>
			<div className='absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background mx-auto w-full' />

			{/* Animated background elements */}
			<div className='absolute inset-0 overflow-hidden'>
				{Array.from({ length: 20 }).map((_, i) => (
					<motion.div
						key={`sparkle-${i + 1}`}
						className='absolute rounded-full bg-primary/5'
						initial={{
							width: Math.random() * 100 + 50,
							height: Math.random() * 100 + 50,
							x: Math.random() * window.innerWidth,
							y: Math.random() * window.innerHeight,
							opacity: 0,
						}}
						animate={{
							x: [
								Math.random() * window.innerWidth,
								Math.random() * window.innerWidth,
							],
							y: [
								Math.random() * window.innerHeight,
								Math.random() * window.innerHeight,
							],
							opacity: [0, 0.3, 0],
						}}
						transition={{
							duration: Math.random() * 10 + 10,
							repeat: Number.POSITIVE_INFINITY,
							ease: 'easeInOut',
						}}
					/>
				))}
			</div>

			<div className='container px-4 md:px-6 relative z-10 mx-auto'>
				<motion.div
					className='text-center max-w-4xl mx-auto'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<div className='inline-block'>
						<motion.div
							className='text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full mb-4 inline-block'
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<Heart className='h-4 w-4 inline mr-2' />
							Desarrollo con Toque Humano
						</motion.div>
					</div>

					<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6'>
						Soluciones digitales que{' '}
						<span className='relative inline-block'>
							<span className='relative z-10 text-primary'>conectan</span>
							<motion.span
								className='absolute bottom-2 left-0 h-3 bg-primary/20 w-full'
								initial={{ width: 0 }}
								animate={{ width: '100%' }}
								transition={{ duration: 0.8, delay: 0.5 }}
							/>
						</span>{' '}
						con personas reales
					</h1>

					<p className='text-xl text-muted-foreground mb-8 max-w-3xl mx-auto'>
						Desarrollamos sitios web, sistemas empresariales y aplicaciones
						móviles con un enfoque único: cada proyecto cuenta con dedicación
						personal y comunicación directa en cada etapa.
					</p>

					<div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-12'>
						<motion.div
							className='flex items-center bg-muted/50 rounded-full px-6 py-3'
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							<Users className='h-5 w-5 text-primary mr-2' />
							<span className='text-sm font-medium'>
								Equipo dedicado por proyecto
							</span>
						</motion.div>
						<motion.div
							className='flex items-center bg-muted/50 rounded-full px-6 py-3'
							initial={{ opacity: 0, x: 0 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
						>
							<Zap className='h-5 w-5 text-primary mr-2' />
							<span className='text-sm font-medium'>
								Desarrollo ágil y robusto
							</span>
						</motion.div>
						<motion.div
							className='flex items-center bg-muted/50 rounded-full px-6 py-3'
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.6 }}
						>
							<Heart className='h-5 w-5 text-primary mr-2' />
							<span className='text-sm font-medium'>
								Comunicación transparente
							</span>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7, duration: 0.8 }}
						className='flex flex-col sm:flex-row gap-4 justify-center'
					>
						<Button
							size='lg'
							asChild
							className='bg-gradient-to-r from-primary to-primary/80'
						>
							<Link href='#servicios'>
								Explorar servicios <ArrowRight className='ml-2 h-4 w-4' />
							</Link>
						</Button>
						<Button size='lg' variant='outline' asChild>
							<Link href='/contacto'>Hablar con el equipo</Link>
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
