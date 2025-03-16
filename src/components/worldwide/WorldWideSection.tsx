'use client'

import { Globe } from 'lucide-react'
import { useScrollAnimation } from '@/components/hooks/useScrollAnimation'
import { WorldGlobe } from './WorldGlobe'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'

export const WorldWideSection = () => {
	const contentRef = useScrollAnimation()

	return (
		<section className='py-24 relative overflow-hidden bg-secondary/30'>
			<div className='container mx-auto px-4'>
				<div className='grid md:grid-cols-2 gap-12 items-center'>
					<div className='order-2 md:order-1'>
						<div className='relative h-[400px] rounded-lg overflow-hidden'>
							<WorldGlobe />
						</div>
					</div>

					<div
						ref={contentRef as React.RefObject<HTMLDivElement>}
						className='order-1 md:order-2 stagger-animation'
					>
						<div className='space-y-6 max-w-lg'>
							<HoverBorderGradient
								containerClassName='rounded-full inline-flex items-center mb-8'
								className='bg-secondary-background text-black/80 flex items-center space-x-2 text-sm font-medium'
							>
								<Globe className='w-4 h-4 mr-2' /> Global Reach{' '}
							</HoverBorderGradient>

							<h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
								Work with us from{' '}
								<span className='text-gradient'>anywhere in the world</span>
							</h2>

							<p className='text-lg text-muted-foreground'>
								Our distributed team of senior developers works across all time
								zones, delivering robust software solutions regardless of your
								location.
							</p>

							<ul className='space-y-3'>
								{[
									{
										id: 'collaboration',
										text: 'Seamless remote collaboration',
									},
									{ id: 'flexibility', text: 'Time zone flexibility' },
									{ id: 'network', text: 'Global talent network' },
									{ id: 'management', text: 'End-to-end project management' },
								].map((item) => (
									<li key={item.id} className='flex items-start'>
										<div className='flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-1'>
											<div className='w-2 h-2 bg-primary rounded-full' />
										</div>
										<span className='ml-3'>{item.text}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
