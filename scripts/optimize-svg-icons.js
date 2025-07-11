/**
 * SVG Optimization Script
 * 
 * This script optimizes all SVG files in the public directory:
 * 1. Removes unnecessary attributes and metadata
 * 2. Removes gray backgrounds
 * 3. Optimizes file size
 * 4. Ensures consistent styling
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);

// Directory to scan for SVG files
const PUBLIC_DIR = path.join(__dirname, '../public');

// Function to recursively find all SVG files
async function findSvgFiles(dir) {
  const files = await readdir(dir);
  const svgFiles = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = await stat(filePath);

    if (stats.isDirectory()) {
      const nestedSvgFiles = await findSvgFiles(filePath);
      svgFiles.push(...nestedSvgFiles);
    } else if (file.toLowerCase().endsWith('.svg')) {
      svgFiles.push(filePath);
    }
  }

  return svgFiles;
}

// Function to optimize an SVG file
async function optimizeSvg(filePath) {
  try {
    console.log(`Optimizing: ${filePath}`);
    
    // Read the SVG file
    let svgContent = await readFile(filePath, 'utf8');
    
    // Remove gray backgrounds
    svgContent = svgContent
      .replace(/fill="#f3f4f6"/gi, 'fill="transparent"')
      .replace(/fill="#F3F4F6"/gi, 'fill="transparent"')
      .replace(/fill="#e5e7eb"/gi, 'fill="transparent"')
      .replace(/fill="#E5E7EB"/gi, 'fill="transparent"')
      .replace(/fill="#d1d5db"/gi, 'fill="transparent"')
      .replace(/fill="#D1D5DB"/gi, 'fill="transparent"')
      .replace(/fill="#9ca3af"/gi, 'fill="transparent"')
      .replace(/fill="#9CA3AF"/gi, 'fill="transparent"')
      .replace(/background-color:[^;]+;/g, 'background-color:transparent;')
      .replace(/enable-background:[^"]+"/g, 'enable-background:new 0 0 100 100"');
    
    // Remove unnecessary attributes
    svgContent = svgContent
      .replace(/<metadata>[\s\S]*?<\/metadata>/gi, '')
      .replace(/<\?xml[^>]*\?>/gi, '')
      .replace(/<!-- Generator:[^>]*-->/gi, '')
      .replace(/id="[^"]*"/gi, '')
      .replace(/data-name="[^"]*"/gi, '')
      .replace(/xmlns:xlink="[^"]*"/gi, '')
      .replace(/xml:space="[^"]*"/gi, '');
    
    // Ensure SVG has proper viewBox and remove fixed dimensions
    if (!svgContent.includes('viewBox') && (svgContent.includes('width=') || svgContent.includes('height='))) {
      const widthMatch = svgContent.match(/width="([^"]*)"/);
      const heightMatch = svgContent.match(/height="([^"]*)"/);
      
      if (widthMatch && heightMatch) {
        const width = widthMatch[1].replace(/[^\d.]/g, '');
        const height = heightMatch[1].replace(/[^\d.]/g, '');
        
        if (width && height) {
          svgContent = svgContent.replace(/<svg/, `<svg viewBox="0 0 ${width} ${height}"`);
        }
      }
    }
    
    // Add proper styling for transparent background
    if (!svgContent.includes('<style')) {
      svgContent = svgContent.replace(/<svg/, '<svg style="background-color:transparent;"');
    } else {
      svgContent = svgContent.replace(/<style[^>]*>/, match => 
        `${match}\n    svg { background-color: transparent; }\n  `
      );
    }
    
    // Write the optimized SVG back to the file
    await writeFile(filePath, svgContent, 'utf8');
    console.log(`✓ Optimized: ${filePath}`);
    
    return true;
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error);
    return false;
  }
}

// Main function
async function main() {
  try {
    console.log('Finding SVG files...');
    const svgFiles = await findSvgFiles(PUBLIC_DIR);
    console.log(`Found ${svgFiles.length} SVG files.`);
    
    let successCount = 0;
    let failCount = 0;
    
    for (const filePath of svgFiles) {
      const success = await optimizeSvg(filePath);
      if (success) {
        successCount++;
      } else {
        failCount++;
      }
    }
    
    console.log('\nOptimization complete!');
    console.log(`✓ Successfully optimized: ${successCount} files`);
    if (failCount > 0) {
      console.log(`✗ Failed to optimize: ${failCount} files`);
    }
  } catch (error) {
    console.error('Error in main process:', error);
  }
}

// Run the script
main();
