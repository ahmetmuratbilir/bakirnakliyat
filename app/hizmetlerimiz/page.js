import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";

export const metadata = {
  title: "Hizmetlerimiz",
  description: `${site.name}'ın sunduğu nakliyat hizmetleri: evden eve, ofis taşıma, asansörlü taşıma, eşya depolama ve daha fazlası.`,
};

import { services } from "@/data/services";
import Link from "next/link";

export default function HizmetlerimizPage() {
  return (
    <>
      <PageHero
        title="Hizmetlerimiz"
        subtitle="Her ihtiyaca özel, sigortalı ve sözleşmeli nakliyat çözümleri. Profesyonel ekip, şeffaf fiyat."
        breadcrumb={[{ label: "Hizmetlerimiz" }]}
      />
      <section className="container-page py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/hizmetlerimiz/${s.slug}`}
              className="block p-6 rounded-xl card-hover"
              style={{
                background: "var(--color-dark-card)",
                border: "1px solid var(--color-dark-border)",
              }}
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h2 className="text-lg font-bold mb-2" style={{ color: "var(--color-text)" }}>
                {s.title}
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-text-muted)" }}>
                {s.short}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {s.bullets.slice(0, 3).map((b) => (
                  <span
                    key={b}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(196,119,63,0.1)",
                      border: "1px solid rgba(196,119,63,0.25)",
                      color: "var(--color-gold)",
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
              <span className="text-sm font-semibold" style={{ color: "var(--color-gold)" }}>
                Detaylı Bilgi →
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
