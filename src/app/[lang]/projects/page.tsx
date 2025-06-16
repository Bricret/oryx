import { Header } from '@/components/common/header/Header'
import Footer from '@/components/footer'
import ProjectsFilter from '@/components/projects/projects-filter'
import ProjectsGrid from '@/components/projects/projects-grid'
import ProjectsHero from '@/components/projects/projects-hero'
import ProjectsStats from '@/components/projects/projects-starts'

export const metadata = {
	title: 'Projects - Oryx Development Portfolio',
	description:
		'Explore our portfolio of successful web development, mobile apps, and enterprise systems projects.',
}

export default function ProjectsPage() {
	return (
		<main className='min-h-screen relative'>
			<Header />
			<ProjectsHero />
			<ProjectsGrid />
			<ProjectsStats />
			<Footer />
		</main>
	)
}
