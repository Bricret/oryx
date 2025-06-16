'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import {
	ExternalLink,
	Github,
	Play,
	Calendar,
	Users,
	TrendingUp,
	Award,
} from 'lucide-react'
import Image from 'next/image'

const projects = [
	{
		id: 1,
		title: 'HealthCare Pro Platform',
		description:
			'Comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine capabilities.',
		image: '/placeholder.svg?height=400&width=600',
		category: 'systems',
		industry: 'healthcare',
		technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
		client: 'MedTech Solutions',
		year: '2024',
		duration: '8 months',
		teamSize: 6,
		status: 'Live',
		featured: true,
		hasVideo: true,
		objectives: [
			'Streamline patient management processes',
			'Implement secure telemedicine features',
			'Integrate with existing hospital systems',
			'Ensure HIPAA compliance',
		],
		keyResults: [
			'40% reduction in administrative time',
			'95% patient satisfaction rate',
			'50,000+ patients managed',
			'99.9% system uptime',
		],
		challenges: [
			'Complex integration with legacy systems',
			'Strict healthcare compliance requirements',
			'Real-time data synchronization',
			'Scalability for multiple locations',
		],
		solutions: [
			'Microservices architecture for flexibility',
			'End-to-end encryption for data security',
			'Real-time WebSocket connections',
			'Cloud-native infrastructure on AWS',
		],
		testimonial: {
			text: 'Oryx Development transformed our healthcare operations. The platform is intuitive, secure, and has significantly improved our patient care quality.',
			author: 'Dr. Sarah Johnson',
			position: 'Chief Medical Officer',
			company: 'MedTech Solutions',
		},
	},
	{
		id: 2,
		title: 'EduLearn Mobile App',
		description:
			'Interactive learning platform for students with gamification, progress tracking, and offline capabilities.',
		image: '/placeholder.svg?height=400&width=600',
		category: 'mobile',
		industry: 'education',
		technologies: ['React Native', 'Firebase', 'Redux'],
		client: 'EduTech Innovations',
		year: '2024',
		duration: '6 months',
		teamSize: 4,
		status: 'Live',
		featured: true,
		hasVideo: false,
		objectives: [
			'Create engaging mobile learning experience',
			'Implement offline learning capabilities',
			'Gamify the learning process',
			'Track student progress effectively',
		],
		keyResults: [
			'200,000+ active users',
			'85% course completion rate',
			'4.8/5 app store rating',
			'60% increase in learning engagement',
		],
		challenges: [
			'Offline content synchronization',
			'Cross-platform performance optimization',
			'Engaging user interface design',
			'Scalable backend architecture',
		],
		solutions: [
			'Local SQLite database for offline storage',
			'Optimized React Native components',
			'Gamification with points and badges',
			'Firebase for real-time data sync',
		],
		testimonial: {
			text: 'The EduLearn app has revolutionized how our students engage with learning materials. The offline capabilities are a game-changer.',
			author: 'Michael Chen',
			position: 'Product Manager',
			company: 'EduTech Innovations',
		},
	},
	{
		id: 3,
		title: 'RetailMax E-commerce Platform',
		description:
			'Full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.',
		image: '/placeholder.svg?height=400&width=600',
		category: 'ecommerce',
		industry: 'retail',
		technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
		client: 'RetailMax Corp',
		year: '2023',
		duration: '10 months',
		teamSize: 8,
		status: 'Live',
		featured: true,
		hasVideo: true,
		objectives: [
			'Build scalable e-commerce platform',
			'Integrate multiple payment gateways',
			'Implement advanced analytics',
			'Optimize for mobile commerce',
		],
		keyResults: [
			'300% increase in online sales',
			'1M+ products managed',
			'99.99% payment success rate',
			'45% mobile conversion rate',
		],
		challenges: [
			'High-traffic scalability requirements',
			'Complex inventory management',
			'Multi-vendor marketplace features',
			'Real-time analytics processing',
		],
		solutions: [
			'Microservices with load balancing',
			'Redis caching for performance',
			'Event-driven architecture',
			'Real-time dashboard with WebSockets',
		],
		testimonial: {
			text: 'Our new e-commerce platform exceeded all expectations. Sales have tripled, and customer satisfaction is at an all-time high.',
			author: 'Lisa Rodriguez',
			position: 'CEO',
			company: 'RetailMax Corp',
		},
	},
	// Add more projects...
	{
		id: 4,
		title: 'FinanceFlow Banking App',
		description:
			'Secure mobile banking application with biometric authentication, real-time transactions, and investment tracking.',
		image: '/placeholder.svg?height=400&width=600',
		category: 'mobile',
		industry: 'fintech',
		technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'AWS'],
		client: 'SecureBank',
		year: '2023',
		duration: '12 months',
		teamSize: 10,
		status: 'Live',
		featured: false,
		hasVideo: false,
	},
	{
		id: 5,
		title: 'LogiTrack Supply Chain System',
		description:
			'Comprehensive supply chain management system with real-time tracking, inventory optimization, and predictive analytics.',
		image: '/placeholder.svg?height=400&width=600',
		category: 'systems',
		industry: 'logistics',
		technologies: ['React', 'Python', 'MongoDB', 'Docker'],
		client: 'GlobalLogistics Inc',
		year: '2023',
		duration: '9 months',
		teamSize: 7,
		status: 'Live',
		featured: false,
		hasVideo: true,
	},
	{
		id: 6,
		title: 'CreativeStudio Portfolio Website',
		description:
			'Modern portfolio website for creative agency with interactive galleries, client testimonials, and project showcases.',
		image: '/placeholder.svg?height=400&width=600',
		category: 'web',
		industry: 'creative',
		technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
		client: 'Creative Studio',
		year: '2024',
		duration: '3 months',
		teamSize: 3,
		status: 'Live',
		featured: false,
		hasVideo: false,
	},
]

