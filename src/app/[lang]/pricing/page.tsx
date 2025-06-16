import PriceCalculator from '@/components/pricing/pricing-calculator'
import CalculatorHeader from '@/components/pricing/calculator-header'
import FAQSection from '@/components/faq/Faq-section'
import { Header } from '@/components/common/header/Header'
import Footer from '@/components/footer'
import type { Locale } from '@/i18n.config'

export default async function CostosPage({
	params,
}: {
	params: Promise<{ lang: Locale }>
}) {
	const { lang } = await params
	const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(
		(m) => m.default,
	)
	return (
		<main className='relative'>
			<Header />
			<CalculatorHeader />
			<PriceCalculator lang={lang} dictionary={dictionary} />
			<FAQSection />
			<Footer />
		</main>
	)
}
