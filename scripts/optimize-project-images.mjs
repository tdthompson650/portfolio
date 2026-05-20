/**
 * Converts public/projects/*.png to 16:9 WebP assets for Next.js Image.
 * Run: npm run optimize-images
 *
 * Expects source PNGs in public/projects/. Outputs .webp alongside them.
 */

import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';

import sharp from 'sharp';

const TARGET_WIDTH = 1200;
const TARGET_HEIGHT = 675;
const WEBP_QUALITY = 84;
const MAX_BYTES = 300 * 1024;

const SOURCE_IMAGES = [
  'dragonflys.png',
  'photo-sharify.png',
  'frameworkless-notes-app.png',
];

const projectsDir = path.join(process.cwd(), 'public', 'projects');

async function optimizeImage(filename) {
  const inputPath = path.join(projectsDir, filename);
  const baseName = filename.replace(/\.png$/i, '');
  const outputPath = path.join(projectsDir, `${baseName}.webp`);

  const inputMeta = await sharp(inputPath).metadata();
  const inputStats = await stat(inputPath);

  let quality = WEBP_QUALITY;
  let buffer = await sharp(inputPath)
    .resize(TARGET_WIDTH, TARGET_HEIGHT, { fit: 'cover', position: 'centre' })
    .webp({ quality })
    .toBuffer();

  while (buffer.length > MAX_BYTES && quality > 60) {
    quality -= 4;
    buffer = await sharp(inputPath)
      .resize(TARGET_WIDTH, TARGET_HEIGHT, { fit: 'cover', position: 'centre' })
      .webp({ quality })
      .toBuffer();
  }

  await sharp(buffer).toFile(outputPath);

  const outputMeta = await sharp(outputPath).metadata();
  const outputStats = await stat(outputPath);

  return {
    filename,
    input: {
      bytes: inputStats.size,
      width: inputMeta.width,
      height: inputMeta.height,
    },
    output: {
      path: outputPath,
      bytes: outputStats.size,
      width: outputMeta.width,
      height: outputMeta.height,
      quality,
    },
  };
}

await mkdir(projectsDir, { recursive: true });

const results = [];
for (const image of SOURCE_IMAGES) {
  results.push(await optimizeImage(image));
}

for (const result of results) {
  const inKb = (result.input.bytes / 1024).toFixed(1);
  const outKb = (result.output.bytes / 1024).toFixed(1);
  console.log(
    `${result.filename}: ${inKb} KB (${result.input.width}x${result.input.height}) -> ${path.basename(result.output.path)}: ${outKb} KB (${result.output.width}x${result.output.height}, q${result.output.quality})`,
  );
}
