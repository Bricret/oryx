'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { Button } from '../../ui/button'
import SelectedLenguage from './SelectedLenguage'
import { useDictionary } from '@/context/LanguageContext'

export const Header = () => {
	const [scrolled, setScrolled] = useState(false)

	const dictionary = useDictionary()

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20) // Cambia el estado si el scroll es mayor a 20px
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<motion.header
			initial={false}
			animate={{
				backgroundColor: scrolled ? 'rgba(244, 244, 245, 1)' : 'transparent',
				height: scrolled ? '60px' : '80px',
				width: scrolled ? '70%' : '95%',
				borderRadius: scrolled ? '40px' : '40px',
				borderTopRightRadius: scrolled ? '20px' : '20px',
				borderBottomRightRadius: scrolled ? '20px' : '20px',
				boxShadow: scrolled
					? '0px 6px 8px rgba(0, 0, 0, 0.2)'
					: '0px 0px 0px rgba(0, 0, 0, 0)',
			}}
			transition={{
				duration: 0.3, // Duración de la transición
				ease: 'easeInOut',
			}}
			className={`max-w-7xl fixed mx-auto inset-x-0 z-50 lg:w-full container ${scrolled ? 'top-4' : 'top-2'}`}
		>
			<nav className='hidden lg:block w-full'>
				<div className='w-full flex relative justify-between px-2 py-2 rounded-md mx-auto'>
					<div className='flex flex-row gap-2 items-center'>
						<Link
							href={'/'}
							className='font-normal flex space-x-2 items-center text-sm text-black px-2 relative z-20'
						>
							<text className='text-[28px] font-bold text-first uppercase tracking-wide'>
								O r y x
							</text>
						</Link>
					</div>
					<div className='flex space-x-2 items-center'>
						<Button
							variant='secondary'
							size='default'
							className='text-[#4A4A4A] bg-white text-sm font-medium hover:bg-first/80 py-5 shadow-md border border-[#4A4A4A]/30'
						>
							{dictionary.header.button}
						</Button>
						<SelectedLenguage dictionary={dictionary} />
					</div>
				</div>
			</nav>
		</motion.header>
	)
}
