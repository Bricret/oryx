import { Code, Lightbulb, Rocket, TestTube, Wrench } from 'lucide-react'
import { PenToolIcon as Tool } from 'lucide-react'
import { Timeline, type TimelineEntry } from './TimeLine'

export default function Process() {
	const data: TimelineEntry[] = [
		{
			id: 1,
			title: 'Discovery',
			icon: <Lightbulb className='h-12 w-12 text-amber-500' />,
			description:
				'We start by understanding your business goals, target audience, and project requirements through in-depth discovery sessions.',
			activities: [
				'Stakeholder interviews',
				'User research',
				'Market analysis',
				'Feature prioritization',
				'Documentation of functional & non-functional requirements',
			],
			bestPractices: [
				'Use requirement templates',
				'Create user stories',
				'Develop use cases',
				'Conduct regular stakeholder reviews',
			],
		},
		{
			id: 2,
			title: 'Planning & Design',
			icon: <Tool className='h-12 w-12 text-blue-500' />,
			description:
				'Creating detailed project plans and designing the software architecture and user experience.',
			activities: [
				'Project scope definition',
				'Resource allocation',
				'Timeline creation',
				'System architecture design',
				'Database schema design',
				'UI/UX wireframing and prototyping',
			],
			bestPractices: [
				'Use design systems',
				'Create detailed technical specifications',
				'Conduct design reviews',
				'Develop interactive prototypes',
			],
		},
		{
			id: 3,
			title: 'Development',
			icon: <Code className='h-12 w-12 text-green-500' />,
			description:
				'Writing code and implementing the software according to requirements and design specifications.',
			activities: [
				'Setting up development environment',
				'Frontend development',
				'Backend development',
				'Database implementation',
				'API development',
				'Code reviews',
				'Documentation',
			],
			bestPractices: [
				'Follow coding standards',
				'Implement version control',
				'Use continuous integration',
				'Write unit tests',
				'Conduct regular code reviews',
			],
		},
		{
			id: 4,
			title: 'Deployment',
			icon: <Rocket className='h-12 w-12 text-red-500' />,
			description:
				'Releasing the software to production environments and making it available to users.',
			activities: [
				'Deployment planning',
				'Environment setup',
				'Release management',
				'User training',
				'Documentation finalization',
			],
			bestPractices: [
				'Use deployment automation',
				'Implement blue-green deployments',
				'Create detailed rollback plans',
				'Conduct post-deployment testing',
				'Monitor system performance',
			],
		},
		{
			id: 5,
			title: 'Maintenance & Updates',
			icon: <Wrench className='h-12 w-12 text-gray-500' />,
			description:
				'Ongoing support, bug fixes, and feature enhancements after the initial release.',
			activities: [
				'Bug fixing',
				'Performance optimization',
				'Feature enhancements',
				'Security updates',
				'User support',
			],
			bestPractices: [
				'Implement monitoring and alerting',
				'Maintain regular update cycles',
				'Collect and analyze user feedback',
				'Document all changes',
				'Plan for major version upgrades',
			],
		},
	]
	return (
		<div className='bg-secondary/30'>
			<div className='container px-4 pt-24 max-w-3xl mx-auto text-center stagger-animation'>
				<h2 className='text-3xl sm:text-4xl font-bold mb-4 tracking-tight'>
					Our Development Process
				</h2>
				<p className='text-lg text-muted-foreground pb-8'>
					We follow a structured, transparent process to ensure your project is
					delivered on time, on budget, and exceeds your expectations.
				</p>
			</div>
			<Timeline data={data} />
			<div className='container px-4 mx-auto text-center stagger-animation'>
				<p className='text-base text-muted-foreground pb-20'>
					The software development process is iterative and may vary based on
					project requirements, team structure, and development methodology
					(Waterfall, Agile, DevOps, etc.).
				</p>
			</div>
		</div>
	)
}
