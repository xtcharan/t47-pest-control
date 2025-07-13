# Google Analytics 4 Setup Guide for T47 Pest Control

## Overview
This guide will help you set up Google Analytics 4 (GA4) for the T47 Pest Control website to track user behavior, conversions, and business metrics.

## Step 1: Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Create an account:
   - Account name: "T47 Pest Control"
   - Country: Australia
   - Currency: Australian Dollar (AUD)
   - Accept the terms of service

## Step 2: Set Up Property
1. Property name: "T47 Pest Control Website"
2. Reporting time zone: Australia/Sydney
3. Currency: Australian Dollar (AUD)
4. Industry category: "Professional Services"
5. Business size: Select appropriate size
6. Click "Create"

## Step 3: Create Data Stream
1. Choose "Web" platform
2. Website URL: `https://www.t47pestcontrol.com`
3. Stream name: "T47 Pest Control Main Site"
4. Click "Create stream"
5. **Copy the Measurement ID** (starts with G-) - you'll need this!

## Step 4: Configure Environment Variables
1. Copy `.env.example` to `.env.local`
2. Replace `G-XXXXXXXXXX` with your actual Measurement ID:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOUR-ACTUAL-ID
   ```
3. For development testing (optional):
   ```
   NEXT_PUBLIC_ENABLE_ANALYTICS=true
   ```

## Step 5: Deploy and Verify
1. Deploy your application with the new environment variables
2. Visit your website
3. In Google Analytics, go to "Realtime" reports
4. You should see your visit appear within a few minutes

## Step 6: Configure Goals and Conversions
Set up these important conversions for pest control business:

### Primary Conversions:
1. **Quote Requests**
   - Event name: `quote_request`
   - Mark as conversion: Yes

2. **Phone Calls**
   - Event name: `phone_call`
   - Mark as conversion: Yes

3. **Service Bookings**
   - Event name: `purchase`
   - Mark as conversion: Yes

4. **Form Submissions**
   - Event name: `form_submit`
   - Mark as conversion: Yes

### Secondary Events:
- Service inquiries
- Pest identification requests
- Emergency requests
- Inspection bookings

## Step 7: Set Up Custom Dimensions
Configure these custom dimensions in GA4:

1. **Service Type** (custom_dimension_1)
   - Scope: Event
   - Description: Type of pest control service

2. **Location** (custom_dimension_2)
   - Scope: Event
   - Description: Service location/area

3. **Pest Type** (custom_dimension_3)
   - Scope: Event
   - Description: Type of pest being treated

4. **Customer Type** (custom_dimension_4)
   - Scope: Event
   - Description: Residential or Commercial

5. **Urgency** (custom_dimension_5)
   - Scope: Event
   - Description: Emergency or Scheduled service

## Step 8: Enhanced Ecommerce Setup
For service booking tracking:
1. Enable Enhanced Ecommerce in GA4
2. Configure item categories:
   - Residential Pest Control
   - Commercial Pest Control
   - Termite Solutions
   - Pest Inspections
   - Emergency Services

## Step 9: Link with Google Ads (Optional)
If running Google Ads:
1. In GA4, go to Admin > Google Ads Linking
2. Link your Google Ads account
3. Enable auto-tagging
4. Import conversions to Google Ads

## Step 10: Set Up Audiences
Create these audiences for remarketing:

1. **Service Inquirers**
   - Users who viewed service pages but didn't convert

2. **Quote Requesters**
   - Users who requested quotes

3. **Emergency Service Visitors**
   - Users who visited emergency service pages

4. **Location-Based Audiences**
   - Users from specific service areas

## Privacy and Compliance
The implementation includes:
- ✅ IP anonymization
- ✅ Disabled Google Signals
- ✅ Disabled ad personalization
- ✅ Cookie consent ready
- ✅ GDPR compliant settings

## Testing and Validation
### Development Testing:
1. Set `NEXT_PUBLIC_ENABLE_ANALYTICS=true` in `.env.local`
2. Use Google Analytics DebugView
3. Check browser console for tracking events

### Production Validation:
1. Use Google Tag Assistant
2. Check Real-time reports in GA4
3. Verify conversion tracking
4. Test all tracking functions

## Monitoring and Maintenance
### Weekly Tasks:
- Check Real-time reports for issues
- Review top pages and traffic sources
- Monitor conversion rates

### Monthly Tasks:
- Analyze service inquiry patterns
- Review location-based performance
- Check mobile vs desktop usage
- Optimize based on user behavior

### Quarterly Tasks:
- Review and update conversion goals
- Analyze seasonal pest control trends
- Update audience definitions
- Review privacy compliance

## Troubleshooting
### Common Issues:
1. **No data appearing**: Check Measurement ID and deployment
2. **Events not tracking**: Verify event implementation
3. **Conversions not recording**: Check conversion configuration
4. **Real-time not working**: Clear cache and check network

### Debug Tools:
- Google Analytics DebugView
- Browser Developer Tools
- Google Tag Assistant
- GA4 Real-time reports

## Support Resources
- [GA4 Help Center](https://support.google.com/analytics/answer/10089681)
- [GA4 Developer Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Google Analytics Academy](https://analytics.google.com/analytics/academy/)

## Contact
For technical support with this setup:
- Email: t47pestcontrol@gmail.com
- Phone: +61 434300216

---
*This guide was created for T47 Pest Control's analytics implementation. Last updated: January 15, 2025*
