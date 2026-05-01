const Jimp = require('jimp');

async function cropTransparentIcon() {
  try {
    const image = await Jimp.read('public/agrovia_transparent.png');
    
    // The image contains the icon on the left, and text on the right.
    // The icon is usually a square on the left side.
    // We will crop a square from the top-left corner.
    // The height of the image dictates the size of the square icon.
    const size = image.bitmap.height;
    
    // Crop: x=0, y=0, width=size, height=size
    // This assumes the icon is perfectly flush to the left and is as wide as the image is tall.
    // Since sometimes there's padding, let's see. Let's just crop a square from the left.
    image.crop(0, 0, size, size);

    await image.writeAsync('public/favicon_perfect.png');
    console.log('Successfully cropped perfect transparent favicon!');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

cropTransparentIcon();
