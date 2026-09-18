import PageHero from "@/components/PageHero";
import Placeholder from "@/components/Placeholder";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";

export const metadata = {
  title: "Fotoğraf Galerisi",
  description: `${site.name} ekibinin taşıma operasyonlarından kareler. Ambalajlama, araç filosu ve kurulum çalışmalarımızı inceleyin.`,
  alternates: { canonical: `${site.domain}/resimler` },
};

const categories = [
  "Ambalajlama",
  "Araç Filosu",
  "Evden Eve",
  "Ofis Taşıma",
  "Asansörlü",
  "Eşya Depolama",
];

export default function ResimlerPage() {
  return (
    <>
      <PageHero
        title="Fotoğraf Galerisi"
        subtitle="Ekibimizin sahadan kareler — Ambalajlama, taşıma operasyonları ve araç filomuz"
        breadcrumb={[{ label: "Fotoğraf Galerisi" }]}
      />
      <section className="container-page py-16">
        {/* Kategori filtreleri — statik görünüm */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat, i) => (
            <span
              key={cat}
              className="px-3 py-1.5 rounded-full text-sm font-medium cursor-pointer"
              style={
                i === 0
                  ? { background: "var(--color-gold)", color: "var(--color-dark)" }
                  : {
                      background: "var(--color-dark-card)",
                      border: "1px solid var(--color-dark-border)",
                      color: "var(--color-text-muted)",
                    }
              }
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Galeri grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 12 }, (_, i) => (
            <Placeholder
              key={i}
              label={categories[i % categories.length]}
              className="aspect-square rounded-xl"
            />
          ))}
        </div>

        <div
          className="mt-10 p-5 rounded-xl text-center max-w-lg mx-auto"
          style={{ background: "var(--color-dark-card)", border: "1px solid var(--color-dark-border)" }}
        >
          <div className="text-3xl mb-2">📸</div>
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            Gerçek taşıma fotoğrafları yakında burada yayınlanacak. Referans görmek isterseniz
            WhatsApp üzerinden ekibimizle iletişime geçin.
          </p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 font-semibold px-5 py-2.5 rounded-lg text-sm"
            style={{ background: "#25d366", color: "#fff" }}
          >
            WhatsApp&apos;tan Görüntüle
          </a>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
