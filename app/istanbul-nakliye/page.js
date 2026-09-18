import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";
import { districts } from "@/data/districts";
import Link from "next/link";

export const metadata = {
  title: "İstanbul Nakliye | 39 İlçe Evden Eve Nakliyat",
  description: `${site.name} ile İstanbul'un 39 ilçesinde sigortalı, asansörlü ve marangozlu evden eve nakliyat hizmeti. İlçenizi seçip hemen sabit fiyat teklifi alın.`,
  alternates: { canonical: `${site.domain}/istanbul-nakliye` },
};

export default function IstanbulNakliyePage() {
  return (
    <div className="bg-white">
      <PageHero
        title="İstanbul 39 İlçe Nakliye Hizmeti"
        subtitle="İstanbul genelinde Anadolu ve Avrupa yakasında aynı gün sigortalı evden eve ve ofis taşımacılığı."
        breadcrumb={[{ label: "İstanbul Nakliye" }]}
      />

      <section className="container-page py-16">
        <div className="max-w-2xl mb-10 text-sm text-[#475569] leading-relaxed">
          <p>
            {site.name} olarak İstanbul&apos;un her köşesini iyi biliyoruz. Dar sokaklar, bina asansörü kısıtlamaları veya park izinleri konusunda uzman ekiplerimizle sorunsuz bir taşıma sunuyoruz. İlçenizi seçerek bölgeye özel avantajları inceleyebilirsiniz:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
          {districts.map((d) => (
            <Link
              key={d.slug}
              href={`/istanbul-nakliye/${d.slug}`}
              className="p-4 rounded-xl bg-white border border-slate-200 text-center font-bold text-sm text-[#0b1f3a] hover:text-[#1d4ed8] hover:border-[#1d4ed8] hover:shadow-md transition shadow-xs"
            >
              {d.name}
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
