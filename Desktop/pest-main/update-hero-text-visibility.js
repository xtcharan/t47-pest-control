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
  
  // Update text colors to ensure visibility
  let updatedContent = content;
  
  // Update paragraph text color from gray-200 to white for better visibility
  updatedContent = updatedContent.replace(/text-gray-200/g, 'text-white');
  
  // Add text-white class to list item text if not already present
  updatedContent = updatedContent.replace(
    /<span>(.*?)<\/span>/g, 
    (match, p1) => {
      if (match.includes('className="text-white"')) {
        return match;
      }
      return `<span className="text-white">${p1}</span>`;
    }
  );
  
  // Increase spacing between list items for better readability
  updatedContent = updatedContent.replace(/space-y-2/g, 'space-y-4');
  
  // Write the updated content back to the file
  fs.writeFileSync(filePath, updatedContent, 'utf8');
  
  console.log(`Updated ${file}`);
});

console.log('All hero components updated successfully!');
