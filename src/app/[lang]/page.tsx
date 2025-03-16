import Hero from '@/components/Hero'
import { Header } from '@/components/common/header/Header'
import { OurService } from '@/components/ourService/OurService'
import { WorldWideSection } from '@/components/worldwide/WorldWideSection'

export default async function HomePage() {
	return (
		<main>
			<Header />
			<Hero />
			<WorldWideSection />
			<OurService />
		</main>
	)
}
