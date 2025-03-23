'use client'

import { useDictionary } from '@/context/LanguageContext'
import { Code, Lock, Server, Shield } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function SecurityVisualization() {
	const dictionary = useDictionary()

	const [activeLayer, setActiveLayer] = useState(0)

	const layers = [
		{
			icon: Shield,
			label: dictionary.bentoServices.security.firstLayer.label,
			desc: dictionary.bentoServices.security.firstLayer.desc,
		},
		{
			icon: Lock,
			label: dictionary.bentoServices.security.secondLayer.label,
			desc: dictionary.bentoServices.security.secondLayer.desc,
		},
		{
			icon: Code,
			label: dictionary.bentoServices.security.thirdLayer.label,
			desc: dictionary.bentoServices.security.thirdLayer.desc,
		},
		{
			icon: Server,
			label: dictionary.bentoServices.security.fourthLayer.label,
			desc: dictionary.bentoServices.security.fourthLayer.desc,
		},
	]

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveLayer((prev) => (prev + 1) % layers.length)
		}, 2500)
		return () => clearInterval(interval)
	}, [])

	return (
		<div className='w-full h-full bg-bentoCard backdrop-blur-sm rounded-lg p-6 space-y-4'>
			<div className='grid grid-cols-2 gap-4'>
				{layers.map((layer, index) => {
					const Icon = layer.icon
					return (
						<div
							key={layer.label}
							className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-500 ${
								index === activeLayer
									? 'bg-neutral-800 border-neutral-700'
									: 'bg-neutral-900/50'
							}`}
						>
							<Icon
								className={`w-8 h-8 mb-2 ${
									index === activeLayer ? 'text-blue-400' : 'text-gray-400'
								}`}
							/>
							<h3 className='text-sm font-medium text-gray-200'>
								{layer.label}
							</h3>
							<p className='text-xs text-gray-400 text-center mt-1'>
								{layer.desc}
							</p>
						</div>
					)
				})}
			</div>
			{/* <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 transition-all duration-500"
          style={{ width: `${((activeLayer + 1) / layers.length) * 100}%` }}
        />
      </div> */}
		</div>
	)
}
