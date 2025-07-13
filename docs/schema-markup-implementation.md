# Schema Markup Implementation Guide for T47 Pest Control

## Overview
Schema markup (structured data) helps search engines understand your content better, leading to rich snippets and improved search visibility. This guide covers the implementation for T47 Pest Control.

## Implemented Schema Types

### 1. Organization Schema
**Location**: Main layout (`src/app/layout.tsx`)
**Purpose**: Defines the business entity and core information
**Benefits**: 
- Knowledge panel in search results
- Business information display
- Social media links
- Contact information

### 2. Website Schema
**Location**: Homepage (`src/app/page.tsx`)
**Purpose**: Defines the website and enables site search
**Benefits**:
- Sitelinks search box
- Website navigation
- Search functionality

### 3. Local Business Schema
**Usage**: Location-specific pages
**Purpose**: Local SEO optimization
**Benefits**:
- Local search results
- Google My Business integration
- Location-based queries
- Business hours display

### 4. Professional Service Schema
**Usage**: Individual service pages
**Purpose**: Service-specific information
**Benefits**:
- Service-specific rich snippets
- Pricing information
- Availability details
- Service area coverage

### 5. Article Schema
**Usage**: Blog posts
**Purpose**: Content article markup
**Benefits**:
- Article rich snippets
- Author information
- Publication dates
- Article categorization

### 6. FAQ Schema
**Usage**: FAQ pages
**Purpose**: Question and answer markup
**Benefits**:
- FAQ rich snippets in search
- Direct answers in search results
- Improved click-through rates

### 7. Breadcrumb Schema
**Usage**: All pages with breadcrumbs
**Purpose**: Navigation structure
**Benefits**:
- Breadcrumb display in search results
- Site structure understanding
- Navigation enhancement

## Implementation Examples

### Adding Schema to Service Pages
```tsx
import { ProfessionalServiceSchema } from "@/components/seo/SchemaMarkup";

export default function AntControlPage() {
  const serviceData = {
    name: "Ant Control",
    description: "Professional ant control and extermination services",
    type: "Pest Control",
    url: "https://www.t47pestcontrol.com/residential/ants",
    image: "https://www.t47pestcontrol.com/ant-control-hero.webp"
  };

  return (
    <>
      <ProfessionalServiceSchema service={serviceData} />
      <main>
        {/* Page content */}
      </main>
    </>
  );
}
```

### Adding Schema to Blog Posts
```tsx
import SchemaMarkup from "@/components/seo/SchemaMarkup";

export default function BlogPost() {
  const articleData = {
    title: "Australian Ant Species Control Guide",
    description: "Complete guide to identifying and controlling Australian ant species",
    image: "https://www.t47pestcontrol.com/ant-control-hero.webp",
    publishDate: "2024-12-19",
    url: "https://www.t47pestcontrol.com/blog/australian-ant-species-control-guide",
    keywords: ["ants", "pest control", "australia", "identification"]
  };

  return (
    <>
      <SchemaMarkup type="article" data={articleData} />
      <main>
        {/* Article content */}
      </main>
    </>
  );
}
```

### Adding FAQ Schema
```tsx
import SchemaMarkup from "@/components/seo/SchemaMarkup";

export default function FAQPage() {
  const faqData = {
    questions: [
      {
        question: "How quickly can you respond to pest emergencies?",
        answer: "We provide 24/7 emergency pest control services and can typically respond within 2-4 hours for urgent situations."
      },
      {
        question: "Are your treatments safe for pets and children?",
        answer: "Yes, we use eco-friendly, low-toxicity treatments that are safe for families and pets when applied correctly."
      }
    ]
  };

  return (
    <>
      <SchemaMarkup type="faq" data={faqData} />
      <main>
        {/* FAQ content */}
      </main>
    </>
  );
}
```

### Adding Breadcrumb Schema
```tsx
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export default function ServicePage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.t47pestcontrol.com/" },
    { name: "Residential Services", url: "https://www.t47pestcontrol.com/residential" },
    { name: "Ant Control", url: "https://www.t47pestcontrol.com/residential/ants" }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <main>
        {/* Page content */}
      </main>
    </>
  );
}
```

## Testing and Validation

### Google Rich Results Test
1. Go to [Rich Results Test](https://search.google.com/test/rich-results)
2. Enter your page URL
3. Check for valid structured data
4. Fix any errors or warnings

### Schema Markup Validator
1. Go to [Schema.org Validator](https://validator.schema.org/)
2. Enter your page URL or paste the JSON-LD code
3. Validate the markup structure
4. Ensure all required properties are present

### Google Search Console
1. Monitor "Enhancements" section
2. Check for structured data errors
3. Track rich results performance
4. Monitor click-through rates

## Best Practices

### 1. Accuracy
- Ensure all information matches your website content
- Keep contact information consistent
- Update business hours and service areas regularly

### 2. Completeness
- Fill in all relevant properties
- Include images with proper URLs
- Add comprehensive service descriptions

### 3. Consistency
- Use consistent naming across all schema types
- Maintain uniform URL structures
- Keep business information synchronized

### 4. Performance
- Use JSON-LD format (already implemented)
- Place schema in document head when possible
- Avoid duplicate schema markup

## Monitoring and Maintenance

### Weekly Tasks
- Check Google Search Console for structured data errors
- Monitor rich results performance
- Verify schema markup on new pages

### Monthly Tasks
- Update business information if changed
- Review and optimize service descriptions
- Check competitor schema implementations

### Quarterly Tasks
- Audit all schema markup for accuracy
- Update service offerings and pricing
- Review and improve rich snippet performance

## Common Issues and Solutions

### Issue: Schema Not Appearing in Search Results
**Solutions**:
- Verify markup with testing tools
- Ensure content matches schema data
- Wait for Google to re-crawl (can take weeks)
- Check for manual actions in Search Console

### Issue: Validation Errors
**Solutions**:
- Use required properties for each schema type
- Ensure proper URL formats
- Validate image URLs and accessibility
- Check date formats (ISO 8601)

### Issue: Inconsistent Information
**Solutions**:
- Audit all schema markup across the site
- Create a central configuration file
- Use consistent business information
- Regular maintenance schedule

## Future Enhancements

### Additional Schema Types to Consider
1. **Review Schema**: For customer testimonials
2. **Event Schema**: For pest control workshops or seasonal services
3. **Product Schema**: For pest control products
4. **Video Schema**: For educational content
5. **How-to Schema**: For DIY pest prevention guides

### Advanced Features
1. **Dynamic Schema Generation**: Based on CMS content
2. **Automated Testing**: CI/CD pipeline integration
3. **Performance Monitoring**: Track rich results impact
4. **A/B Testing**: Different schema approaches

## Resources
- [Schema.org Documentation](https://schema.org/)
- [Google Structured Data Guidelines](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data)
- [JSON-LD Specification](https://json-ld.org/)
- [Rich Results Test Tool](https://search.google.com/test/rich-results)

---
*This guide was created for T47 Pest Control's SEO implementation. Last updated: January 15, 2025*
