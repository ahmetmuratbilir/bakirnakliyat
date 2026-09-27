import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Photo from "@/components/ui/Photo";
import ServiceIcon from "@/components/icons/ServiceIcon";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { serviceImages, fallbackServiceImage } from "@/data/service-images";

export const metadata = {
  title: "Hizmetlerimiz",
  description: `${site.name} profesyonel taşımacılık hizmetleri: evden eve nakliyat, ofis taşıma, asansörlü taşıma, eşya depolama ve şehir içi/şehirlerarası çözümler.`,
  alternates: { canonical: `${site.domain}/hizmetlerimiz` },
};

export default function HizmetlerimizPage() {
  return (
    <>
      <PageHero
        title="Hizmetlerimiz"
        subtitle="İstanbul içi ve şehirlerarası taşımacılıkta sigortalı, asansörlü ve marangozlu anahtar teslim çözümler."
        breadcrumb={[{ label: "Hizmetlerimiz" }]}
      />

      <section className="section bg-white">
        <ul className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.slug} className="reveal">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-panel border border-line bg-white shadow-card transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:border-copper-500/50 hover:shadow-lift">
                <div className="relative aspect-16/10 overflow-hidden bg-navy-50">
                  <Photo
                    slug={serviceImages[s.slug] ?? fallbackServiceImage}
                    fill
                    eager={i < 3}
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, calc(100vw - 2rem)"
                    imgClassName="transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 grid size-11 place-items-center rounded-xl bg-white text-copper-600 shadow-card">
                    <ServiceIcon name={s.icon} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-xl font-bold text-navy-900">
                    <Link
                      href={`/hizmetlerimiz/${s.slug}`}
                      className="rounded-sm after:absolute after:inset-0 hover:text-copper-700"
                    >
                      {s.title}
                    </Link>
                  </h2>
                  <p className="mt-2 flex-1 leading-relaxed text-muted">{s.short}</p>

                  <ul className="mt-5 space-y-1.5">
                    {s.bullets.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-center gap-2 text-[0.9375rem] text-ink">
                        <Check aria-hidden="true" className="size-4 shrink-0 text-copper-600" strokeWidth={2.5} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="relative z-10 mt-6 flex items-center justify-between border-t border-line pt-4">
                    <span className="inline-flex items-center gap-1.5 font-semibold text-copper-600">
                      Detaylı Bilgi
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 transition-transform group-hover:translate-x-1"
                        strokeWidth={2.25}
                      />
                    </span>
                    <a
                      href={`tel:${site.phoneTel}`}
                      className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2 text-[0.9375rem] font-semibold text-navy-900 hover:text-copper-700"
                    >
                      <Phone aria-hidden="true" className="size-4" strokeWidth={2} />
                      Fiyat Al
                    </a>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
