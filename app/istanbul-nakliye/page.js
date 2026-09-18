import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";
import { districts } from "@/data/districts";
import Link from "next/link";

export const metadata = {
  title: "İstanbul Nakliye",
  description: `${site.name} ile İstanbul'un 39 ilçesinde profesyonel evden eve nakliyat hizmeti. Bölgenize özel fiyat teklifi için tıklayın.`,
  alternates: { canonical: `${site.domain}/istanbul-nakliye` },
};

export default function IstanbulNakliyePage() {
  return (
    <>
      <style>{`
        .district-card { background: var(--color-dark-card); border: 1px solid var(--color-dark-border); color: var(--color-text-muted); transition: all 0.15s; border-radius: 0.5rem; padding: 0.75rem; display:block; text-align:center; font-size:0.875rem; font-weight:500; }
        .district-card:hover { border-color: var(--color-gold); color: var(--color-gold); }
      `}</style>
      <PageHero
        title="İstanbul Nakliye Hizmetleri"
        subtitle="İstanbul'un tüm ilçelerinde sigortalı, asansörlü ve profesyonel evden eve nakliyat hizmeti"
        breadcrumb={[{ label: "İstanbul Nakliye" }]}
      />

      <section className="container-page py-16">
        <div className="max-w-2xl mb-10 space-y-4 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          <p>
            {site.name} olarak İstanbul&apos;un 39 ilçesinin tamamına düzenli nakliyat seferlerimiz
            bulunmaktadır. İlçenizi seçerek o bölgeye özel hizmet bilgisi ve fiyat teklifi alabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {districts.map((d) => (
            <Link key={d.slug} href={`/istanbul-nakliye/${d.slug}`} className="district-card">
              {d.name}
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
