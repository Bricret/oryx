'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { FileSearch, Code2, Rocket } from 'lucide-react'
import { useRef } from 'react'
import ScrollReveal from '../projects/scroll-reveal'

const steps = [
	{
		icon: <FileSearch className='h-10 w-10' />,
		title: 'Discovery & Planning',
		description:
			'We begin by understanding your business goals, target audience, and project requirements to create a comprehensive roadmap for success.',
		details: [
			'Initial consultation',
			'Requirements gathering',
			'Project scope definition',
			'Timeline and milestone planning',
		],
	},
	{
		icon: <Code2 className='h-10 w-10' />,
		title: 'Design & Development',
		description:
			'Our team designs and develops your solution with a focus on user experience, performance, and scalability.',
		details: [
			'UI/UX design',
			'Frontend development',
			'Backend implementation',
			'Quality assurance testing',
		],
	},
	{
		icon: <Rocket className='h-10 w-10' />,
		title: 'Deployment & Support',
		description:
			'We deploy your solution and provide ongoing support to ensure optimal performance and user satisfaction.',
		details: [
			'Deployment preparation',
			'Launch execution',
			'Post-launch monitoring',
			'Ongoing maintenance and support',
		],
	},
]

export default function ClientProcess() {
	const ref = useRef<HTMLElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	})

	const lineHeight = useTransform(scrollYProgress, [0, 0.9], ['0%', '100%'])

	return (
		<section className='py-24 bg-[#f6f6f6] relative overflow-hidden'>
			<section id='process' className='container mx-auto px-4' ref={ref}>
				<div className='container px-4 md:px-6'>
					<ScrollReveal>
						<div className='text-center mb-16'>
							<h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-4'>
								Our Client Process
							</h2>
							<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
								A streamlined approach to delivering exceptional results
							</p>
						</div>
					</ScrollReveal>

					<div className='relative'>
						{/* Timeline line with animation */}
						<div
							className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-muted hidden md:block'
							style={{ zIndex: -1 }}
						>
							<motion.div
								className='absolute top-0 left-0 w-full bg-primary'
								style={{ height: lineHeight, zIndex: -1 }}
							/>
						</div>

						{steps.map((step, index) => (
							<ScrollReveal
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								className='mb-16 last:mb-0'
								direction={index % 2 === 0 ? 'left' : 'right'}
								threshold={0.2}
							>
								<div
									className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
								>
									{/* Timeline dot */}
									<motion.div
										className='relative z-10 rounded-full bg-primary/20 p-4 hidden md:flex items-center justify-center'
										initial={{ scale: 0 }}
										whileInView={{ scale: 1 }}
										viewport={{ once: true }}
										transition={{
											type: 'spring',
											stiffness: 300,
											delay: index * 0.3,
										}}
									>
										<div className='rounded-full bg-primary p-4'>
											<div className='text-primary-foreground'>{step.icon}</div>
										</div>
									</motion.div>

									{/* Content */}
									<div
										className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
									>
										<div className='rounded-full bg-primary/20 p-4 flex items-center justify-center md:hidden mb-4 mx-auto w-fit'>
											<div className='rounded-full bg-primary p-4'>
												<div className='text-primary-foreground'>
													{step.icon}
												</div>
											</div>
										</div>

										<h3 className='text-2xl font-bold mb-2'>
											<span className='text-primary'>0{index + 1}.</span>{' '}
											{step.title}
										</h3>
										<p className='text-muted-foreground mb-4'>
											{step.description}
										</p>

										<ul
											className={`space-y-2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}
										>
											{step.details.map((detail, i) => (
												<motion.li
													// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
													key={i}
													className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : ''}`}
													initial={{
														opacity: 0,
														x: index % 2 === 0 ? 20 : -20,
													}}
													whileInView={{ opacity: 1, x: 0 }}
													viewport={{ once: true }}
													transition={{ delay: i * 0.1 + 0.3 }}
												>
													<div className='mr-2 h-1 w-1 rounded-full bg-primary' />
													<span>{detail}</span>
												</motion.li>
											))}
										</ul>
									</div>
								</div>
							</ScrollReveal>
						))}
					</div>
				</div>
			</section>
		</section>
	)
}
