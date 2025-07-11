const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

/**
 * Universal Image Optimization Script
 * 
 * This script optimizes all types of images in the public directory:
 * - Supports: JPEG, JPG, PNG, WebP, AVIF, TIFF, GIF
 * - Creates optimized WebP and JPG versions
 * - Handles different image categories with appropriate sizing
 * - Maintains aspect ratios and quality
 * - Provides detailed optimization reports
 */

// Image categories with their target specifications
const IMAGE_CATEGORIES = {
  hero: {
    targetWidth: 1920,
    targetHeight: null, // Maintain aspect ratio
    webpQuality: 85,
    jpgQuality: 85,
    description: 'Hero/Banner images'
  },
  service: {
    targetWidth: 1080,
    targetHeight: 720, // 16:9 aspect ratio
    webpQuality: 85,
    jpgQuality: 85,
    description: 'Service showcase images'
  },
  species: {
    targetWidth: 800,
    targetHeight: 450, // 16:9 landscape aspect ratio
    webpQuality: 85,
    jpgQuality: 85,
    description: 'Species/identification images'
  },
  process: {
    targetWidth: 1080,
    targetHeight: 720, // 16:9 aspect ratio
    webpQuality: 85,
    jpgQuality: 85,
    description: 'Process/procedure images'
  },
  info: {
    targetWidth: 800,
    targetHeight: 600, // 4:3 aspect ratio
    webpQuality: 80,
    jpgQuality: 80,
    description: 'Informational/educational images'
  },
  icon: {
    targetWidth: 512,
    targetHeight: 512, // Square
    webpQuality: 90,
    jpgQuality: 90,
    description: 'Icons and small graphics'
  }
};

