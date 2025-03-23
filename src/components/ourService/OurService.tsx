'use client'

import { useScrollAnimation } from '@/components/hooks/useScrollAnimation'
import { BentoServices } from './BentoServices'
import { HoverBorderGradient } from '../ui/hover-border-gradient'
import { HandCoins } from 'lucide-react'
import { useDictionary } from '@/context/LanguageContext'

export const OurService = () => {
	const titleRef = useScrollAnimation()
	const dictionary = useDictionary()

	return (
		<section id='services' className='py-20 section-transition bg-[#18181b]'>
			<div className='container px-4 mx-auto'>
				<div
					ref={titleRef as React.RefObject<HTMLDivElement>}
					className='max-w-3xl mx-auto text-center mb-16 stagger-animation'
				>
					<HoverBorderGradient
						containerClassName='rounded-full inline-flex items-center mb-8'
						className='bg-secondary-background text-black/80 flex items-center space-x-2 text-sm font-medium'
					>
						<HandCoins className='w-4 h-4 mr-2' />{' '}
						{dictionary.ourService.banner}{' '}
					</HoverBorderGradient>
					<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-white'>
						{dictionary.ourService.title}
					</h2>
					<p className='text-lg text-muted-foreground mb-8'>
						{dictionary.ourService.subtitle}
					</p>
				</div>
				<BentoServices />
			</div>
		</section>
	)
}
