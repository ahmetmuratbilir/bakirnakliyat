import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";
import { cities } from "@/data/cities";
import Link from "next/link";

export const metadata = {
  title: "Şehirlerarası Nakliyat | 81 İle Sigortalı Taşıma",
  description: `${site.name} ile İstanbul çıkışlı Türkiye'nin tüm illerine garantili, sigortalı ve profesyonel şehirlerarası nakliyat hizmeti.`,
  alternates: { canonical: `${site.domain}/sehirler-arasi-nakliyat` },
};

export default function SehirlerArasiPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Şehirlerarası Nakliyat Seferleri"
        subtitle="İstanbul'dan tüm Türkiye'ye düzenli kapalı kasa araç filosu ve tam kasko sigortasıyla güvenli taşımacılık."
        breadcrumb={[{ label: "Şehirlerarası Nakliyat" }]}
      />

      <section className="container-page py-16">
        <div className="max-w-3xl mb-12 text-sm text-[#475569] leading-relaxed">
          <p>
            Uzun mesafe nakliyatta eşyalarınızın güvenliği en kritik konudur. Özel sabitleme aparatlı kapalı kasa araçlarımız, çift katmanlı patpat ambalajlama standartlarımız ve güzergah boyunca araç takip sistemimiz ile eşyalarınızı Türkiye&apos;nin her noktasına hasarsız ulaştırıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((c) => (
            <Link
              key={c.slug}
              href={`/sehirler-arasi-nakliyat/${c.slug}`}
              className="flex items-center justify-between p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#1d4ed8] hover:shadow-lg transition group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                  🚛
                </div>
                <div>
                  <div className="font-extrabold text-base text-[#0b1f3a] group-hover:text-[#1d4ed8] transition">
                    İstanbul ⇄ {c.name}
                  </div>
                  <div className="text-xs text-[#64748b] mt-0.5">
                    Sigortalı Düzenli Sefer
                  </div>
                </div>
              </div>
              <span className="text-sm font-bold text-[#1d4ed8] group-hover:translate-x-1 transition">
                →
              </span>
            </Link>
          ))}
        </div>

        {/* Özel Güzergah Kutusu */}
        <div className="mt-14 p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#0b1f3a]">
              Aradığınız Şehir Listede Yok mu?
            </h3>
            <p className="text-sm text-[#475569] mt-1.5 max-w-xl">
              81 il ve tüm ilçelerine özel komple araç veya parça eşya seferlerimiz mevcuttur. Rota ve tarih için hemen müşteri temsilcimizle görüşün.
            </p>
          </div>
          <a
            href={`tel:${site.phoneTel}`}
            className="font-bold px-6 py-3.5 rounded-xl bg-[#1d4ed8] text-white hover:bg-[#1e40af] transition shrink-0 text-sm shadow-md"
          >
            Özel Fiyat Al: {site.phoneDisplay}
          </a>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
