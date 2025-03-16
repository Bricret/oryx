'use client'

import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { BentoServices } from './BentoServices'

export const OurService = () => {
	const titleRef = useScrollAnimation()

	return (
		<section id='services' className='py-20 section-transition'>
			<div className='container px-4 mx-auto'>
				<div
					ref={titleRef as React.RefObject<HTMLDivElement>}
					className='max-w-3xl mx-auto text-center mb-16 stagger-animation'
				>
					<h2 className='text-3xl sm:text-4xl font-bold mb-4 tracking-tight'>
						Our Services
					</h2>
					<p className='text-lg text-muted-foreground mb-8'>
						We provide comprehensive software development services tailored to
						your specific needs, with a focus on quality, performance, and user
						experience.
					</p>
				</div>
				<BentoServices />
			</div>
		</section>
	)
}
