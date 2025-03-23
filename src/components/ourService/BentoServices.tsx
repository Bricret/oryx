'use client'

import mobileImage from '@/assets/image/mobile-image.png'
import softwareImage from '@/assets/image/software-image.webp'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { ImageDisplay } from './ImageDisplay'
import SecurityVisualization from './Security-visualization'
import { useDictionary } from '@/context/LanguageContext'
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
	const dictionary = useDictionary()
	const items = [
		{
			title:
				dictionary.bentoServices?.customSoftware?.title ||
				'Desarrollo de software a medida',
			description:
				dictionary.bentoServices?.customSoftware?.description ||
				'Construimos plataformas web personalizadas con tecnología moderna para garantizar escalabilidad, seguridad y un diseño atractivo.',
			header: <ImageDisplay image={softwareImage} />,
			className: 'md:col-span-2',
			conversely: true,
		},
		{
			title:
				dictionary.bentoServices?.mobileApps?.title ||
				'Aplicaciones Móviles Escalables',
			description:
				dictionary.bentoServices?.mobileApps?.description ||
				'Aplicaciones nativas y multiplataforma que funcionan a la perfección en cualquier dispositivo.',
			header: <MobileDevImg />,
			className: 'md:col-span-1',
		},
		{
			title:
				dictionary.bentoServices?.modernTech?.title || 'Tecnologías Modernas',
			description:
				dictionary.bentoServices?.modernTech?.description ||
				'Utilizamos tecnologías modernas y probadas para garantizar que su producto sea de alta calidad.',
			header: <CardDemo />,
			className: 'md:col-span-1',
		},
		{
			title:
				dictionary.bentoServices?.security?.title ||
				'Soluciones con alta seguridad con la mejor tecnología',
			description:
				dictionary.bentoServices?.security?.description ||
				'Integramos las mejores prácticas de seguridad en cada etapa del desarrollo para garantizar que su producto sea seguro y confiable.',
			header: <SecurityVisualization />,
			className: 'md:col-span-2',
			conversely: true,
		},
	]

	return (
		<BentoGrid className='md:auto-rows-[28rem] mt-20'>
			{items.map((item) => (
				<BentoGridItem
					key={item.title}
					title={item.title}
					description={item.description}
					header={item.header}
					className={item.className}
					conversely={item.conversely}
				/>
			))}
		</BentoGrid>
	)
}
