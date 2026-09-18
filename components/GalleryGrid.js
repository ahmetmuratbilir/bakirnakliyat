"use client";
import { useState } from "react";
import Placeholder from "@/components/Placeholder";

const categories = [
  "Tümü",
  "Ambalajlama",
  "Araç Filosu",
  "Evden Eve",
  "Ofis Taşıma",
  "Asansörlü",
  "Eşya Depolama",
];

const items = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  category: categories[1 + (i % (categories.length - 1))],
}));

export default function GalleryGrid() {
  const [active, setActive] = useState("Tümü");

  const filtered =
    active === "Tümü" ? items : items.filter((item) => item.category === active);

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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-2 border border-slate-200 shadow-xs hover:shadow-md transition">
              <Placeholder label={item.category} className="aspect-square" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
