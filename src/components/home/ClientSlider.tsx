'use client'

import { useDictionary } from '@/context/LanguageContext'
import { InfiniteSliderHome } from './infinite-slider-home'
import ScrollReveal from '../ui/scroll-reveal'

export default function ClientSlider() {
	const dictionary = useDictionary()

	return (
		<section className='relative overflow-hidden bg-background py-20 md:py-32'>
			<div className='absolute inset-0 -z-10 bg-[radial-gradient(40%_100%_at_50%_0%,_#1E293B_0%,_transparent_100%)]' />

			<div className='container mx-auto px-4'>
				<ScrollReveal>
					<div className='mx-auto mb-16 max-w-3xl text-center'>
						<h2 className='text-4xl font-bold leading-tight tracking-tighter text-strong md:text-5xl'>
							{dictionary.client_slider.title}
						</h2>
						<p className='mt-4 text-lg text-muted-foreground'>
							{dictionary.client_slider.description}
						</p>
					</div>
				</ScrollReveal>

				<div className='relative'>
					<div className='pointer-events-none absolute top-1/2 left-0 h-full w-24 -translate-y-1/2 bg-gradient-to-r from-background to-transparent z-10' />
					<InfiniteSliderHome />
					<div className='pointer-events-none absolute top-1/2 right-0 h-full w-24 -translate-y-1/2 bg-gradient-to-l from-background to-transparent z-10' />
				</div>
			</div>
		</section>
	)
}
