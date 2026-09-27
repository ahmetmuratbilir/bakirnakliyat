import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";
import { districts } from "@/data/districts";

export const metadata = {
  title: "İstanbul 39 İlçe Evden Eve Nakliyat",
  description:
    "İstanbul'un 39 ilçesinde evden eve nakliyat, parça eşya ve asansörlü taşıma. İlçenizi seçin; bölgenize özel bilgi ve net fiyat teklifi alın.",
  alternates: { canonical: `${site.domain}/istanbul-nakliye` },
};

export default function IstanbulNakliyePage() {
  return (
    <>
      <PageHero
        title="İstanbul 39 İlçe Evden Eve Nakliyat"
        subtitle="İstanbul genelinde Anadolu ve Avrupa yakasında aynı gün, sözleşmeli evden eve ve ofis taşımacılığı."
        breadcrumb={[{ label: "İstanbul Nakliye" }]}
      />

      <section className="section bg-white">
        <div className="container-page">
          <p className="mb-8 max-w-2xl text-lead text-muted">
            {site.name} olarak İstanbul&apos;un her köşesini iyi biliyoruz. Dar sokaklar, bina asansörü kısıtlamaları
            veya park izinleri konusunda uzman ekiplerimizle sorunsuz bir taşıma sunuyoruz. İlçenizi seçerek bölgeye
            özel avantajları inceleyebilirsiniz:
          </p>

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {districts.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/istanbul-nakliye/${d.slug}`}
                  className="group flex min-h-14 items-center justify-between gap-2 rounded-card border border-line bg-white px-4 font-semibold text-navy-900 shadow-card transition-[border-color,box-shadow,color] hover:border-copper-500/60 hover:text-copper-700 hover:shadow-lift"
                >
                  {d.name}
                  <ChevronRight
                    aria-hidden="true"
                    className="size-4 shrink-0 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-copper-600"
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
