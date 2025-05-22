'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'
import { NavbarLogo } from './ui/resizable-navbar'
import { useDictionary } from '@/context/LanguageContext'

export default function Footer() {
	const dictionary = useDictionary()
	return (
		<footer className='pt-24 pb-12 relative overflow-hidden'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					<div className='md:col-span-2'>
						<div className='mb-6'>
							<NavbarLogo />
						</div>
						<p className='text-muted-foreground max-w-md mb-6'>
							{dictionary.footer.description}
						</p>
						<div className='flex space-x-4'>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary transition-colors'
							>
								<Facebook className='h-5 w-5' />
								<span className='sr-only'>Facebook</span>
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary transition-colors'
							>
								<Twitter className='h-5 w-5' />
								<span className='sr-only'>Twitter</span>
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary transition-colors'
							>
								<Instagram className='h-5 w-5' />
								<span className='sr-only'>Instagram</span>
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary transition-colors'
							>
								<Linkedin className='h-5 w-5' />
								<span className='sr-only'>LinkedIn</span>
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary transition-colors'
							>
								<Github className='h-5 w-5' />
								<span className='sr-only'>GitHub</span>
							</Link>
						</div>
					</div>

					<div>
						<h3 className='font-medium text-lg mb-4'>
							{dictionary.footer.servicesTitle}
						</h3>
						<ul className='space-y-3'>
							{dictionary.footer.services.map(
								(service: string, idx: number) => (
									<li key={service}>
										<Link
											href='#'
											className='text-muted-foreground hover:text-primary transition-colors'
										>
											{service}
										</Link>
									</li>
								),
							)}
						</ul>
					</div>

					<div>
						<h3 className='font-medium text-lg mb-4'>
							{dictionary.footer.companyTitle}
						</h3>
						<ul className='space-y-3'>
							{dictionary.footer.company.map((item: string, idx: number) => (
								<li key={item}>
									<Link
										href='#'
										className='text-muted-foreground hover:text-primary transition-colors'
									>
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className='border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
					<p className='text-sm text-muted-foreground'>
						&copy; {new Date().getFullYear()} Oryx Development.{' '}
						{dictionary.footer.rights}
					</p>
					<div className='flex space-x-6 mt-4 md:mt-0'>
						{dictionary.footer.legal.map((item: string, idx: number) => (
							<Link
								key={item}
								href='#'
								className='text-sm text-muted-foreground hover:text-primary transition-colors'
							>
								{item}
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}
