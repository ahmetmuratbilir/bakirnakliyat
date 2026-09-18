import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";

export const metadata = {
  title: "Fotoğraf Galerisi & Saha Operasyonları | Bakır Nakliyat",
  description: `${site.name} araç filosu, eşya paketleme ve nakliye operasyonlarımızdan kareler.`,
  alternates: { canonical: `${site.domain}/resimler` },
};

export default function ResimlerPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Saha Operasyonlarımız & Galeri"
        subtitle="Eşyalarınızın nasıl paketlendiğini, araç filomuzu ve asansörlü taşıma çalışmalarımızı inceleyin."
        breadcrumb={[{ label: "Galeri" }]}
      />

      <section className="container-page py-16">
        <GalleryGrid />

        <div className="mt-14 p-8 rounded-3xl bg-blue-50 border border-blue-200 text-center max-w-xl mx-auto">
          <div className="text-3xl mb-2">📸</div>
          <h3 className="font-extrabold text-lg text-[#0b1f3a] mb-1">
            Daha Fazla Canlı Referans Görün
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] mb-5">
            Son tamamlanan ev ve ofis taşımalarımıza ait video ve fotoğrafları WhatsApp üzerinden talep edebilirsiniz.
          </p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-bold px-6 py-3 rounded-xl bg-[#25d366] text-white hover:bg-emerald-600 transition text-sm shadow-md"
          >
            WhatsApp&apos;tan Referans İste
          </a>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
