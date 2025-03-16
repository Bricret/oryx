import Image, { type StaticImageData } from 'next/image'

export const ImageDisplay = ({
	image,
}: {
	image: StaticImageData
}) => {
	return (
		<div className='overflow-hidden relative w-full h-full'>
			<div className='w-full h-full p-4 rounded-lg border bg-neutral-800 border-neutral-700 ml-6 mt-2'>
				<Image
					src={image}
					alt='Software'
					className='w-auto h-screen rounded-lg object-cover'
				/>
			</div>
		</div>
	)
}
