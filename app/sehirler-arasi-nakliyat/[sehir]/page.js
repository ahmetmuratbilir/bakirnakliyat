import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Placeholder from "@/components/Placeholder";
import CtaBand from "@/components/CtaBand";
import { cities, getCity } from "@/data/cities";
import { site } from "@/data/site";
import Link from "next/link";

export function generateStaticParams() {
  return cities.map((c) => ({ sehir: c.slug }));
}

export async function generateMetadata({ params }) {
  const { sehir } = await params;
  const city = getCity(sehir);
  if (!city) return {};
  return {
    title: `İstanbul ${city.name} Arası Nakliyat`,
    description: `${site.name} ile İstanbul - ${city.name} arası sigortalı, güvenli ve uygun fiyatlı şehirlerarası nakliyat. Ekspertiz ücretsiz, fiyat sabittir.`,
    alternates: { canonical: `${site.domain}/sehirler-arasi-nakliyat/${sehir}` },
  };
}

export default async function CityPage({ params }) {
  const { sehir } = await params;
  const city = getCity(sehir);
  if (!city) return notFound();

  const otherCities = cities.filter((c) => c.slug !== sehir);

  return (
    <>
      <PageHero
        title={`İstanbul — ${city.name} Nakliyat`}
        subtitle={`Sigortalı, sözleşmeli ve profesyonel şehirlerarası taşımacılık`}
        breadcrumb={[
          { href: "/sehirler-arasi-nakliyat", label: "Şehirlerarası" },
          { label: city.name },
        ]}
      />

      <section className="container-page py-16 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-6">
          <Placeholder label={`İstanbul → ${city.name}`} className="h-64 rounded-xl" />

          <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            <p>
              <strong style={{ color: "var(--color-text)" }}>İstanbul - {city.name}</strong> güzergahında
              düzenli olarak hizmet veren {site.name}, bu güzergahın tüm lojistik dinamiklerini
              yakından biliyor. Mesafe, mola noktaları, yol koşulları ve teslimat süreleri önceden
              planlanarak müşteriye iletilir.
            </p>
            <p>
              Uzun mesafe taşımacılıkta standart ambalaj yeterli değildir. {city.name}&apos;ya giden
              taşımalarımızda çift katmanlı ambalaj, eşya arası köpük tampon ve araç içi sabitleme
              aparatları zorunlu olarak kullanılmaktadır.
            </p>
            <p>
              {city.name}&apos;daki adrese teslimat tamamlandıktan sonra ekibimiz mobilyalarınızı
              kurar, beyaz eşyalarınızı yerleştirir ve çöpleri toplar. Siz sadece yeni alanınızla
              ilgilenirsiniz.
            </p>
          </div>

          <div
            className="grid sm:grid-cols-3 gap-4"
          >
            {[
              { icon: "📦", label: "Güçlendirilmiş Ambalaj" },
              { icon: "🛡️", label: "Nakliye Sigortası" },
              { icon: "🔧", label: "Montaj Dahil" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center p-4 rounded-lg"
                style={{ background: "var(--color-dark-elevated)", border: "1px solid var(--color-dark-border)" }}
              >
                <span className="text-2xl mb-2">{item.icon}</span>
                <span className="text-sm font-medium" style={{ color: "var(--color-text-muted)" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div
            className="p-5 rounded-xl"
            style={{ background: "var(--color-dark-elevated)", border: "1px solid var(--color-gold-dark)" }}
          >
            <h3 className="font-bold mb-2" style={{ color: "var(--color-gold)" }}>
              {city.name} Güzergahı Fiyat Teklifi
            </h3>
            <p className="text-sm mb-4" style={{ color: "var(--color-text-muted)" }}>
              İstanbul - {city.name} taşıması için hemen teklif alın.
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
                style={{ background: "var(--whatsapp)", color: "#fff" }}
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          <div
            className="p-5 rounded-xl"
            style={{ background: "var(--color-dark-card)", border: "1px solid var(--color-dark-border)" }}
          >
            <h3 className="font-semibold mb-3" style={{ color: "var(--color-text)" }}>
              Diğer Güzergahlar
            </h3>
            <ul className="space-y-2">
              {otherCities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/sehirler-arasi-nakliyat/${c.slug}`}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <span className="text-xs" style={{ color: "var(--color-gold)" }}>→</span>
                    İstanbul - {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
