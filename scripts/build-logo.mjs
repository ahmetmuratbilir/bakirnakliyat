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

// Header işareti: sadece "B + yol" (satır 0-406, sütun 0-582). Tam logo 48px
// yükseklikte okunmuyor; yazı header'da HTML olarak basılıyor.
{
  const MARK = { left: 0, top: 0, width: 582, height: 406 };
  const { data: md, info: mi } = await sharp(trimmed).extract(MARK).ensureAlpha().raw()
    .toBuffer({ resolveWithObject: true });
  const markDark = Buffer.from(md);
  const markLight = Buffer.from(md);
  for (let i = 0; i < md.length; i += 4) {
    const px = (i / 4) % mi.width;
    const r = md[i], g = md[i + 1], b = md[i + 2];
    const white = r > 244 && g > 244 && b > 244;
    const orange = r - b > 40;
    // B'nin sağındaki koyu pikseller kamyonun hız çizgileri -> at
    if (white || (px > 470 && !orange)) { markDark[i + 3] = 0; markLight[i + 3] = 0; continue; }
    if (!orange) { markLight[i] = 255; markLight[i + 1] = 255; markLight[i + 2] = 255; }
  }
  const RAWM = { raw: { width: mi.width, height: mi.height, channels: 4 } };
  for (const [name, buf] of Object.entries({ "logo-mark": markDark, "logo-mark-light": markLight })) {
    const png = await sharp(buf, RAWM).png().toBuffer();
    const out = `public/${name}.png`;
    await sharp(png).trim().resize({ height: 144 })
      .png({ palette: true, colors: 64, compressionLevel: 9, effort: 10 }).toFile(out);
    const m = await sharp(out).metadata();
    console.log(out.padEnd(32), kb(out), `${m.width}x${m.height}`);
  }
}

// Markalı paylaşım görseli (sayfaya özel OG yoksa devreye girer)
const mark = await sharp(await sharp(dark, RAW).png().toBuffer()).resize({ width: 760 }).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: "#ffffff" } })
  .composite([{ input: mark, gravity: "center" }])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile("public/og-default.jpg");
console.log("public/og-default.jpg".padEnd(32), kb("public/og-default.jpg"));

console.log("\nKaynak logo:", kb(SRC), "->  header'da kullanılacak logo-240.png:", kb("public/logo-240.png"));
