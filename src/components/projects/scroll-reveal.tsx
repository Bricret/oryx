'use client'

import { type ReactNode, useRef } from 'react'
import { motion, useInView } from 'motion/react'

interface ScrollRevealProps {
	children: ReactNode
	direction?: 'up' | 'down' | 'left' | 'right'
	delay?: number
	duration?: number
	className?: string
	distance?: number
	once?: boolean
	threshold?: number
}

export default function ScrollReveal({
	children,
	direction = 'up',
	delay = 0,
	duration = 0.5,
	className = '',
	distance = 50,
	once = true,
	threshold = 0.1,
}: ScrollRevealProps) {
	const ref = useRef<HTMLDivElement>(null)
	const isInView = useInView(ref, { once, amount: threshold })

	const getDirectionOffset = () => {
		switch (direction) {
			case 'up':
				return { y: distance }
			case 'down':
				return { y: -distance }
			case 'left':
				return { x: distance }
			case 'right':
				return { x: -distance }
			default:
				return { y: distance }
		}
	}

	const variants = {
		hidden: {
			opacity: 0,
			...getDirectionOffset(),
		},
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				duration,
				delay,
				ease: 'easeOut',
			},
		},
	}

	return (
		<motion.div
			ref={ref}
			variants={variants}
			initial='hidden'
			animate={isInView ? 'visible' : 'hidden'}
			className={className}
		>
			{children}
		</motion.div>
	)
}
