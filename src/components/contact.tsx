'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRef, useState } from 'react'
import ScrollReveal from './projects/scroll-reveal'
import { Textarea } from './ui/textarea'
import { useDictionary, type Dictionary } from '@/context/LanguageContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Send } from 'lucide-react'

const formSchema = (dictionary: Dictionary) =>
	z.object({
		name: z.string().min(2, {
			message: dictionary.contact.validation.name,
		}),
		email: z.string().email({ message: dictionary.contact.validation.email }),
		subject: z.string().min(5, {
			message: dictionary.contact.validation.subject,
		}),
		message: z.string().min(10, {
			message: dictionary.contact.validation.message,
		}),
	})

type FormValues = z.infer<ReturnType<typeof formSchema>>

export default function Contact() {
	const dictionary = useDictionary()
	const ref = useRef<HTMLElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
		null,
	)

	const y = useTransform(scrollYProgress, [0, 1], ['15%', '-5%'])
	const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema(dictionary)),
		defaultValues: {
			name: '',
			email: '',
			subject: '',
			message: '',
		},
	})

	async function onSubmit(data: FormValues) {
		setIsSubmitting(true)
		setSubmitStatus(null)

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})

			if (response.ok) {
				setSubmitStatus('success')
				form.reset()
			} else {
				setSubmitStatus('error')
			}
		} catch (error) {
			console.error('Submission error:', error)
			setSubmitStatus('error')
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<section
			id='contact'
			ref={ref}
			className='py-24 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background w-full'
		>
			<motion.div
				className='absolute inset-0 bg-gradient-to-b from-background to-primary/5 pointer-events-none mx-auto'
				style={{ opacity: scrollYProgress }}
			/>

			<div className='container px-4 md:px-6 relative z-10 mx-auto'>
				<ScrollReveal>
					<div className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-4'>
							{dictionary.contact.title}
						</h2>
						<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
							{dictionary.contact.subtitle}
						</p>
					</div>
				</ScrollReveal>

				<motion.div style={{ y, opacity }} className='max-w-3xl mx-auto'>
					<h3 className='text-2xl font-bold mb-6 text-center'>
						{dictionary.contact.formTitle}
					</h3>
					{submitStatus === 'success' && (
						<div className='mb-4 text-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative'>
							{dictionary.contact.successMessage}
						</div>
					)}
					{submitStatus === 'error' && (
						<div className='mb-4 text-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'>
							{dictionary.contact.errorMessage}
						</div>
					)}
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
								<FormField
									control={form.control}
									name='name'
									render={({ field }) => (
										<FormItem>
											<FormLabel>{dictionary.contact.formName}</FormLabel>
											<FormControl>
												<Input
													placeholder={dictionary.contact.formNamePlaceholder}
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='email'
									render={({ field }) => (
										<FormItem>
											<FormLabel>{dictionary.contact.formEmail}</FormLabel>
											<FormControl>
												<Input
													type='email'
													placeholder={dictionary.contact.formEmailPlaceholder}
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<FormField
								control={form.control}
								name='subject'
								render={({ field }) => (
									<FormItem>
										<FormLabel>{dictionary.contact.formSubject}</FormLabel>
										<FormControl>
											<Input
												placeholder={dictionary.contact.formSubjectPlaceholder}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='message'
								render={({ field }) => (
									<FormItem>
										<FormLabel>{dictionary.contact.formMessage}</FormLabel>
										<FormControl>
											<Textarea
												placeholder={dictionary.contact.formMessagePlaceholder}
												rows={5}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button
								type='submit'
								size='lg'
								className='w-full sm:w-auto'
								disabled={isSubmitting}
							>
								{isSubmitting ? (
									<div className='flex items-center'>
										<div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2' />
										{dictionary.contact.submittingButton}
									</div>
								) : (
									<div className='flex items-center'>
										<Send className='h-4 w-4 mr-2' />{' '}
										{dictionary.contact.formSend}
									</div>
								)}
							</Button>
						</form>
					</Form>
				</motion.div>
			</div>
		</section>
	)
}
