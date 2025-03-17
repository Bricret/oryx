'use client'
import {
	AlertCircle,
	CheckCircle,
	FileText,
	PenTool,
	Users,
} from 'lucide-react'
import { useScroll, useTransform, motion } from 'motion/react'
import type React from 'react'
import { useEffect, useRef, useState } from 'react'

export interface TimelineEntry {
	id: number
	title: string
	description: string
	icon: React.ReactNode
	activities: string[]
	bestPractices: string[]
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
	const ref = useRef<HTMLDivElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	const [height, setHeight] = useState(0)

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect()
			setHeight(rect.height)
		}
	}, [])

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start 10%', 'end 50%'],
	})

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

	return (
		<div className='w-full font-sans md:px-10' ref={containerRef}>
			<div ref={ref} className='relative max-w-7xl mx-auto pb-20'>
				{data.map((item, index) => (
					<div
						key={item.title}
						className='flex justify-start pt-10 md:pt-20 md:gap-10'
					>
						<div className='sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full'>
							<div className='h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center'>
								<div className='h-4 w-4 rounded-full bg-primary border border-primary p-2' />
							</div>
							<h3 className='hidden md:block text-base md:pl-20 md:text-2xl font-bold text-primary'>
								{item.title}
							</h3>
						</div>

						<div
							className={`border-2 rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl 'border-secondary/70'`}
						>
							<div
								className={`p-6 ${index % 2 === 0 ? 'bg-primary/5' : 'bg-secondary/5'}`}
							>
								<div className='flex flex-col md:flex-row items-start md:items-center gap-4'>
									<div
										className={`p-4 rounded-full ${index % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/10'}`}
									>
										{item.icon}
									</div>
									<div>
										<div className='flex items-center gap-2'>
											<span className='inline-flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background font-bold text-sm'>
												{item.id}
											</span>
											<h2 className='text-2xl font-bold'>{item.title}</h2>
										</div>
										<p className='text-gray-600 mt-2'>{item.description}</p>
									</div>
								</div>
							</div>

							<div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<div className='flex items-center gap-2 mb-3'>
										<FileText className='h-5 w-5 text-primary' />
										<h3 className='font-semibold text-lg'>Key Activities</h3>
									</div>
									<ul className='space-y-2'>
										{item.activities.map((activity) => (
											<li key={activity} className='flex items-start gap-2'>
												<CheckCircle className='h-5 w-5 text-green-500 mt-0.5 flex-shrink-0' />
												<span>{activity}</span>
											</li>
										))}
									</ul>
								</div>

								<div>
									<div className='flex items-center gap-2 mb-3'>
										<PenTool className='h-5 w-5 text-blue-500' />
										<h3 className='font-semibold text-lg'>Best Practices</h3>
									</div>
									<ul className='space-y-2'>
										{item.bestPractices.map((practice, i) => (
											<li key={practice} className='flex items-start gap-2'>
												<Users className='h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0' />
												<span>{practice}</span>
											</li>
										))}
									</ul>
								</div>
							</div>

							{index < data.length - 1 && (
								<div className='flex justify-center my-4'>
									<div className='h-8 w-0.5 bg-gray-300' />
								</div>
							)}
						</div>
					</div>
				))}
				<div
					style={{
						height: `${height}px`,
					}}
					className='absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] '
				>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className='absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-primary to-transparent from-[0%] via-[10%] rounded-full'
					/>
				</div>
			</div>
		</div>
	)
}
