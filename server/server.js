import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from server directory or project root
dotenv.config({ path: path.join(__dirname, '.env') });
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// -------------------------------------------------------------
// 1. SMTP Transporter Setup
// -------------------------------------------------------------
const cleanUser = (process.env.SMTP_USER || '').trim();
// Strip any spaces, tabs, or quotes from the 16-character Google App Password
const cleanPass = (process.env.SMTP_PASS || '').replace(/["'\s]/g, '');

const port = parseInt(process.env.SMTP_PORT || '587', 10);
const isDirectSsl = process.env.SMTP_SECURE === 'true' && port === 465;

// Use host configuration with fallback to service: 'gmail'
const transporterConfig = (process.env.SMTP_HOST && process.env.SMTP_HOST !== 'smtp.gmail.com')
  ? {
      host: process.env.SMTP_HOST,
      port,
      secure: isDirectSsl,
      auth: { user: cleanUser, pass: cleanPass },
      tls: { rejectUnauthorized: false }
    }
  : {
      host: 'smtp.gmail.com',
      port: port, // 587 (recommended) or 465
      secure: isDirectSsl, // false for 587 STARTTLS, true only for 465
      auth: {
        user: cleanUser,
        pass: cleanPass,
      },
      tls: {
        rejectUnauthorized: false // Avoid Windows Defender / antivirus SSL interception drops
      }
    };

const transporter = nodemailer.createTransport(transporterConfig);

// Verify SMTP Connection on Startup
transporter.verify((error) => {
  if (error) {
    console.error('❌ [SMTP ERROR]: Unable to connect to SMTP server.');
    console.error('   Reason:', error.message);
    console.error('   Hint: Did you generate a 16-character Google App Password?');
  } else {
    console.log('✅ [SMTP SUCCESS]: Connected to mail server successfully.');
    console.log(`   Authenticated as: ${process.env.SMTP_USER}`);
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'RIS NextGen SMTP Server', time: new Date().toISOString() });
});

// -------------------------------------------------------------
// 2. Course Seat Reservation Email Endpoint
// -------------------------------------------------------------
app.post('/api/reservations', async (req, res) => {
  const {
    fullName,
    email,
    phone,
    courseTitle,
    batchLabel,
    batchDate,
    paymentOption,
    fee
  } = req.body;

  if (!fullName || !email || !phone) {
    return res.status(400).json({ error: 'Missing mandatory fields: name, email, or phone' });
  }

  const reservationId = `RSV-2026-${Date.now().toString().slice(-4)}`;
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  try {
    // A. Email to ADMIN (New Lead Alert)
    const adminMail = {
      from: `"RIS NextGen Portal" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `🚨 [New Seat Reservation] ${fullName} — ${courseTitle || 'Course'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #d8e8f8; border-radius: 12px; background: #ffffff;">
          <h2 style="color: #0B3A8C; margin-top: 0;">New Cohort Seat Reservation</h2>
          <p style="color: #5B6B82; font-size: 14px;">A student has submitted the fast-track course reservation form:</p>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin: 15px 0;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Reservation ID:</td>
              <td style="padding: 8px; font-family: monospace; font-weight: bold; color: #0B3A8C;">${reservationId}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Student Name:</td>
              <td style="padding: 8px; font-weight: bold; color: #0A1A33;">${fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px;"><a href="mailto:${email}" style="color: #00A8F0;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px; font-weight: bold; color: #555;">WhatsApp Phone:</td>
              <td style="padding: 8px;"><a href="tel:${phone}" style="color: #00A8F0;">${phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Program:</td>
              <td style="padding: 8px; color: #0A1A33;">${courseTitle || 'Selected Program'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Selected Batch:</td>
              <td style="padding: 8px; font-weight: bold; color: #0B3A8C;">${batchLabel ? `${batchLabel}: ` : ''}${batchDate || 'Scheduled Batch'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Payment Mode:</td>
              <td style="padding: 8px;">${paymentOption === 'emi' ? 'Zero-Cost EMI' : 'One-Time Payment'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Course Fee:</td>
              <td style="padding: 8px; font-weight: bold;">₹${fee ? fee.toLocaleString('en-IN') : 'N/A'}</td>
            </tr>
          </table>

          <div style="background: #eaf5ff; border: 1px solid #cbe5fc; padding: 12px; border-radius: 8px; font-size: 13px; color: #0B3A8C;">
            <strong>Immediate Action:</strong> Reach out to <strong>${fullName}</strong> at <a href="tel:${phone}">${phone}</a> within 30 minutes to confirm eligibility.
          </div>
          <p style="font-size: 11px; color: #999; margin-top: 15px;">Submitted at: ${timestamp}</p>
        </div>
      `,
    };

    // B. Email to STUDENT (Confirmation Receipt)
    const studentMail = {
      from: `"RIS NextGen Admissions" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Seat Reserved: Welcome to ${courseTitle || 'RIS NextGen'}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 25px; border: 1px solid #d8e8f8; border-radius: 16px; background: #ffffff;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #0B3A8C; margin: 0;">Seat Reserved Successfully!</h2>
            <p style="color: #5B6B82; font-size: 14px; margin-top: 6px;">Provisional enrollment confirmation & academic verification receipt</p>
          </div>

          <p style="font-size: 15px; color: #0A1A33;">Dear <strong>${fullName}</strong>,</p>
          <p style="font-size: 14px; color: #5B6B82; line-height: 1.6;">
            Congratulations! Your provisional enrollment in <strong>${courseTitle || 'your selected program'}</strong> has been registered under Reservation ID <strong style="color: #0B3A8C;">${reservationId}</strong>.
          </p>

          <div style="background: #f8fbfe; border: 1px solid #e1ecf8; border-radius: 12px; padding: 16px; margin: 20px 0;">
            <div style="font-size: 13px; color: #0B3A8C; font-weight: bold; margin-bottom: 8px;">Your Cohort Details:</div>
            <div style="font-size: 13px; color: #0A1A33; margin-bottom: 5px;">• <strong>Program:</strong> ${courseTitle || 'Selected Track'}</div>
            <div style="font-size: 13px; color: #0A1A33; margin-bottom: 5px;">• <strong>Confirmed Batch:</strong> ${batchLabel ? `${batchLabel}: ` : ''}${batchDate || 'Scheduled Batch'}</div>
            <div style="font-size: 13px; color: #0A1A33; margin-bottom: 5px;">• <strong>Live Class Timing:</strong> 6:00 PM IST (100% Online)</div>
            <div style="font-size: 13px; color: #0A1A33;">• <strong>Payment Option:</strong> ${paymentOption === 'emi' ? 'Zero-Cost EMI' : 'One-Time Payment'}</div>
          </div>

          <div style="background: #eaf5ff; border: 1px solid #cbe5fc; border-radius: 12px; padding: 14px; font-size: 13px; color: #0B3A8C;">
            <strong>Next Step:</strong> Your academic advisor will call you at <strong>${phone}</strong> to guide you through your LMS portal credentials and technical setup.
          </div>

          <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0;" />
          <p style="font-size: 12px; color: #888; text-align: center; margin: 0;">
            RIS NextGen Education • 100% Remote-First Startup • <a href="mailto:risnextgenpvtltd@gmail.com" style="color: #00A8F0;">risnextgenpvtltd@gmail.com</a>
          </p>
        </div>
      `,
    };

    // Send both emails simultaneously
    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(studentMail)
    ]);

    console.log(`✉️ [EMAIL SENT]: Reservation emails sent for ${fullName} (${reservationId})`);
    return res.json({
      success: true,
      reservationId,
      message: 'Reservation recorded and confirmation emails dispatched.',
    });
  } catch (error) {
    console.error('❌ [EMAIL ERROR]: Failed to send emails:', error);
    return res.status(500).json({
      error: 'Failed to send notification email',
      details: error.message
    });
  }
});

// -------------------------------------------------------------
// 3. Contact Callback Inquiry Email Endpoint
// -------------------------------------------------------------
app.post('/api/contact', async (req, res) => {
  const { fullName, email, phone, inquiryType, message } = req.body;

  if (!fullName || !email || !phone) {
    return res.status(400).json({ error: 'Missing mandatory fields' });
  }

  try {
    const adminMail = {
      from: `"RIS NextGen Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `📬 [Contact Inquiry] ${fullName} — ${inquiryType || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #d8e8f8; border-radius: 12px;">
          <h2 style="color: #0B3A8C; margin-top: 0;">New Academic Callback Request</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          <p><strong>Inquiry Type:</strong> ${inquiryType || 'General'}</p>
          <p><strong>Message / Requirement:</strong><br />${message || 'No additional message provided.'}</p>
        </div>
      `,
    };

    await transporter.sendMail(adminMail);
    return res.json({ success: true, message: 'Inquiry received. Admissions team notified.' });
  } catch (error) {
    console.error('❌ [EMAIL ERROR]:', error);
    return res.status(500).json({ error: 'Failed to send inquiry', details: error.message });
  }
});

// -------------------------------------------------------------
// 4. Start Server
// -------------------------------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 RIS NextGen SMTP Server active on http://localhost:${PORT}`);
  console.log(`======================================================\n`);
});
