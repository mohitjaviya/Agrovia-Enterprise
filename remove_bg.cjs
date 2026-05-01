const Jimp = require('jimp');

async function removeBgAdvanced() {
  try {
    const image = await Jimp.read('public/ICON LOGO.png');
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      // Calculate how close the pixel is to pure white (255, 255, 255)
      // Distance from white:
      const distFromWhite = Math.sqrt(
        Math.pow(255 - r, 2) + 
        Math.pow(255 - g, 2) + 
        Math.pow(255 - b, 2)
      );

      // If it's pure white or very light gray/off-white
      if (distFromWhite < 40) { // Tolerance threshold
        // Make it completely transparent
        this.bitmap.data[idx + 3] = 0; 
      } else if (distFromWhite < 100) {
        // Anti-aliasing edge pixels (light gray but not pure white)
        // Fade them out partially to avoid jagged edges
        // The closer to white, the more transparent
        const alpha = Math.max(0, Math.min(255, (distFromWhite - 40) * 4));
        this.bitmap.data[idx + 3] = alpha;
      }
    });

    await image.writeAsync('public/ICON_LOGO_transparent.png');
    console.log('Advanced background removal completed!');
  } catch (error) {
    console.error(error);
  }
}

removeBgAdvanced();
