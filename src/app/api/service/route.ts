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
      pestConcern,
      serviceTypes,
      offerContext
    } = body;

    // Validate required fields
    if (!name || !mobile || !email) {
      return NextResponse.json(
        { error: 'Name, mobile, and email are required' },
        { status: 400 }
      );
    }

    // Format service types
    const servicesRequested = Array.isArray(serviceTypes) && serviceTypes.length > 0
      ? serviceTypes.join(', ')
      : 'Not specified';

    // Check if this is from an offer redemption
    const isOfferRedemption = offerContext && offerContext.offerTitle;

    // Create email content with offer tracking
    const emailSubject = isOfferRedemption
      ? `🎯 OFFER REDEEMED: ${offerContext.offerTitle} - ${name}`
      : `New Service Booking from ${name}`;

    const offerSection = isOfferRedemption ? `
      <div style="background-color: #f0f9ff; border-left: 4px solid #10b981; padding: 16px; margin: 16px 0;">
        <h3 style="color: #10b981; margin: 0 0 8px 0;">🎯 OFFER REDEMPTION ALERT</h3>
        <p style="margin: 4px 0;"><strong>Offer:</strong> ${offerContext.offerTitle}</p>
        <p style="margin: 4px 0;"><strong>Price:</strong> Starting from $${offerContext.offerPrice}</p>
        <p style="margin: 4px 0;"><strong>Redeemed At:</strong> ${new Date(offerContext.redeemedAt).toLocaleString()}</p>
        <p style="margin: 4px 0; font-size: 12px; color: #666;">This customer clicked the "REDEEM OFFER" button for this specific service.</p>
      </div>
    ` : '';

    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${isOfferRedemption ? 'Offer Redemption - Service Booking' : 'New Service Booking Request'}</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.5;
            color: #374151;
            max-width: 600px;
            margin: 0 auto;
            background-color: #f9fafb;
            padding: 20px;
          }
          .container {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }
          .header {
            background: ${isOfferRedemption ? '#059669' : '#10b981'};
            color: white;
            padding: 24px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
          }
          .offer-alert {
            background: #fef3c7;
            border: 1px solid #f59e0b;
            border-radius: 6px;
            padding: 16px;
            margin: 24px;
            text-align: center;
          }
          .offer-alert h3 {
            margin: 0 0 12px 0;
            color: #92400e;
            font-size: 18px;
            font-weight: 600;
          }
          .offer-details {
            color: #78350f;
            font-size: 14px;
          }
          .content {
            padding: 32px 24px;
          }
          .section {
            margin-bottom: 32px;
          }
          .section:last-child {
            margin-bottom: 0;
          }
          .section h2 {
            margin: 0 0 16px 0;
            font-size: 18px;
            font-weight: 600;
            color: #111827;
            border-bottom: 2px solid #e5e7eb;
            padding-bottom: 8px;
          }
          .info-row {
            display: flex;
            padding: 12px 0;
            border-bottom: 1px solid #f3f4f6;
          }
          .info-row:last-child {
            border-bottom: none;
          }
          .info-label {
            font-weight: 500;
            color: #6b7280;
            width: 140px;
            flex-shrink: 0;
          }
          .info-value {
            color: #111827;
            font-weight: 500;
          }
          .pest-concern {
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
            border-radius: 6px;
            padding: 16px;
            margin-top: 16px;
          }
          .pest-concern-text {
            font-style: italic;
            color: #166534;
            line-height: 1.6;
          }
          .timestamp {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 6px;
            padding: 16px;
            text-align: center;
            color: #64748b;
            font-size: 14px;
          }
          .footer {
            background: #f8fafc;
            padding: 16px 24px;
            text-align: center;
            font-size: 14px;
            color: #6b7280;
            border-top: 1px solid #e5e7eb;
          }
          .priority-note {
            background: #fef2f2;
            border: 1px solid #fecaca;
            color: #991b1b;
            padding: 12px;
            border-radius: 6px;
            margin-top: 16px;
            font-weight: 500;
            text-align: center;
          }
          @media (max-width: 600px) {
            body { padding: 10px; }
            .content { padding: 24px 16px; }
            .offer-alert { margin: 16px; }
            .info-row { flex-direction: column; }
            .info-label { width: auto; margin-bottom: 4px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>${isOfferRedemption ? 'Offer Redemption - Service Booking' : 'New Service Booking Request'}</h1>
          </div>

          ${isOfferRedemption ? `
          <div class="offer-alert">
            <h3>Special Offer Redeemed</h3>
            <div class="offer-details">
              <div><strong>Offer:</strong> ${offerContext.offerTitle}</div>
              <div><strong>Price:</strong> Starting from $${offerContext.offerPrice}</div>
              <div><strong>Redeemed:</strong> ${new Date(offerContext.redeemedAt).toLocaleString('en-AU')}</div>
            </div>
          </div>
          ` : ''}

          <div class="content">
            <div class="section">
              <h2>Customer Information</h2>
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
              <h2>Service Information</h2>
              <div class="info-row">
                <div class="info-label">Services:</div>
                <div class="info-value">${servicesRequested}</div>
              </div>
            </div>

            ${pestConcern && pestConcern !== 'Not specified' ? `
            <div class="section">
              <h2>Pest Concerns</h2>
              <div class="pest-concern">
                <div class="pest-concern-text">"${pestConcern}"</div>
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

            ${isOfferRedemption ? `
            <div class="priority-note">
              URGENT: Offer redemption - Contact within 24 hours for best conversion!
            </div>
            ` : ''}
          </div>

          <div class="footer">
            T47 Pest Control - Professional Pest Control Services
          </div>
        </div>
      </body>
      </html>
    `;

    // Create SMS content with offer tracking
    const smsMessage = isOfferRedemption
      ? `🎯 OFFER REDEEMED: ${offerContext.offerTitle} ($${offerContext.offerPrice}) - ${name} (${mobile}) from ${suburb || 'Unknown suburb'}. Email: ${email}`
      : `New Service Booking: ${name} (${mobile}) from ${suburb || 'Unknown suburb'} - Services: ${servicesRequested}. Email: ${email}`;

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
        message: 'Service booking request submitted successfully',
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
    console.error('Service API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
