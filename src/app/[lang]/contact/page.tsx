import ContactHeader from '@/components/contact/contact-header'
import ContactForm from '@/components/contact/contact-form'
import ContactInfo from '@/components/contact/contact-info'
import { Header } from '@/components/common/header/Header'
import Footer from '@/components/footer'

export async function generateMetadata({
	params,
}: {
	params: Promise<{ lang: string }>
}) {
	const { lang } = await params
	const dictionary = await import(`@/app/dictionaries/${lang}.json`)
	return {
		title: dictionary.contactPage.metadata.title,
		description: dictionary.contactPage.metadata.description,
	}
}

export default function ContactPage() {
	return (
		<main className='min-h-screen pt-16 bg-gradient-to-b from-background via-background/95 to-background relative'>
			<Header />
			<ContactHeader />
			<div className='container px-4 md:px-6 py-12 mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					<ContactForm />
					<ContactInfo />
				</div>
			</div>
			<Footer />
		</main>
	)
}
