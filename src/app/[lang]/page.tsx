'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Header } from '@/components/common/header/Header'
import Hero from '@/components/Hero'
import LazyComponent from '@/components/ui/lazy-component'

// Componentes críticos que se cargan inmediatamente (above the fold)
// Solo Header y Hero se cargan de inmediato

// Lazy loading con dynamic imports para componentes below the fold
const ServicesRedesigned = dynamic(
	() => import('@/components/service/Service'),
	{
		loading: () => (
			<div className='h-96 animate-pulse bg-gray-100 rounded-lg' />
		),
	},
)

const CustomVsTraditional = dynamic(
	() => import('@/components/home/custom-traditional'),
	{
		loading: () => (
			<div className='h-96 animate-pulse bg-gray-100 rounded-lg' />
		),
	},
)

const WorldWideSection = dynamic(
	() =>
		import('@/components/worldwide/WorldWideSection').then((mod) => ({
			default: mod.WorldWideSection,
		})),
	{
		loading: () => (
			<div className='h-96 animate-pulse bg-gray-100 rounded-lg' />
		),
	},
)

const ClientSlider = dynamic(() => import('@/components/home/ClientSlider'), {
	loading: () => <div className='h-64 animate-pulse bg-gray-100 rounded-lg' />,
})

const Projects = dynamic(() => import('@/components/projects/Projects'), {
	loading: () => <div className='h-96 animate-pulse bg-gray-100 rounded-lg' />,
})

const ClientProcess = dynamic(
	() => import('@/components/process/Client-Process'),
	{
		loading: () => (
			<div className='h-96 animate-pulse bg-gray-100 rounded-lg' />
		),
	},
)

const StatsSection = dynamic(
	() => import('@/components/process/Stats-Section'),
	{
		loading: () => (
			<div className='h-64 animate-pulse bg-gray-100 rounded-lg' />
		),
	},
)

const FAQSection = dynamic(() => import('@/components/faq/Faq-section'), {
	loading: () => <div className='h-96 animate-pulse bg-gray-100 rounded-lg' />,
})

const Contact = dynamic(() => import('@/components/contact'), {
	loading: () => <div className='h-96 animate-pulse bg-gray-100 rounded-lg' />,
})

const Footer = dynamic(() => import('@/components/footer'), {
	loading: () => <div className='h-64 animate-pulse bg-gray-100 rounded-lg' />,
})

export default function HomePage() {
	return (
		<main className='relative'>
			{/* Componentes críticos - carga inmediata */}
			<Header />
			<Hero />

			{/* Componentes con carga optimizada e inteligente */}
			<LazyComponent
				threshold={0.1}
				rootMargin='50px'
				fallback={
					<div className='h-96 animate-pulse bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg' />
				}
			>
				<ServicesRedesigned />
			</LazyComponent>

			<LazyComponent
				threshold={0.15}
				rootMargin='100px'
				fallback={
					<div className='h-96 animate-pulse bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg' />
				}
			>
				<CustomVsTraditional />
			</LazyComponent>

			<LazyComponent
				threshold={0.1}
				rootMargin='150px'
				fallback={
					<div className='h-96 animate-pulse bg-gradient-to-r from-green-50 to-green-100 rounded-lg' />
				}
			>
				<WorldWideSection />
			</LazyComponent>

			<LazyComponent
				threshold={0.2}
				rootMargin='100px'
				fallback={
					<div className='h-64 animate-pulse bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg' />
				}
			>
				<ClientSlider />
			</LazyComponent>

			<LazyComponent
				threshold={0.1}
				rootMargin='200px'
				fallback={
					<div className='h-96 animate-pulse bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg' />
				}
			>
				<Projects />
			</LazyComponent>

			<LazyComponent
				threshold={0.15}
				rootMargin='150px'
				fallback={
					<div className='h-96 animate-pulse bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg' />
				}
			>
				<ClientProcess />
			</LazyComponent>

			<LazyComponent
				threshold={0.2}
				rootMargin='100px'
				fallback={
					<div className='h-64 animate-pulse bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg' />
				}
			>
				<StatsSection />
			</LazyComponent>

			<LazyComponent
				threshold={0.1}
				rootMargin='100px'
				fallback={
					<div className='h-96 animate-pulse bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg' />
				}
			>
				<FAQSection />
			</LazyComponent>

			<LazyComponent
				threshold={0.1}
				rootMargin='50px'
				fallback={
					<div className='h-96 animate-pulse bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg' />
				}
			>
				<Contact />
			</LazyComponent>

			<LazyComponent
				threshold={0.2}
				rootMargin='50px'
				fallback={
					<div className='h-64 animate-pulse bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg' />
				}
			>
				<Footer />
			</LazyComponent>
		</main>
	)
}
