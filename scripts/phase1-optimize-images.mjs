/**
 * Phase 1 — near-lossless in-place optimization for referenced villa images.
 * Run: node scripts/phase1-optimize-images.mjs
 */
import { readFileSync, renameSync, unlinkSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const REFERENCED_VILLA_IMAGES = [
  "images/image00050.jpeg",
  "images/image00051.jpeg",
  "images/image00053.jpeg",
  "images/image00048.jpeg",
  "images/image00047.jpeg",
  "images/image00045.jpeg",
  "images/image00005.jpeg",
  "images/image00021.jpeg",
  "images/image00023.jpeg",
  "images/image00052.jpeg",
  "images/image00054.jpeg",
  "images/image15.jpeg",
  "images/image17.jpeg",
  "images/image012.jpeg",
];

const MAX_WIDTH = 2048;
const JPEG_QUALITY = 92;

async function optimizeJpeg(relativePath) {
  const inputPath = join(publicDir, relativePath);
  const before = readFileSync(inputPath).length;
  const image = sharp(inputPath);
  const meta = await image.metadata();

  let pipeline = image.rotate();
  if ((meta.width ?? 0) > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  const buffer = await pipeline
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toBuffer();

  const tempPath = `${inputPath}.phase1-tmp`;
  writeFileSync(tempPath, buffer);

  try {
    renameSync(tempPath, inputPath);
  } catch {
    unlinkSync(inputPath);
    renameSync(tempPath, inputPath);
  }
  const afterMeta = await sharp(buffer).metadata();

  return {
    path: relativePath,
    before,
    after: buffer.length,
    width: afterMeta.width,
    height: afterMeta.height,
  };
}

async function createOgShare() {
  const heroPath = join(publicDir, "images/image00050.jpeg");
  const outputPath = join(publicDir, "images/og-share.jpg");

  const buffer = await sharp(heroPath)
    .rotate()
    .resize(1200, 630, {
      fit: "cover",
      position: "attention",
    })
    .jpeg({ quality: 88, mozjpeg: true })
    .toBuffer();

  writeFileSync(outputPath, buffer);
  return { path: "images/og-share.jpg", bytes: buffer.length };
}

const results = [];
for (const relativePath of REFERENCED_VILLA_IMAGES) {
  results.push(await optimizeJpeg(relativePath));
}

const og = await createOgShare();

console.log(JSON.stringify({ optimized: results, og }, null, 2));
