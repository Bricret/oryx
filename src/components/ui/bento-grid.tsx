import { cn } from '@/lib/utils'

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string
	children?: React.ReactNode
}) => {
	return (
		<div
			className={cn(
				'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto',
				className,
			)}
		>
			{children}
		</div>
	)
}

export const BentoGridItem = ({
	className,
	title,
	description,
	header,
	icon,
	conversely,
}: {
	className?: string
	title?: string | React.ReactNode
	description?: string | React.ReactNode
	header?: React.ReactNode
	icon?: React.ReactNode
	conversely?: boolean
}) => {
	return (
		<div
			className={cn(
				'row-span-1 rounded-xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:border-white/[0.2] bg-bentoCard border border-transparent justify-between flex flex-col space-y-4',
				className,
			)}
		>
			{!conversely ? (
				<>
					{header}
					<div className='group-hover/bento:translate-x-2 transition duration-200 p-4'>
						{icon}
						<div className='font-sans font-bold text-white dark:text-neutral-200 mb-2'>
							{title}
						</div>
						<div className='font-sans font-normal text-neutral-500 text-base dark:text-neutral-300'>
							{description}
						</div>
					</div>
				</>
			) : (
				<>
					<div className='group-hover/bento:translate-x-2 transition duration-200 p-4'>
						{icon}
						<div className='font-sans font-bold text-white dark:text-neutral-200 mb-2'>
							{title}
						</div>
						<div className='font-sans font-normal text-neutral-500 text-base dark:text-neutral-300'>
							{description}
						</div>
					</div>
					{header}
				</>
			)}
		</div>
	)
}
