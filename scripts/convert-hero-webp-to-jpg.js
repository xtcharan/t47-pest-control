const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

/**
 * Simple script to convert bird-control-hero.webp to bird-control-hero.jpg
 */

async function convertHeroImage() {
  const inputPath = path.join(__dirname, '..', 'public', 'bird-control-hero.webp');
  const outputPath = path.join(__dirname, '..', 'public', 'bird-control-hero.jpg');

  try {
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.error('❌ Input file not found:', inputPath);
      return;
    }

    // Check if output file already exists
    if (fs.existsSync(outputPath)) {
      console.log('✅ Output file already exists:', outputPath);
      return;
    }

    console.log('🔄 Converting bird-control-hero.webp to bird-control-hero.jpg...');

    // Convert WebP to JPG
    await sharp(inputPath)
      .jpeg({ 
        quality: 85,
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);

    console.log('✅ Successfully converted to:', outputPath);

    // Get file sizes for comparison
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    
    console.log(`📊 File sizes:`);
    console.log(`   WebP: ${(inputStats.size / 1024).toFixed(2)} KB`);
    console.log(`   JPG:  ${(outputStats.size / 1024).toFixed(2)} KB`);

  } catch (error) {
    console.error('❌ Error converting image:', error);
  }
}

// Run the conversion
convertHeroImage();
