// "use client" YOK: saf fonksiyon; hem sunucu (getImageProps) hem istemci (next/image) kullanır.
import { variants } from "./image-variants";

/**
 * "/images/<slug>.<ext>" -> "/images/<slug>-<genişlik>.<ext>"
 * İstenen genişliğe eşit veya büyük ilk hazır varyantı döndürür. Varyantı
 * olmayan görseller (favicon, logo vb.) olduğu gibi geçer.
 */
export default function imageLoader({ src, width }) {
  const match = /^\/images\/(.+)\.(avif|webp|jpg)$/.exec(src);
  if (!match) return src;

  const [, slug, ext] = match;
  const widths = variants[slug];
  if (!widths) return src;

  const chosen = widths.find((w) => w >= width) ?? widths[widths.length - 1];
  return `/images/${slug}-${chosen}.${ext}`;
}
