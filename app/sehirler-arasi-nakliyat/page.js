import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";
import { cities } from "@/data/cities";
import Link from "next/link";

export const metadata = {
  title: "Şehirlerarası Nakliyat",
  description: `${site.name} ile İstanbul çıkışlı şehirlerarası nakliyat. Ankara, İzmir, Bursa ve daha fazla şehre sigortalı, güvenli taşıma.`,
  alternates: { canonical: `${site.domain}/sehirler-arasi-nakliyat` },
};

export default function SehirlerarasiPage() {
  return (
    <>
      <PageHero
        title="Şehirlerarası Nakliyat"
        subtitle="İstanbul'dan Türkiye'nin dört bir yanına güvenli, sigortalı ve profesyonel taşımacılık"
        breadcrumb={[{ label: "Şehirlerarası Nakliyat" }]}
      />

      <section className="container-page py-16">
        <div className="max-w-2xl mb-10 space-y-4 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          <p>
            Şehirlerarası taşımacılıkta mesafe uzadıkça risk de artar. Bu yüzden {site.name} olarak
            uzun mesafe taşımalarında standartlarımızı daha da yüksek tutuyoruz. Özel sürücü rotasyonu,
            güçlendirilmiş ambalaj ve kapsamlı nakliye sigortası, şehirlerarası hizmetlerimizin
            vazgeçilmez unsurlarıdır.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cities.map((c) => (
            <Link
              key={c.slug}
              href={`/sehirler-arasi-nakliyat/${c.slug}`}
              className="flex items-center gap-4 p-5 rounded-xl card-hover"
              style={{
                background: "var(--color-dark-card)",
                border: "1px solid var(--color-dark-border)",
              }}
            >
              <div className="text-3xl">🚛</div>
              <div>
                <div className="font-semibold" style={{ color: "var(--color-text)" }}>
                  İstanbul → {c.name}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "var(--color-gold)" }}>
                  Detayları İncele →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div
          className="mt-12 p-6 rounded-xl max-w-2xl"
          style={{ background: "var(--color-dark-card)", border: "1px solid var(--color-dark-border)" }}
        >
          <h3 className="font-bold mb-3" style={{ color: "var(--color-text)" }}>
            Listede Olmayan Bir Şehir mi?
          </h3>
          <p className="text-sm mb-4" style={{ color: "var(--color-text-muted)" }}>
            Türkiye&apos;nin her şehrine nakliyat yapıyoruz. Listemizde görmediğiniz bir şehir için
            bizimle doğrudan iletişime geçin; size özel fiyat teklifi hazırlayalım.
          </p>
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-lg text-sm"
            style={{ background: "var(--color-gold)", color: "var(--color-dark)" }}
          >
            📞 Hemen Arayın
          </a>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
