const fs = require('fs');
const path = require('path');

// Directory containing procedure components
const procedureDir = path.join(__dirname, 'src', 'components', 'procedure');

// Get all procedure component files
const procedureFiles = fs.readdirSync(procedureDir)
  .filter(file => file.endsWith('.tsx') && file.includes('Procedure'));

// Process each procedure file
procedureFiles.forEach(file => {
  const filePath = path.join(procedureDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if the file contains the ProcedureStep component
  if (content.includes('ProcedureStep') && content.includes('stepNumber')) {
    // Update the step number display to be aligned in a single line with fixed width
    let updatedContent = content.replace(
      /<span className="text-sm font-medium text-gray-500 w-16 text-right">Step {stepNumber}<\/span>/g,
      '<span className="text-sm font-medium text-gray-500 w-16 text-right inline-block">Step {stepNumber}</span>'
    );
    
    // If the above replacement didn't work, try without the w-16 class
    if (updatedContent === content) {
      updatedContent = content.replace(
        /<span className="text-sm font-medium text-gray-500">Step {stepNumber}<\/span>/g,
        '<span className="text-sm font-medium text-gray-500 w-16 text-right inline-block">Step {stepNumber}</span>'
      );
    }
    
    // Update the description paragraph to be justified
    updatedContent = updatedContent.replace(
      /<p className="text-gray-700 leading-relaxed">{description}<\/p>/g,
      '<p className="text-gray-700 leading-relaxed text-justify">{description}</p>'
    );
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    
    console.log(`Updated ${file}`);
  } else {
    console.log(`Skipped ${file} (no ProcedureStep component or stepNumber found)`);
  }
});

console.log('All procedure components updated successfully!');
