import { Header } from '@/components/common/header/Header'
import SectionDivider from '@/components/common/section-divider'
import Footer from '@/components/footer'
import CoreServices from '@/components/services/core-services'
import DevelopmentProcess from '@/components/services/development-process'
import HumanTouchSection from '@/components/services/human-touch-section'
import ServiceComparison from '@/components/services/service-comparison'
import ServicesCTA from '@/components/services/services-cta'
import ServicesHero from '@/components/services/services-hero'

export const metadata = {
	title: 'Servicios | Oryx Development',
	description:
		'Desarrollo web, sistemas empresariales y aplicaciones móviles con el toque humano que tu proyecto necesita.',
}

export default function ServicesPage() {
	return (
		<main className='relative'>
			<Header />
			<ServicesHero />
			<SectionDivider />
			<CoreServices />
			<SectionDivider />
			<HumanTouchSection />
			<SectionDivider />
			<DevelopmentProcess />
			<SectionDivider />
			<ServiceComparison />
			<SectionDivider />
			<ServicesCTA />
			<Footer />
		</main>
	)
}
