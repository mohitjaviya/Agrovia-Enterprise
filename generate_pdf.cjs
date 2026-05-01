const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  try {
    console.log('Launching Edge browser...');
    const browser = await puppeteer.launch({
      executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    });
    const page = await browser.newPage();
    
    // Convert absolute path to file URI
    const htmlPath = path.join(__dirname, 'public', 'brochure.html');
    const fileUrl = 'file://' + htmlPath.replace(/\\/g, '/');
    
    console.log('Opening:', fileUrl);
    // Wait until network is idle to ensure images load
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    
    const outputPath = path.join(__dirname, 'Agrovia_Brochure.pdf');
    console.log('Generating PDF at:', outputPath);
    
    await page.pdf({
      path: outputPath,
      format: 'A4',
      landscape: true,
      printBackground: true,
      margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
    });
    
    await browser.close();
    console.log('PDF Generation Complete! 🎉');
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
})();
