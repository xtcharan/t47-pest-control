const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Input and output paths
const inputPath = path.join(__dirname, '../public/wasp-control-hero.jpg');
const outputWebPPath = path.join(__dirname, '../public/wasp-control-hero.webp');

// Check if input file exists
if (!fs.existsSync(inputPath)) {
  console.error(`Input file not found: ${inputPath}`);
  process.exit(1);
}

// Get original file size
const originalSize = fs.statSync(inputPath).size;

// Optimize as WebP (better compression, modern format)
sharp(inputPath)
  .resize({ width: 1920, withoutEnlargement: true }) // Resize to a reasonable max width
  .webp({ quality: 85 }) // Good balance between quality and file size
  .toFile(outputWebPPath)
  .then(info => {
    console.log('WebP Image optimized successfully:');
    console.log(`Original size: ${originalSize / 1024 / 1024} MB`);
    console.log(`WebP size: ${info.size / 1024 / 1024} MB`);
    console.log(`Dimensions: ${info.width} x ${info.height}`);
    console.log(`WebP file saved to: ${outputWebPPath}`);
  })
  .catch(err => console.error('Error optimizing WebP image:', err));
