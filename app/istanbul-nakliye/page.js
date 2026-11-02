import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";
import { districts } from "@/data/districts";
import { semtler, anadoluYakasi } from "@/data/district-content";

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

          {[
            {
              title: "Avrupa Yakası Evden Eve Nakliyat",
              text: "Başakşehir merkezli ekibimizle İkitelli, Esenyurt, Küçükçekmece ve Arnavutköy başta olmak üzere Avrupa Yakası'nın tüm ilçelerinde site, apartman ve işyeri taşıması yapıyoruz.",
              items: districts.filter((d) => !anadoluYakasi.includes(d.slug)),
            },
            {
              title: "Anadolu Yakası Evden Eve Nakliyat",
              text: "Kadıköy'den Tuzla'ya, Üsküdar'dan Şile'ye Anadolu Yakası'nda ve iki yaka arasında, köprü trafiğine göre planlanan sözleşmeli taşıma.",
              items: districts.filter((d) => anadoluYakasi.includes(d.slug)),
            },
          ].map((group) => (
            <div key={group.title} className="mt-10 first:mt-0">
              <h2 className="text-xl font-bold text-navy-900">{group.title}</h2>
              <p className="mb-5 mt-2 max-w-3xl text-muted">{group.text}</p>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {group.items.map((d) => (
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
          ))}

          <h2 className="mt-12 text-xl font-bold text-navy-900">Öne Çıkan Sanayi ve Ticaret Bölgeleri</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {semtler.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/istanbul-nakliye/${s.slug}`}
                  className="inline-flex min-h-11 items-center rounded-full bg-white px-4 font-semibold text-navy-900 ring-1 ring-inset ring-line transition-colors hover:text-copper-700 hover:ring-copper-500/60"
                >
                  {s.name} Nakliyat
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
