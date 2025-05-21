'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from 'motion/react'

interface AnimatedCounterProps {
	end: number
	duration?: number
	prefix?: string
	suffix?: string
}

export default function AnimatedCounter({
	end,
	duration = 2000,
	prefix = '',
	suffix = '',
}: AnimatedCounterProps) {
	const [count, setCount] = useState(0)
	const ref = useRef<HTMLDivElement>(null)
	const isInView = useInView(ref, { once: true, amount: 0.5 })
	const [hasAnimated, setHasAnimated] = useState(false)

	useEffect(() => {
		if (isInView && !hasAnimated) {
			let startTimestamp: number
			const step = (timestamp: number) => {
				if (!startTimestamp) startTimestamp = timestamp
				const progress = Math.min((timestamp - startTimestamp) / duration, 1)
				setCount(Math.floor(progress * end))
				if (progress < 1) {
					window.requestAnimationFrame(step)
				} else {
					setHasAnimated(true)
				}
			}
			window.requestAnimationFrame(step)
		}
	}, [isInView, end, duration, hasAnimated])

	return (
		<div ref={ref} className='font-bold text-4xl md:text-5xl'>
			{prefix}
			{count}
			{suffix}
		</div>
	)
}
