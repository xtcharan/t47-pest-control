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
      serviceTypes
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

    // Create email content
    const emailSubject = `New Service Booking from ${name}`;
    const emailHtml = `
      <h2>New Service Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Suburb:</strong> ${suburb || 'Not specified'}</p>
      <p><strong>Services Requested:</strong> ${servicesRequested}</p>
      <p><strong>Pest Concern Details:</strong> ${pestConcern || 'Not specified'}</p>
      <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
    `;

    // Create SMS content
    const smsMessage = `New Service Booking: ${name} (${mobile}) from ${suburb || 'Unknown suburb'} - Services: ${servicesRequested}. Email: ${email}`;

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
