/**
 * Logo varlıkları — kaynak 1254x1254 / 995KB opak PNG'den üretilir.
 *  logo-*.png        : saydam, orijinal renk (açık zeminler)
 *  logo-light-*.png  : lacivert kısımlar beyaza çevrilmiş (koyu zeminler)
 * Çalıştırma: node scripts/build-logo.mjs
 */
import sharp from "sharp";
import { statSync } from "node:fs";

const SRC = "../bakır nakliyat logo.png";
const kb = (f) => (statSync(f).size / 1024).toFixed(1) + " KB";

const trimmed = await sharp(SRC).trim({ threshold: 12 }).toBuffer();
const { data, info } = await sharp(trimmed).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

const dark = Buffer.from(data);
const light = Buffer.from(data);
for (let i = 0; i < data.length; i += 4) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  if (r > 244 && g > 244 && b > 244) {       // dış beyaz zemin -> saydam
    dark[i + 3] = 0;
    light[i + 3] = 0;
    continue;
  }
  if (!(r - b > 40)) {                        // turuncu değilse (lacivert) -> beyaz
    light[i] = 255; light[i + 1] = 255; light[i + 2] = 255;
  }
}

const RAW = { raw: { width: info.width, height: info.height, channels: 4 } };

for (const [name, buf] of Object.entries({ logo: dark, "logo-light": light })) {
  const png = await sharp(buf, RAW).png().toBuffer();
  for (const w of [240, 480]) {
    const out = `public/${name}-${w}.png`;
    await sharp(png).resize({ width: w })
      .png({ palette: true, colors: 96, compressionLevel: 9, effort: 10 })
      .toFile(out);
    console.log(out.padEnd(32), kb(out));
  }
  const webp = `public/${name}.webp`;
  await sharp(png).resize({ width: 960 }).webp({ quality: 88, effort: 6 }).toFile(webp);
  console.log(webp.padEnd(32), kb(webp));
}

// Markalı paylaşım görseli (sayfaya özel OG yoksa devreye girer)
const mark = await sharp(await sharp(dark, RAW).png().toBuffer()).resize({ width: 760 }).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: "#ffffff" } })
  .composite([{ input: mark, gravity: "center" }])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile("public/og-default.jpg");
console.log("public/og-default.jpg".padEnd(32), kb("public/og-default.jpg"));

console.log("\nKaynak logo:", kb(SRC), "->  header'da kullanılacak logo-240.png:", kb("public/logo-240.png"));
