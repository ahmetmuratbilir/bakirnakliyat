import { getImageProps } from "next/image";
import { media } from "@/data/media";

const MOBILE_MEDIA = "(max-width: 1023px)";

function srcSets(slug, common) {
  const m = media[slug];
  if (!m) throw new Error(`Photo: "${slug}" data/media.js içinde yok`);
  const opts = { ...common, width: m.width, height: m.height };
  const {
    props: { srcSet: avif },
  } = getImageProps({ ...opts, src: `/images/${slug}.avif` });
  const { props: webp } = getImageProps({ ...opts, src: `/images/${slug}.webp` });
  return { m, avif, webp };
}

/**
 * Saha fotoğrafı: AVIF (desteklenirse) + WebP yedek, gerçek srcset ile.
 * `slug` data/media.js'teki anahtardır; boyutlar ve alt metin oradan gelir.
 * `mobileSlug` verilirse 1023px altında o kırpım kullanılır (art direction).
 * next/image getImageProps kullanılır (resmi "art direction" deseni).
 */
export default function Photo({
  slug,
  mobileSlug,
  sizes,
  alt,
  className = "",
  imgClassName = "",
  eager = false,
  fill = false,
}) {
  const common = {
    alt: alt ?? media[slug]?.alt,
    sizes,
    quality: 75,
    ...(eager ? { loading: "eager", fetchPriority: "high" } : { loading: "lazy" }),
  };

  const { m, avif, webp } = srcSets(slug, common);
  const mobile = mobileSlug ? srcSets(mobileSlug, common) : null;

  const fillClasses = fill ? "absolute inset-0 size-full object-cover" : "h-auto w-full";

  return (
    <picture className={className}>
      {mobile && <source media={MOBILE_MEDIA} type="image/avif" srcSet={mobile.avif} sizes={sizes} />}
      {mobile && <source media={MOBILE_MEDIA} type="image/webp" srcSet={mobile.webp.srcSet} sizes={sizes} />}
      <source type="image/avif" srcSet={avif} sizes={sizes} />
      <img
        {...webp}
        alt={webp.alt}
        decoding="async"
        className={`${fillClasses} ${imgClassName}`}
        style={{ backgroundImage: `url("${(mobile?.m ?? m).blurDataURL}")`, backgroundSize: "cover" }}
      />
    </picture>
  );
}
