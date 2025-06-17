'use client'

import { motion } from 'framer-motion'
import {
	MapPin,
	Mail,
	Phone,
	Clock,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useDictionary } from '@/context/LanguageContext'
import { CalEmbed } from '../ui/cal-embed'

export default function ContactInfo() {
	const dictionary = useDictionary()
	const contactItems = [
		{
			icon: <Mail className='h-5 w-5' />,
			title: dictionary.contactPage.contactInfo.email,
			content: (
				<a
					href={`mailto:${dictionary.contactPage.contactInfo.emailValue}`}
					className='hover:text-primary transition-colors'
				>
					{dictionary.contactPage.contactInfo.emailValue}
				</a>
			),
		},
		{
			icon: <Phone className='h-5 w-5' />,
			title: dictionary.contactPage.contactInfo.phone,
			content: (
				<a
					href={`tel:${dictionary.contactPage.contactInfo.phoneValue}`}
					className='hover:text-primary transition-colors'
				>
					{dictionary.contactPage.contactInfo.phoneValue}
				</a>
			),
		},
	]

	const socialLinks = [
		{
			icon: <Facebook className='h-5 w-5' />,
			href: '#',
			label: dictionary.contactPage.contactInfo.socialLabels.facebook,
		},
		{
			icon: <Twitter className='h-5 w-5' />,
			href: '#',
			label: dictionary.contactPage.contactInfo.socialLabels.twitter,
		},
		{
			icon: <Instagram className='h-5 w-5' />,
			href: '#',
			label: dictionary.contactPage.contactInfo.socialLabels.instagram,
		},
		{
			icon: <Linkedin className='h-5 w-5' />,
			href: '#',
			label: dictionary.contactPage.contactInfo.socialLabels.linkedin,
		},
	]

	return (
		<motion.div
			className='space-y-8'
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<div>
				<h2 className='text-2xl font-bold mb-6'>
					{dictionary.contactPage.contactInfo.title}
				</h2>
				<div className='space-y-6'>
					{contactItems.map((item, index) => (
						<motion.div
							key={item.title}
							className='flex items-start'
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
						>
							<div className='rounded-full bg-primary/10 p-3 mr-4'>
								<div className='text-primary'>{item.icon}</div>
							</div>
							<div>
								<h3 className='font-medium mb-1'>{item.title}</h3>
								<div className='text-muted-foreground'>{item.content}</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			<div>
				<h3 className='text-lg font-medium mb-4'>
					{dictionary.contactPage.contactInfo.socialTitle}
				</h3>
				<div className='flex space-x-4'>
					{socialLinks.map((social, index) => (
						<motion.div
							key={social.href}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
						>
							<Button
								variant='outline'
								size='icon'
								className='rounded-full hover:bg-primary/10 hover:text-primary'
								asChild
							>
								<Link href={social.href} aria-label={social.label}>
									{social.icon}
								</Link>
							</Button>
						</motion.div>
					))}
				</div>
			</div>

			<motion.div
				className='bg-muted/30 rounded-xl p-6 border border-border'
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.7 }}
			>
				<h3 className='font-medium mb-2'>
					{dictionary.contactPage.contactInfo.quickResponseTitle}
				</h3>
				<p className='text-muted-foreground mb-4'>
					{dictionary.contactPage.contactInfo.quickResponseText}
				</p>
				<CalEmbed
					calLink='https://cal.com/oryx-development/30min'
					className='w-full bg-gradient-to-r from-primary to-primary/80'
					buttonText={dictionary.contactPage.contactInfo.quickResponseButton}
				/>
			</motion.div>
		</motion.div>
	)
}
