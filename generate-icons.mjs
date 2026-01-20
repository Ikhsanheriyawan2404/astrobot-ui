import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = [192, 512];
const inputSvg = join(__dirname, 'public', 'icon.svg');
const outputDir = join(__dirname, 'public');

async function generateIcons() {
  const svgBuffer = fs.readFileSync(inputSvg);
  
  for (const size of sizes) {
    const outputPath = join(outputDir, `pwa-${size}x${size}.png`);
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(outputPath);
    console.log(`✅ Generated: pwa-${size}x${size}.png`);
  }
  
  console.log('\\n🎉 PWA icons generated successfully!');
}

generateIcons().catch(console.error);
