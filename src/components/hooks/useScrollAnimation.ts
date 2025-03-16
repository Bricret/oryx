import { useEffect, useRef } from 'react'

interface ScrollAnimationOptions {
	threshold?: number
	rootMargin?: string
}

/**
 * Hook to add scroll-triggered animations to elements
 */
export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
	const { threshold = 0.1, rootMargin = '0px' } = options
	const ref = useRef<HTMLElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					// Add animation class when element enters viewport
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-in')
						entry.target.classList.remove('animate-out')
					} else {
						// Add animation class when element leaves viewport
						if (entry.target.classList.contains('animate-in')) {
							entry.target.classList.add('animate-out')
							entry.target.classList.remove('animate-in')
						}
					}
				}
			},
			{ threshold, rootMargin },
		)

		const currentRef = ref.current
		if (currentRef) {
			observer.observe(currentRef)
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef)
			}
		}
	}, [threshold, rootMargin])

	return ref
}
