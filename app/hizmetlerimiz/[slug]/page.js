import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CircleCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Photo from "@/components/ui/Photo";
import QuoteCard from "@/components/QuoteCard";
import ServiceIcon from "@/components/icons/ServiceIcon";
import { services, getService } from "@/data/services";
import { serviceImages, fallbackServiceImage } from "@/data/service-images";
import { site } from "@/data/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.seoTitle ?? service.title,
    description: service.metaDescription ?? service.short,
    alternates: { canonical: `${site.domain}/hizmetlerimiz/${slug}` },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 4);
  const photo = serviceImages[slug] ?? fallbackServiceImage;

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.short}
        breadcrumb={[{ href: "/hizmetlerimiz", label: "Hizmetlerimiz" }, { label: service.title }]}
      />

      <section className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Ana içerik */}
          <div className="space-y-12 lg:col-span-8">
            <figure className="relative aspect-16/10 overflow-hidden rounded-panel bg-navy-50 shadow-lift">
              <Photo slug={photo} fill eager sizes="(min-width: 1200px) 740px, (min-width: 1024px) calc(66vw - 60px), calc(100vw - 2rem)" />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-navy-950/85 via-navy-950/10 to-transparent"
              />
              <figcaption className="absolute inset-x-5 bottom-5 text-white sm:inset-x-8 sm:bottom-7">
                <p className="text-sm font-bold uppercase tracking-[0.08em] text-copper-500">
                  Bakır Nakliyat Operasyon
                </p>
                <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">{service.title}</h2>
              </figcaption>
            </figure>

            <div className="reveal">
              <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">{service.title} Hakkında</h2>
              <p className="mt-4 text-lead text-muted">{service.description}</p>
            </div>

            {service.longDescription && (
              <div className="reveal">
                <h3 className="text-xl font-bold text-navy-900">Operasyon Adımları &amp; Süreç</h3>
                <ol className="mt-5 space-y-3">
                  {service.longDescription.map((para, i) => (
                    <li key={i} className="flex gap-4 rounded-card border border-line bg-surface p-5">
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-navy-900 text-sm font-bold text-white">
                        0{i + 1}
                      </span>
                      <p className="self-center leading-relaxed text-muted">{para}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          {/* Yan panel */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <QuoteCard
              eyebrow="Hemen Bilgi Alın"
              title={`${service.title} Fiyatı`}
              text="Ücretsiz ekspertiz ve sabit fiyat garantisi için operatörümüze ulaşın."
              whatsappLabel="WhatsApp Ekspertiz"
              showForm
            />

            <div className="rounded-panel border border-line bg-white p-6 shadow-card sm:p-7">
              <h3 className="font-bold text-navy-900">Bu Hizmette Standart Olanlar</h3>
              <ul className="mt-4 space-y-3">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-ink">
                    <CircleCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-copper-600" strokeWidth={2} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Diğer hizmetler */}
      <section className="border-t border-line bg-surface py-14 sm:py-16">
        <div className="container-page">
          <h3 className="text-xl font-extrabold text-navy-900 sm:text-2xl">İlginizi Çekebilecek Diğer Hizmetlerimiz</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/hizmetlerimiz/${s.slug}`}
                  className="group flex min-h-18 items-center gap-3.5 rounded-card border border-line bg-white p-4 shadow-card transition-[border-color,box-shadow] hover:border-copper-500/60 hover:shadow-lift"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-copper-50 text-copper-600 ring-1 ring-copper-100">
                    <ServiceIcon name={s.icon} />
                  </span>
                  <span className="font-semibold text-navy-900">{s.title}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="ml-auto size-4 shrink-0 text-copper-600 transition-transform group-hover:translate-x-1"
                    strokeWidth={2.25}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
