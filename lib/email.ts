import nodemailer from "nodemailer";
import { Resend } from "resend";

const from = process.env.EMAIL_FROM ?? "Great Roar Safaris <bookings@greatroarsafaris.com>";
const to = process.env.BOOKING_EMAIL_TO ?? "reservations@greatroarsafaris.com";

type EmailPayload = {
  subject: string;
  html: string;
  replyTo?: string;
};

export async function sendLeadEmail({ subject, html, replyTo }: EmailPayload) {
  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    return resend.emails.send({ from, to, subject, html, replyTo });
  }

  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });
    return transporter.sendMail({ from, to, subject, html, replyTo });
  }

  return { skipped: true, reason: "No email provider configured" };
}
