import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CircleCheck, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import QuoteCard from "@/components/QuoteCard";
import Photo from "@/components/ui/Photo";
import ServiceIcon from "@/components/icons/ServiceIcon";
import { districts } from "@/data/districts";
import { districtContent, semtler } from "@/data/district-content";
import { services } from "@/data/services";
import { site } from "@/data/site";

// İlçe sayfaları arasında görsel çeşitliliği için sırayla dönen kareler
const DISTRICT_PHOTOS = [
  "evden-eve-nakliyat-beyaz-esya-tasima",
  "bakir-nakliyat-koli-istifleme",
  "bakir-nakliyat-filo-araci",
  "bakir-nakliyat-guvenli-ambalaj",
  "yapi-market-boya-teslimat",
];

// 39 ilçe + İkitelli, Hadımköy gibi öncelikli semtler aynı rotada yayınlanır
const allAreas = [...districts, ...semtler];
const getDistrict = (slug) => allAreas.find((d) => d.slug === slug);

export function generateStaticParams() {
  return allAreas.map((d) => ({ ilce: d.slug }));
}

export async function generateMetadata({ params }) {
  const { ilce } = await params;
  const district = getDistrict(ilce);
  if (!district) return {};
  return {
    title: district.parent ? `${district.name} Nakliyat ve Evden Eve Taşıma` : `${district.name} Evden Eve Nakliyat`,
    description:
      districtContent[ilce]?.meta ??
      `${district.name} evden eve nakliyat, parça eşya ve asansörlü taşıma. Sözleşmeli, faturalı hizmet; ücretsiz ekspertizle net fiyat için hemen arayın.`,
    alternates: { canonical: `${site.domain}/istanbul-nakliye/${ilce}` },
  };
}

