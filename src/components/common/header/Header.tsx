'use client'
import {
	Navbar,
	NavBody,
	NavItems,
	MobileNav,
	NavbarLogo,
	NavbarButton,
	MobileNavHeader,
	MobileNavToggle,
	MobileNavMenu,
} from '@/components/ui/resizable-navbar'
import { useState } from 'react'
import SelectedLenguage from './SelectedLenguage'
import { useDictionary } from '@/context/LanguageContext'
import { Button } from '@/components/ui/button'

export function Header() {
	const dictionary = useDictionary()
	const navItems = [
		{
			name: dictionary.navbar.services,
			link: '/services',
		},
		{
			name: dictionary.navbar.projects,
			link: '/projects',
		},
		{
			name: dictionary.navbar.pricing,
			link: '/pricing',
		},
		{
			name: dictionary.navbar.contact,
			link: '/contact',
		},
	]

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	return (
		<div className='relative w-full'>
			<Navbar className=''>
				{/* Desktop Navigation */}
				<NavBody className=''>
					<NavbarLogo />
					<NavItems items={navItems} />
					<div className='flex items-center gap-2'>
						<Button
							variant='secondary'
							size='lg'
							onClick={() => {
								const currentLang = window.location.pathname.split('/')[1]
								const newLang = currentLang === 'en' ? 'es' : 'en'
								window.location.href = `/${newLang}${window.location.pathname.substring(3)}`
							}}
						>
							{dictionary.header.labelSelectLanguage}
						</Button>
						<Button size='lg' className='z-20 relative'>
							{dictionary.header.ctaButton}
						</Button>
					</div>
				</NavBody>

				{/* Mobile Navigation */}
				<MobileNav>
					<MobileNavHeader>
						<NavbarLogo />
						<MobileNavToggle
							isOpen={isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						/>
					</MobileNavHeader>

					<MobileNavMenu
						isOpen={isMobileMenuOpen}
						onClose={() => setIsMobileMenuOpen(false)}
					>
						{navItems.map((item) => (
							<a
								key={`mobile-link-${item.name}`}
								href={item.link}
								onClick={() => setIsMobileMenuOpen(false)}
								className='relative text-neutral-600 dark:text-neutral-300'
							>
								<span className='block'>{item.name}</span>
							</a>
						))}
						<div className='flex w-full flex-col gap-4'>
							<NavbarButton
								onClick={() => {
									const currentLang = window.location.pathname.split('/')[1]
									const newLang = currentLang === 'en' ? 'es' : 'en'
									window.location.href = `/${newLang}${window.location.pathname.substring(3)}`
								}}
								className='w-full'
							>
								{dictionary.header.labelSelectLanguage}
							</NavbarButton>
							<NavbarButton
								onClick={() => setIsMobileMenuOpen(false)}
								variant='primary'
								className='w-full'
							>
								{dictionary.header.button}
							</NavbarButton>
						</div>
					</MobileNavMenu>
				</MobileNav>
			</Navbar>
		</div>
	)
}
