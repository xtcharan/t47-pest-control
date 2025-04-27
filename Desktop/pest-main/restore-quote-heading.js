const fs = require('fs');
const path = require('path');

// Directory containing hero components
const heroComponentsDir = path.join(__dirname, 'src', 'components', 'hero');

// Get all hero component files
const heroFiles = fs.readdirSync(heroComponentsDir)
  .filter(file => file.endsWith('.tsx') && file.includes('Hero'));

// Process each hero file
heroFiles.forEach(file => {
  const filePath = path.join(heroComponentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the mobile quote form section and add the heading back if it's missing
  const quoteFormPattern = /{\s*\/\* Quote form for mobile - with improved card-like styling \*\/\s*}\s*<div[^>]*>\s*<QuoteForm \/>/g;
  
  // Replace with the heading added back
  const updatedContent = content.replace(
    quoteFormPattern,
    match => {
      // Extract the div opening tag
      const divTagMatch = match.match(/<div[^>]*>/);
      if (divTagMatch) {
        const divTag = divTagMatch[0];
        return `{/* Quote form for mobile - with improved card-like styling */}
            ${divTag}
            <h3 className="text-xl font-semibold text-white mb-5 text-center">Get a Free Quote Now</h3>
            <QuoteForm />`;
      }
      return match;
    }
  );
  
  // Write the updated content back to the file
  fs.writeFileSync(filePath, updatedContent, 'utf8');
  
  console.log(`Updated ${file}`);
});

console.log('All hero components updated successfully!');
