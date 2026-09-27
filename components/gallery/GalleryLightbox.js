"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

/**
 * Tıklayınca büyüyen galeri. Tarayıcının kendi <dialog> öğesi kullanılır:
 * odak tuzağı, Esc ile kapanma ve arka planın erişilemez olması hazır gelir.
 * Büyük görsel sadece pencere açıkken yüklenir.
 */
export default function GalleryLightbox({ items, thumbs }) {
  const dialogRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const count = items.length;

  const openAt = (i) => {
    setIndex(i);
    setIsOpen(true);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = useCallback((d) => setIndex((i) => (i + d + count) % count), [count]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, step]);

  const current = items[index];

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {items.map((item, i) => (
          <li key={item.slug} className="reveal">
            <button
              type="button"
              onClick={() => openAt(i)}
              aria-label={`Fotoğrafı büyüt: ${item.caption}`}
              className="group relative block aspect-4/5 w-full overflow-hidden rounded-card bg-navy-50 text-left"
            >
              {thumbs[i]}
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-navy-950/80 via-navy-950/0 to-transparent"
              />
              <span className="absolute inset-x-3 bottom-3 text-sm font-semibold leading-snug text-white sm:inset-x-4 sm:bottom-4 sm:text-[0.9375rem]">
                {item.caption}
              </span>
              <span
                aria-hidden="true"
                className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/90 text-navy-900 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                <Expand className="size-4" strokeWidth={2.25} />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label="Fotoğraf görüntüleyici"
        onClose={() => setIsOpen(false)}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        className="lightbox fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 bg-transparent p-0"
      >
        {isOpen && current && (
          <div
            className="flex h-full flex-col items-center justify-center gap-4 px-4 py-16 sm:px-20"
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <figure className="flex max-h-full flex-col items-center">
              <picture>
                <source type="image/avif" srcSet={current.avifSrcSet} sizes={current.sizes} />
                <img
                  src={current.src}
                  srcSet={current.srcSet}
                  sizes={current.sizes}
                  alt={current.alt}
                  width={current.width}
                  height={current.height}
                  decoding="async"
                  className="max-h-[calc(100dvh-10rem)] w-auto rounded-card object-contain shadow-float"
                />
              </picture>
              <figcaption className="mt-4 text-center text-base text-white">
                {current.caption}
                <span className="ml-2 text-navy-100">
                  {index + 1} / {count}
                </span>
              </figcaption>
            </figure>
          </div>
        )}

        <button
          type="button"
          onClick={close}
          className="absolute right-3 top-3 grid size-12 place-items-center rounded-full bg-white/10 text-white ring-1 ring-inset ring-white/25 transition-colors hover:bg-white/20"
        >
          <X aria-hidden="true" className="size-6" strokeWidth={2} />
          <span className="sr-only">Kapat</span>
        </button>
        <button
          type="button"
          onClick={() => step(-1)}
          className="absolute left-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white ring-1 ring-inset ring-white/25 transition-colors hover:bg-white/20"
        >
          <ChevronLeft aria-hidden="true" className="size-6" strokeWidth={2} />
          <span className="sr-only">Önceki fotoğraf</span>
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          className="absolute right-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white ring-1 ring-inset ring-white/25 transition-colors hover:bg-white/20"
        >
          <ChevronRight aria-hidden="true" className="size-6" strokeWidth={2} />
          <span className="sr-only">Sonraki fotoğraf</span>
        </button>
      </dialog>
    </>
  );
}
