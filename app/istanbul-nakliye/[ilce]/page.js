import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Placeholder from "@/components/Placeholder";
import CtaBand from "@/components/CtaBand";
import { districts, getDistrict } from "@/data/districts";
import { services } from "@/data/services";
import { site } from "@/data/site";
import Link from "next/link";

export function generateStaticParams() {
  return districts.map((d) => ({ ilce: d.slug }));
}

export async function generateMetadata({ params }) {
  const { ilce } = await params;
  const district = getDistrict(ilce);
  if (!district) return {};
  return {
    title: `${district.name} Nakliye`,
    description: `${site.name} ile ${district.name} bölgesinde sigortalı, asansörlü evden eve nakliyat ve ofis taşıma hizmeti. Ücretsiz ekspertiz ve şeffaf fiyat için hemen arayın.`,
    alternates: { canonical: `${site.domain}/istanbul-nakliye/${ilce}` },
  };
}

export default async function DistrictPage({ params }) {
  const { ilce } = await params;
  const district = getDistrict(ilce);
  if (!district) return notFound();

  const nearbyDistricts = districts.filter((d) => d.slug !== ilce).slice(0, 8);

  return (
    <>
      <style>{`
        .ilce-service-link { color: var(--color-text-muted); font-size: 0.875rem; display:flex; align-items:center; gap:0.5rem; text-decoration:none; }
        .ilce-service-link:hover { color: var(--color-gold); }
        .ilce-nearby-tag { background: var(--color-dark-elevated); border: 1px solid var(--color-dark-border); color: var(--color-text-muted); padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size:0.875rem; transition: all 0.15s; text-decoration:none; }
        .ilce-nearby-tag:hover { border-color: var(--color-gold); color: var(--color-gold); }
      `}</style>
      <PageHero
        title={`${district.name} Nakliye Hizmeti`}
        subtitle={`${district.name} bölgesinde profesyonel, sigortalı ve asansörlü evden eve nakliyat`}
        breadcrumb={[
          { href: "/istanbul-nakliye", label: "İstanbul Nakliye" },
          { label: district.name },
        ]}
      />

      <section className="container-page py-16 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-6">
          <Placeholder label={`${district.name} Nakliye`} className="h-64 rounded-xl" />

          <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            <p>
              <strong style={{ color: "var(--color-text)" }}>{site.name}</strong> olarak{" "}
              {district.name} bölgesinde yıllardır düzenli nakliyat hizmeti sunmaktayız. Semtin
              sokak yapısını ve bina karakteristiklerini bilen deneyimli ekiplerimiz, {district.name}&apos;daki
              her taşımayı başarıyla tamamlamıştır.
            </p>
            <p>
              {district.name} ilçesindeki evden eve nakliyat hizmetlerimiz; ambalajlı paketleme,
              marangoz sökme-montaj ve nakliye sigortasını kapsar. Ofis taşımaları için özel
              planlama ve mesai dışı çalışma seçeneğimiz mevcuttur.
            </p>
            <p>
              {district.name} ve çevresinde asansörlü taşıma araçlarımızla yüksek katlardaki
              eşyaları güvenle indirip bindiriyoruz.
            </p>
          </div>

          <div
            className="p-5 rounded-xl"
            style={{ background: "var(--color-dark-card)", border: "1px solid var(--color-dark-border)" }}
          >
            <h3 className="font-bold mb-3" style={{ color: "var(--color-text)" }}>
              {district.name} Bölgesi Avantajlarımız
            </h3>
            <ul className="space-y-2">
              {[
                `${district.name} ilçesinde bölge bilgili ekip`,
                "Aynı gün veya planlı taşıma seçeneği",
                "Dar sokak ve park sorunu çözüm desteği",
                "Sigortalı, sözleşmeli ve faturalı hizmet",
                "Ücretsiz ekspertiz ve sabit fiyat teklifi",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span style={{ color: "var(--color-gold)" }}>✓</span>
                  <span style={{ color: "var(--color-text-muted)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-5">
          {/* Teklif Kutusu */}
          <div
            className="p-5 rounded-xl"
            style={{ background: "var(--color-dark-elevated)", border: "1px solid var(--color-gold-dark)" }}
          >
            <h3 className="font-bold mb-2" style={{ color: "var(--color-gold)" }}>
              {district.name} İçin Teklif Alın
            </h3>
            <p className="text-sm mb-4" style={{ color: "var(--color-text-muted)" }}>
              Ücretsiz ekspertiz ve net fiyat teklifi için hemen arayın.
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${site.phoneTel}`}
                className="flex items-center justify-center gap-2 w-full font-bold py-3 rounded-lg text-sm"
                style={{ background: "var(--color-gold)", color: "var(--color-dark)" }}
              >
                📞 {site.phoneDisplay}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full font-semibold py-3 rounded-lg text-sm"
                style={{ background: "#25d366", color: "#fff" }}
              >
                💬 WhatsApp&apos;tan Yaz
              </a>
              <Link
                href="/iletisim"
                className="flex items-center justify-center gap-2 w-full font-semibold py-3 rounded-lg text-sm"
                style={{
                  background: "var(--color-dark-card)",
                  border: "1px solid var(--color-dark-border)",
                  color: "var(--color-text)",
                }}
              >
                📝 Form Doldur
              </Link>
            </div>
          </div>

          {/* İlgili Hizmetler */}
          <div
            className="p-5 rounded-xl"
            style={{ background: "var(--color-dark-card)", border: "1px solid var(--color-dark-border)" }}
          >
            <h3 className="font-semibold mb-3" style={{ color: "var(--color-text)" }}>Hizmetlerimiz</h3>
            <ul className="space-y-2">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/hizmetlerimiz/${s.slug}`} className="ilce-service-link">
                    <span>{s.icon}</span>
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Yakın İlçeler */}
      <section
        className="py-10"
        style={{ background: "var(--color-dark-card)", borderTop: "1px solid var(--color-dark-border)" }}
      >
        <div className="container-page">
          <h3 className="font-bold mb-5" style={{ color: "var(--color-text)" }}>Diğer İstanbul İlçeleri</h3>
          <div className="flex flex-wrap gap-2">
            {nearbyDistricts.map((d) => (
              <Link key={d.slug} href={`/istanbul-nakliye/${d.slug}`} className="ilce-nearby-tag">
                {d.name}
              </Link>
            ))}
            <Link href="/istanbul-nakliye" className="px-3 py-1.5 text-sm font-medium" style={{ color: "var(--color-gold)" }}>
              Tüm İlçeleri Gör →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
