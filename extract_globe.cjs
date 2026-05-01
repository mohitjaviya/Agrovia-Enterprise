const Jimp = require('jimp');

async function extractGlobe() {
  try {
    const image = await Jimp.read('public/agrovia_transparent.png');
    const h = image.bitmap.height; // 997
    const w = image.bitmap.width;  // 3556
    
    // The "O" (globe) is in the middle of AGROVIA.
    // Let's crop a square from the exact center.
    const startX = Math.floor((w - h) / 2);
    
    // Crop the center square
    image.crop(startX, 0, h, h);
    
    // Autocrop any remaining transparent space
    image.autocrop();

    await image.writeAsync('public/favicon_globe.png');
    console.log('Successfully extracted globe logo!');
  } catch (err) {
    console.error(err);
  }
}

extractGlobe();
