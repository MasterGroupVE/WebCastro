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

    // Setup email data
    const mailOptions = {
      from: `"Consultas Web" <${process.env.SMTP_USER}>`, // sender address
      to: process.env.CONTACT_EMAIL_RECEIVER || process.env.SMTP_USER, // list of receivers
      subject: `Nueva Consulta de ${name} - ${service}`, // Subject line
      text: `
        Has recibido una nueva consulta desde la web:
        
        Nombre: ${name}
        Teléfono/WhatsApp: ${phone}
        Servicio de interés: ${service}
        Detalles del proyecto: ${details}
      `, // plain text body
      html: `
        <h3>Has recibido una nueva consulta desde la web:</h3>
        <ul>
          <li><strong>Nombre:</strong> ${name}</li>
          <li><strong>Teléfono/WhatsApp:</strong> ${phone}</li>
          <li><strong>Servicio de interés:</strong> ${service}</li>
        </ul>
        <h4>Detalles del proyecto:</h4>
        <p>${details}</p>
      `, // html body
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}
