const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const {
      quality = 85,
      width = null,
      height = null,
      format = 'jpeg'
    } = options;

    let pipeline = sharp(inputPath);

    // Resize if dimensions provided
    if (width || height) {
      pipeline = pipeline.resize(width, height, {
        fit: 'cover',
        position: 'center'
      });
    }

    // Apply format-specific optimizations
    if (format === 'jpeg') {
      pipeline = pipeline.jpeg({
        quality,
        progressive: true,
        mozjpeg: true
      });
    } else if (format === 'webp') {
      pipeline = pipeline.webp({
        quality,
        effort: 6
      });
    }

    await pipeline.toFile(outputPath);
    
    // Get file sizes for comparison
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ Optimized: ${path.basename(inputPath)}`);
    console.log(`   Original: ${(originalSize / 1024).toFixed(1)}KB`);
    console.log(`   Optimized: ${(optimizedSize / 1024).toFixed(1)}KB`);
    console.log(`   Savings: ${savings}%`);
    
    return { originalSize, optimizedSize, savings };
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    throw error;
  }
}

async function optimizeRodentControlImage() {
  const inputFile = 'public/rodent-control-process.jpg';
  const outputDir = 'public';

  if (!fs.existsSync(inputFile)) {
    console.error(`❌ Input file not found: ${inputFile}`);
    return;
  }

  console.log('🔄 Optimizing rodent-control-process.jpg...\n');

  try {
    // Create optimized JPEG version
    await optimizeImage(
      inputFile,
      path.join(outputDir, 'rodent-control-process-optimized.jpg'),
      { quality: 85 }
    );

    // Create WebP version
    await optimizeImage(
      inputFile,
      path.join(outputDir, 'rodent-control-process.webp'),
      { quality: 85, format: 'webp' }
    );

    console.log('\n✅ All optimizations complete!');
    console.log('\nGenerated files:');
    console.log('- rodent-control-process-optimized.jpg (optimized JPEG)');
    console.log('- rodent-control-process.webp (WebP format)');

  } catch (error) {
    console.error('❌ Optimization failed:', error.message);
  }
}

async function optimizeMosquitoControlHeroImage() {
  const inputFile = 'public/mosquito-control-hero.jpg';
  const outputDir = 'public';

  if (!fs.existsSync(inputFile)) {
    console.error(`❌ Input file not found: ${inputFile}`);
    return;
  }

  console.log('🔄 Optimizing mosquito-control-hero.jpg...\n');

  try {
    // Create WebP version for hero section
    await optimizeImage(
      inputFile,
      path.join(outputDir, 'mosquito-control-hero.webp'),
      { quality: 85, format: 'webp' }
    );

    console.log('\n✅ Mosquito control hero optimization complete!');
    console.log('\nGenerated files:');
    console.log('- mosquito-control-hero.webp (WebP format for hero section)');

  } catch (error) {
    console.error('❌ Optimization failed:', error.message);
  }
}

async function optimizeSilverfishControlHeroImage() {
  const inputFile = 'public/silverfish-control-hero.jpg';
  const outputDir = 'public';

  if (!fs.existsSync(inputFile)) {
    console.error(`❌ Input file not found: ${inputFile}`);
    return;
  }

  console.log('🔄 Optimizing silverfish-control-hero.jpg...\n');

  try {
    // Create WebP version for hero section
    await optimizeImage(
      inputFile,
      path.join(outputDir, 'silverfish-control-hero.webp'),
      { quality: 85, format: 'webp' }
    );

    console.log('\n✅ Silverfish control hero optimization complete!');
    console.log('\nGenerated files:');
    console.log('- silverfish-control-hero.webp (WebP format for hero section)');

  } catch (error) {
    console.error('❌ Optimization failed:', error.message);
  }
}

async function optimizeRestaurantControlHeroImage() {
  const inputFile = 'public/restaurant-pest-control-hero.jpg';
  const outputDir = 'public';

  if (!fs.existsSync(inputFile)) {
    console.error(`❌ Input file not found: ${inputFile}`);
    return;
  }

  console.log('🔄 Optimizing restaurant-pest-control-hero.jpg...\n');

  try {
    // Create WebP version for hero section
    await optimizeImage(
      inputFile,
      path.join(outputDir, 'restaurant-pest-control-hero.webp'),
      { quality: 85, format: 'webp', width: 1920 }
    );

    console.log('\n✅ Restaurant pest control hero optimization complete!');
    console.log('\nGenerated files:');
    console.log('- restaurant-pest-control-hero.webp (WebP format for hero section)');

  } catch (error) {
    console.error('❌ Optimization failed:', error.message);
  }
}

// Run if called directly
if (require.main === module) {
  // Check command line arguments
  const args = process.argv.slice(2);
  if (args.includes('--mosquito-hero')) {
    optimizeMosquitoControlHeroImage();
  } else if (args.includes('--silverfish-hero')) {
    optimizeSilverfishControlHeroImage();
  } else if (args.includes('--rodent')) {
    optimizeRodentControlImage();
  } else if (args.includes('--restaurant-hero')) {
    optimizeRestaurantControlHeroImage();
  } else {
    console.log('Usage:');
    console.log('  node scripts/optimize-image.js --mosquito-hero   # Convert mosquito hero to WebP');
    console.log('  node scripts/optimize-image.js --silverfish-hero # Convert silverfish hero to WebP');
    console.log('  node scripts/optimize-image.js --rodent          # Optimize rodent control images');
    console.log('  node scripts/optimize-image.js --restaurant-hero # Convert restaurant hero to WebP');
  }
}

module.exports = { optimizeImage, optimizeRodentControlImage, optimizeMosquitoControlHeroImage, optimizeSilverfishControlHeroImage };
