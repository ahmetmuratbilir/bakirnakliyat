/**
 * Görsel üretim hattı — statik export kullandığımız için next/image
 * optimizasyon yapmıyor (images.unoptimized). Bu yüzden responsive
 * varyantları build öncesi burada üretiyoruz.
 *
 * Çalıştırma:  node scripts/build-images.mjs
 * Kaynak:      _kaynak-gorseller/*.jpg   (repoya dahil değil)
 * Çıktı:       public/images/*.{avif,webp,jpg}  +  data/media.js
 */
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import { statSync } from "node:fs";

const SRC = "_kaynak-gorseller";
const OUT = "public/images";
const WIDTHS = [480, 800, 1120];

/**
 * blur: KVKK gereği kapatılan bölgeler (kaynak görsel koordinatlarıyla).
 * Bu karelerde çalışanımız olmayan / reşit olmayan kişiler var.
 */
const PHOTOS = [
  { src: "11.jpg", slug: "bakir-nakliyat-filo-kamyonet-panelvan",
    alt: "Bakır Nakliyat özmal filosu: kapalı kasa kamyonet ve panelvan, depo önünde yükleme bekliyor",
    role: "hero", og: true },

  { src: "3.jpg", slug: "gece-sevkiyat-forklift-palet-yukleme",
    alt: "Bakır Nakliyat aracına gece sevkiyatında forklift ile paletli yük yükleniyor",
    role: "section", og: true },

  { src: "6.jpg", slug: "paletli-parsiyel-yuk-tasima",
    alt: "Kapalı kasa araçta paletlenmiş çuval ve kutulardan oluşan parsiyel yük",
    role: "hero" },

  { src: "10.jpg", slug: "endustriyel-palet-boya-tasima",
    alt: "Streçlenmiş iki palet üzerinde endüstriyel boya varilleri taşıma aracında",
    role: "gallery" },

  { src: "1.jpg", slug: "insaat-iskele-malzemesi-tasima",
    alt: "Şantiyede araca yüklenmiş iskele platformları, dikme ve bağlantı elemanları",
    role: "hero" },

  { src: "5.jpg", slug: "yapi-market-boya-teslimat",
    alt: "Yapı market önünde araçtan indirilmeyi bekleyen boya kovaları",
    role: "gallery" },

  { src: "4.jpg", slug: "eticaret-koli-depo-sevkiyat",
    alt: "Depo içinde araca istiflenmiş barkodlu e-ticaret kolileri",
    role: "hero" },

  { src: "7.jpg", slug: "profesyonel-ekip-koli-tahliye",
    alt: "Bakır Nakliyat ekibi yükleme rampasında kolileri elden ele indiriyor",
    role: "section" },

  { src: "9.jpg", slug: "tekstil-rulo-tasimaciligi",
    alt: "Araç kasasına istiflenmiş streç ambalajlı tekstil ruloları",
    role: "gallery",
    blur: [{ left: 315, top: 748, width: 90, height: 125 }] },

  { src: "8.jpg", slug: "fabrika-teslim-yuk-yukleme",
    alt: "Fabrika yükleme rampasında araca uzun ambalajlı malzeme yükleniyor",
    role: "gallery" },

  { src: "12.jpg", slug: "uretim-tedarik-palet-sevkiyat",
    alt: "Araçta paletlenmiş polipropilen çuvallar ve karton ambalaj levhaları",
    role: "gallery",
    blur: [{ left: 858, top: 702, width: 96, height: 112 }] },

  { src: "2.jpg", slug: "evden-eve-nakliyat-beyaz-esya-tasima",
    alt: "Streç filmle korunmuş buzdolabı ve mobilyalarla yüklü evden eve nakliyat aracı",
    role: "hero", og: true },
];

/** Bölgeyi güçlü blur'layıp aynı yere geri yapıştırır. */
async function applyBlur(pipeline, regions, meta) {
  if (!regions?.length) return pipeline;
  const base = await pipeline.png().toBuffer();
  const overlays = [];
  for (const r of regions) {
    const left = Math.max(0, r.left);
    const top = Math.max(0, r.top);
    const width = Math.min(r.width, meta.width - left);
    const height = Math.min(r.height, meta.height - top);
    const patch = await sharp(base)
      .extract({ left, top, width, height })
      // Piksel boyutuna göre ölçekli blur: küçültüp büyütmek geri
      // döndürülemez bir kayıp bırakır, sadece blur yeterli değil.
      .resize({ width: Math.max(6, Math.round(width / 14)) })
      .blur(4)
      .resize({ width, height, fit: "fill" })
      .png()
      .toBuffer();
    overlays.push({ input: patch, left, top });
  }
  return sharp(base).composite(overlays);
}

await mkdir(OUT, { recursive: true });

const manifest = {};
let totalIn = 0;
let totalOut = 0;

for (const p of PHOTOS) {
  const srcPath = `${SRC}/${p.src}`;
  totalIn += statSync(srcPath).size;

  const meta = await sharp(srcPath).metadata();
  const prepared = await applyBlur(
    sharp(srcPath).rotate(),
    p.blur,
    meta
  );
  const master = await prepared.toBuffer();

  const sizes = [];
  for (const w of WIDTHS) {
    if (w > meta.width) continue;
    const resized = sharp(master).resize({ width: w, withoutEnlargement: true });
    const [avif, webp, jpg] = await Promise.all([
      resized.clone().avif({ quality: 45, effort: 6 }).toBuffer(),
      resized.clone().webp({ quality: 72, effort: 6 }).toBuffer(),
      resized.clone().jpeg({ quality: 78, mozjpeg: true, progressive: true }).toBuffer(),
    ]);
    await Promise.all([
      writeFile(`${OUT}/${p.slug}-${w}.avif`, avif),
      writeFile(`${OUT}/${p.slug}-${w}.webp`, webp),
      writeFile(`${OUT}/${p.slug}-${w}.jpg`, jpg),
    ]);
    totalOut += avif.length;
    sizes.push(w);
  }

  // CLS'i sıfırlayan inline blur placeholder
  const ph = await sharp(master).resize({ width: 16 }).webp({ quality: 20 }).toBuffer();

  // Paylaşım görseli (OG 1200x630) — dikey kareden akıllı kırpım
  if (p.og) {
    await sharp(master)
      .resize({ width: 1200, height: 630, fit: "cover", position: sharp.strategy.attention })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(`${OUT}/${p.slug}-og.jpg`);
  }

  manifest[p.slug] = {
    alt: p.alt,
    role: p.role,
    width: meta.width,
    height: meta.height,
    sizes,
    og: Boolean(p.og),
    blurDataURL: `data:image/webp;base64,${ph.toString("base64")}`,
  };

  console.log(`✓ ${p.slug.padEnd(42)} ${sizes.join("/")}${p.blur ? "  [yüz gizlendi]" : ""}`);
}

const banner = `// OTOMATİK ÜRETİLDİ — elle düzenlemeyin.
// Kaynak: scripts/build-images.mjs  ·  Yeniden üretmek için: node scripts/build-images.mjs
`;
await writeFile("data/media.js", `${banner}export const media = ${JSON.stringify(manifest, null, 2)};\n`);

console.log(`\nKaynak toplam : ${(totalIn / 1048576).toFixed(2)} MB`);
console.log(`AVIF toplam   : ${(totalOut / 1048576).toFixed(2)} MB  (3 boyut × 12 görsel)`);
