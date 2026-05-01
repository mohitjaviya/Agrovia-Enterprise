const Jimp = require('jimp');

async function sliceLogo() {
  try {
    const image = await Jimp.read('public/agrovia_transparent.png');
    const w = image.bitmap.width;
    const h = image.bitmap.height;
    
    // Slice into 10 vertical strips
    const sliceWidth = Math.floor(w / 10);
    
    for(let i=0; i<10; i++) {
      const clone = image.clone();
      clone.crop(i * sliceWidth, 0, sliceWidth, h);
      await clone.writeAsync(`public/slice_${i}.png`);
    }
    console.log(`Sliced into 10 pieces. Width: ${w}, Height: ${h}, SliceWidth: ${sliceWidth}`);
  } catch (e) {
    console.error(e);
  }
}

sliceLogo();
