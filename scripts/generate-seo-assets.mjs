/**
 * Generates Open Graph and app icon assets from inline SVG.
 * Run: npm run generate-seo-assets
 *
 * Outputs: public/og-image.png, app/icon.png, app/apple-icon.png, app/favicon.ico
 */

import { mkdir } from 'node:fs/promises';
import path from 'node:path';

import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const appDir = path.join(root, 'app');

const ogSvg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#e2e8f0"/>
      <stop offset="100%" style="stop-color:#cbd5e1"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="8" fill="#1e40af"/>
  <text x="96" y="280" font-family="system-ui, Segoe UI, sans-serif" font-size="72" font-weight="700" fill="#0f172a">Tyler Thompson</text>
  <text x="96" y="360" font-family="system-ui, Segoe UI, sans-serif" font-size="40" font-weight="500" fill="#1e40af">Full-Stack Developer</text>
  <text x="96" y="430" font-family="system-ui, Segoe UI, sans-serif" font-size="28" fill="#334155">Accessible, responsive web applications</text>
</svg>
`;

const iconSvg = `
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="96" fill="#1e40af"/>
  <text x="256" y="300" text-anchor="middle" font-family="system-ui, Segoe UI, sans-serif" font-size="200" font-weight="700" fill="#ffffff">T</text>
</svg>
`;

await mkdir(publicDir, { recursive: true });
await mkdir(appDir, { recursive: true });

const ogPath = path.join(publicDir, 'og-image.png');
await sharp(Buffer.from(ogSvg)).png({ compressionLevel: 9 }).toFile(ogPath);

const iconPng = await sharp(Buffer.from(iconSvg)).png().toBuffer();
await sharp(iconPng).resize(512, 512).toFile(path.join(appDir, 'icon.png'));
await sharp(iconPng).resize(180, 180).toFile(path.join(appDir, 'apple-icon.png'));
await sharp(iconPng).resize(32, 32).toFile(path.join(appDir, 'favicon.ico'));

const ogStats = await sharp(ogPath).metadata();
console.log(`Created ${path.relative(root, ogPath)} (${ogStats.width}x${ogStats.height})`);
console.log('Created app/icon.png, app/apple-icon.png, app/favicon.ico (32px)');
