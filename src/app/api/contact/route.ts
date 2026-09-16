import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, phone, service, details } = await request.json();

    // Configure the transporter
    // We expect these environment variables to be set in your .env file
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Formatear teléfono para enlace directo a WhatsApp
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${cleanPhone}`;

    // Setup email data
    const mailOptions = {
      from: `"WebCastro Consultas" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL_RECEIVER || process.env.SMTP_USER,
      subject: `🏗️ Nueva Consulta Web: ${name} - ${service}`,
      text: `
        Has recibido una nueva solicitud de consulta desde WebCastro:
        
        Nombre: ${name}
        Teléfono/WhatsApp: ${phone} (${whatsappUrl})
        Servicio de interés: ${service}
        Detalles del proyecto: ${details}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
          <div style="background-color: #0f172a; padding: 20px; border-radius: 12px; text-align: center; margin-bottom: 20px;">
            <h2 style="color: #fbbf24; margin: 0; font-size: 22px;">🏗️ Los Castros — Nueva Consulta Web</h2>
            <p style="color: #94a3b8; font-size: 13px; margin-top: 5px;">Recibida desde el formulario modal de la landing page</p>
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
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email enviado exitosamente' }, { status: 200 });
  } catch (error) {
    console.error('Error enviando correo de consulta:', error);
    return NextResponse.json({ success: false, message: 'Error enviando el correo' }, { status: 500 });
  }
}
