'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Search, Filter, X, Grid, List } from 'lucide-react'

const categories = [
	{ value: 'all', label: 'All Projects' },
	{ value: 'web', label: 'Web Development' },
	{ value: 'mobile', label: 'Mobile Apps' },
	{ value: 'systems', label: 'Enterprise Systems' },
	{ value: 'ecommerce', label: 'E-commerce' },
]

const technologies = [
	{ value: 'all', label: 'All Technologies' },
	{ value: 'react', label: 'React' },
	{ value: 'nextjs', label: 'Next.js' },
	{ value: 'nodejs', label: 'Node.js' },
	{ value: 'react-native', label: 'React Native' },
	{ value: 'flutter', label: 'Flutter' },
	{ value: 'python', label: 'Python' },
	{ value: 'aws', label: 'AWS' },
]

const industries = [
	{ value: 'all', label: 'All Industries' },
	{ value: 'healthcare', label: 'Healthcare' },
	{ value: 'fintech', label: 'Fintech' },
	{ value: 'education', label: 'Education' },
	{ value: 'retail', label: 'Retail' },
	{ value: 'logistics', label: 'Logistics' },
]

const sortOptions = [
	{ value: 'recent', label: 'Most Recent' },
	{ value: 'popular', label: 'Most Popular' },
	{ value: 'alphabetical', label: 'A-Z' },
	{ value: 'category', label: 'By Category' },
]

export default function ProjectsFilter() {
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('all')
	const [selectedTechnology, setSelectedTechnology] = useState('all')
	const [selectedIndustry, setSelectedIndustry] = useState('all')
	const [sortBy, setSortBy] = useState('recent')
	const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
	const [showFilters, setShowFilters] = useState(false)

	const activeFilters = [
		selectedCategory !== 'all' && { type: 'category', value: selectedCategory },
		selectedTechnology !== 'all' && {
			type: 'technology',
			value: selectedTechnology,
		},
		selectedIndustry !== 'all' && { type: 'industry', value: selectedIndustry },
	].filter(Boolean)

	const clearFilter = (type: string) => {
		switch (type) {
			case 'category':
				setSelectedCategory('all')
				break
			case 'technology':
				setSelectedTechnology('all')
				break
			case 'industry':
				setSelectedIndustry('all')
				break
		}
	}

	const clearAllFilters = () => {
		setSearchTerm('')
		setSelectedCategory('all')
		setSelectedTechnology('all')
		setSelectedIndustry('all')
	}

	return (
		<section id='projects-filter' className='py-12 bg-muted/30 border-b'>
			<div className='container px-4 md:px-6'>
				{/* Search and View Toggle */}
				<div className='flex flex-col lg:flex-row gap-4 mb-6'>
					<div className='flex-1 relative'>
						<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground' />
						<Input
							placeholder='Search projects by name, technology, or description...'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className='pl-10 h-12'
						/>
					</div>
					<div className='flex gap-2'>
						<Button
							variant='outline'
							onClick={() => setShowFilters(!showFilters)}
							className='h-12 px-4'
						>
							<Filter className='h-4 w-4 mr-2' />
							Filters
							{activeFilters.length > 0 && (
								<Badge variant='secondary' className='ml-2 h-5 w-5 p-0 text-xs'>
									{activeFilters.length}
								</Badge>
							)}
						</Button>
						<div className='flex border rounded-lg overflow-hidden'>
							<Button
								variant={viewMode === 'grid' ? 'default' : 'ghost'}
								size='sm'
								onClick={() => setViewMode('grid')}
								className='rounded-none h-12'
							>
								<Grid className='h-4 w-4' />
							</Button>
							<Button
								variant={viewMode === 'list' ? 'default' : 'ghost'}
								size='sm'
								onClick={() => setViewMode('list')}
								className='rounded-none h-12'
							>
								<List className='h-4 w-4' />
							</Button>
						</div>
					</div>
				</div>

				{/* Filter Panel */}
				<motion.div
					initial={false}
					animate={{
						height: showFilters ? 'auto' : 0,
						opacity: showFilters ? 1 : 0,
					}}
					transition={{ duration: 0.3 }}
					className='overflow-hidden'
				>
					<div className='bg-background border rounded-lg p-6 mb-6'>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4'>
							<div>
								<label
									htmlFor='category'
									className='text-sm font-medium mb-2 block'
								>
									Category
								</label>
								<Select
									value={selectedCategory}
									onValueChange={setSelectedCategory}
								>
									<SelectTrigger>
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										{categories.map((category) => (
											<SelectItem key={category.value} value={category.value}>
												{category.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div>
								<label
									htmlFor='technology'
									className='text-sm font-medium mb-2 block'
								>
									Technology
								</label>
								<Select
									value={selectedTechnology}
									onValueChange={setSelectedTechnology}
								>
									<SelectTrigger>
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										{technologies.map((tech) => (
											<SelectItem key={tech.value} value={tech.value}>
												{tech.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div>
								<label
									htmlFor='industry'
									className='text-sm font-medium mb-2 block'
								>
									Industry
								</label>
								<Select
									value={selectedIndustry}
									onValueChange={setSelectedIndustry}
								>
									<SelectTrigger>
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										{industries.map((industry) => (
											<SelectItem key={industry.value} value={industry.value}>
												{industry.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div>
								<label
									htmlFor='sortBy'
									className='text-sm font-medium mb-2 block'
								>
									Sort By
								</label>
								<Select value={sortBy} onValueChange={setSortBy}>
									<SelectTrigger>
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										{sortOptions.map((option) => (
											<SelectItem key={option.value} value={option.value}>
												{option.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
						</div>

						{activeFilters.length > 0 && (
							<div className='flex items-center gap-2 pt-4 border-t'>
								<span className='text-sm text-muted-foreground'>
									Active filters:
								</span>
								{activeFilters.map(
									(filter: { type: string; value: string } | false) => {
										if (!filter) return <></>
										return (
											<Badge
												key={`${filter.valueOf()}`}
												variant='secondary'
												className='gap-1'
											>
												{filter.value}
												<X
													className='h-3 w-3 cursor-pointer'
													onClick={() => clearFilter(filter.type)}
												/>
											</Badge>
										)
									},
								)}
								<Button
									variant='ghost'
									size='sm'
									onClick={clearAllFilters}
									className='ml-2'
								>
									Clear All
								</Button>
							</div>
						)}
					</div>
				</motion.div>

				{/* Results Summary */}
				<div className='flex items-center justify-between text-sm text-muted-foreground mb-6'>
					<span>Showing 24 of 150 projects</span>
					<span>View: {viewMode === 'grid' ? 'Grid' : 'List'}</span>
				</div>
			</div>
		</section>
	)
}
