'use client'

import { useDictionary } from '@/context/LanguageContext'
import { InfiniteSliderHome } from './infinite-slider-home'

export default function ClientSlider() {
	const dictionary = useDictionary()

	return (
		<section className='py-16 md:py-24 bg-[#E8E4E0]'>
			<div className='container mx-auto px-4'>
				<div className='mx-auto mb-12 max-w-2xl text-center'>
					<h2 className='text-3xl font-bold leading-tight tracking-tighter text-strong md:text-4xl'>
						{dictionary.client_slider.title}
					</h2>
				</div>
				<InfiniteSliderHome />
			</div>
		</section>
	)
}
