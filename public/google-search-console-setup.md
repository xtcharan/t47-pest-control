# Google Search Console Setup Guide for T47 Pest Control

## Overview
This guide will help you set up Google Search Console for t47pestcontrol.com to monitor search performance, submit sitemaps, and identify SEO issues.

## Step 1: Access Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Sign in with your Google account (use the same account that will manage the website)

## Step 2: Add Property
1. Click "Add Property" 
2. Choose "URL prefix" method
3. Enter: `https://www.t47pestcontrol.com`
4. Click "Continue"

## Step 3: Verify Ownership
Google will provide several verification methods. Choose one of the following:

### Method 1: HTML File Upload (Recommended)
1. Download the HTML verification file provided by Google (e.g., `google1234567890abcdef.html`)
2. Upload this file to the `public` folder of your Next.js project
3. The file should be accessible at: `https://www.t47pestcontrol.com/google1234567890abcdef.html`
4. Click "Verify" in Google Search Console

### Method 2: HTML Meta Tag
1. Copy the meta tag provided by Google
2. Add it to the `<head>` section of your website's main layout file (`src/app/layout.tsx`)
3. Example: `<meta name="google-site-verification" content="your-verification-code" />`
4. Deploy the changes
5. Click "Verify" in Google Search Console

### Method 3: Google Analytics (if already set up)
1. If you have Google Analytics already installed, you can use this method
2. Select "Google Analytics" verification method
3. Follow the prompts

### Method 4: Google Tag Manager (if already set up)
1. If you have Google Tag Manager installed, you can use this method
2. Select "Google Tag Manager" verification method
3. Follow the prompts

## Step 4: Submit Sitemap
Once verified:
1. In Google Search Console, go to "Sitemaps" in the left sidebar
2. Click "Add a new sitemap"
3. Enter: `sitemap.xml`
4. Click "Submit"

The sitemap URL will be: `https://www.t47pestcontrol.com/sitemap.xml`

## Step 5: Set Up Additional Properties (Optional but Recommended)
Consider adding these additional properties for comprehensive coverage:
1. `https://t47pestcontrol.com` (without www)
2. `http://www.t47pestcontrol.com` (HTTP version)
3. `http://t47pestcontrol.com` (HTTP without www)

## Step 6: Configure Settings
1. **Preferred Domain**: Set www.t47pestcontrol.com as the preferred domain
2. **Geographic Target**: Set to Australia in International Targeting
3. **Crawl Rate**: Leave as default (Let Google optimize)

## Step 7: Monitor and Maintain
Regular tasks to perform:
1. **Weekly**: Check for crawl errors and coverage issues
2. **Monthly**: Review search performance and top queries
3. **Quarterly**: Analyze mobile usability and Core Web Vitals
4. **As needed**: Submit new sitemaps when adding significant content

## Important Files Created
- `sitemap.xml` - Comprehensive sitemap with all pages
- `robots.txt` - Already configured to reference the sitemap

## Expected Timeline
- **Verification**: Immediate
- **First data**: 1-3 days
- **Full indexing**: 1-4 weeks
- **Complete data**: 4-8 weeks

## Troubleshooting
### Common Issues:
1. **Verification fails**: Ensure the verification file is accessible and not blocked by robots.txt
2. **Sitemap errors**: Check that sitemap.xml is valid XML and accessible
3. **Coverage issues**: Review any crawl errors and fix broken links
4. **Mobile usability**: Ensure responsive design works properly

### Support Resources:
- [Google Search Console Help](https://support.google.com/webmasters/)
- [Google Search Central](https://developers.google.com/search)
- [Sitemap Protocol](https://www.sitemaps.org/protocol.html)

## Next Steps After Setup
1. Set up Google Analytics (if not already done)
2. Configure Google My Business
3. Implement Schema markup
4. Monitor search performance regularly
5. Optimize content based on search queries and performance data

## Contact Information
For technical support with this setup:
- Email: t47pestcontrol@gmail.com
- Phone: +61 434300216

---
*This guide was created for T47 Pest Control's SEO implementation. Last updated: January 15, 2025*
