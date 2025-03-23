'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, useAnimation, AnimatePresence } from 'motion/react'
import {
	ArrowRight,
	Building,
	ChevronLeft,
	ChevronRight,
	Database,
	ExternalLink,
	Globe,
	Layers,
	Smartphone,
	Star,
	Users,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Case study data
const caseStudies = [
	{
		id: 1,
		title: 'Enterprise Resource Planning System',
		client: 'Global Manufacturing Corp',
		industry: 'manufacturing',
		challenge:
			'Legacy systems causing data silos and inefficient workflows across 12 departments.',
		solution:
			'Custom ERP solution with real-time analytics and integrated workflows.',
		results: [
			{ label: 'Operational Efficiency', value: '+37%' },
			{ label: 'Administrative Costs', value: '-28%' },
			{ label: 'Data Processing Time', value: '-45%' },
		],
		image: '/placeholder.svg?height=600&width=800',
		icon: <Database className='h-10 w-10' />,
		technologies: ['React', 'Node.js', 'PostgreSQL'],
		featured: true,
		color: 'from-blue-500/20 to-indigo-500/20',
		testimonialId: 1,
	},
	{
		id: 2,
		title: 'Mobile Banking Application',
		client: 'SecureBank Financial',
		industry: 'finance',
		challenge:
			'Outdated mobile platform with poor user experience and security vulnerabilities.',
		solution:
			'Modern, secure banking app with biometric authentication and intuitive UX.',
		results: [
			{ label: 'App Store Rating', value: '4.8/5' },
			{ label: 'Mobile Transactions', value: '+62%' },
			{ label: 'User Engagement', value: '+41%' },
		],
		image: '/placeholder.svg?height=600&width=800',
		icon: <Smartphone className='h-10 w-10' />,
		technologies: ['React Native', 'Node.js', 'MongoDB'],
		featured: false,
		color: 'from-emerald-500/20 to-teal-500/20',
		testimonialId: 2,
	},
	{
		id: 3,
		title: 'E-commerce Platform Overhaul',
		client: 'RetailPlus',
		industry: 'retail',
		challenge:
			'Scaling issues during peak seasons and poor conversion rates on their existing platform.',
		solution:
			'Scalable, cloud-based e-commerce solution with personalized recommendation engine.',
		results: [
			{ label: 'Peak Traffic Handling', value: '+215%' },
			{ label: 'Conversion Rate', value: '+43%' },
			{ label: 'Average Order Value', value: '+27%' },
		],
		image: '/placeholder.svg?height=600&width=800',
		icon: <Globe className='h-10 w-10' />,
		technologies: ['Next.js', 'GraphQL', 'AWS'],
		featured: true,
		color: 'from-purple-500/20 to-violet-500/20',
		testimonialId: 3,
	},
	{
		id: 4,
		title: 'Healthcare Management System',
		client: 'MediCare Network',
		industry: 'healthcare',
		challenge:
			'Inefficient patient data management and compliance issues with healthcare regulations.',
		solution:
			'HIPAA-compliant patient management system with integrated telehealth capabilities.',
		results: [
			{ label: 'Administrative Time', value: '-68%' },
			{ label: 'Regulatory Compliance', value: '100%' },
			{ label: 'Patient Satisfaction', value: '+52%' },
		],
		image: '/placeholder.svg?height=600&width=800',
		icon: <Building className='h-10 w-10' />,
		technologies: ['Angular', 'Java Spring', 'Oracle'],
		featured: false,
		color: 'from-red-500/20 to-orange-500/20',
		testimonialId: 4,
	},
	{
		id: 5,
		title: 'Supply Chain Optimization Platform',
		client: 'LogiTech Solutions',
		industry: 'logistics',
		challenge:
			'Lack of visibility across the supply chain leading to inefficiencies and delays.',
		solution:
			'Real-time tracking and analytics platform with predictive modeling capabilities.',
		results: [
			{ label: 'Delivery Time', value: '-32%' },
			{ label: 'Inventory Costs', value: '-18%' },
			{ label: 'Forecast Accuracy', value: '+45%' },
		],
		image: '/placeholder.svg?height=600&width=800',
		icon: <Layers className='h-10 w-10' />,
		technologies: ['Python', 'TensorFlow', 'React'],
		featured: false,
		color: 'from-amber-500/20 to-yellow-500/20',
		testimonialId: null,
	},
	{
		id: 6,
		title: 'AI-Powered Customer Service Platform',
		client: 'ServiceFirst Inc.',
		industry: 'customer service',
		challenge:
			'High volume of repetitive customer inquiries overwhelming support staff.',
		solution:
			'AI chatbot with natural language processing and seamless human handoff.',
		results: [
			{ label: 'Response Time', value: '-87%' },
			{ label: 'Support Costs', value: '-35%' },
			{ label: 'Customer Satisfaction', value: '+29%' },
		],
		image: '/placeholder.svg?height=600&width=800',
		icon: <Users className='h-10 w-10' />,
		technologies: ['NLP', 'Python', 'React'],
		featured: false,
		color: 'from-cyan-500/20 to-sky-500/20',
		testimonialId: null,
	},
]

export default function ClientsApproached() {
	const [activeFilter, setActiveFilter] = useState('all')
	const [hoveredCard, setHoveredCard] = useState<number | null>(null)

	const filteredStudies =
		activeFilter === 'all'
			? caseStudies
			: caseStudies.filter((study) => study.industry === activeFilter)

	return (
		<section className='w-full bg-gradient-to-b from-background to-background/95 py-20'>
			<div className='container mx-auto px-4 md:px-6'>
				<motion.div
					className='mb-16 text-center'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
						Success Stories
					</h2>
					<p className='mx-auto max-w-2xl text-xl text-muted-foreground'>
						Discover how we've helped businesses overcome challenges and achieve
						remarkable results through custom software solutions.
					</p>
				</motion.div>

				{/* Filter Tabs */}
				<Tabs
					value={activeFilter}
					onValueChange={setActiveFilter}
					className='mb-12'
				>
					<div className='flex justify-center'>
						<TabsList className='mb-8 bg-background/50 backdrop-blur-sm'>
							<TabsTrigger value='all'>All Projects</TabsTrigger>
							<TabsTrigger value='finance'>Finance</TabsTrigger>
							<TabsTrigger value='healthcare'>Healthcare</TabsTrigger>
							<TabsTrigger value='retail'>Retail</TabsTrigger>
							<TabsTrigger value='manufacturing'>Manufacturing</TabsTrigger>
							<TabsTrigger value='logistics'>Logistics</TabsTrigger>
						</TabsList>
					</div>

					{/* Bento Grid Layout */}
					<TabsContent
						value={activeFilter}
						className='focus-visible:outline-none'
					>
						<div className='grid grid-cols-1 md:grid-cols-6 md:grid-rows-6 gap-6 auto-rows-fr'>
							<AnimatePresence>
								{filteredStudies.map((study, index) => {
									// Determine grid placement based on featured status and index
									let gridClass = ''

									if (study.featured) {
										// Featured items get larger spaces
										if (index === 0) {
											gridClass = 'md:col-span-4 md:row-span-3'
										} else {
											gridClass = 'md:col-span-3 md:row-span-3'
										}
									} else {
										// Non-featured items get smaller spaces
										gridClass = 'md:col-span-2 md:row-span-3'
									}

									return (
										<motion.div
											key={study.id}
											className={cn(gridClass)}
											initial={{ opacity: 0, scale: 0.9 }}
											animate={{ opacity: 1, scale: 1 }}
											exit={{ opacity: 0, scale: 0.9 }}
											transition={{ duration: 0.3 }}
											layout
										>
											<ProjectCard
												study={study}
												onHover={() => setHoveredCard(study.id)}
												onLeave={() => setHoveredCard(null)}
											/>
										</motion.div>
									)
								})}
							</AnimatePresence>
						</div>
					</TabsContent>
				</Tabs>

				<div className='text-center'>
					<Button variant='outline' size='lg' className='mt-8'>
						View All Case Studies
						<ArrowRight className='ml-2 h-4 w-4' />
					</Button>
				</div>
			</div>
		</section>
	)
}

// Project Card Component
function ProjectCard({
	study,
	onHover,
	onLeave,
}: {
	study: (typeof caseStudies)[0]
	onHover: () => void
	onLeave: () => void
}) {
	const cardRef = useRef<HTMLDivElement>(null)
	const isInView = useInView(cardRef, { once: true, amount: 0.3 })
	const controls = useAnimation()

	useEffect(() => {
		if (isInView) {
			controls.start('visible')
		}
	}, [controls, isInView])

	return (
		<motion.div
			ref={cardRef}
			className={cn(
				'group h-full w-full overflow-hidden rounded-xl border border-border/40 bg-gradient-to-br p-px',
				study.color,
			)}
			initial='hidden'
			animate={controls}
			variants={{
				hidden: { opacity: 0, y: 20 },
				visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
			}}
			whileHover={{ scale: 1.02 }}
			transition={{ duration: 0.2 }}
			onMouseEnter={onHover}
			onMouseLeave={onLeave}
		>
			<div className='relative flex h-full flex-col overflow-hidden rounded-[calc(0.75rem-1px)] bg-card/95 p-6 backdrop-blur-sm'>
				{/* Icon and Industry Badge */}
				<div className='mb-4 flex items-center justify-between'>
					<div
						className={cn(
							'rounded-full p-2',
							`bg-${study.color.split('-')[1].split('/')[0]}/10`,
						)}
					>
						{study.icon}
					</div>
					<Badge variant='outline' className='capitalize'>
						{study.industry}
					</Badge>
				</div>

				{/* Title and Client */}
				<h3 className='mb-1 text-xl font-bold tracking-tight'>{study.title}</h3>
				<p className='mb-4 text-sm text-muted-foreground'>{study.client}</p>

				{/* Challenge and Solution */}
				<div className='mb-4 space-y-3 text-sm'>
					<div>
						<h4 className='font-semibold text-primary/80'>Challenge</h4>
						<p className='text-muted-foreground'>{study.challenge}</p>
					</div>
					<div>
						<h4 className='font-semibold text-primary/80'>Solution</h4>
						<p className='text-muted-foreground'>{study.solution}</p>
					</div>
				</div>

				{/* Results */}
				<div className='mb-4'>
					<h4 className='mb-2 font-semibold text-primary/80'>Results</h4>
					<div className='grid grid-cols-3 gap-2'>
						{study.results.map((result) => (
							<div
								key={`${result.value}-${result.label}`}
								className='flex flex-col items-center rounded-lg bg-primary/5 p-2 text-center'
							>
								<span className='text-lg font-bold text-primary'>
									{result.value}
								</span>
								<span className='text-xs text-muted-foreground'>
									{result.label}
								</span>
							</div>
						))}
					</div>
				</div>

				{/* Technologies */}
				<div className='mt-auto'>
					<div className='mb-2 flex flex-wrap gap-1.5'>
						{study.technologies.map((tech) => (
							<Badge key={tech} variant='secondary' className='text-xs'>
								{tech}
							</Badge>
						))}
					</div>

					<Button
						variant='ghost'
						size='sm'
						className='mt-2 w-full justify-between group-hover:bg-primary/10'
					>
						View Case Study
						<ExternalLink className='h-4 w-4' />
					</Button>
				</div>

				{/* Featured indicator */}
				{study.featured && (
					<div className='absolute -right-12 -top-3 rotate-45 bg-primary px-12 py-1 text-xs font-medium text-primary-foreground'>
						Featured
					</div>
				)}
			</div>
		</motion.div>
	)
}
