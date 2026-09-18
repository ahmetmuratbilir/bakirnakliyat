import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Placeholder from "@/components/Placeholder";
import CtaBand from "@/components/CtaBand";
import { services, getService } from "@/data/services";
import { site } from "@/data/site";
import Link from "next/link";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.title} hizmeti — ${service.short} ${site.name} güvencesiyle. Sigortalı ve sözleşmeli taşıma.`,
    alternates: { canonical: `${site.domain}/hizmetlerimiz/${slug}` },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.short}
        breadcrumb={[
          { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
          { label: service.title },
        ]}
      />

      <section className="container-page py-16 grid md:grid-cols-3 gap-10">
        {/* Ana içerik */}
        <div className="md:col-span-2 space-y-8">
          <Placeholder label={service.title} className="h-72 rounded-xl" />
          <div
            className="p-6 rounded-xl"
            style={{ background: "var(--color-dark-card)", border: "1px solid var(--color-dark-border)" }}
          >
            <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              {service.description}
            </p>
          </div>
          {service.longDescription && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold" style={{ color: "var(--color-text)" }}>
                Süreç Detayları
              </h3>
              {service.longDescription.map((para, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-lg"
                  style={{ background: "var(--color-dark-elevated)", border: "1px solid var(--color-dark-border)" }}
                >
                  <span className="shrink-0 font-bold text-sm mt-0.5" style={{ color: "var(--color-gold)" }}>
                    0{i + 1}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {para}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Yan panel */}
        <div className="space-y-6">
          {/* Özellikler */}
          <div
            className="p-5 rounded-xl"
            style={{ background: "var(--color-dark-card)", border: "1px solid var(--color-dark-border)" }}
          >
            <h3 className="font-bold mb-4" style={{ color: "var(--color-text)" }}>
              Bu Hizmette Neler Var?
            </h3>
            <ul className="space-y-3">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm">
                  <span
                    className="flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold shrink-0"
                    style={{ background: "rgba(196,119,63,0.15)", color: "var(--color-gold)" }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "var(--color-text-muted)" }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Teklif Kutusu */}
          <div
            className="p-5 rounded-xl"
            style={{
              background: "linear-gradient(135deg, var(--color-dark-elevated), var(--color-dark-card))",
              border: "1px solid var(--color-gold-dark)",
            }}
          >
            <h3 className="font-bold mb-2" style={{ color: "var(--color-gold)" }}>
              Hemen Teklif Alın
            </h3>
            <p className="text-sm mb-4" style={{ color: "var(--color-text-muted)" }}>
              {service.title} için ücretsiz ekspertiz ve fiyat teklifi alın.
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${site.phoneTel}`}
                className="flex items-center justify-center gap-2 w-full font-bold py-3 rounded-lg text-sm transition"
                style={{ background: "var(--color-gold)", color: "var(--color-dark)" }}
              >
                📞 {site.phoneDisplay}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full font-semibold py-3 rounded-lg text-sm transition"
                style={{ background: "var(--whatsapp)", color: "#fff" }}
              >
                💬 WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Diğer Hizmetler */}
      <section
        className="py-12"
        style={{ background: "var(--color-dark-card)", borderTop: "1px solid var(--color-dark-border)" }}
      >
        <div className="container-page">
          <h3 className="font-bold text-lg mb-6" style={{ color: "var(--color-text)" }}>
            Diğer Hizmetlerimiz
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetlerimiz/${s.slug}`}
                className="flex items-center gap-3 p-4 rounded-lg transition"
                style={{
                  background: "var(--color-dark-elevated)",
                  border: "1px solid var(--color-dark-border)",
                  color: "var(--color-text-muted)",
                }}
              >
                <span className="text-2xl">{s.icon}</span>
                <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                  {s.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
