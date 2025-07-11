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
      console.log('🔍 Looking for alternative input files...');
      
      // Try to find other formats
      const alternatives = [
        path.join(__dirname, '..', 'public', 'bird-control-hero.png'),
        path.join(__dirname, '..', 'public', 'bird-control-hero.jpeg')
      ];
      
      let foundAlternative = null;
      for (const alt of alternatives) {
        if (fs.existsSync(alt)) {
          foundAlternative = alt;
          console.log('✅ Found alternative:', alt);
          break;
        }
      }
      
      if (!foundAlternative) {
        console.error('❌ No suitable input file found for bird-control-hero');
        return;
      }
      
      // Use the alternative
      inputPath = foundAlternative;
    }

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

    console.log('✅ Successfully converted to WebP format!');

    // Get file sizes for comparison
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    
    console.log(`\n📊 File size comparison:`);
    console.log(`   Original: ${(inputStats.size / 1024).toFixed(2)} KB`);
    console.log(`   WebP:     ${(outputStats.size / 1024).toFixed(2)} KB`);
    
    const savings = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(1);
    if (outputStats.size < inputStats.size) {
      console.log(`💾 Size reduction: ${savings}%`);
    } else {
      console.log(`📈 Size increase: ${Math.abs(savings)}%`);
    }

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
