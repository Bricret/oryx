import { type NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import type Mail from 'nodemailer/lib/mailer'

// Función para validar email
function isValidEmail(email: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return emailRegex.test(email)
}

// Función para sanitizar contenido HTML
function sanitizeHtml(text: string): string {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;')
		.replace(/\n/g, '<br>')
}

// Template profesional para el correo interno
function getInternalEmailTemplate(
	name: string,
	email: string,
	subject: string,
	message: string,
): string {
	return `
		<!DOCTYPE html>
		<html lang="es">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Nuevo mensaje de contacto - Oryx Development</title>
		</head>
		<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
			<div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
				<!-- Header -->
				<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
					<h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">Oryx Development</h1>
					<p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Nuevo mensaje de contacto</p>
				</div>
				
				<!-- Content -->
				<div style="padding: 40px 30px;">
					<div style="background-color: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin-bottom: 30px; border-radius: 4px;">
						<h2 style="color: #333333; margin: 0 0 20px 0; font-size: 20px;">Detalles del contacto</h2>
						<table style="width: 100%; border-collapse: collapse;">
							<tr>
								<td style="padding: 10px 0; color: #666666; font-weight: bold; width: 100px;">Nombre:</td>
								<td style="padding: 10px 0; color: #333333;">${sanitizeHtml(name)}</td>
							</tr>
							<tr>
								<td style="padding: 10px 0; color: #666666; font-weight: bold;">Email:</td>
								<td style="padding: 10px 0; color: #333333;">${sanitizeHtml(email)}</td>
							</tr>
							<tr>
								<td style="padding: 10px 0; color: #666666; font-weight: bold;">Asunto:</td>
								<td style="padding: 10px 0; color: #333333;">${sanitizeHtml(subject)}</td>
							</tr>
						</table>
					</div>
					
					<div style="background-color: #ffffff; border: 1px solid #e9ecef; border-radius: 8px; padding: 25px;">
						<h3 style="color: #333333; margin: 0 0 15px 0; font-size: 18px;">Mensaje:</h3>
						<div style="color: #555555; line-height: 1.6; font-size: 15px;">
							${sanitizeHtml(message)}
						</div>
					</div>
					
					<div style="margin-top: 30px; padding: 20px; background-color: #e3f2fd; border-radius: 8px; text-align: center;">
						<p style="margin: 0; color: #1976d2; font-size: 14px;">
							<strong>Recibido:</strong> ${new Date().toLocaleString('es-ES', {
								timeZone: 'Europe/Madrid',
								year: 'numeric',
								month: 'long',
								day: 'numeric',
								hour: '2-digit',
								minute: '2-digit',
							})}
						</p>
					</div>
				</div>
				
				<!-- Footer -->
				<div style="background-color: #333333; padding: 20px; text-align: center;">
					<p style="color: #cccccc; margin: 0; font-size: 14px;">
						© ${new Date().getFullYear()} Oryx Development. Todos los derechos reservados.
					</p>
				</div>
			</div>
		</body>
		</html>
	`
}

// Template profesional para el correo de confirmación al usuario
function getConfirmationEmailTemplate(name: string): string {
	return `
		<!DOCTYPE html>
		<html lang="es">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Confirmación de mensaje - Oryx Development</title>
		</head>
		<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
			<div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
				<!-- Header -->
				<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
					<h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">Oryx Development</h1>
					<p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Gracias por contactarnos</p>
				</div>
				
				<!-- Content -->
				<div style="padding: 40px 30px;">
					<h2 style="color: #333333; margin: 0 0 20px 0; font-size: 24px;">¡Hola ${sanitizeHtml(name)}!</h2>
					
					<p style="color: #555555; line-height: 1.6; font-size: 16px; margin-bottom: 25px;">
						Hemos recibido tu mensaje y queremos agradecerte por ponerte en contacto con nosotros. 
						Tu consulta es muy importante para nosotros.
					</p>
					
					<div style="background-color: #f8f9fa; border-left: 4px solid #28a745; padding: 20px; margin: 25px 0; border-radius: 4px;">
						<h3 style="color: #28a745; margin: 0 0 10px 0; font-size: 18px;">✓ Mensaje recibido correctamente</h3>
						<p style="color: #666666; margin: 0; font-size: 14px;">
							Nuestro equipo revisará tu mensaje y se pondrá en contacto contigo en un plazo de 24-48 horas.
						</p>
					</div>
					
					<p style="color: #555555; line-height: 1.6; font-size: 16px; margin-bottom: 25px;">
						Mientras tanto, te invitamos a explorar nuestros servicios y proyectos en nuestro sitio web. 
						Si tienes alguna pregunta urgente, no dudes en contactarnos directamente.
					</p>
					
					<div style="text-align: center; margin: 30px 0;">
						<a href="https://oryx-development.com" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: bold; font-size: 16px;">
							Visitar nuestro sitio web
						</a>
					</div>
					
					<div style="border-top: 1px solid #e9ecef; padding-top: 25px; margin-top: 30px;">
						<h4 style="color: #333333; margin: 0 0 15px 0; font-size: 18px;">Información de contacto:</h4>
						<p style="color: #666666; margin: 5px 0; font-size: 14px;">
							<strong>Email:</strong> contact@oryx-development.com<br>
							<strong>Web:</strong> www.oryx-development.com
						</p>
					</div>
				</div>
				
				<!-- Footer -->
				<div style="background-color: #333333; padding: 20px; text-align: center;">
					<p style="color: #cccccc; margin: 0 0 10px 0; font-size: 14px;">
						© ${new Date().getFullYear()} Oryx Development. Todos los derechos reservados.
					</p>
					<p style="color: #999999; margin: 0; font-size: 12px;">
						Este es un mensaje automático, por favor no respondas a este correo.
					</p>
				</div>
			</div>
		</body>
		</html>
	`
}

export async function POST(request: NextRequest) {
	try {
		// Validar que el contenido sea JSON válido
		let body: {
			email: string
			name: string
			subject: string
			message: string
		}
		try {
			body = await request.json()
		} catch (error: unknown) {
			return NextResponse.json(
				{ error: 'Formato de datos inválido' },
				{ status: 400 },
			)
		}

		const { email, name, subject, message } = body

		// Validaciones de entrada
		if (!email || !name || !subject || !message) {
			return NextResponse.json(
				{ error: 'Todos los campos son requeridos' },
				{ status: 400 },
			)
		}

		if (!isValidEmail(email)) {
			return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
		}

		if (name.length < 2 || name.length > 100) {
			return NextResponse.json(
				{ error: 'El nombre debe tener entre 2 y 100 caracteres' },
				{ status: 400 },
			)
		}

		if (subject.length < 5 || subject.length > 200) {
			return NextResponse.json(
				{ error: 'El asunto debe tener entre 5 y 200 caracteres' },
				{ status: 400 },
			)
		}

		if (message.length < 10 || message.length > 2000) {
			return NextResponse.json(
				{ error: 'El mensaje debe tener entre 10 y 2000 caracteres' },
				{ status: 400 },
			)
		}

		// Configurar transporter con manejo de errores mejorado
		const transporter = nodemailer.createTransport({
			service: 'hostinger', // Usar servicio predefinido
			host: 'smtp.hostinger.com',
			port: 465,
			secure: true,
			auth: {
				user: process.env.EMAIL_USER || 'contact@oryx-development.com',
				pass: process.env.EMAIL_PASS || '~6MsrGnEFR&',
			},
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		} as any)

		// Verificar conexión del transporter
		try {
			await transporter.verify()
		} catch (error) {
			console.error('Error al verificar el transporter:', error)
			return NextResponse.json(
				{ error: 'Error en la configuración del servidor de correo' },
				{ status: 500 },
			)
		}

		// Configuración del correo interno (para Oryx)
		const internalMailOptions: Mail.Options = {
			from: process.env.EMAIL_USER || 'contact@oryx-development.com',
			to: process.env.EMAIL_USER || 'contact@oryx-development.com',
			subject: `Oryx - Nuevo contacto: ${subject} | ${name}`,
			html: getInternalEmailTemplate(name, email, subject, message),
			replyTo: email,
		}

		// Configuración del correo de confirmación (para el usuario)
		const confirmationMailOptions: Mail.Options = {
			from: process.env.EMAIL_USER || 'contact@oryx-development.com',
			to: email,
			subject: 'Confirmación - Hemos recibido tu mensaje | Oryx Development',
			html: getConfirmationEmailTemplate(name),
		}

		// Función mejorada para enviar correos con reintentos
		const sendMailWithRetry = async (
			mailOptions: Mail.Options,
			retries = 3,
		): Promise<void> => {
			for (let attempt = 1; attempt <= retries; attempt++) {
				try {
					await new Promise<void>((resolve, reject) => {
						transporter.sendMail(mailOptions, (err, info) => {
							if (err) {
								reject(err)
							} else {
								console.log(`Email enviado exitosamente: ${info.messageId}`)
								resolve()
							}
						})
					})
					return // Éxito, salir del bucle
				} catch (error) {
					console.error(`Intento ${attempt} fallido:`, error)
					if (attempt === retries) {
						throw error // Último intento fallido, lanzar error
					}
					// Esperar antes del siguiente intento (backoff exponencial)
					await new Promise((resolve) =>
						setTimeout(resolve, 2 ** attempt * 1000),
					)
				}
			}
		}

		// Enviar ambos correos
		try {
			await Promise.all([
				sendMailWithRetry(internalMailOptions),
				sendMailWithRetry(confirmationMailOptions),
			])

			return NextResponse.json({
				message: 'Mensajes enviados exitosamente',
				timestamp: new Date().toISOString(),
			})
		} catch (emailError) {
			console.error('Error al enviar correos:', emailError)
			return NextResponse.json(
				{
					error:
						'Error al enviar el correo. Por favor, inténtalo de nuevo más tarde.',
					details:
						process.env.NODE_ENV === 'development' ? emailError : undefined,
				},
				{ status: 500 },
			)
		}
	} catch (error) {
		console.error('Error general en la API:', error)
		return NextResponse.json(
			{
				error: 'Error interno del servidor',
				details: process.env.NODE_ENV === 'development' ? error : undefined,
			},
			{ status: 500 },
		)
	}
}
