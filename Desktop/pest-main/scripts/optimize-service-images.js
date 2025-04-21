const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Check if the source image exists
const sourceImage = path.join(__dirname, '../public/images/services/sevices.jpg');
if (!fs.existsSync(sourceImage)) {
  console.error('Source image not found:', sourceImage);
  process.exit(1);
}

// Create output directory if it doesn't exist
const outputDir = path.join(__dirname, '../public/images/services/optimized');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Define the service images to create
const serviceImages = [
  {
    name: 'residential-pest-control',
    // Extract the left portion of the image for residential
    extract: { left: 0, top: 0, width: 800, height: 600 }
  },
  {
    name: 'commercial-pest-control',
    // Extract the middle portion of the image for commercial
    extract: { left: 800, top: 0, width: 800, height: 600 }
  },
  {
    name: 'termite-solutions',
    // Extract the right portion of the image for termite
    extract: { left: 1600, top: 0, width: 800, height: 600 }
  }
];

// Process each service image
serviceImages.forEach(service => {
  // Create WebP version
  sharp(sourceImage)
    .extract(service.extract)
    .resize({ width: 800, height: 600, fit: 'cover' })
    .webp({ quality: 85 })
    .toFile(path.join(outputDir, `${service.name}.webp`))
    .then(info => {
      console.log(`WebP Image for ${service.name} created successfully:`);
      console.log(`Dimensions: ${info.width} x ${info.height}`);
      console.log(`Size: ${info.size / 1024} KB`);
    })
    .catch(err => console.error(`Error creating WebP image for ${service.name}:`, err));

  // Create JPG version as fallback
  sharp(sourceImage)
    .extract(service.extract)
    .resize({ width: 800, height: 600, fit: 'cover' })
    .jpeg({ quality: 85, progressive: true })
    .toFile(path.join(outputDir, `${service.name}.jpg`))
    .then(info => {
      console.log(`JPG Image for ${service.name} created successfully:`);
      console.log(`Dimensions: ${info.width} x ${info.height}`);
      console.log(`Size: ${info.size / 1024} KB`);
    })
    .catch(err => console.error(`Error creating JPG image for ${service.name}:`, err));
});