interface Project {
	id: number
	title: string
	description: string
	image: string
	category: string
	industry: string
	technologies: string[]
	client: string
	year: string
	duration: string
	teamSize: number
	status: string
	featured: boolean
	hasVideo: boolean
	objectives: string[]
	keyResults: string[]
	challenges: string[]
	solutions: string[]
	testimonial: {
		text: string
		author: string
		position: string
		image: string
		company: string
	}
}

export default function ProjectsGrid() {
	const [selectedProject, setSelectedProject] = useState(null)
	const [viewMode] = useState<'grid' | 'list'>('grid')

	const featuredProjects = projects.filter((project) => project.featured)
	const regularProjects = projects.filter((project) => !project.featured)

	return (
		<section className='py-16 bg-accent w-full'>
			<div className='container px-4 md:px-6 mx-auto'>
				{/* Featured Projects */}
				<div className='mb-16'>
					<div className='flex items-center gap-2 mb-8'>
						<Award className='h-5 w-5 text-primary' />
						<h2 className='text-2xl font-bold'>Featured Projects</h2>
					</div>
					<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
						{featuredProjects.map((project, index) => (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className='group'
							>
								<Card className='overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 h-full'>
									<div className='relative aspect-video overflow-hidden'>
										<Image
											src={project.image || '/placeholder.svg'}
											alt={project.title}
											fill
											className='object-cover transition-transform duration-500 group-hover:scale-105'
										/>
										{project.hasVideo && (
											<div className='absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity'>
												<div className='bg-white/90 rounded-full p-3'>
													<Play className='h-6 w-6 text-primary' />
												</div>
											</div>
										)}
										<Badge className='absolute top-3 left-3 bg-primary'>
											Featured
										</Badge>
										<Badge
											variant='secondary'
											className='absolute top-3 right-3'
										>
											{project.category}
										</Badge>
									</div>
									<CardContent className='p-6'>
										<div className='flex items-center gap-2 text-sm text-muted-foreground mb-2'>
											<Calendar className='h-4 w-4' />
											<span>{project.year}</span>
											<span>•</span>
											<Users className='h-4 w-4' />
											<span>{project.teamSize} team members</span>
										</div>
										<h3 className='text-xl font-bold mb-2 group-hover:text-primary transition-colors'>
											{project.title}
										</h3>
										<p className='text-muted-foreground mb-4 line-clamp-2'>
											{project.description}
										</p>

										<div className='flex flex-wrap gap-1 mb-4'>
											{project.technologies?.slice(0, 3).map((tech) => (
												<Badge key={tech} variant='outline' className='text-xs'>
													{tech}
												</Badge>
											))}
											{project.technologies?.length > 3 && (
												<Badge variant='outline' className='text-xs'>
													+{project.technologies.length - 3} more
												</Badge>
											)}
										</div>

										<div className='flex gap-2'>
											<Dialog>
												<DialogTrigger asChild>
													<Button size='sm' className='flex-1'>
														View Details
													</Button>
												</DialogTrigger>
												<DialogContent className='max-w-4xl max-h-[90vh] overflow-y-auto'>
													<DialogHeader>
														<DialogTitle className='text-2xl'>
															{project.title}
														</DialogTitle>
													</DialogHeader>
													<ProjectDetailModal project={project as Project} />
												</DialogContent>
											</Dialog>
											<Button size='sm' variant='outline'>
												<ExternalLink className='h-4 w-4' />
											</Button>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>

				{/* All Projects */}
				<div>
					<h2 className='text-2xl font-bold mb-8'>All Projects</h2>
					<div
						className={`grid gap-6 ${
							viewMode === 'grid'
								? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
								: 'grid-cols-1'
						}`}
					>
						<AnimatePresence>
							{regularProjects.map((project, index) => (
								<motion.div
									key={project.id}
									layout
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.9 }}
									transition={{ duration: 0.3, delay: index * 0.05 }}
									className='group'
								>
									{viewMode === 'grid' ? (
										<Card className='overflow-hidden hover:shadow-lg transition-all duration-300 h-full'>
											<div className='relative aspect-video overflow-hidden'>
												<Image
													src={project.image || '/placeholder.svg'}
													alt={project.title}
													fill
													className='object-cover transition-transform duration-500 group-hover:scale-105'
												/>
												{project.hasVideo && (
													<div className='absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity'>
														<div className='bg-white/90 rounded-full p-2'>
															<Play className='h-4 w-4 text-primary' />
														</div>
													</div>
												)}
												<Badge
													variant='secondary'
													className='absolute top-2 right-2 text-xs'
												>
													{project.category}
												</Badge>
											</div>
											<CardContent className='p-4'>
												<div className='flex items-center gap-2 text-xs text-muted-foreground mb-2'>
													<Calendar className='h-3 w-3' />
													<span>{project.year}</span>
													<span>•</span>
													<span>{project.client}</span>
												</div>
												<h3 className='font-semibold mb-2 group-hover:text-primary transition-colors'>
													{project.title}
												</h3>
												<p className='text-sm text-muted-foreground mb-3 line-clamp-2'>
													{project.description}
												</p>
												<div className='flex flex-wrap gap-1 mb-3'>
													{project.technologies?.slice(0, 2).map((tech) => (
														<Badge
															key={tech}
															variant='outline'
															className='text-xs'
														>
															{tech}
														</Badge>
													))}
												</div>
												<div className='flex gap-2'>
													<Dialog>
														<DialogTrigger asChild>
															<Button
																size='sm'
																variant='outline'
																className='flex-1'
															>
																Details
															</Button>
														</DialogTrigger>
														<DialogContent className='max-w-4xl max-h-[90vh] overflow-y-auto'>
															<DialogHeader>
																<DialogTitle className='text-2xl'>
																	{project.title}
																</DialogTitle>
															</DialogHeader>
															<ProjectDetailModal
																project={project as Project}
															/>
														</DialogContent>
													</Dialog>
													<Button size='sm' variant='ghost'>
														<ExternalLink className='h-4 w-4' />
													</Button>
												</div>
											</CardContent>
										</Card>
									) : (
										<Card className='overflow-hidden hover:shadow-lg transition-all duration-300'>
											<div className='flex flex-col md:flex-row'>
												<div className='relative md:w-1/3 aspect-video md:aspect-square overflow-hidden'>
													<Image
														src={project.image || '/placeholder.svg'}
														alt={project.title}
														fill
														className='object-cover'
													/>
												</div>
												<CardContent className='md:w-2/3 p-6'>
													<div className='flex items-center gap-2 text-sm text-muted-foreground mb-2'>
														<Calendar className='h-4 w-4' />
														<span>{project.year}</span>
														<span>•</span>
														<span>{project.client}</span>
														<span>•</span>
														<Badge variant='secondary' className='text-xs'>
															{project.category}
														</Badge>
													</div>
													<h3 className='text-xl font-bold mb-2'>
														{project.title}
													</h3>
													<p className='text-muted-foreground mb-4'>
														{project.description}
													</p>
													<div className='flex flex-wrap gap-1 mb-4'>
														{project.technologies?.map((tech) => (
															<Badge
																key={tech}
																variant='outline'
																className='text-xs'
															>
																{tech}
															</Badge>
														))}
													</div>
													<div className='flex gap-2'>
														<Dialog>
															<DialogTrigger asChild>
																<Button size='sm'>View Details</Button>
															</DialogTrigger>
															<DialogContent className='max-w-4xl max-h-[90vh] overflow-y-auto'>
																<DialogHeader>
																	<DialogTitle className='text-2xl'>
																		{project.title}
																	</DialogTitle>
																</DialogHeader>
																<ProjectDetailModal
																	project={project as Project}
																/>
															</DialogContent>
														</Dialog>
														<Button size='sm' variant='outline'>
															<ExternalLink className='h-4 w-4 mr-1' />
															Live Demo
														</Button>
														<Button size='sm' variant='ghost'>
															<Github className='h-4 w-4' />
														</Button>
													</div>
												</CardContent>
											</div>
										</Card>
									)}
								</motion.div>
							))}
						</AnimatePresence>
					</div>
				</div>

				{/* Load More */}
				<div className='text-center mt-12'>
					<Button variant='outline' size='lg'>
						Load More Projects
					</Button>
				</div>
			</div>
		</section>
	)
}

function ProjectDetailModal({ project }: { project: Project }) {
	return (
		<div className='space-y-6'>
			{/* Project Image */}
			<div className='relative aspect-video overflow-hidden rounded-lg'>
				<Image
					src={project.image || '/placeholder.svg'}
					alt={project.title}
					fill
					className='object-cover'
				/>
				{project.hasVideo && (
					<div className='absolute inset-0 flex items-center justify-center bg-black/20'>
						<Button size='lg' className='rounded-full'>
							<Play className='h-6 w-6 mr-2' />
							Watch Demo
						</Button>
					</div>
				)}
			</div>

			{/* Project Info */}
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				<div className='md:col-span-2 space-y-6'>
					{/* Overview */}
					<div>
						<h3 className='text-lg font-semibold mb-3'>Project Overview</h3>
						<p className='text-muted-foreground'>{project.description}</p>
					</div>

					{/* Objectives */}
					{project.objectives && (
						<div>
							<h3 className='text-lg font-semibold mb-3'>Objectives</h3>
							<ul className='space-y-2'>
								{project.objectives.map((objective: string, index: number) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<li key={index} className='flex items-start gap-2'>
										<TrendingUp className='h-4 w-4 text-primary mt-0.5 flex-shrink-0' />
										<span className='text-muted-foreground'>{objective}</span>
									</li>
								))}
							</ul>
						</div>
					)}

					{/* Challenges */}
					{project.challenges && (
						<div>
							<h3 className='text-lg font-semibold mb-3'>Challenges</h3>
							<ul className='space-y-2'>
								{project.challenges.map((challenge: string, index: number) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<li key={index} className='flex items-start gap-2'>
										<div className='w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0' />
										<span className='text-muted-foreground'>{challenge}</span>
									</li>
								))}
							</ul>
						</div>
					)}

					{/* Solutions */}
					{project.solutions && (
						<div>
							<h3 className='text-lg font-semibold mb-3'>Solutions</h3>
							<ul className='space-y-2'>
								{project.solutions.map((solution: string, index: number) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<li key={index} className='flex items-start gap-2'>
										<div className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0' />
										<span className='text-muted-foreground'>{solution}</span>
									</li>
								))}
							</ul>
						</div>
					)}

					{/* Key Results */}
					{project.keyResults && (
						<div>
							<h3 className='text-lg font-semibold mb-3'>Key Results</h3>
							<ul className='space-y-2'>
								{project.keyResults.map((result: string, index: number) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<li key={index} className='flex items-start gap-2'>
										<div className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0' />
										<span className='text-muted-foreground'>{result}</span>
									</li>
								))}
							</ul>
						</div>
					)}

					{/* Testimonial */}
					{project.testimonial && (
						<div className='bg-muted/50 p-6 rounded-lg'>
							<h3 className='text-lg font-semibold mb-3'>Client Testimonial</h3>
							<blockquote className='text-muted-foreground italic mb-4'>
								"{project.testimonial.text}"
							</blockquote>
							<div className='flex items-center gap-3'>
								<div className='w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center'>
									<Users className='h-5 w-5 text-primary' />
								</div>
								<div>
									<div className='font-medium'>
										{project.testimonial.author}
									</div>
									<div className='text-sm text-muted-foreground'>
										{project.testimonial.position} at{' '}
										{project.testimonial.company}
									</div>
								</div>
							</div>
						</div>
					)}
				</div>

				{/* Sidebar */}
				<div className='space-y-6'>
					{/* Project Details */}
					<div className='bg-muted/50 p-4 rounded-lg'>
						<h3 className='font-semibold mb-3'>Project Details</h3>
						<div className='space-y-3 text-sm'>
							<div className='flex justify-between'>
								<span className='text-muted-foreground'>Client:</span>
								<span className='font-medium'>{project.client}</span>
							</div>
							<div className='flex justify-between'>
								<span className='text-muted-foreground'>Year:</span>
								<span className='font-medium'>{project.year}</span>
							</div>
							<div className='flex justify-between'>
								<span className='text-muted-foreground'>Duration:</span>
								<span className='font-medium'>{project.duration}</span>
							</div>
							<div className='flex justify-between'>
								<span className='text-muted-foreground'>Team Size:</span>
								<span className='font-medium'>{project.teamSize} members</span>
							</div>
							<div className='flex justify-between'>
								<span className='text-muted-foreground'>Status:</span>
								<Badge variant='secondary'>{project.status}</Badge>
							</div>
						</div>
					</div>

					{/* Technologies */}
					<div>
						<h3 className='font-semibold mb-3'>Technologies Used</h3>
						<div className='flex flex-wrap gap-2'>
							{project.technologies?.map((tech) => (
								<Badge key={tech} variant='outline'>
									{tech}
								</Badge>
							))}
						</div>
					</div>

					{/* Actions */}
					<div className='space-y-2'>
						<Button className='w-full'>
							<ExternalLink className='h-4 w-4 mr-2' />
							View Live Project
						</Button>
						<Button variant='outline' className='w-full'>
							<Github className='h-4 w-4 mr-2' />
							View Code
						</Button>
						<Button variant='outline' className='w-full'>
							Request Similar Project
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
