'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import {
	Globe,
	Smartphone,
	Code,
	Layers,
	Database,
	Shield,
	HandCoins,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { HoverBorderGradient } from '../ui/hover-border-gradient'

const services = [
	{
		icon: <Globe className='h-10 w-10' />,
		color: 'from-violet-500 to-purple-700',
		shadowColor: 'shadow-violet-500/20',
		title: 'Web Development',
		description:
			'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
		features: [
			'Responsive Design',
			'CMS Integration',
			'E-commerce Solutions',
			'Progressive Web Apps',
			'SEO Optimization',
			'Performance Tuning',
		],
		technologies: [
			'React',
			'Next.js',
			'Vue.js',
			'Angular',
			'WordPress',
			'Shopify',
		],
		caseStudy: {
			title: 'E-commerce Platform Redesign',
			result: 'Increased conversion rate by 35% and reduced bounce rate by 42%',
		},
	},
	{
		icon: <Smartphone className='h-10 w-10' />,
		color: 'from-blue-500 to-cyan-600',
		shadowColor: 'shadow-blue-500/20',
		title: 'Mobile App Development',
		description:
			'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
		features: [
			'iOS & Android Apps',
			'Cross-platform Solutions',
			'UI/UX Design',
			'App Store Optimization',
			'Push Notifications',
			'Offline Functionality',
		],
		technologies: [
			'React Native',
			'Flutter',
			'Swift',
			'Kotlin',
			'Firebase',
			'AWS Amplify',
		],
		caseStudy: {
			title: 'Health & Fitness App',
			result: 'Over 100,000 downloads in the first month with 4.8 star rating',
		},
	},
	{
		icon: <Code className='h-10 w-10' />,
		color: 'from-emerald-500 to-green-600',
		shadowColor: 'shadow-emerald-500/20',
		title: 'Web Systems Development',
		description:
			'Scalable and secure web systems that streamline business operations and enhance productivity.',
		features: [
			'Custom CRM Solutions',
			'ERP Systems',
			'API Development',
			'Cloud Integration',
			'Data Analytics',
			'Automation Tools',
		],
		technologies: [
			'Node.js',
			'Python',
			'Java',
			'MongoDB',
			'PostgreSQL',
			'Docker',
		],
		caseStudy: {
			title: 'Enterprise Resource Planning System',
			result: 'Reduced operational costs by 28% and improved efficiency by 40%',
		},
	},
	{
		icon: <Layers className='h-10 w-10' />,
		color: 'from-amber-500 to-orange-600',
		shadowColor: 'shadow-amber-500/20',
		title: 'UI/UX Design',
		description:
			'User-centered design solutions that create intuitive, engaging, and accessible digital experiences.',
		features: [
			'User Research',
			'Wireframing & Prototyping',
			'Visual Design',
			'Usability Testing',
			'Design Systems',
			'Accessibility Compliance',
		],
		technologies: [
			'Figma',
			'Adobe XD',
			'Sketch',
			'InVision',
			'Zeplin',
			'Principle',
		],
		caseStudy: {
			title: 'Financial Services App Redesign',
			result:
				'Improved user satisfaction by 52% and reduced support tickets by 38%',
		},
	},
	{
		icon: <Database className='h-10 w-10' />,
		color: 'from-rose-500 to-red-600',
		shadowColor: 'shadow-rose-500/20',
		title: 'Data Engineering',
		description:
			'Robust data solutions that transform raw data into valuable insights to drive business decisions.',
		features: [
			'Data Warehousing',
			'ETL Pipelines',
			'Business Intelligence',
			'Big Data Processing',
			'Machine Learning Integration',
			'Real-time Analytics',
		],
		technologies: [
			'Python',
			'Spark',
			'Hadoop',
			'Snowflake',
			'Tableau',
			'Power BI',
		],
		caseStudy: {
			title: 'Retail Analytics Platform',
			result: 'Enabled data-driven decisions that increased revenue by 22%',
		},
	},
	{
		icon: <Shield className='h-10 w-10' />,
		color: 'from-indigo-500 to-blue-700',
		shadowColor: 'shadow-indigo-500/20',
		title: 'Cybersecurity',
		description:
			'Comprehensive security solutions to protect digital assets, ensure compliance, and mitigate risks.',
		features: [
			'Security Audits',
			'Penetration Testing',
			'Compliance Management',
			'Secure DevOps',
			'Incident Response',
			'Security Training',
		],
		technologies: [
			'OWASP',
			'Nessus',
			'Metasploit',
			'Wireshark',
			'Burp Suite',
			'Kali Linux',
		],
		caseStudy: {
			title: 'Financial Institution Security Overhaul',
			result:
				'Eliminated critical vulnerabilities and achieved regulatory compliance',
		},
	},
]

