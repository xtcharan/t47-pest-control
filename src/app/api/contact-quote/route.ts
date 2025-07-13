import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email transporter configuration
const createEmailTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      email,
      suburb,
      service,
      message
    } = body;

    // Validate required fields
    if (!name || !phone || !email || !suburb || !service) {
      return NextResponse.json(
        { error: 'Name, phone, email, suburb, and service are required' },
        { status: 400 }
      );
    }

    // Create simple email content
    const emailSubject = `Contact Quote Request - ${name} (${suburb})`;
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Quote Request</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            background-color: #f9f9f9;
            padding: 20px;
          }
          .container {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .header {
            background: #10b981;
            color: white;
            padding: 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            padding: 30px;
          }
          .section {
            margin-bottom: 25px;
          }
          .section h2 {
            margin: 0 0 15px 0;
            font-size: 18px;
            color: #10b981;
            border-bottom: 2px solid #e5e7eb;
            padding-bottom: 5px;
          }
          .info-row {
            display: flex;
            padding: 8px 0;
            border-bottom: 1px solid #f3f4f6;
          }
          .info-row:last-child {
            border-bottom: none;
          }
          .info-label {
            font-weight: bold;
            color: #6b7280;
            width: 120px;
            flex-shrink: 0;
          }
          .info-value {
            color: #111827;
          }
          .message-box {
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
            border-radius: 6px;
            padding: 15px;
            margin-top: 15px;
          }
          .message-text {
            color: #166534;
            font-style: italic;
          }
          .footer {
            background: #f8fafc;
            padding: 15px 30px;
            text-align: center;
            font-size: 14px;
            color: #6b7280;
            border-top: 1px solid #e5e7eb;
          }
          .timestamp {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 6px;
            padding: 15px;
            text-align: center;
            color: #64748b;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Contact Quote Request</h1>
          </div>
          
          <div class="content">
            <div class="section">
              <h2>Customer Information</h2>
              <div class="info-row">
                <div class="info-label">Name:</div>
                <div class="info-value">${name}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Phone:</div>
                <div class="info-value">${phone}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Email:</div>
                <div class="info-value">${email}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Suburb:</div>
                <div class="info-value">${suburb}</div>
              </div>
            </div>

            <div class="section">
              <h2>Service Information</h2>
              <div class="info-row">
                <div class="info-label">Service:</div>
                <div class="info-value">${service}</div>
              </div>
            </div>

            ${message ? `
            <div class="section">
              <h2>Additional Details</h2>
              <div class="message-box">
                <div class="message-text">"${message}"</div>
              </div>
            </div>
            ` : ''}

            <div class="timestamp">
              Submitted: ${new Date().toLocaleString('en-AU', { 
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'Australia/Sydney'
              })}
            </div>
          </div>

          <div class="footer">
            T47 Pest Control - Professional Pest Control Services
          </div>
        </div>
      </body>
      </html>
    `;

    let emailSent = false;
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

    // Return response
    if (emailSent) {
      return NextResponse.json({
        success: true,
        message: 'Contact quote request submitted successfully',
        details: {
          emailSent,
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
    console.error('Contact Quote API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
