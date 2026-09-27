import { getImageProps } from "next/image";
import { media } from "@/data/media";

/**
 * Saha fotoğrafı: AVIF (desteklenirse) + WebP yedek, gerçek srcset ile.
 * `slug` data/media.js'teki anahtardır; boyutlar ve alt metin oradan gelir.
 * next/image getImageProps kullanılır (resmi "art direction" deseni).
 */
export default function Photo({
  slug,
  sizes,
  alt,
  className = "",
  imgClassName = "",
  eager = false,
  fill = false,
}) {
  const m = media[slug];
  if (!m) throw new Error(`Photo: "${slug}" data/media.js içinde yok`);

  const common = {
    alt: alt ?? m.alt,
    sizes,
    width: m.width,
    height: m.height,
    quality: 75,
    ...(eager ? { loading: "eager", fetchPriority: "high" } : { loading: "lazy" }),
  };

  const {
    props: { srcSet: avifSrcSet },
  } = getImageProps({ ...common, src: `/images/${slug}.avif` });
  const { props: img } = getImageProps({ ...common, src: `/images/${slug}.webp` });

  const fillClasses = fill ? "absolute inset-0 size-full object-cover" : "h-auto w-full";

  return (
    <picture className={className}>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <img
        {...img}
        alt={img.alt}
        decoding="async"
        className={`${fillClasses} ${imgClassName}`}
        style={{ backgroundImage: `url("${m.blurDataURL}")`, backgroundSize: "cover" }}
      />
    </picture>
  );
}
