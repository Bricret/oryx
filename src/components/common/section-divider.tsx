'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface SectionDividerProps {
	className?: string
}

export default function SectionDivider({
	className = '',
}: SectionDividerProps) {
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	})

	const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
	const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8])

	return (
		<div
			ref={ref}
			className={`relative h-32 overflow-hidden ${className} bg-gradient-to-b from-background via-background/95 to-background w-full mx-auto justify-center items-center`}
		>
			<div className='absolute inset-0 flex items-center justify-center mx-auto'>
				<motion.div
					className='w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto'
					style={{ rotate, scale }}
				>
					<motion.div className='w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center'>
						<motion.div className='w-6 h-6 rounded-full bg-primary' />
					</motion.div>
				</motion.div>
			</div>
		</div>
	)
}