// Define all images to optimize with their categories
const IMAGES_TO_OPTIMIZE = [
  // ===== SPIDER IMAGES =====
  {
    name: 'spider-control-hero',
    category: 'hero',
    inputFormats: ['.jpg', '.jpeg', '.png', '.webp'],
    description: 'Spider control hero banner'
  },
  {
    name: 'spider-extermination',
    category: 'service',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Spider extermination service'
  },
  {
    name: 'spider-infestation-signs',
    category: 'info',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Spider infestation identification'
  },
  {
    name: 'black-widow-spider',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Black widow spider species'
  },
  {
    name: 'brown-recluse-spider',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Brown recluse spider species'
  },
  {
    name: 'huntsman-spider',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Huntsman spider species'
  },
  {
    name: 'wolf-spider',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Wolf spider species'
  },
  {
    name: 'redback-spider',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Redback spider species'
  },
  {
    name: 'orb-weaving-spider',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Orb weaving spider species'
  },

  // ===== POSSUM IMAGES =====
  {
    name: 'possum-control-hero',
    category: 'hero',
    inputFormats: ['.jpg', '.jpeg', '.png', '.webp'],
    description: 'Possum control hero banner'
  },
  {
    name: 'possum-control-service',
    category: 'service',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Possum control service showcase'
  },
  {
    name: 'possum-control-process',
    category: 'process',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Possum control process illustration'
  },
  {
    name: 'brushtail-possum',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Brushtail possum species'
  },
  {
    name: 'ringtail-possum',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Ringtail possum species'
  },
  {
    name: 'mountain-pygmy-possum',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Mountain pygmy possum species'
  },


  // ===== ANT CONTROL IMAGES =====
  {
    name: 'ant-control-hero',
    category: 'hero',
    inputFormats: ['.jpg', '.jpeg', '.png', '.webp'],
    description: 'Ant control hero banner'
  },
  {
    name: 'ant-extermination',
    category: 'process',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Ant extermination procedure'
  },
  {
    name: 'bull-ants',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Australian Bulldog Ants species'
  },
  {
    name: 'black-house-ants',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Black House Ant species'
  },
  {
    name: 'pavement-ants',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Pavement Ant species'
  },
  {
    name: 'pharaoh-ants',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Pharaoh Ant species'
  },
  {
    name: 'fire-ants',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Fire Ant species'
  },
  {
    name: 'meat-ants',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Meat Ant species'
  },
  {
    name: 'carpenter-ants',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Carpenter Ant species'
  },
  {
    name: 'sugar-ants',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Sugar Ant species'
  },

  // ===== GENERAL PEST CONTROL IMAGES =====
  {
    name: 'extermination',
    category: 'service',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'General extermination service'
  },
  {
    name: 'pest-control-hero',
    category: 'hero',
    inputFormats: ['.webp'],
    description: 'Main pest control hero'
  },
  {
    name: 'pest-inspection-process',
    category: 'process',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Comprehensive pest inspection process'
  },
  {
    name: 'residential-pest-control',
    category: 'service',
    inputFormats: ['.jpg', '.jpeg', '.png', '.webp'],
    description: 'Residential pest control service'
  },
  {
    name: 'commercial-pest-control',
    category: 'service',
    inputFormats: ['.jpg', '.jpeg', '.png', '.webp'],
    description: 'Commercial pest control service'
  },
  {
    name: 'termite-solutions',
    category: 'service',
    inputFormats: ['.jpg', '.jpeg', '.png', '.webp'],
    description: 'Termite solutions service'
  },

  // ===== BED BUG IMAGES =====
  {
    name: 'bed-bug-control-hero',
    category: 'hero',
    inputFormats: ['.jpg', '.jpeg', '.png', '.webp'],
    description: 'Bed bug control hero banner'
  },
  {
    name: 'bed-bug-treatment',
    category: 'service',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Bed bug treatment service'
  },
  {
    name: 'bed-bug-heat-treatment',
    category: 'process',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Bed bug heat treatment process'
  },
  {
    name: 'bed-bug-eggs',
    category: 'species',
    inputFormats: ['.jpeg', '.jpg', '.png'],
    description: 'Bed bug eggs lifecycle stage'
  },
  {
    name: 'bed-bug-first-instar',
    category: 'species',
    inputFormats: ['.jpeg', '.jpg', '.png'],
    description: 'Bed bug first instar nymph stage'
  },
  {
    name: 'bed-bug-second-instar',
    category: 'species',
    inputFormats: ['.jpeg', '.jpg', '.png'],
    description: 'Bed bug second instar nymph stage'
  },
  {
    name: 'bed-bug-adult',
    category: 'species',
    inputFormats: ['.jpeg', '.jpg', '.png'],
    description: 'Adult bed bug lifecycle stage'
  },
  {
    name: 'bed-bugs-hotel',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Bed bugs in hotel environment'
  },
  {
    name: 'bed-bugs-childcare',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Bed bugs in childcare environment'
  },
  {
    name: 'bed-bugs-hospital',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Bed bugs in hospital environment'
  },
  {
    name: 'bed-bugs-residential',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Bed bugs in residential complex environment'
  },
  {
    name: 'bed-bugs-elderly-care',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Bed bugs in elderly care environment'
  },
  {
    name: 'bed-bugs-school',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Bed bugs in school environment'
  },

  // ===== FLY CONTROL IMAGES =====
  {
    name: 'fly-control-hero',
    category: 'hero',
    inputFormats: ['.jpg', '.jpeg', '.png', '.webp'],
    description: 'Fly control hero banner'
  },
  {
    name: 'fly-control-service',
    category: 'service',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Fly control service showcase'
  },
  {
    name: 'fly-control-process',
    category: 'process',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Fly control process illustration'
  },
  {
    name: 'house-fly-species',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'House fly species identification'
  },
  {
    name: 'blow-fly-species',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Blow fly species identification'
  },
  {
    name: 'fruit-fly-species',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Fruit fly species identification'
  },
  {
    name: 'drain-fly-species',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Drain fly species identification'
  },
  {
    name: 'cluster-fly-species',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Cluster fly species identification'
  },
  {
    name: 'phorid-fly-species',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Phorid fly species identification'
  },
  {
    name: 'flies-food-processing',
    category: 'info',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Flies in food processing environment'
  },

  // ===== FLEA CONTROL IMAGES =====
  {
    name: 'flea-control-hero',
    category: 'hero',
    inputFormats: ['.jpg', '.jpeg', '.png', '.webp'],
    description: 'Flea control hero banner'
  },
  {
    name: 'flea-treatment',
    category: 'service',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Professional flea treatment service'
  },
  {
    name: 'flea-control-process',
    category: 'process',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Flea control process illustration'
  },
  {
    name: 'flea-eggs',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Flea eggs lifecycle stage'
  },
  {
    name: 'flea-larvae',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Flea larvae lifecycle stage'
  },
  {
    name: 'flea-pupae',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Flea pupae lifecycle stage'
  },
  {
    name: 'adult-fleas',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Adult fleas lifecycle stage'
  },
  {
    name: 'flea-dirt',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Flea dirt identification'
  },
  {
    name: 'flea-environment',
    category: 'info',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Flea environment and habitat'
  },
  {
    name: 'cat-flea',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Cat flea species identification'
  },
  {
    name: 'dog-flea',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Dog flea species identification'
  },
  {
    name: 'flea-lifecycle',
    category: 'process',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Flea lifecycle diagram'
  },
  {
    name: 'lifecycle',
    category: 'process',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'General lifecycle diagram'
  },

  // ===== MOTH CONTROL IMAGES =====
  {
    name: 'moth-control-hero',
    category: 'hero',
    inputFormats: ['.jpg', '.jpeg', '.png', '.webp'],
    description: 'Moth control hero banner'
  },
  {
    name: 'clothes-moth-species',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Clothes moth species identification'
  },
  {
    name: 'pantry-moth-species',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Pantry moth species identification'
  },
  {
    name: 'carpet-moth-species',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Carpet moth species identification'
  },
  {
    name: 'case-bearing-moth-species',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Case-bearing moth species identification'
  },
  {
    name: 'brown-house-moth-species',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Brown house moth species identification'
  },
  {
    name: 'white-shouldered-moth-species',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'White-shouldered house moth species identification'
  },

  // ===== BEE CONTROL IMAGES =====
  {
    name: 'honey-bees',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Honey bee species identification'
  },
  {
    name: 'bumble-bees',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Bumble bee species identification'
  },
  {
    name: 'carpenter-bees',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Carpenter bee species identification'
  },
  {
    name: 'leafcutter-bees',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Leafcutter bee species identification'
  },
  {
    name: 'mason-bees',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Mason bee species identification'
  },
  {
    name: 'africanized-honey-bees',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Africanized honey bee species identification'
  },

  // ===== TERMITE CONTROL IMAGES =====
  {
    name: 'subterranean-termites',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Subterranean termite species identification'
  },
  {
    name: 'drywood-termites',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Drywood termite species identification'
  },
  {
    name: 'dampwood-termites',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Dampwood termite species identification'
  },
  {
    name: 'formosan-termites',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Formosan termite species identification'
  },
  {
    name: 'conehead-termites',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Conehead termite species identification'
  },
  {
    name: 'desert-termites',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Desert termite species identification'
  },

  // ===== MOSQUITO CONTROL IMAGES =====
  {
    name: 'aedes-mosquito',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Aedes mosquito species identification'
  },
  {
    name: 'anopheles-mosquito',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Anopheles mosquito species identification'
  },
  {
    name: 'culex-mosquito',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Culex mosquito species identification'
  },
  {
    name: 'asian-tiger-mosquito',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Asian tiger mosquito species identification'
  },
  {
    name: 'yellow-fever-mosquito',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Yellow fever mosquito species identification'
  },
  {
    name: 'house-mosquito',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'House mosquito species identification'
  },

  // ===== FLEA CONTROL IMAGES =====
  {
    name: 'cat-flea',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Cat flea species identification'
  },
  {
    name: 'dog-flea',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Dog flea species identification'
  },
  {
    name: 'human-flea',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Human flea species identification'
  },
  {
    name: 'oriental-rat-flea',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Oriental rat flea species identification'
  },

  // ===== BIRD CONTROL IMAGES =====
  {
    name: 'bird-control-hero',
    category: 'hero',
    inputFormats: ['.webp', '.jpg', '.jpeg', '.png'],
    description: 'Bird control hero banner'
  },
  {
    name: 'bird-control-service',
    category: 'service',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Bird control service showcase'
  },
  {
    name: 'bird-netting-solution',
    category: 'info',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Bird netting solution method'
  },
  {
    name: 'bird-spike-solution',
    category: 'info',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Bird spike solution method'
  },
  {
    name: 'bird-wire-solution',
    category: 'info',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Bird wire solution method'
  },
  {
    name: 'bird-slope-solution',
    category: 'info',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Bird slope solution method'
  },
  {
    name: 'bird-track-solution',
    category: 'info',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Bird track solution method'
  },
  {
    name: 'bird-visual-solution',
    category: 'info',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Bird visual deterrent solution method'
  },
  {
    name: 'pigeon-species',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Pigeon species identification'
  },
  {
    name: 'starling-species',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'European starling species identification'
  },
  {
    name: 'sparrow-species',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'House sparrow species identification'
  },
  {
    name: 'seagull-species',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Seagull species identification'
  },
  {
    name: 'woodpecker-species',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Woodpecker species identification'
  },
  {
    name: 'geese-species',
    category: 'species',
    inputFormats: ['.jpg', '.jpeg', '.png'],
    description: 'Canadian geese species identification'
  }
];

