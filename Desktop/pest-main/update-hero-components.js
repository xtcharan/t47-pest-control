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
  
  // Replace the heading in the mobile quote form section
  const updatedContent = content.replace(
    /<h3 className="text-xl font-semibold text-white mb-5 text-center">Get a Free Quote Now<\/h3>/g,
    ''
  );
  
  // Replace "How many bedrooms" with "No of Bedrooms" in aria-label and option text
  const bedroomsUpdated = updatedContent.replace(
    /aria-label="How many bedrooms"/g,
    'aria-label="No of Bedrooms"'
  );
  
  const finalContent = bedroomsUpdated.replace(
    /<option value="" disabled>How many bedrooms<\/option>/g,
    '<option value="" disabled>No of Bedrooms</option>'
  );
  
  // Write the updated content back to the file
  fs.writeFileSync(filePath, finalContent, 'utf8');
  
  console.log(`Updated ${file}`);
});

console.log('All hero components updated successfully!');
