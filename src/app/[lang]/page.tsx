import { Header } from '@/components/common/header/Header'
import Hero from '@/components/Hero'
import { OurService } from '@/components/ourService/OurService'
import Process from '@/components/process/Process'
import ClientsApproached from '@/components/projectRelease/ClientsApproached'
import { WorldWideSection } from '@/components/worldwide/WorldWideSection'

export default async function HomePage() {
	return (
		<main>
			<Header />
			<Hero />
			<OurService />
			<WorldWideSection />
			<Process />
			<ClientsApproached />
		</main>
	)
}
