const Jimp = require('jimp');

async function removeWhiteBackground() {
  try {
    const image = await Jimp.read('public/ICON LOGO.png');
    
    // We want to make white / near-white transparent
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // If the pixel is very close to white, make it transparent
      if (red > 240 && green > 240 && blue > 240) {
        this.bitmap.data[idx + 3] = 0; // Set alpha to 0
      }
    });

    await image.writeAsync('public/favicon_transparent.png');
    console.log('Successfully created transparent favicon!');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

removeWhiteBackground();
