import nodemailer, { TransportOptions } from "nodemailer"

export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // Use `true` for port 465, `false` for all other ports
    requireTLS: true,
    secureConnection: false,
    tls: {
      rejectUnauthorized: false,
      ciphers: "SSLv3",
    },
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  } as TransportOptions );