// Supported input formats
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.tiff', '.gif'];

// Function to find the actual input file
function findInputFile(imageName, possibleFormats) {
  const publicDir = path.join(__dirname, '../public');
  
  for (const format of possibleFormats) {
    const filePath = path.join(publicDir, `${imageName}${format}`);
    if (fs.existsSync(filePath)) {
      return filePath;
    }
  }
  return null;
}

// Function to get file size in MB
function getFileSizeMB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024 / 1024).toFixed(2);
}

// Function to optimize a single image
async function optimizeImage(imageConfig) {
  const { name, category, inputFormats, description } = imageConfig;
  const categoryConfig = IMAGE_CATEGORIES[category];
  
  if (!categoryConfig) {
    console.log(`❌ Unknown category: ${category} for ${name}`);
    return { success: false, error: 'Unknown category' };
  }

  console.log(`\n🔄 Processing: ${name}`);
  console.log(`📝 Description: ${description}`);
  console.log(`🏷️  Category: ${category} (${categoryConfig.description})`);

  // Find the input file
  const inputPath = findInputFile(name, inputFormats);
  if (!inputPath) {
    console.log(`⚠️  Input file not found for: ${name}`);
    console.log(`   Searched for: ${inputFormats.map(f => name + f).join(', ')}`);
    return { success: false, error: 'File not found' };
  }

  const originalSizeMB = getFileSizeMB(inputPath);
  console.log(`📁 Original: ${path.basename(inputPath)} (${originalSizeMB} MB)`);

  try {
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`📐 Original dimensions: ${metadata.width} x ${metadata.height}`);

    const results = {};
    const publicDir = path.join(__dirname, '../public');

    // Determine output paths - avoid overwriting input files
    const inputExt = path.extname(inputPath);
    const inputBasename = path.basename(inputPath, inputExt);

    // Create optimized WebP version
    const webpPath = path.join(publicDir, `${name}.webp`);
    let sharpInstance = sharp(inputPath);

    // Apply resizing based on category
    if (categoryConfig.targetHeight) {
      sharpInstance = sharpInstance.resize({
        width: categoryConfig.targetWidth,
        height: categoryConfig.targetHeight,
        fit: 'cover',
        position: 'center'
      });
    } else {
      sharpInstance = sharpInstance.resize({
        width: categoryConfig.targetWidth,
        withoutEnlargement: true
      });
    }

    const webpInfo = await sharpInstance
      .webp({ quality: categoryConfig.webpQuality })
      .toFile(webpPath);

    results.webp = {
      size: getFileSizeMB(webpPath),
      dimensions: `${webpInfo.width} x ${webpInfo.height}`
    };

    console.log(`✅ WebP created: ${results.webp.size} MB (${results.webp.dimensions})`);

    // Create optimized JPG version - only if input is not already a JPG with the same name
    const jpgPath = path.join(publicDir, `${name}.jpg`);
    const shouldCreateJpg = !(inputExt === '.jpg' && inputBasename === name);

    if (shouldCreateJpg) {
      sharpInstance = sharp(inputPath);

      // Apply same resizing
      if (categoryConfig.targetHeight) {
        sharpInstance = sharpInstance.resize({
          width: categoryConfig.targetWidth,
          height: categoryConfig.targetHeight,
          fit: 'cover',
          position: 'center'
        });
      } else {
        sharpInstance = sharpInstance.resize({
          width: categoryConfig.targetWidth,
          withoutEnlargement: true
        });
      }

      const jpgInfo = await sharpInstance
        .jpeg({ quality: categoryConfig.jpgQuality, progressive: true })
        .toFile(jpgPath);

      results.jpg = {
        size: getFileSizeMB(jpgPath),
        dimensions: `${jpgInfo.width} x ${jpgInfo.height}`
      };

      console.log(`✅ JPG created: ${results.jpg.size} MB (${results.jpg.dimensions})`);
    } else {
      // Create optimized JPG with different name to avoid overwriting
      const optimizedJpgPath = path.join(publicDir, `${name}-optimized.jpg`);
      sharpInstance = sharp(inputPath);

      // Apply same resizing
      if (categoryConfig.targetHeight) {
        sharpInstance = sharpInstance.resize({
          width: categoryConfig.targetWidth,
          height: categoryConfig.targetHeight,
          fit: 'cover',
          position: 'center'
        });
      } else {
        sharpInstance = sharpInstance.resize({
          width: categoryConfig.targetWidth,
          withoutEnlargement: true
        });
      }

      const jpgInfo = await sharpInstance
        .jpeg({ quality: categoryConfig.jpgQuality, progressive: true })
        .toFile(optimizedJpgPath);

      results.jpg = {
        size: getFileSizeMB(optimizedJpgPath),
        dimensions: `${jpgInfo.width} x ${jpgInfo.height}`
      };

      console.log(`✅ Optimized JPG created: ${results.jpg.size} MB (${results.jpg.dimensions})`);
    }

    const originalSize = parseFloat(originalSizeMB);
    const webpSize = parseFloat(results.webp.size);
    const jpgSize = parseFloat(results.jpg.size);
    const webpSavings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    const jpgSavings = ((originalSize - jpgSize) / originalSize * 100).toFixed(1);

    console.log(`💾 Savings: WebP ${webpSavings}%, JPG ${jpgSavings}%`);
    console.log(`✅ ${name} optimization completed`);

    return {
      success: true,
      original: { size: originalSizeMB, dimensions: `${metadata.width} x ${metadata.height}` },
      results,
      savings: { webp: webpSavings, jpg: jpgSavings }
    };

  } catch (error) {
    console.error(`❌ Error optimizing ${name}:`, error.message);
    return { success: false, error: error.message };
  }
}

