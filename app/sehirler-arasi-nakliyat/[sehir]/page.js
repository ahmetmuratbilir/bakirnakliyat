import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Placeholder from "@/components/Placeholder";
import CtaBand from "@/components/CtaBand";
import { cities, getCity } from "@/data/cities";
import { site } from "@/data/site";
import Link from "next/link";

export function generateStaticParams() {
  return cities.map((c) => ({ sehir: c.slug }));
}

export async function generateMetadata({ params }) {
  const { sehir } = await params;
  const city = getCity(sehir);
  if (!city) return {};
  return {
    title: `İstanbul — ${city.name} Nakliyat | ${site.name}`,
    description: `${site.name} ile İstanbul - ${city.name} arası sigortalı, asansörlü ve garantili şehirlerarası nakliyat hizmeti. Net ve sabit fiyat garantisi.`,
    alternates: { canonical: `${site.domain}/sehirler-arasi-nakliyat/${sehir}` },
  };
}

export default async function CityPage({ params }) {
  const { sehir } = await params;
  const city = getCity(sehir);
  if (!city) return notFound();

  const otherCities = cities.filter((c) => c.slug !== sehir);

  return (
    <div className="bg-white">
      <PageHero
        title={`İstanbul ⇄ ${city.name} Nakliyat`}
        subtitle={`İstanbul ile ${city.name} arasında haftalık düzenli sigortalı ve sözleşmeli evden eve nakliye`}
        breadcrumb={[
          { href: "/sehirler-arasi-nakliyat", label: "Şehirlerarası" },
          { label: city.name },
        ]}
      />

      <section className="container-page py-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-xs">
            <Placeholder label={`İstanbul - ${city.name} Seferi`} className="h-64 sm:h-72" />
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 text-[#334155] leading-relaxed text-base">
            <p>
              <strong className="text-[#0b1f3a] font-bold">İstanbul &ndash; {city.name}</strong> güzergahında gerçekleştirdiğimiz evden eve ve ofis taşımalarında tüm süreci A&apos;dan Z&apos;ye planlıyoruz.
            </p>
            <p>
              Şehirlerarası yolculuk boyunca eşyalarınızın sarsıntıdan veya yol koşullarından etkilenmemesi için araç içinde hidrolik askı ve sabitleme kayışları kullanılmaktadır. Eşyalarınız yeni adresinize ulaştığında yine uzman montaj personelimiz tarafından odalarınıza kurulur.
            </p>
          </div>

          {/* Standart Güvenlik Standartları */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "🛡️", title: "Kapsamlı Kasko", text: "Şehirlerarası yol sigortası poliçesiyle tam koruma." },
              { icon: "📦", title: "Özel Ambalaj", text: "Uzun yol mukavemetli çift kat patpat naylonlama." },
              { icon: "📍", title: "Araç Takip", text: "Yolculuk boyunca anlık konum ve teslimat bilgilendirmesi." },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className="font-bold text-sm text-[#0b1f3a] mb-1">{item.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sağ Panel */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0b1f3a] to-[#1e3a8a] text-white shadow-xl">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-1">
              Güzergah Teklifi
            </div>
            <h3 className="text-xl font-extrabold text-white mb-2">
              İstanbul &ndash; {city.name} Fiyatı
            </h3>
            <p className="text-xs text-slate-200 mb-5 leading-relaxed">
              Komple araç veya parça eşya seçenekleriyle en ekonomik güzergah fiyatı için hemen arayın.
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
                className="flex items-center justify-center gap-2 w-full font-bold py-3 rounded-xl bg-[#25d366] text-white hover:bg-emerald-600 transition text-sm shadow-md"
              >
                <span>💬</span>
                <span>WhatsApp&apos;tan Fiyat Sor</span>
              </a>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <h4 className="font-bold text-[#0b1f3a] text-sm mb-3 border-b border-slate-100 pb-2.5">
              Diğer Şehirlerarası Seferler
            </h4>
            <ul className="space-y-2 text-xs">
              {otherCities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/sehirler-arasi-nakliyat/${c.slug}`}
                    className="flex items-center justify-between text-[#475569] hover:text-[#1d4ed8] font-semibold py-1"
                  >
                    <span>İstanbul ⇄ {c.name}</span>
                    <span>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
