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

// Yer tutucu galeri öğeleri — gerçek fotoğraflar eklendiğinde
// her öğeye bir görsel yolu (src) eklenip Placeholder yerine <Image> kullanılabilir.
const items = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  category: categories[1 + (i % (categories.length - 1))],
}));

export default function GalleryGrid() {
  const [active, setActive] = useState("Tümü");

  const filtered =
    active === "Tümü" ? items : items.filter((item) => item.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className="px-3 py-1.5 rounded-full text-sm font-medium transition"
              style={
                isActive
                  ? { background: "var(--copper)", color: "var(--bg-main)" }
                  : {
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                    }
              }
            >
              {cat}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-center py-10" style={{ color: "var(--text-secondary)" }}>
          Bu kategoride henüz görsel eklenmedi.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <Placeholder key={item.id} label={item.category} className="aspect-square rounded-xl" />
          ))}
        </div>
      )}
    </div>
  );
}