// Function to optimize images by category
async function optimizeByCategory(categoryFilter = null) {
  const imagesToProcess = categoryFilter
    ? IMAGES_TO_OPTIMIZE.filter(img => img.category === categoryFilter)
    : IMAGES_TO_OPTIMIZE;

  console.log(`🎯 Processing ${imagesToProcess.length} images${categoryFilter ? ` in category: ${categoryFilter}` : ''}`);

  const results = {
    success: 0,
    failed: 0,
    skipped: 0,
    totalOriginalSize: 0,
    totalWebpSize: 0,
    totalJpgSize: 0,
    details: []
  };

  for (const imageConfig of imagesToProcess) {
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

  return results;
}

// Function to display optimization summary
function displaySummary(results) {
  console.log('\n' + '='.repeat(60));
  console.log('🎉 IMAGE OPTIMIZATION COMPLETED!');
  console.log('='.repeat(60));

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

  console.log(`\n🏷️  CATEGORIES PROCESSED:`);
  const categoryCounts = {};
  results.details.forEach(detail => {
    if (!categoryCounts[detail.category]) {
      categoryCounts[detail.category] = { success: 0, failed: 0, skipped: 0 };
    }
    if (detail.result.success) {
      categoryCounts[detail.category].success++;
    } else if (detail.result.error === 'File not found') {
      categoryCounts[detail.category].skipped++;
    } else {
      categoryCounts[detail.category].failed++;
    }
  });

  Object.entries(categoryCounts).forEach(([category, counts]) => {
    const categoryConfig = IMAGE_CATEGORIES[category];
    console.log(`  ${category}: ${counts.success} optimized, ${counts.skipped} skipped, ${counts.failed} failed`);
    console.log(`    └─ ${categoryConfig.description} (${categoryConfig.targetWidth}px width)`);
  });

  if (results.skipped > 0) {
    console.log(`\n⚠️  SKIPPED FILES:`);
    results.details
      .filter(detail => detail.result.error === 'File not found')
      .forEach(detail => {
        console.log(`  • ${detail.name} (${detail.category})`);
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

  console.log(`\n💡 NEXT STEPS:`);
  console.log(`• Update components to use OptimizedImage with WebP/JPG fallbacks`);
  console.log(`• Test website to ensure all images load correctly`);
  console.log(`• Consider removing original large files if optimization was successful`);
  console.log(`• Add new images to IMAGES_TO_OPTIMIZE array for future optimization`);

  console.log(`\n📝 USAGE EXAMPLES:`);
  console.log(`• Optimize all images: node scripts/optimize-images.js`);
  console.log(`• Optimize specific category: node scripts/optimize-images.js hero`);
  console.log(`• Available categories: ${Object.keys(IMAGE_CATEGORIES).join(', ')}`);
}

// Main execution function
async function main() {
  const categoryFilter = process.argv[2]; // Get category from command line argument

  if (categoryFilter && !IMAGE_CATEGORIES[categoryFilter]) {
    console.error(`❌ Invalid category: ${categoryFilter}`);
    console.log(`Available categories: ${Object.keys(IMAGE_CATEGORIES).join(', ')}`);
    process.exit(1);
  }

  console.log('🖼️  UNIVERSAL IMAGE OPTIMIZATION SCRIPT');
  console.log('=====================================');
  console.log(`📅 Started at: ${new Date().toLocaleString()}`);

  if (categoryFilter) {
    console.log(`🎯 Category filter: ${categoryFilter} (${IMAGE_CATEGORIES[categoryFilter].description})`);
  }

  try {
    const results = await optimizeByCategory(categoryFilter);
    displaySummary(results);
  } catch (error) {
    console.error('❌ Fatal error during optimization:', error);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  optimizeImage,
  optimizeByCategory,
  IMAGE_CATEGORIES,
  IMAGES_TO_OPTIMIZE
};
