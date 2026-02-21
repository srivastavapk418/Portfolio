import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Configure with your email service
    // For Gmail: use App Password (enable 2FA first, then create App Password)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,    // your Gmail address
        pass: process.env.EMAIL_PASS,    // Gmail App Password
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${name} via Portfolio`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Portfolio Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr style="background: #f8f8f8;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px;">${email}</td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f3f4f6; border-radius: 8px;">
            <p style="color: #555; font-weight: bold; margin: 0 0 8px;">Message:</p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 16px; color: #999; font-size: 12px;">
            Sent from your portfolio at ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
