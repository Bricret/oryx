'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, ChevronUp, CircleHelp, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { HoverBorderGradient } from '../ui/hover-border-gradient'

const faqs = [
	{
		question: 'What is your development process?',
		answer:
			'Our development process follows an agile methodology with iterative cycles. We begin with a discovery phase to understand your requirements, followed by design, development, testing, and deployment. Throughout the process, we maintain open communication and provide regular updates to ensure your project meets your expectations.',
	},
	{
		question: 'How long does it typically take to complete a project?',
		answer:
			"Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex web application or mobile app could take 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements and project goals.",
	},
	{
		question: 'Do you provide ongoing support after the project is completed?',
		answer:
			'Yes, we offer various support and maintenance packages to ensure your digital product continues to perform optimally. These include regular updates, security patches, performance monitoring, and technical support. We can tailor a support plan to meet your specific needs and budget.',
	},
	{
		question: 'How do you handle project pricing?',
		answer:
			"We offer flexible pricing models including fixed-price quotes for well-defined projects and time-and-materials billing for projects with evolving requirements. During our initial consultation, we'll discuss your project needs and recommend the most appropriate pricing structure. We provide transparent estimates and regular updates on budget utilization.",
	},
	{
		question: 'What technologies do you specialize in?',
		answer:
			'We specialize in a wide range of modern technologies including React, Next.js, Vue.js, and Angular for frontend; Node.js, Python, and PHP for backend; React Native and Flutter for mobile development; and various database technologies like MongoDB, PostgreSQL, and MySQL. Our technology choices are always guided by your specific project requirements and long-term goals.',
	},
	{
		question: 'Can you work with our existing team?',
		answer:
			"We're experienced in collaborating with in-house teams and can adapt to your existing workflows and tools. Whether you need us to augment your team with specific expertise or take ownership of certain aspects of development, we're flexible in our approach to ensure seamless integration with your team.",
	},
]

export default function FAQSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section className='py-24 relative overflow-hidden'>
			<section className='container mx-auto px-4'>
				<div className='absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background' />
				<div className='container px-4 md:px-6 relative z-10'>
					<motion.div
						className='text-center mb-16'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<div className='inline-block'>
							<HoverBorderGradient
								containerClassName='rounded-full inline-flex items-center mb-8'
								className='bg-secondary-background text-black/80 flex items-center space-x-2'
							>
								<CircleHelp className='w-6 h-6' />
								<span className='text-sm font-medium'>
									Frequently Asked Questions
								</span>
							</HoverBorderGradient>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold tracking-tight mb-4'>
							Got Questions? We've Got Answers
						</h2>
						<p className='text-muted-foreground text-lg max-w-3xl mx-auto'>
							Find answers to common questions about our services, process, and
							how we can help your business succeed.
						</p>
					</motion.div>

					<div className='max-w-3xl mx-auto'>
						{faqs.map((faq, index) => (
							<motion.div
								key={faq.question}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className={cn(
									'mb-4 border border-border rounded-xl overflow-hidden transition-all duration-300',
									openIndex === index
										? 'bg-muted/50 shadow-md'
										: 'bg-background',
								)}
							>
								<button
									type='button'
									className='w-full px-6 py-4 text-left flex justify-between items-center'
									onClick={() => toggleFAQ(index)}
								>
									<div className='flex items-center'>
										<HelpCircle
											className={cn(
												'h-5 w-5 mr-3',
												openIndex === index
													? 'text-primary'
													: 'text-muted-foreground',
											)}
										/>
										<span className='font-medium text-lg'>{faq.question}</span>
									</div>
									{openIndex === index ? (
										<ChevronUp className='h-5 w-5 text-primary transition-transform duration-300' />
									) : (
										<ChevronDown className='h-5 w-5 text-muted-foreground transition-transform duration-300' />
									)}
								</button>
								<AnimatePresence>
									{openIndex === index && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: 'auto', opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.3 }}
										>
											<div className='px-6 pb-4 pt-0 text-muted-foreground'>
												<div className='border-t border-border pt-4'>
													{faq.answer}
												</div>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</section>
	)
}
