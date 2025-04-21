const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Input and output paths
const inputPath = path.join(__dirname, '../public/images/hero/pest-control-hero.jpg');
const outputWebPPath = path.join(__dirname, '../public/images/hero/optimized/pest-control-hero.webp');
const outputJPGPath = path.join(__dirname, '../public/images/hero/optimized/pest-control-hero.jpg');

// Create directory if it doesn't exist
const dir = path.dirname(outputWebPPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Optimize as WebP (better compression, modern format)
sharp(inputPath)
  .resize({ width: 1920, withoutEnlargement: true }) // Resize to a reasonable max width
  .webp({ quality: 85 }) // Good balance between quality and file size
  .toFile(outputWebPPath)
  .then(info => {
    console.log('WebP Image optimized successfully:');
    console.log(`Original size: ${fs.statSync(inputPath).size / 1024 / 1024} MB`);
    console.log(`WebP size: ${info.size / 1024 / 1024} MB`);
    console.log(`Dimensions: ${info.width} x ${info.height}`);
  })
  .catch(err => console.error('Error optimizing WebP image:', err));

// Also create an optimized JPG version as fallback for browsers that don't support WebP
sharp(inputPath)
  .resize({ width: 1920, withoutEnlargement: true })
  .jpeg({ quality: 85, progressive: true })
  .toFile(outputJPGPath)
  .then(info => {
    console.log('\nJPG Image optimized successfully:');
    console.log(`Original size: ${fs.statSync(inputPath).size / 1024 / 1024} MB`);
    console.log(`JPG size: ${info.size / 1024 / 1024} MB`);
    console.log(`Dimensions: ${info.width} x ${info.height}`);
  })
  .catch(err => console.error('Error optimizing JPG image:', err));
