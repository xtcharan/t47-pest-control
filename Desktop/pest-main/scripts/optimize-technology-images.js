const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Define the technology images to optimize
const technologyImages = [
  {
    name: 'safe-home-business',
    inputPath: path.join(__dirname, '../public/images/technology/sevices.jpg'),
  },
  {
    name: 'latest-technology',
    inputPath: path.join(__dirname, '../public/images/technology/tech.jpg'),
  },
  {
    name: 'find-us',
    inputPath: path.join(__dirname, '../public/images/technology/find us.jpg'),
  }
];

// Output directory
const outputDir = path.join(__dirname, '../public/images/technology/optimized');
const tempDir = path.join(__dirname, '../temp');

// Create output and temp directories if they don't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

// Process each technology image
technologyImages.forEach(image => {
  if (!fs.existsSync(image.inputPath)) {
    console.error(`Input file not found: ${image.inputPath}`);
    return;
  }

  const outputWebPPath = path.join(outputDir, `${image.name}.webp`);
  const outputJPGPath = path.join(outputDir, `${image.name}.jpg`);
  const tempWebPPath = path.join(tempDir, `${image.name}.webp`);
  const tempJPGPath = path.join(tempDir, `${image.name}.jpg`);
  
  // Get original file size
  const originalSize = fs.statSync(image.inputPath).size;
  
  // Create optimized WebP version
  sharp(image.inputPath)
    .resize({ width: 800, height: 800, fit: 'cover' })
    .webp({ quality: 85 })
    .toFile(tempWebPPath)
    .then(info => {
      // Move the temp file to the final location
      fs.copyFileSync(tempWebPPath, outputWebPPath);
      
      console.log(`WebP Image for ${image.name} created successfully:`);
      console.log(`Original size: ${originalSize / 1024 / 1024} MB`);
      console.log(`WebP size: ${info.size / 1024 / 1024} MB`);
      console.log(`Dimensions: ${info.width} x ${info.height}`);
    })
    .catch(err => console.error(`Error creating WebP image for ${image.name}:`, err));

  // Create optimized JPG version
  sharp(image.inputPath)
    .resize({ width: 800, height: 800, fit: 'cover' })
    .jpeg({ quality: 85, progressive: true })
    .toFile(tempJPGPath)
    .then(info => {
      // Move the temp file to the final location
      fs.copyFileSync(tempJPGPath, outputJPGPath);
      
      console.log(`JPG Image for ${image.name} created successfully:`);
      console.log(`Original size: ${originalSize / 1024 / 1024} MB`);
      console.log(`JPG size: ${info.size / 1024 / 1024} MB`);
      console.log(`Dimensions: ${info.width} x ${info.height}`);
    })
    .catch(err => console.error(`Error creating JPG image for ${image.name}:`, err));
});