export default function ServicesRedesigned() {
	const [hoveredService, setHoveredService] = useState<number | null>(null)
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	})

	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%'])
	const backgroundOpacity = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		[0, 0.2, 0],
	)

	return (
		<section className='py-24 relative overflow-hidden'>
			<section id='services' className='container mx-auto px-4' ref={ref}>
				{/* Animated background elements */}
				<div className='absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background' />
				<motion.div
					className='absolute inset-0 pointer-events-none'
					style={{ y: backgroundY, opacity: backgroundOpacity }}
				>
					{Array.from({ length: 20 }).map((_, i) => (
						<motion.div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i}
							className='absolute rounded-full bg-primary/5'
							style={{
								width: Math.random() * 300 + 100,
								height: Math.random() * 300 + 100,
								top: `${Math.random() * 100}%`,
								left: `${Math.random() * 100}%`,
							}}
						/>
					))}
				</motion.div>

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
								<HandCoins className='w-6 h-6' />
								<span className='text-sm font-medium'>Our Services</span>
							</HoverBorderGradient>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold tracking-tight mb-4'>
							<span className='relative inline-block'>
								<span className='relative z-10'>Transforming</span>
								<motion.span
									className='absolute bottom-2 left-0 h-3 bg-primary/20 w-full'
									initial={{ width: 0 }}
									whileInView={{ width: '100%' }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: 0.5 }}
								/>
							</span>{' '}
							Ideas Into Digital Reality
						</h2>
						<p className='text-muted-foreground text-lg max-w-3xl mx-auto'>
							We deliver exceptional digital solutions tailored to your specific
							needs, combining technical expertise with creative innovation to
							drive your business forward.
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{services.map((service, index) => (
							<motion.div
								key={service.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className='relative'
								onMouseEnter={() => setHoveredService(index)}
								onMouseLeave={() => setHoveredService(null)}
							>
								<motion.div
									className={cn(
										'relative h-full rounded-xl overflow-hidden border-2 transition-all duration-500',
										hoveredService === index
											? 'border-transparent shadow-2xl scale-[1.02]'
											: 'border-border shadow-lg',
									)}
									whileHover={{ y: -5 }}
									transition={{ type: 'spring', stiffness: 400, damping: 10 }}
								>
									{/* Background gradient */}
									<div
										className={cn(
											'absolute inset-0 opacity-0 transition-opacity duration-500',
											hoveredService === index && 'opacity-100',
										)}
									>
										<div
											className={cn(
												'absolute inset-0 bg-gradient-to-br',
												service.color,
												'opacity-10 transition-opacity duration-500',
											)}
										/>
									</div>

									<div className='relative z-10 p-6 h-full flex flex-col'>
										{/* Icon with animated background */}
										<div className='mb-6'>
											<motion.div
												className={cn(
													'relative w-16 h-16 rounded-lg flex items-center justify-center',
													'bg-gradient-to-br',
													service.color,
													service.shadowColor,
												)}
												whileHover={{ scale: 1.05, rotate: 5 }}
												transition={{
													type: 'spring',
													stiffness: 400,
													damping: 10,
												}}
											>
												<div className='text-white'>{service.icon}</div>
												<motion.div
													className='absolute -inset-0.5 rounded-lg opacity-0'
													initial={{ opacity: 0 }}
													whileHover={{ opacity: 0.4 }}
													style={{
														background:
															'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
														backgroundSize: '200% 100%',
													}}
													animate={{
														backgroundPosition: ['200% 0', '-200% 0'],
													}}
													transition={{
														duration: 1.5,
														repeat: Number.POSITIVE_INFINITY,
														ease: 'linear',
													}}
												/>
											</motion.div>
										</div>

										<h3 className='text-2xl font-bold mb-3'>{service.title}</h3>
										<p className='text-muted-foreground mb-6 flex-grow'>
											{service.description}
										</p>
									</div>
								</motion.div>

								{/* Decorative elements */}
								<motion.div
									className={cn(
										'absolute -z-10 rounded-xl',
										service.shadowColor,
										'opacity-0 transition-opacity duration-300',
										hoveredService === index && 'opacity-100',
									)}
									style={{
										top: -5,
										left: -5,
										right: -5,
										bottom: -5,
										filter: 'blur(20px)',
									}}
								/>
							</motion.div>
						))}
					</div>

					<motion.div
						className='mt-16 text-center'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.8 }}
					>
						<Button
							size='lg'
							className='bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary'
						>
							View All Services
						</Button>
					</motion.div>
				</div>
			</section>
		</section>
	)
}
