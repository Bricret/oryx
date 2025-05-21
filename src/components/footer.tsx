import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'
import { NavbarLogo } from './ui/resizable-navbar'

export default function Footer() {
	return (
		<footer className='pt-24 pb-12 relative overflow-hidden'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					<div className='md:col-span-2'>
						<div className='mb-6'>
							<NavbarLogo />
						</div>
						<p className='text-muted-foreground max-w-md mb-6'>
							We craft exceptional digital experiences with innovative solutions
							tailored to your business needs.
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
						<h3 className='font-medium text-lg mb-4'>Services</h3>
						<ul className='space-y-3'>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-primary transition-colors'
								>
									Web Development
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-primary transition-colors'
								>
									Mobile App Development
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-primary transition-colors'
								>
									Web Systems Development
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-primary transition-colors'
								>
									UI/UX Design
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-primary transition-colors'
								>
									Consulting Services
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className='font-medium text-lg mb-4'>Company</h3>
						<ul className='space-y-3'>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-primary transition-colors'
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-primary transition-colors'
								>
									Our Team
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-primary transition-colors'
								>
									Careers
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-primary transition-colors'
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-primary transition-colors'
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className='border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
					<p className='text-sm text-muted-foreground'>
						&copy; {new Date().getFullYear()} Oryx Development. All rights
						reserved.
					</p>
					<div className='flex space-x-6 mt-4 md:mt-0'>
						<Link
							href='#'
							className='text-sm text-muted-foreground hover:text-primary transition-colors'
						>
							Privacy Policy
						</Link>
						<Link
							href='#'
							className='text-sm text-muted-foreground hover:text-primary transition-colors'
						>
							Terms of Service
						</Link>
						<Link
							href='#'
							className='text-sm text-muted-foreground hover:text-primary transition-colors'
						>
							Cookie Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
