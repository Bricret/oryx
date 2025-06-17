'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'
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
import { useDictionary, type Dictionary } from '@/context/LanguageContext'

// Define form schema with validation
const formSchema = (dictionary: Dictionary) =>
	z.object({
		name: z.string().min(2, {
			message: dictionary.contactPage.contactForm.validation.name,
		}),
		email: z
			.string()
			.email({ message: dictionary.contactPage.contactForm.validation.email }),
		subject: z.string().min(5, {
			message: dictionary.contactPage.contactForm.validation.subject,
		}),
		message: z.string().min(10, {
			message: dictionary.contactPage.contactForm.validation.message,
		}),
	})

type FormValues = z.infer<ReturnType<typeof formSchema>>

export default function ContactForm() {
	const dictionary = useDictionary()
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
		null,
	)

	// Initialize form
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema(dictionary)),
		defaultValues: {
			name: '',
			email: '',
			subject: '',
			message: '',
		},
	})

	// Handle form submission
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
				// Optionally, redirect to a success page
				// window.location.href = `/${dictionary.lang}/contact/success`;
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
		<motion.div
			className='bg-background border border-border rounded-xl p-6 md:p-8 shadow-lg w-full mx-auto'
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		>
			<h2 className='text-2xl font-bold mb-6'>
				{dictionary.contactPage.contactForm.title}
			</h2>

			{submitStatus === 'success' && (
				<div className='mb-4 text-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative'>
					{dictionary.contactPage.contactForm.successMessage}
				</div>
			)}
			{submitStatus === 'error' && (
				<div className='mb-4 text-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'>
					{dictionary.contactPage.contactForm.errorMessage}
				</div>
			)}

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
					{/* Keep all the existing form fields */}
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<FormField
							control={form.control}
							name='name'
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										{dictionary.contactPage.contactForm.nameLabel}
									</FormLabel>
									<FormControl>
										<Input
											placeholder={
												dictionary.contactPage.contactForm.namePlaceholder
											}
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
									<FormLabel>
										{dictionary.contactPage.contactForm.emailLabel}
									</FormLabel>
									<FormControl>
										<Input
											type='email'
											placeholder={
												dictionary.contactPage.contactForm.emailPlaceholder
											}
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
								<FormLabel>
									{dictionary.contactPage.contactForm.subjectLabel}
								</FormLabel>
								<FormControl>
									<Input
										placeholder={
											dictionary.contactPage.contactForm.subjectPlaceholder
										}
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
								<FormLabel>
									{dictionary.contactPage.contactForm.messageLabel}
								</FormLabel>
								<FormControl>
									<Textarea
										placeholder={
											dictionary.contactPage.contactForm.messagePlaceholder
										}
										className='min-h-[150px]'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						type='submit'
						className='w-full bg-gradient-to-r from-primary to-primary/80'
						disabled={isSubmitting}
					>
						{isSubmitting ? (
							<div className='flex items-center'>
								<div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2' />
								{dictionary.contactPage.contactForm.submittingButton}
							</div>
						) : (
							<div className='flex items-center'>
								<Send className='h-4 w-4 mr-2' />{' '}
								{dictionary.contactPage.contactForm.submitButton}
							</div>
						)}
					</Button>
				</form>
			</Form>
		</motion.div>
	)
}
