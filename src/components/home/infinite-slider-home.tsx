import { InfiniteSlider } from '../../../components/motion-primitives/infinite-slider'

const logos = [
	{ src: '/companies/logo-house.jpeg', alt: 'House logo' },
	{ src: '/companies/logo-sakura.png', alt: 'Sakura logo' },
	{ src: '/companies/logo-sigma.jpeg', alt: 'Sigma logo' },
	{ src: '/companies/logo-taxi.png', alt: 'Taxi logo' },
	{ src: '/companies/Taxi-Melissa.png', alt: 'Melissa logo' },
	{ src: '/companies/logo-hersis.png', alt: 'Hersis logo' },
]

const Logo = ({ src, alt }: { src: string; alt: string }) => (
	<div className='flex h-28 w-44 items-center justify-center rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur-sm transition-transform duration-300 hover:!scale-105'>
		<img src={src} alt={alt} className='max-h-full max-w-full object-contain' />
	</div>
)

export function InfiniteSliderHome() {
	return (
		<InfiniteSlider gap={32} reverse>
			{logos.map((logo) => (
				<Logo key={logo.src} src={logo.src} alt={logo.alt} />
			))}
		</InfiniteSlider>
	)
}
