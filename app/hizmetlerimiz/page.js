import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";
import { services } from "@/data/services";
import Link from "next/link";

export const metadata = {
  title: "Hizmetlerimiz",
  description: `${site.name} profesyonel taşımacılık hizmetleri: evden eve nakliyat, ofis taşıma, asansörlü taşıma, eşya depolama ve şehir içi/şehirlerarası çözümler.`,
  alternates: { canonical: `${site.domain}/hizmetlerimiz` },
};

export default function HizmetlerimizPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Hizmetlerimiz"
        subtitle="İstanbul içi ve şehirlerarası taşımacılıkta sigortalı, asansörlü ve marangozlu anahtar teslim çözümler."
        breadcrumb={[{ label: "Hizmetlerimiz" }]}
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.slug}
              className="flex flex-col p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#1d4ed8] transition-all group"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h2 className="text-xl font-bold text-[#0b1f3a] mb-2.5 group-hover:text-[#1d4ed8] transition">
                {s.title}
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed mb-6 flex-1">
                {s.short}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {s.bullets.slice(0, 3).map((b) => (
                  <span
                    key={b}
                    className="text-xs px-2.5 py-1 rounded-md bg-blue-50 text-[#1d4ed8] font-semibold border border-blue-100"
                  >
                    ✓ {b}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/hizmetlerimiz/${s.slug}`}
                  className="text-sm font-bold text-[#1d4ed8] hover:text-[#1e40af] flex items-center gap-1.5"
                >
                  <span>Detaylı Bilgi</span>
                  <span className="group-hover:translate-x-1 transition">→</span>
                </Link>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="text-xs font-bold text-slate-600 hover:text-[#1d4ed8]"
                >
                  Fiyat Al
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
