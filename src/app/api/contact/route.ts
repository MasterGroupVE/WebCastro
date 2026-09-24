import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, service, details } = body

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: 'Nombre y teléfono son obligatorios.' },
        { status: 400 },
      )
    }

    // 1. Guardar la consulta en la Base de Datos con Payload CMS
    const payload = await getPayload({ config: configPromise })
    const nuevaConsulta = await payload.create({
      collection: 'consultas',
      data: {
        nombre: String(name).trim(),
        telefono: String(phone).trim(),
        servicio: String(service || 'Otro').trim(),
        detalles: details ? String(details).trim() : '',
        estado: 'pendiente',
        origen: 'Modal Asesoría Web',
      },
    })

    // 2. Intentar enviar correo con Nodemailer como proceso secundario y no bloqueante
    let emailSent = false
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS

    // Validar si las credenciales no son los placeholders por defecto
    const isConfigured =
      smtpUser &&
      smtpPass &&
      !smtpUser.includes('tu-correo') &&
      !smtpPass.includes('tu-contraseña')

    if (isConfigured) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_SECURE === 'true',
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        })

        const cleanPhone = String(phone).replace(/[^0-9]/g, '')
        const whatsappUrl = `https://wa.me/${cleanPhone}`

        const mailOptions = {
          from: `"WebCastro Consultas" <${smtpUser}>`,
          to: process.env.CONTACT_EMAIL_RECEIVER || smtpUser,
          subject: `🏗️ Nueva Consulta Web: ${name} - ${service}`,
          text: `
Has recibido una nueva solicitud de consulta desde WebCastro:

Nombre: ${name}
Teléfono/WhatsApp: ${phone} (${whatsappUrl})
Servicio de interés: ${service}
Detalles del proyecto: ${details || 'Sin detalles adicionales'}
ID Consulta: ${nuevaConsulta.id}
          `,
          html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
  <div style="background-color: #0f172a; padding: 20px; border-radius: 12px; text-align: center; margin-bottom: 20px;">
    <h2 style="color: #fbbf24; margin: 0; font-size: 22px;">🏗️ Los Castros — Nueva Consulta Web</h2>
    <p style="color: #94a3b8; font-size: 13px; margin-top: 5px;">Guardada en la base de datos (ID #${nuevaConsulta.id})</p>
  </div>
  
  <div style="padding: 10px 0;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; color: #64748b; font-size: 14px; font-weight: bold; width: 140px;">Nombre Solicitante:</td>
        <td style="padding: 8px 0; color: #0f172a; font-size: 15px; font-weight: bold;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #64748b; font-size: 14px; font-weight: bold;">Teléfono / WhatsApp:</td>
        <td style="padding: 8px 0; color: #0f172a; font-size: 15px;">${phone}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #64748b; font-size: 14px; font-weight: bold;">Servicio Requerido:</td>
        <td style="padding: 8px 0; color: #10b981; font-size: 15px; font-weight: bold;">${service}</td>
      </tr>
    </table>
  </div>

  <div style="margin: 20px 0; padding: 15px; background-color: #f8fafc; border-left: 4px solid #fbbf24; border-radius: 6px;">
    <h4 style="margin: 0 0 8px 0; color: #0f172a; font-size: 14px;">Detalles del Proyecto:</h4>
    <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.5;">${details || 'Sin detalles adicionales especificados.'}</p>
  </div>

  <div style="text-align: center; margin-top: 25px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
    <a href="${whatsappUrl}" target="_blank" style="display: inline-block; background-color: #25d366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 10px; font-weight: bold; font-size: 14px;">
      💬 Responder Directo por WhatsApp
    </a>
  </div>
</div>
          `,
        }

        await transporter.sendMail(mailOptions)
        emailSent = true
      } catch (mailError) {
        console.warn('[API Contact] Advertencia: No se pudo enviar el email de notificación (la consulta quedó guardada en BD):', mailError)
      }
    } else {
      console.log('[API Contact] Correo omitido (credenciales SMTP pendientes o por defecto). Consulta guardada en BD exitosamente.')
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Consulta registrada exitosamente en la base de datos.',
        id: nuevaConsulta.id,
        emailSent,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error registrando la consulta en base de datos:', error)
    return NextResponse.json(
      { success: false, message: 'Error al procesar la solicitud en base de datos.' },
      { status: 500 },
    )
  }
}
