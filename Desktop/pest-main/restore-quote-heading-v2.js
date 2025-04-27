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
  
  // Look for the pattern where the heading should be
  const pattern = /<div className="w-full max-w-md mx-auto bg-\[#111\] p-6 rounded-xl shadow-lg border border-[^"]*\/20">\s*<QuoteForm \/>/g;
  
  // Replace with the heading added back
  const updatedContent = content.replace(
    pattern,
    match => {
      const divEndIndex = match.indexOf('>') + 1;
      const divPart = match.substring(0, divEndIndex);
      const restPart = match.substring(divEndIndex);
      
      return `${divPart}
            <h3 className="text-xl font-semibold text-white mb-5 text-center">Get a Free Quote Now</h3>${restPart}`;
    }
  );
  
  // Write the updated content back to the file
  fs.writeFileSync(filePath, updatedContent, 'utf8');
  
  console.log(`Updated ${file}`);
});

console.log('All hero components updated successfully!');
