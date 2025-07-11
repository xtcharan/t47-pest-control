const { optimizeByCategory, IMAGES_TO_OPTIMIZE } = require('./optimize-images.js');

/**
 * Bird Control Image Optimization Script
 * 
 * This script optimizes only bird control related images:
 * - Hero images
 * - Service images  
 * - Solution method images
 * - Species identification images
 */

async function optimizeBirdControlImages() {
  console.log('🐦 BIRD CONTROL IMAGE OPTIMIZATION');
  console.log('==================================');
  console.log(`📅 Started at: ${new Date().toLocaleString()}`);

  // Filter for bird control images
  const birdControlImages = IMAGES_TO_OPTIMIZE.filter(img => 
    img.name.includes('bird-') || 
    img.name.includes('pigeon-') ||
    img.name.includes('starling-') ||
    img.name.includes('sparrow-') ||
    img.name.includes('seagull-') ||
    img.name.includes('woodpecker-') ||
    img.name.includes('geese-')
  );

  console.log(`🎯 Found ${birdControlImages.length} bird control images to optimize:`);
  birdControlImages.forEach(img => {
    console.log(`  • ${img.name} (${img.category})`);
  });

  try {
    // Process each bird control image
    const results = {
      success: 0,
      failed: 0,
      skipped: 0,
      totalOriginalSize: 0,
      totalWebpSize: 0,
      totalJpgSize: 0,
      details: []
    };

    const { optimizeImage } = require('./optimize-images.js');

    for (const imageConfig of birdControlImages) {
      console.log(`\n🔄 Processing: ${imageConfig.name}`);
      const result = await optimizeImage(imageConfig);

      if (result.success) {
        results.success++;
        results.totalOriginalSize += parseFloat(result.original.size);
        results.totalWebpSize += parseFloat(result.results.webp.size);
        results.totalJpgSize += parseFloat(result.results.jpg.size);
      } else if (result.error === 'File not found') {
        results.skipped++;
      } else {
        results.failed++;
      }

      results.details.push({
        name: imageConfig.name,
        category: imageConfig.category,
        result
      });
    }

    // Display summary
    console.log('\n' + '='.repeat(50));
    console.log('🎉 BIRD CONTROL OPTIMIZATION COMPLETED!');
    console.log('='.repeat(50));

    console.log(`\n📊 SUMMARY:`);
    console.log(`✅ Successfully optimized: ${results.success} images`);
    console.log(`⚠️  Skipped (not found): ${results.skipped} images`);
    console.log(`❌ Failed: ${results.failed} images`);

    if (results.success > 0) {
      const totalWebpSavings = ((results.totalOriginalSize - results.totalWebpSize) / results.totalOriginalSize * 100).toFixed(1);
      const totalJpgSavings = ((results.totalOriginalSize - results.totalJpgSize) / results.totalOriginalSize * 100).toFixed(1);

      console.log(`\n💾 TOTAL SIZE SAVINGS:`);
      console.log(`📁 Original total: ${results.totalOriginalSize.toFixed(2)} MB`);
      console.log(`🌐 WebP total: ${results.totalWebpSize.toFixed(2)} MB (${totalWebpSavings}% savings)`);
      console.log(`📷 JPG total: ${results.totalJpgSize.toFixed(2)} MB (${totalJpgSavings}% savings)`);
    }

    if (results.skipped > 0) {
      console.log(`\n⚠️  SKIPPED FILES:`);
      results.details
        .filter(detail => detail.result.error === 'File not found')
        .forEach(detail => {
          console.log(`  • ${detail.name}`);
        });
    }

    if (results.failed > 0) {
      console.log(`\n❌ FAILED FILES:`);
      results.details
        .filter(detail => detail.result.error && detail.result.error !== 'File not found')
        .forEach(detail => {
          console.log(`  • ${detail.name}: ${detail.result.error}`);
        });
    }

    console.log(`\n✅ Bird control image optimization completed!`);
    console.log(`🔄 The hero component should now use optimized images.`);

  } catch (error) {
    console.error('❌ Fatal error during bird control optimization:', error);
    process.exit(1);
  }
}

// Run the optimization
optimizeBirdControlImages().catch(console.error);
