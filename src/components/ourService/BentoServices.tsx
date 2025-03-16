'use client'

import dynamic from 'next/dynamic'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import { ImageDisplay } from './ImageDisplay'
import softwareImage from '@/assets/image/software-image.webp'
import mobileImage from '@/assets/image/mobile-image.png'
import Image from 'next/image'
import SecurityVisualization from './Security-visualization'
const CardDemo = dynamic(
	() => import('./TechCard').then((mod) => mod.TechCard),
	{ ssr: false },
)

const MobileDevImg = () => {
	return (
		<div className='overflow-hidden relative w-full h-full'>
			<div className='w-full h-full'>
				<Image
					src={mobileImage}
					alt='MobileDev'
					className='w-full h-full rounded-lg object-cover'
				/>
			</div>
		</div>
	)
}

export function BentoServices() {
	return (
		<BentoGrid className='md:auto-rows-[28rem] mt-20'>
			{items.map((item) => (
				<BentoGridItem
					key={item.title}
					title={item.title}
					description={item.description}
					header={item.header}
					className={item.className}
					conversely={item.conversly}
				/>
			))}
		</BentoGrid>
	)
}

// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-white/[0.2] bg-red-500"></div>
// );
const items = [
	{
		title: 'Desarrollo de software a medida',
		description:
			'Construimos plataformas web personalizadas con tecnología moderna para garantizar escalabilidad, seguridad y un diseño atractivo.',
		header: <ImageDisplay image={softwareImage} />,
		className: 'md:col-span-2',
		conversly: true,
	},
	{
		title: 'Aplicaciones Móviles Escalables',
		description:
			'Aplicaciones nativas y multiplataforma que funcionan a la perfección en cualquier dispositivo.',
		header: <MobileDevImg />,
		className: 'md:col-span-1',
	},
	{
		title: 'Tecnologías Modernas',
		description:
			'Utilizamos tecnologías modernas y probadas para garantizar que su producto sea de alta calidad.',
		header: <CardDemo />,
		className: 'md:col-span-1',
	},
	{
		title: 'Soluciones con alta seguridad con la mejor tecnología',
		description:
			'Integramos las mejores prácticas de seguridad en cada etapa del desarrollo para garantizar que su producto sea seguro y confiable.',
		header: <SecurityVisualization />,
		className: 'md:col-span-2',
		conversly: true,
	},
]
