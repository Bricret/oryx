import { Header } from '@/components/common/header/Header'
import Contact from '@/components/contact'
import FAQSection from '@/components/faq/Faq-section'
import Hero from '@/components/Hero'
import ClientProcess from '@/components/process/Client-Process'
import StatsSection from '@/components/process/Stats-Section'
import ClientsApproached from '@/components/projectRelease/ClientsApproached'
import Projects from '@/components/projects/Projects'
import ServicesRedesigned from '@/components/service/Service'
import { WorldWideSection } from '@/components/worldwide/WorldWideSection'

export default async function HomePage() {
	return (
		<main className='relative'>
			<Header />
			<Hero />
			<ServicesRedesigned />
			<WorldWideSection />
			<Projects />
			<ClientProcess />
			<StatsSection />
			<FAQSection />
			<Contact />
			{/* <ClientsApproached /> */}
		</main>
	)
}
