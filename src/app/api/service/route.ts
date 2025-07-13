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
      <h2>${isOfferRedemption ? '🎯 Offer Redemption - Service Booking Request' : 'New Service Booking Request'}</h2>

      ${offerSection}

      <h3>Customer Details:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Suburb:</strong> ${suburb || 'Not specified'}</p>

      <h3>Service Information:</h3>
      <p><strong>Services Requested:</strong> ${servicesRequested}</p>
      <p><strong>Customer's Pest Concerns:</strong> ${pestConcern || 'Not specified'}</p>

      <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>

      ${isOfferRedemption ? '<p style="color: #10b981; font-weight: bold;">⚡ Priority: This is an offer redemption - follow up promptly!</p>' : ''}
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
