const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

/**
 * Convert bee-control-hero.jpg to bee-control-hero.webp
 * This will create an optimized WebP version from the JPG
 */

async function convertBeeControlToWebP() {
  const inputPath = path.join(__dirname, '..', 'public', 'bee-control-hero.jpg');
  const outputPath = path.join(__dirname, '..', 'public', 'bee-control-hero.webp');

  try {
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.error('❌ Input file not found:', inputPath);
      console.log('📋 Please ensure bee-control-hero.jpg exists in the public directory');
      return;
    }

    // Get original file size
    const originalStats = fs.statSync(inputPath);
    const originalSizeMB = (originalStats.size / (1024 * 1024)).toFixed(2);
    console.log(`📊 Original file size: ${originalSizeMB} MB`);

    // Check if output file already exists
    if (fs.existsSync(outputPath)) {
      console.log('⚠️  Output file already exists:', outputPath);
      console.log('🔄 Overwriting existing WebP file...');
    }

    console.log('🔄 Converting bee-control-hero to WebP format...');
    console.log(`📁 Input: ${path.basename(inputPath)}`);
    console.log(`📁 Output: ${path.basename(outputPath)}`);

    // Convert to WebP with high quality optimization
    await sharp(inputPath)
      .webp({ 
        quality: 85,
        effort: 6, // Higher effort for better compression
        lossless: false
      })
      .toFile(outputPath);

    // Get optimized file size
    const optimizedStats = fs.statSync(outputPath);
    const optimizedSizeMB = (optimizedStats.size / (1024 * 1024)).toFixed(2);
    const savings = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(1);

    console.log(`📊 Optimized file size: ${optimizedSizeMB} MB`);
    console.log(`💾 Size reduction: ${savings}%`);

    // Get image dimensions
    const metadata = await sharp(outputPath).metadata();
    console.log(`📐 Dimensions: ${metadata.width} x ${metadata.height}`);

    console.log('\n✅ Bee control hero WebP conversion completed!');
    console.log('🌐 The WebP format provides better compression while maintaining quality.');
    console.log('🔄 The hero component will now use the optimized WebP version.');

  } catch (error) {
    console.error('❌ Error converting to WebP:', error);
  }
}

// Run the conversion
convertBeeControlToWebP();
