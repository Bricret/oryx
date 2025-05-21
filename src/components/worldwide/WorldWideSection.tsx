'use client'

import { useScrollAnimation } from '@/components/hooks/useScrollAnimation'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { Globe } from 'lucide-react'
import { WorldGlobe } from './WorldGlobe'
import { useDictionary } from '@/context/LanguageContext'

export const WorldWideSection = () => {
	const contentRef = useScrollAnimation()
	const dictionary = useDictionary()

	return (
		<section className='py-24 relative overflow-hidden bg-secondary/30'>
			<div className='container mx-auto px-4'>
				<div className='grid md:grid-cols-2 gap-12 items-center'>
					<div className='order-2 md:order-1'>
						<div className='relative h-[300px] md:h-[545px] rounded-lg overflow-hidden'>
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
								<Globe className='w-4 h-4 mr-2' />
								{dictionary.globalReach.banner}{' '}
							</HoverBorderGradient>

							<h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
								{dictionary.globalReach.title_First}{' '}
								<span className='text-gradient'>
									{dictionary.globalReach.title_Second}
								</span>
							</h2>

							<p className='text-lg text-muted-foreground'>
								{dictionary.globalReach.description}
							</p>

							<ul className='space-y-3'>
								{[
									{
										id: 'collaboration',
										text: `${dictionary.globalReach.list.text_First}`,
									},
									{
										id: 'flexibility',
										text: `${dictionary.globalReach.list.text_Second}`,
									},
									{
										id: 'network',
										text: `${dictionary.globalReach.list.text_Third}`,
									},
									{
										id: 'management',
										text: `${dictionary.globalReach.list.text_Fourth}`,
									},
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
