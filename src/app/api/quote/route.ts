import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import twilio from 'twilio';

// Email transporter configuration
const createEmailTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Twilio client configuration
const createTwilioClient = () => {
  return twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      mobile,
      email,
      suburb,
      interestedIn,
      houseSize,
      bedrooms,
      constructionType,
      pestConcern
    } = body;

    // Validate required fields
    if (!name || !mobile || !email) {
      return NextResponse.json(
        { error: 'Name, mobile, and email are required' },
        { status: 400 }
      );
    }

    // Create email content
    const emailSubject = `New Quote Request - ${name} (${suburb || 'Unknown Location'})`;
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Quote Request</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #374151;
            max-width: 600px;
            margin: 0 auto;
            background: linear-gradient(135deg, #f0f9ff 0%, #ecfdf5 100%);
            padding: 20px;
            font-size: 16px;
          }
          .container {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 32px 24px;
            text-align: center;
            position: relative;
          }
          .header::before {
            content: '🏠';
            font-size: 32px;
            display: block;
            margin-bottom: 12px;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
            text-shadow: 0 1px 2px rgba(0,0,0,0.1);
          }
          .content {
            padding: 36px 28px;
          }
          .section {
            margin-bottom: 36px;
          }
          .section:last-child {
            margin-bottom: 0;
          }
          .section h2 {
            margin: 0 0 20px 0;
            font-size: 20px;
            font-weight: 600;
            color: #111827;
            border-bottom: 2px solid #10b981;
            padding-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .info-row {
            display: flex;
            padding: 16px 0;
            border-bottom: 1px solid #f3f4f6;
            align-items: center;
          }
          .info-row:last-child {
            border-bottom: none;
          }
          .info-label {
            font-weight: 600;
            color: #6b7280;
            width: 150px;
            flex-shrink: 0;
            font-size: 16px;
          }
          .info-value {
            color: #111827;
            font-weight: 500;
            font-size: 17px;
          }
          .pest-concern {
            background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%);
            border: 1px solid #bbf7d0;
            border-radius: 8px;
            padding: 20px;
            margin-top: 20px;
          }
          .pest-concern h3 {
            margin: 0 0 12px 0;
            font-size: 18px;
            font-weight: 600;
            color: #166534;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .pest-concern-text {
            font-style: italic;
            color: #166534;
            line-height: 1.7;
            font-size: 16px;
            background: rgba(255,255,255,0.6);
            padding: 16px;
            border-radius: 6px;
            border-left: 4px solid #10b981;
          }
          .timestamp {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            text-align: center;
            color: #64748b;
            font-size: 15px;
          }
          .timestamp strong {
            color: #475569;
            font-weight: 600;
          }
          .footer {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            padding: 20px 28px;
            text-align: center;
            font-size: 15px;
            color: #6b7280;
            border-top: 1px solid #e5e7eb;
          }
          .footer strong {
            color: #10b981;
            font-weight: 600;
          }
          @media (max-width: 600px) {
            body { padding: 10px; font-size: 15px; }
            .content { padding: 28px 20px; }
            .header { padding: 28px 20px; }
            .info-row { flex-direction: column; align-items: flex-start; }
            .info-label { width: auto; margin-bottom: 6px; }
            .info-value { font-size: 16px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Quote Request</h1>
          </div>

          <div class="content">
            <div class="section">
              <h2><span>👤</span> Customer Information</h2>
              <div class="info-row">
                <div class="info-label">Name:</div>
                <div class="info-value">${name}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Mobile:</div>
                <div class="info-value">${mobile}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Email:</div>
                <div class="info-value">${email}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Location:</div>
                <div class="info-value">${suburb || 'Not specified'}</div>
              </div>
            </div>

            <div class="section">
              <h2><span>🛡️</span> Service Details</h2>
              <div class="info-row">
                <div class="info-label">Service Type:</div>
                <div class="info-value">${interestedIn || 'General Inquiry'}</div>
              </div>
              <div class="info-row">
                <div class="info-label">House Size:</div>
                <div class="info-value">${houseSize || 'Not specified'}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Bedrooms:</div>
                <div class="info-value">${bedrooms || 'Not specified'}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Construction:</div>
                <div class="info-value">${constructionType || 'Not specified'}</div>
              </div>
            </div>

            ${pestConcern ? `
            <div class="section">
              <h2><span>🐛</span> Pest Concerns</h2>
              <div class="pest-concern">
                <h3><span>💬</span> Customer's Message</h3>
                <div class="pest-concern-text">"${pestConcern}"</div>
              </div>
            </div>
            ` : ''}

            <div class="timestamp">
              <strong>📅 Submitted:</strong> ${new Date().toLocaleString('en-AU', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'Australia/Sydney'
              })}
            </div>
          </div>

          <div class="footer">
            <strong>T47 Pest Control</strong><br>
            Professional Pest Control Services
          </div>
        </div>
      </body>
      </html>
    `;

    // Create SMS content
    const smsMessage = `New Quote Request: ${name} (${mobile}) from ${suburb || 'Unknown suburb'} - ${interestedIn || 'General inquiry'}. Email: ${email}`;

    let emailSent = false;
    let smsSent = false;
    let errors = [];

    // Send Email
    try {
      const transporter = createEmailTransporter();
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: emailSubject,
        html: emailHtml,
      });
      emailSent = true;
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      errors.push('Email sending failed');
    }

    // Send SMS (temporarily disabled)
    // try {
    //   const client = createTwilioClient();
    //   await client.messages.create({
    //     body: smsMessage,
    //     from: process.env.TWILIO_PHONE_NUMBER,
    //     to: process.env.SMS_TO_NUMBER,
    //   });
    //   smsSent = true;
    // } catch (smsError) {
    //   console.error('SMS sending failed:', smsError);
    //   errors.push('SMS sending failed');
    // }
    smsSent = false; // SMS disabled for now

    // Return response
    if (emailSent || smsSent) {
      return NextResponse.json({
        success: true,
        message: 'Quote request submitted successfully',
        details: {
          emailSent,
          smsSent,
          errors: errors.length > 0 ? errors : undefined
        }
      });
    } else {
      return NextResponse.json(
        { 
          error: 'Failed to send notifications', 
          details: errors 
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Quote API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
