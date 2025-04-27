const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertToWebP() {
  try {
    const inputPath = path.join(__dirname, 'public', 'cockroach-control-hero.jpg');
    const outputPath = path.join(__dirname, 'public', 'cockroach-control-hero.webp');

    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.error(`Input file not found: ${inputPath}`);
      return;
    }

    // Convert image to WebP with 80% quality
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`Successfully converted image to WebP: ${outputPath}`);

    // Get file sizes for comparison
    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(outputPath).size;

    console.log(`Original size: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`WebP size: ${(webpSize / 1024).toFixed(2)} KB`);
    console.log(`Reduction: ${(100 - (webpSize / originalSize) * 100).toFixed(2)}%`);
  } catch (error) {
    console.error('Error converting image:', error);
  }
}

convertToWebP();
