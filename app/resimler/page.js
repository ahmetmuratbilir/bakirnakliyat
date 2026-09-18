import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Fotoğraf Galerisi",
  description: `${site.name} ekibinin taşıma operasyonlarından kareler. Ambalajlama, araç filosu ve kurulum çalışmalarımızı inceleyin.`,
  alternates: { canonical: `${site.domain}/resimler` },
};

export default function ResimlerPage() {
  return (
    <>
      <PageHero
        title="Fotoğraf Galerisi"
        subtitle="Ekibimizin sahadan kareler — Ambalajlama, taşıma operasyonları ve araç filomuz"
        breadcrumb={[{ label: "Fotoğraf Galerisi" }]}
      />
      <section className="container-page py-16">
        <GalleryGrid />

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
            style={{ background: "var(--whatsapp)", color: "#fff" }}
          >
            WhatsApp&apos;tan Görüntüle
          </a>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
