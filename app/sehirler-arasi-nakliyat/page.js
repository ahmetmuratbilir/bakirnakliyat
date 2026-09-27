import Link from "next/link";
import { ArrowRight, Phone, Truck } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { cities } from "@/data/cities";

export const metadata = {
  title: "Şehirlerarası Nakliyat | Sözleşmeli ve Faturalı Taşıma",
  description: `${site.name} ile İstanbul çıkışlı Türkiye'nin tüm illerine garantili, sigortalı ve profesyonel şehirlerarası nakliyat hizmeti.`,
  alternates: { canonical: `${site.domain}/sehirler-arasi-nakliyat` },
};

export default function SehirlerArasiPage() {
  return (
    <>
      <PageHero
        title="Şehirlerarası Nakliyat Seferleri"
        subtitle="İstanbul'dan tüm Türkiye'ye düzenli kapalı kasa araç filosu ve talep halinde nakliyat sigortasıyla güvenli taşımacılık."
        breadcrumb={[{ label: "Şehirlerarası Nakliyat" }]}
      />

      <section className="section bg-white">
        <div className="container-page">
          <p className="mb-10 max-w-3xl text-lead text-muted">
            Uzun mesafe nakliyatta eşyalarınızın güvenliği en kritik konudur. Özel sabitleme aparatlı kapalı kasa
            araçlarımız, çift katmanlı patpat ambalajlama standartlarımız ve güzergah boyunca araç takip sistemimiz
            ile eşyalarınızı Türkiye&apos;nin her noktasına hasarsız ulaştırıyoruz.
          </p>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((c) => (
              <li key={c.slug} className="reveal">
                <Link
                  href={`/sehirler-arasi-nakliyat/${c.slug}`}
                  className="group flex items-center gap-4 rounded-card border border-line bg-white p-5 shadow-card transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-0.5 hover:border-copper-500/60 hover:shadow-lift"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-copper-50 text-copper-600 ring-1 ring-copper-100 transition-colors group-hover:bg-copper-600 group-hover:text-white">
                    <Truck aria-hidden="true" className="size-6" strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold text-navy-900">İstanbul ⇄ {c.name}</span>
                    <span className="mt-0.5 block text-sm text-subtle">Sigortalı Düzenli Sefer</span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="size-5 shrink-0 text-copper-600 transition-transform group-hover:translate-x-1"
                    strokeWidth={2.25}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Özel güzergah */}
          <div className="mt-12 flex flex-col gap-6 rounded-panel border border-line bg-surface p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-bold text-navy-900 sm:text-2xl">Aradığınız Şehir Listede Yok mu?</h2>
              <p className="mt-2 max-w-xl leading-relaxed text-muted">
                81 il ve tüm ilçelerine özel komple araç veya parça eşya seferlerimiz mevcuttur. Rota ve tarih için
                hemen müşteri temsilcimizle görüşün.
              </p>
            </div>
            <Button href={`tel:${site.phoneTel}`} size="lg" icon={Phone} nowrap={false} className="w-full shrink-0 md:w-auto">
              Özel Fiyat Al: {site.phoneDisplay}
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
