import { notFound } from "next/navigation";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { services, getService } from "@/data/services";
import { site } from "@/data/site";
import Link from "next/link";

const serviceImages = {
  "evden-eve-nakliyat": "/images/bakir-nakliyat-filo-araci.webp",
  "ofis-ve-buro-tasima": "/images/bakir-nakliyat-palet-yukleme.webp",
  "sehir-ici-nakliye": "/images/bakir-nakliyat-koli-istifleme.webp",
  "sehirler-arasi-nakliyat": "/images/bakir-nakliyat-gece-sevkiyat.webp",
  "asansorlu-nakliyat": "/images/bakir-nakliyat-filo-araci.webp",
  "esya-depolama": "/images/bakir-nakliyat-guvenli-ambalaj.webp",
  "parca-esya-tasima": "/images/bakir-nakliyat-koli-istifleme.webp",
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} | ${site.name}`,
    description: `${service.title} hizmeti — ${service.short} Sigortalı, asansörlü ve marangozlu anahtar teslim taşıma.`,
    alternates: { canonical: `${site.domain}/hizmetlerimiz/${slug}` },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <div className="bg-white">
      <PageHero
        title={service.title}
        subtitle={service.short}
        breadcrumb={[
          { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
          { label: service.title },
        ]}
      />

      <section className="container-page py-16 grid lg:grid-cols-12 gap-10">
        {/* Ana Açıklama Alanı */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white rounded-3xl p-2.5 border border-slate-200 shadow-sm overflow-hidden">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src={serviceImages[slug] || "/images/bakir-nakliyat-filo-araci.webp"}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  Bakır Nakliyat Operasyon
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold mt-0.5">{service.title}</h2>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <h2 className="text-2xl font-extrabold text-[#0b1f3a] mb-4 tracking-tight">
              Hizmet Hakkında Detaylar
            </h2>
            <p className="text-base text-[#334155] leading-relaxed">
              {service.description}
            </p>
          </div>

          {service.longDescription && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#0b1f3a] tracking-tight">
                Operasyon Adımları & Süreç
              </h3>
              {service.longDescription.map((para, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-xs"
                >
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-[#1d4ed8] font-extrabold text-sm flex items-center justify-center">
                    0{i + 1}
                  </span>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {para}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sağ Yan Panel (Özellikler & Hızlı Fiyat) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Teklif Kutusu */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0b1f3a] to-[#1e3a8a] text-white shadow-xl">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-1">
              Hemen Bilgi Alın
            </div>
            <h3 className="text-xl font-extrabold text-white mb-2">
              {service.title} Fiyatı
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 mb-5 leading-relaxed">
              Ücretsiz ekspertiz ve sabit fiyat garantisi için operatörümüze ulaşın.
            </p>

            <div className="space-y-2.5">
              <a
                href={`tel:${site.phoneTel}`}
                className="flex items-center justify-center gap-2 w-full font-bold py-3.5 rounded-xl bg-white text-[#0b1f3a] hover:bg-slate-100 transition text-sm shadow-md"
              >
                <span>📞</span>
                <span>{site.phoneDisplay}</span>
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full font-bold py-3 rounded-xl bg-[#128c4a] text-white hover:bg-[#0f7a3f] transition text-sm shadow-md"
              >
                <span>💬</span>
                <span>WhatsApp Ekspertiz</span>
              </a>
              <Link
                href="/iletisim"
                className="flex items-center justify-center gap-2 w-full font-bold py-3 rounded-xl bg-blue-700/60 text-white hover:bg-blue-700 transition text-sm border border-blue-400/30"
              >
                <span>📝</span>
                <span>Online Teklif Formu</span>
              </Link>
            </div>
          </div>

          {/* Hizmet Avantajları */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <h3 className="font-bold text-[#0b1f3a] text-base mb-4 border-b border-slate-100 pb-3">
              Bu Hizmette Standart Olanlar
            </h3>
            <ul className="space-y-3">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-[#334155]">
                  <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-xs flex items-center justify-center shrink-0 border border-emerald-200">
                    ✓
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Diğer Hizmetler */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="container-page">
          <h3 className="font-extrabold text-xl text-[#0b1f3a] mb-6 tracking-tight">
            İlginizi Çekebilecek Diğer Hizmetlerimiz
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetlerimiz/${s.slug}`}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-[#1d4ed8] hover:shadow-md transition"
              >
                <span className="text-3xl">{s.icon}</span>
                <span className="text-sm font-bold text-[#0b1f3a] hover:text-[#1d4ed8]">
                  {s.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
