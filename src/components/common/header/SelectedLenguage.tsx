import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import type { Dictionary } from '@/context/LanguageContext'
import { useParams, useRouter } from 'next/navigation'
import { useId } from 'react'

const countries = [
	{
		continent: 'Lenguages',
		items: [
			{ value: '1', label: 'en', flag: '🇺🇸' },
			{ value: '2', label: 'es', flag: '🇲🇽' },
		],
	},
]

export default function SelectedLenguage({
	dictionary,
}: { dictionary: Dictionary }) {
	const { lang } = useParams()
	const id = useId()

	const router = useRouter()

	const handleChange = (value: string) => {
		const selectedItem = countries[0].items.find((item) => item.value === value)
		if (selectedItem) {
			router.push(`/${selectedItem.label}`)
		}
	}
	return (
		<div className='*:not-first:mt-2'>
			<Select
				defaultValue={lang === 'en' ? '1' : '2'}
				onValueChange={handleChange}
			>
				<SelectTrigger
					id={id}
					aria-label={`${dictionary.header.labelSelectLanguage}`}
					className='cursor-pointer [&>span_svg]:text-muted-foreground/80 rounded-sm [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0 py-5 bg-white shadow-md border border-[#4A4A4A]/30'
				>
					<SelectValue
						placeholder={`${dictionary.header.labelSelectLanguage}`}
					/>
				</SelectTrigger>
				<SelectContent className='[&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0'>
					{countries.map((continent) => (
						<SelectGroup key={continent.continent}>
							<SelectLabel className='ps-2'>{continent.continent}</SelectLabel>
							{continent.items.map((item) => (
								<SelectItem key={item.value} value={item.value}>
									<span className='text-lg leading-none'>{item.flag}</span>{' '}
									<span className='truncate'>{item.label}</span>
								</SelectItem>
							))}
						</SelectGroup>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
