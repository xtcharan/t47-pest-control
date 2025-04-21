const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Define the service images to optimize
const serviceImages = [
  {
    name: 'residential-pest-control',
    inputPath: path.join(__dirname, '../public/images/services/optimized/residential-pest-control.jpg'),
  },
  {
    name: 'commercial-pest-control',
    inputPath: path.join(__dirname, '../public/images/services/optimized/commercial-pest-control.jpg'),
  },
  {
    name: 'termite-solutions',
    inputPath: path.join(__dirname, '../public/images/services/optimized/termite-solutions.webp'),
    isWebp: true
  }
];

// Output directory
const outputDir = path.join(__dirname, '../public/images/services/optimized');
const tempDir = path.join(__dirname, '../temp');

// Create output and temp directories if they don't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

// Process each service image
serviceImages.forEach(service => {
  if (!fs.existsSync(service.inputPath)) {
    console.error(`Input file not found: ${service.inputPath}`);
    return;
  }

  const outputWebPPath = path.join(outputDir, `${service.name}.webp`);
  const outputJPGPath = path.join(outputDir, `${service.name}.jpg`);
  const tempWebPPath = path.join(tempDir, `${service.name}.webp`);
  const tempJPGPath = path.join(tempDir, `${service.name}.jpg`);
  
  // Get original file size
  const originalSize = fs.statSync(service.inputPath).size;
  
  // Create optimized WebP version
  sharp(service.inputPath)
    .resize({ width: 800, height: 600, fit: 'cover' })
    .webp({ quality: 85 })
    .toFile(tempWebPPath)
    .then(info => {
      // Move the temp file to the final location
      fs.renameSync(tempWebPPath, outputWebPPath);
      
      console.log(`WebP Image for ${service.name} created successfully:`);
      console.log(`Original size: ${originalSize / 1024 / 1024} MB`);
      console.log(`WebP size: ${info.size / 1024 / 1024} MB`);
      console.log(`Dimensions: ${info.width} x ${info.height}`);
    })
    .catch(err => console.error(`Error creating WebP image for ${service.name}:`, err));

  // Create optimized JPG version
  sharp(service.inputPath)
    .resize({ width: 800, height: 600, fit: 'cover' })
    .jpeg({ quality: 85, progressive: true })
    .toFile(tempJPGPath)
    .then(info => {
      // Move the temp file to the final location
      fs.renameSync(tempJPGPath, outputJPGPath);
      
      console.log(`JPG Image for ${service.name} created successfully:`);
      console.log(`Original size: ${originalSize / 1024 / 1024} MB`);
      console.log(`JPG size: ${info.size / 1024 / 1024} MB`);
      console.log(`Dimensions: ${info.width} x ${info.height}`);
    })
    .catch(err => console.error(`Error creating JPG image for ${service.name}:`, err));
});
