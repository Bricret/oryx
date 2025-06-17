'use client'

import { Suspense, type ReactNode } from 'react'
import { useInViewportLoading } from '@/components/hooks/useScrollAnimation'

interface LazyComponentProps {
	children: ReactNode
	fallback?: ReactNode
	threshold?: number
	rootMargin?: string
	className?: string
}

const DefaultFallback = () => (
	<div className='w-full h-96 animate-pulse bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-lg' />
)

export default function LazyComponent({
	children,
	fallback = <DefaultFallback />,
	threshold = 0.1,
	rootMargin = '100px',
	className = '',
}: LazyComponentProps) {
	const { isInView, elementRef } = useInViewportLoading(threshold, rootMargin)

	return (
		<div ref={elementRef} className={className}>
			{isInView ? (
				<Suspense fallback={fallback}>{children}</Suspense>
			) : (
				fallback
			)}
		</div>
	)
}