export default async function DistrictPage({ params }) {
  const { ilce } = await params;
  const district = getDistrict(ilce);
  if (!district) return notFound();

  const content = districtContent[ilce];
  const parent = district.parent ? getDistrict(district.parent) : null;
  // İç bağlantılar: önce gerçek komşu ilçe/semtler, sonra döngüsel sıradaki ilçelerle 10'a tamamlanır
  const index = allAreas.findIndex((d) => d.slug === ilce);
  const neighborList = (content?.neighbors ?? []).map(getDistrict).filter(Boolean);
  const fill = Array.from({ length: allAreas.length }, (_, i) => allAreas[(index + 1 + i) % allAreas.length]).filter(
    (d) => d.slug !== ilce && !neighborList.includes(d)
  );
  const nearbyDistricts = [...neighborList, ...fill].slice(0, 10);
  const photo = DISTRICT_PHOTOS[index % DISTRICT_PHOTOS.length];

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

  const standards = [
    `${district.name} için aynı gün ücretsiz ekspertiz`,
    "Bina dışı modüler asansör kurulumu",
    "Mobilya söküm ve anahtar teslim montaj",
    "Beyaz eşya sökümü ve tesisat bağlantısı",
    "Resmi sözleşme, talep halinde nakliye sigortası",
    "Sürprizsiz, sabit ve şeffaf fiyat garantisi",
  ];

  return (
    <>
      <PageHero
        title={`${district.name} Evden Eve Nakliyat`}
        subtitle={`${district.name} ve çevresinde sözleşmeli, marangozlu ve asansörlü evden eve nakliyat ile parça eşya taşıma`}
        breadcrumb={[
          { href: "/istanbul-nakliye", label: "İstanbul Nakliye" },
          ...(parent ? [{ href: `/istanbul-nakliye/${parent.slug}`, label: parent.name }] : []),
          { label: district.name },
        ]}
      />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      <section className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 space-y-12 lg:col-span-8">
            <figure className="relative aspect-16/10 overflow-hidden rounded-panel bg-navy-50 shadow-lift">
              <Photo slug={photo} fill eager sizes="(min-width: 1200px) 740px, (min-width: 1024px) calc(66vw - 60px), calc(100vw - 2rem)" />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-navy-950/85 via-navy-950/10 to-transparent"
              />
              <figcaption className="absolute inset-x-5 bottom-5 text-white sm:inset-x-8 sm:bottom-7">
                <p className="text-sm font-bold uppercase tracking-[0.08em] text-copper-500">
                  {district.name} Bölgesi Hizmet Ekibi
                </p>
                <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">
                  {district.name} Evden Eve &amp; Ofis Taşımacılığı
                </h2>
              </figcaption>
            </figure>

            <div className="reveal space-y-4 text-lead text-muted">
              {content ? (
                content.intro.map((p) => <p key={p.slice(0, 24)}>{p}</p>)
              ) : (
                <p>
                  <strong className="font-bold text-navy-900">{site.name}</strong> olarak {district.name} evden eve
                  nakliyat ve parça eşya taşımalarında semtin sokak yapısını, site yönetimi kurallarını ve park
                  koşullarını önceden planlıyoruz.
                </p>
              )}
            </div>

            {content?.mahalleler?.length > 0 && (
              <div className="reveal">
                <h2 className="text-xl font-bold text-navy-900">
                  {district.name} İçinde Hizmet Verdiğimiz Başlıca Bölgeler
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {content.mahalleler.map((m) => (
                    <li
                      key={m}
                      className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3.5 py-2 text-[0.9375rem] text-ink ring-1 ring-inset ring-line"
                    >
                      <MapPin aria-hidden="true" className="size-4 text-copper-600" strokeWidth={2} />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {content?.notes?.length > 0 && (
              <div className="reveal">
                <h2 className="text-xl font-bold text-navy-900">{district.name} Taşınmalarında Nelere Dikkat Ediyoruz?</h2>
                <ul className="mt-4 space-y-3">
                  {content.notes.map((n) => (
                    <li key={n} className="flex items-start gap-3 text-ink">
                      <CircleCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-copper-600" strokeWidth={2} />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="reveal">
              <h2 className="text-xl font-bold text-navy-900">
                {district.name} Bölgesinde Standart Sunduklarımız
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {standards.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-card border border-line bg-surface p-4 text-ink">
                    <CircleCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-copper-600" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {content?.faq?.length > 0 && (
              <div className="reveal">
                <h2 className="text-xl font-bold text-navy-900">{district.name} Nakliyat Hakkında Sık Sorulanlar</h2>
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
              eyebrow="Bölgesel Fiyat Teklifi"
              title={`${district.name} Nakliye Fiyatı`}
              text="Oda sayısı ve kat durumuna göre en uygun teklif için hemen bizi arayın."
              whatsappLabel="WhatsApp'tan Fiyat Al"
            />

            <div className="rounded-panel border border-line bg-white p-6 shadow-card sm:p-7">
              <h3 className="font-bold text-navy-900">{district.name} Hizmet Seçenekleri</h3>
              <ul className="mt-3">
                {services.slice(0, 5).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/hizmetlerimiz/${s.slug}`}
                      className="flex min-h-11 items-center gap-3 rounded-lg font-medium text-muted transition-colors hover:text-copper-700"
                    >
                      <ServiceIcon name={s.icon} className="size-5 text-copper-600" />
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-12 sm:py-14">
        <div className="container-page">
          <h2 className="font-bold text-navy-900">{district.name} Çevresindeki Bölgelerde Nakliyat</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {nearbyDistricts.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/istanbul-nakliye/${d.slug}`}
                  className="inline-flex min-h-11 items-center rounded-full bg-white px-4 text-[0.9375rem] font-medium text-ink ring-1 ring-inset ring-line transition-colors hover:text-copper-700 hover:ring-copper-500/60"
                >
                  {d.name} Nakliyat
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/istanbul-nakliye"
                className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-copper-50 px-4 text-[0.9375rem] font-semibold text-copper-700 ring-1 ring-inset ring-copper-100 transition-colors hover:bg-copper-100"
              >
                Tüm İlçeler
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2.25} />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
