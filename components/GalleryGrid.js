"use client";
import { useState } from "react";
import Image from "next/image";

const categories = [
  "Tümü",
  "Araç Filosu",
  "Ambalajlama",
  "Ofis Taşıma",
  "Evden Eve",
  "Eşya Depolama",
];

const galleryItems = [
  {
    id: 1,
    title: "Özmal Kapalı Kasa Taşıma Aracı (34 RIL 010)",
    category: "Araç Filosu",
    src: "/images/bakir-nakliyat-filo-araci.webp",
    desc: "Geniş iç hacimli, hidrolik sabitlemeli kapalı kasa araç",
  },
  {
    id: 2,
    title: "Forklift ile Paletli Yükleme ve Sevkiyat",
    category: "Ofis Taşıma",
    src: "/images/bakir-nakliyat-palet-yukleme.webp",
    desc: "Ağır yük, fabrika ve kurumsal ofis taşımacılığı operasyonu",
  },
  {
    id: 3,
    title: "Korumalı Koli İstifleme ve Sabitleme",
    category: "Ambalajlama",
    src: "/images/bakir-nakliyat-koli-istifleme.webp",
    desc: "Kırılabilir ve hassas eşyaların sarsıntısız istif düzeni",
  },
  {
    id: 4,
    title: "7/24 Kesintisiz Şehir İçi ve Şehirlerarası Sefer",
    category: "Araç Filosu",
    src: "/images/bakir-nakliyat-gece-sevkiyat.webp",
    desc: "Gece ve gündüz kesintisiz zamanında teslimat prensibi",
  },
  {
    id: 5,
    title: "Streçli ve Korumalı Fuar & Palet Ambalajı",
    category: "Ambalajlama",
    src: "/images/bakir-nakliyat-guvenli-ambalaj.webp",
    desc: "Çift katmanlı koruyucu ambalaj ve etiketleme sistemi",
  },
  {
    id: 6,
    title: "Evden Eve Korumalı Araç Yüklemesi",
    category: "Evden Eve",
    src: "/images/bakir-nakliyat-koli-istifleme.webp",
    desc: "Eşyalarınızın oda bazında ayrıştırılarak araca yerleşimi",
  },
  {
    id: 7,
    title: "Eşya Depolama ve Güvenli Palet İstifi",
    category: "Eşya Depolama",
    src: "/images/bakir-nakliyat-guvenli-ambalaj.webp",
    desc: "Nem ve toza karşı izole edilmiş ambalajlı depolama",
  },
  {
    id: 8,
    title: "Kurumsal Taşımacılık Saha Operasyonu",
    category: "Ofis Taşıma",
    src: "/images/bakir-nakliyat-palet-yukleme.webp",
    desc: "Zaman kaybı yaşatmayan profesyonel lojistik planlama",
  },
];

export default function GalleryGrid() {
  const [active, setActive] = useState("Tümü");

  const filtered =
    active === "Tümü"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <div>
      {/* Kategori Filtre Butonları */}
      <div className="flex flex-wrap gap-2.5 mb-10">
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer ${
                isActive
                  ? "bg-[#1d4ed8] text-white shadow-md shadow-blue-500/25"
                  : "bg-white border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-[#1d4ed8]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-center py-10 text-slate-500">
          Bu kategoride henüz görsel eklenmedi.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-extrabold text-[#0b1f3a] shadow-xs">
                  {item.category}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm text-[#0b1f3a] group-hover:text-[#1d4ed8] transition leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#64748b] mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
