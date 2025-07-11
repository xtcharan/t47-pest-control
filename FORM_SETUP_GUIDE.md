# Form Email & SMS Setup Guide

## Overview
Both your forms ("GET A FAST QUOTE NOW" and "Book A Service Now") are now configured to send email and SMS notifications when submitted. Here's how to complete the setup:

## 1. Email Configuration (Gmail)

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled

### Step 2: Generate App Password
1. Go to Google Account > Security > 2-Step Verification
2. Scroll down to "App passwords"
3. Generate a new app password for "Mail"
4. Copy the 16-character password (no spaces)

### Step 3: Update .env.local
Replace these values in your `.env.local` file:
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-actual-email@gmail.com
EMAIL_PASS=your-16-character-app-password
EMAIL_FROM=your-actual-email@gmail.com
EMAIL_TO=t47pestcontrol@gmail.com
```

## 2. SMS Configuration (Twilio)

### Step 1: Create Twilio Account
1. Sign up at https://www.twilio.com
2. Verify your phone number
3. Get $15 free trial credit

### Step 2: Get Credentials
1. From Twilio Console Dashboard, copy:
   - Account SID
   - Auth Token
2. Get a Twilio phone number (free with trial)

### Step 3: Update .env.local
Replace these values in your `.env.local` file:
```
TWILIO_ACCOUNT_SID=your-account-sid
TWILIO_AUTH_TOKEN=your-auth-token
TWILIO_PHONE_NUMBER=+1234567890
SMS_TO_NUMBER=+61434300216
```

## 3. Alternative Email Services

### Outlook/Hotmail
```
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

### Yahoo Mail
```
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_USER=your-email@yahoo.com
EMAIL_PASS=your-app-password
```

## 4. Testing the Forms

### Test Quote Form
1. Fill out the "GET A FAST QUOTE NOW" form
2. Check for success/error messages
3. Verify email received at t47pestcontrol@gmail.com
4. Verify SMS received at +61434300216

### Test Service Form
1. Fill out the "Book A Service Now" form
2. Check for success/error messages
3. Verify email and SMS notifications

## 5. Form Features

### Both forms now include:
- ✅ Real-time form validation
- ✅ Loading states during submission
- ✅ Success/error message display
- ✅ Email notifications with all form data
- ✅ SMS notifications with key details
- ✅ Form reset after successful submission
- ✅ Graceful error handling

### Email Content Includes:
- All form field data
- Timestamp of submission
- Formatted HTML layout

### SMS Content Includes:
- Customer name and phone
- Location (suburb)
- Service type or inquiry type
- Customer email

## 6. Troubleshooting

### Email Issues:
- Check Gmail app password is correct (16 characters, no spaces)
- Verify 2FA is enabled on Gmail account
- Check spam folder for test emails

### SMS Issues:
- Verify Twilio credentials are correct
- Check Twilio console for error logs
- Ensure phone numbers include country codes (+61 for Australia)
- Trial accounts can only send to verified numbers

### Form Issues:
- Check browser console for JavaScript errors
- Verify .env.local file is in project root
- Restart development server after changing .env.local

## 7. Production Deployment

### Environment Variables:
Make sure to set all environment variables in your production environment:
- Vercel: Project Settings > Environment Variables
- Netlify: Site Settings > Environment Variables
- Other hosts: Follow their documentation for env vars

### Security Notes:
- Never commit .env.local to version control
- Use strong passwords and keep credentials secure
- Consider using environment-specific email addresses

## 8. Cost Considerations

### Twilio Pricing (after free trial):
- SMS: ~$0.0075 per message
- Phone number: ~$1/month

### Email:
- Gmail: Free for reasonable usage
- Consider upgrading to paid email service for high volume

## Support
If you encounter issues, check the browser console and server logs for detailed error messages.
