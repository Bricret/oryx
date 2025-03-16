'use client'
import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

type Direction = 'TOP' | 'LEFT' | 'BOTTOM' | 'RIGHT'

const RAINBOW_COLORS = [
	'#FF0000', // Rojo
	'#FF7F00', // Naranja
	'#FFFF00', // Amarillo
	'#00FF00', // Verde
	'#0000FF', // Azul
	'#4B0082', // Índigo
	'#8F00FF', // Violeta
]

export function HoverBorderGradient({
	children,
	containerClassName,
	className,
	as: Tag = 'button',
	duration = 1,
	clockwise = true,
	...props
}: React.PropsWithChildren<
	{
		as?: React.ElementType
		containerClassName?: string
		className?: string
		duration?: number
		clockwise?: boolean
	} & React.HTMLAttributes<HTMLElement>
>) {
	const [hovered, setHovered] = useState<boolean>(false)
	const [direction, setDirection] = useState<Direction>('TOP')
	const [colorIndex, setColorIndex] = useState(0)

	const rotateDirection = (currentDirection: Direction): Direction => {
		const directions: Direction[] = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT']
		const currentIndex = directions.indexOf(currentDirection)
		const nextIndex = clockwise
			? (currentIndex - 1 + directions.length) % directions.length
			: (currentIndex + 1) % directions.length
		return directions[nextIndex]
	}

	const getGradient = (direction: Direction, color: string) => {
		const gradients = {
			TOP: `radial-gradient(20.7% 50% at 50% 0%, ${color} 0%, rgba(255, 255, 255, 0) 100%)`,
			LEFT: `radial-gradient(16.6% 43.1% at 0% 50%, ${color} 0%, rgba(255, 255, 255, 0) 100%)`,
			BOTTOM: `radial-gradient(20.7% 50% at 50% 100%, ${color} 0%, rgba(255, 255, 255, 0) 100%)`,
			RIGHT: `radial-gradient(16.2% 41.199999999999996% at 100% 50%, ${color} 0%, rgba(255, 255, 255, 0) 100%)`,
		}
		return gradients[direction]
	}

	const highlight = `radial-gradient(75% 181.15942028985506% at 50% 50%, 
    ${RAINBOW_COLORS.join(', ')})`

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (!hovered) {
			const interval = setInterval(() => {
				setDirection((prev) => rotateDirection(prev))
				setColorIndex((prev) => (prev + 1) % RAINBOW_COLORS.length)
			}, duration * 1000)
			return () => clearInterval(interval)
		}
	}, [hovered, duration])

	return (
		<Tag
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className={cn(
				'relative flex rounded-full border content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit',
				containerClassName,
			)}
			{...props}
		>
			<div
				className={cn(
					'w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]',
					className,
				)}
			>
				{children}
			</div>
			<motion.div
				className={cn(
					'flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]',
				)}
				style={{
					filter: 'blur(2px)',
					position: 'absolute',
					width: '100%',
					height: '100%',
				}}
				initial={{
					background: getGradient(direction, RAINBOW_COLORS[colorIndex]),
				}}
				animate={{
					background: hovered
						? [getGradient(direction, RAINBOW_COLORS[colorIndex]), highlight]
						: getGradient(direction, RAINBOW_COLORS[colorIndex]),
				}}
				transition={{ ease: 'linear', duration: duration ?? 1 }}
			/>
			<div className='bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]' />
		</Tag>
	)
}
