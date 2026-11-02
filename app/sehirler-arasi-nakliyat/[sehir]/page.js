import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CircleCheck, MapPin, PackageCheck, Route, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import QuoteCard from "@/components/QuoteCard";
import Photo from "@/components/ui/Photo";
import { cities, getCity } from "@/data/cities";
import { cityContent } from "@/data/city-content";
import { site } from "@/data/site";

export function generateStaticParams() {
  return cities.map((c) => ({ sehir: c.slug }));
}

export async function generateMetadata({ params }) {
  const { sehir } = await params;
  const city = getCity(sehir);
  if (!city) return {};
  return {
    title: `İstanbul ${city.name} Evden Eve Nakliyat`,
    description:
      cityContent[sehir]?.meta ??
      `İstanbul ${city.name} evden eve nakliyat ve parça eşya taşıma: kapalı kasa araç, yazılı sözleşme ve güzergaha özel net fiyat teklifi.`,
    alternates: { canonical: `${site.domain}/sehirler-arasi-nakliyat/${sehir}` },
  };
}

const standards = [
  {
    icon: ShieldCheck,
    title: "Nakliyat Sigortası",
    text: "Talep halinde şehirlerarası taşımanıza özel poliçe düzenlenir.",
  },
  { icon: PackageCheck, title: "Özel Ambalaj", text: "Uzun yol mukavemetli çift kat patpat naylonlama." },
  { icon: MapPin, title: "Konum Bilgisi", text: "Yolculuk boyunca WhatsApp üzerinden konum ve teslimat bilgisi paylaşılır." },
];

export default async function CityPage({ params }) {
  const { sehir } = await params;
  const city = getCity(sehir);
  if (!city) return notFound();

  const otherCities = cities.filter((c) => c.slug !== sehir);
  const content = cityContent[sehir];
  const faqJsonLd = content?.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: content.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      <PageHero
        title={`İstanbul – ${city.name} Evden Eve Nakliyat`}
        subtitle={`İstanbul ile ${city.name} arasında sözleşmeli evden eve nakliyat ve parça eşya taşıma`}
        breadcrumb={[{ href: "/sehirler-arasi-nakliyat", label: "Şehirlerarası" }, { label: city.name }]}
      />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      <section className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 space-y-12 lg:col-span-8">
            <figure className="relative aspect-16/10 overflow-hidden rounded-panel bg-navy-50 shadow-lift">
              <Photo
                slug="gece-sevkiyat-forklift-palet-yukleme"
                alt={`İstanbul – ${city.name} şehirlerarası sevkiyat için araca gece yüklemesi`}
                fill
                eager
                sizes="(min-width: 1200px) 740px, (min-width: 1024px) calc(66vw - 60px), calc(100vw - 2rem)"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-navy-950/80 via-transparent to-transparent"
              />
              <figcaption className="absolute inset-x-5 bottom-5 text-white sm:inset-x-8 sm:bottom-7">
                <h2 className="flex items-center gap-2 text-lg font-bold sm:text-xl">
                  <Route aria-hidden="true" className="size-5 shrink-0 text-copper-500" strokeWidth={2} />
                  İstanbul – {city.name} Gece &amp; Gündüz Kesintisiz Sefer
                </h2>
              </figcaption>
            </figure>

            {content ? (
              <>
                <div className="reveal space-y-4 text-lead text-muted">
                  {content.intro.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
                <dl className="reveal grid gap-3 rounded-card border border-line bg-surface p-5 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-semibold text-subtle">Mesafe</dt>
                    <dd className="font-bold text-navy-900">{content.km}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-subtle">Güzergah</dt>
                    <dd className="font-bold text-navy-900">{content.route}</dd>
                  </div>
                </dl>
                <div className="reveal">
                  <h2 className="text-xl font-bold text-navy-900">İstanbul – {city.name} Taşınmasında Dikkat Ettiklerimiz</h2>
                  <ul className="mt-4 space-y-3">
                    {content.tips.map((t) => (
                      <li key={t} className="flex items-start gap-3 text-ink">
                        <CircleCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-copper-600" strokeWidth={2} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
            <div className="reveal space-y-4 text-lead text-muted">
              <p>
                <strong className="font-bold text-navy-900">İstanbul – {city.name}</strong> güzergahında
                gerçekleştirdiğimiz evden eve ve ofis taşımalarında tüm süreci A&apos;dan Z&apos;ye planlıyoruz.
              </p>
              <p>
                Uzun yolda eşyalar sarsıntıdan etkilenmesin diye araç içinde kayışla sabitlenir ve battaniyelerle
                korunur. Yeni adrese varınca montaj ekibimiz eşyalarınızı odalarınıza kurar.
              </p>
            </div>
            )}

            <ul className="reveal grid gap-4 sm:grid-cols-3">
              {standards.map(({ icon: Icon, title, text }) => (
                <li key={title} className="rounded-card border border-line bg-surface p-5">
                  <span className="grid size-11 place-items-center rounded-xl bg-white text-copper-600 shadow-card ring-1 ring-line">
                    <Icon aria-hidden="true" className="size-5.5" strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-4 font-bold text-navy-900">{title}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{text}</p>
                </li>
              ))}
            </ul>

            {content?.faq?.length > 0 && (
              <div className="reveal">
                <h2 className="text-xl font-bold text-navy-900">İstanbul – {city.name} Nakliyat Hakkında Sık Sorulanlar</h2>
                <div className="mt-4 divide-y divide-line rounded-card border border-line bg-white">
                  {content.faq.map((f) => (
                    <details key={f.q} className="group p-5">
                      <summary className="cursor-pointer list-none font-semibold text-navy-900">{f.q}</summary>
                      <p className="mt-2 text-muted">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="min-w-0 space-y-6 lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <QuoteCard
              eyebrow="Güzergah Teklifi"
              title={`İstanbul – ${city.name} Fiyatı`}
              text="Komple araç veya parça eşya seçenekleriyle en ekonomik güzergah fiyatı için hemen arayın."
              whatsappLabel="WhatsApp'tan Fiyat Sor"
            />

            <div className="rounded-panel border border-line bg-white p-6 shadow-card sm:p-7">
              <h3 className="font-bold text-navy-900">Diğer Şehirlerarası Seferler</h3>
              <ul className="mt-3 divide-y divide-line">
                {otherCities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/sehirler-arasi-nakliyat/${c.slug}`}
                      className="group flex min-h-11 items-center justify-between font-medium text-muted transition-colors hover:text-copper-700"
                    >
                      İstanbul – {c.name} Nakliyat
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 text-copper-600 transition-transform group-hover:translate-x-1"
                        strokeWidth={2.25}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
