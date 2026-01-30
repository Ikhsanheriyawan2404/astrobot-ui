import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC = path.resolve(process.cwd(), 'public');
const svgPath = path.join(PUBLIC, 'logo.svg');
const jpegPath = path.join(PUBLIC, 'logo.jpeg');
let inputPath = null;

if (fs.existsSync(svgPath)) inputPath = svgPath;
else if (fs.existsSync(jpegPath)) inputPath = jpegPath;
else {
  console.error('No logo.svg or logo.jpeg found in public/. Please add one and retry.');
  process.exit(1);
}

const outputs = [
  { size: 192, name: 'pwa-192x192.png' },
  { size: 512, name: 'pwa-512x512.png' },
];

(async () => {
  try {
    for (const o of outputs) {
      const out = path.join(PUBLIC, o.name);
      await sharp(inputPath)
        .resize(o.size, o.size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toFile(out);
      console.log('Written', out);
    }
    console.log('PWA icons generated. Run the build to include them in the site.');
  } catch (err) {
    console.error('Error generating icons:', err);
    process.exit(1);
  }
})();
