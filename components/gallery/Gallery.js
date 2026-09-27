import { getImageProps } from "next/image";
import { media } from "@/data/media";
import Photo from "@/components/ui/Photo";
import GalleryLightbox from "./GalleryLightbox";

const LARGE_SIZES = "(min-width: 1024px) 70vw, 100vw";

/**
 * Sunucu tarafı: küçük resimleri <Photo> ile üretir, büyük görüntü için
 * srcset'leri hesaplar. İstemciye sadece düz metin (URL/alt) gider.
 */
export default function Gallery({ items }) {
  const prepared = items.map(({ slug, caption }) => {
    const m = media[slug];
    const common = { alt: m.alt, width: m.width, height: m.height, sizes: LARGE_SIZES, quality: 75 };
    const { props: webp } = getImageProps({ ...common, src: `/images/${slug}.webp` });
    const {
      props: { srcSet: avifSrcSet },
    } = getImageProps({ ...common, src: `/images/${slug}.avif` });
    return {
      slug,
      caption,
      alt: m.alt,
      width: m.width,
      height: m.height,
      src: webp.src,
      srcSet: webp.srcSet,
      avifSrcSet,
      sizes: LARGE_SIZES,
    };
  });

  const thumbs = items.map(({ slug }) => (
    <Photo
      key={slug}
      slug={slug}
      fill
      sizes="(min-width: 1024px) 272px, (min-width: 640px) calc(50vw - 2rem), calc(50vw - 1.5rem)"
      imgClassName="transition-transform duration-500 group-hover:scale-105"
    />
  ));

  return <GalleryLightbox items={prepared} thumbs={thumbs} />;
}
