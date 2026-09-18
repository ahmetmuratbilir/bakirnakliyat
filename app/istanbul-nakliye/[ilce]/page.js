import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Placeholder from "@/components/Placeholder";
import CtaBand from "@/components/CtaBand";
import { districts, getDistrict } from "@/data/districts";
import { services } from "@/data/services";
import { site } from "@/data/site";
import Link from "next/link";

export function generateStaticParams() {
  return districts.map((d) => ({ ilce: d.slug }));
}

export async function generateMetadata({ params }) {
  const { ilce } = await params;
  const district = getDistrict(ilce);
  if (!district) return {};
  return {
    title: `${district.name} Nakliye | ${site.name}`,
    description: `${site.name} ile ${district.name} bölgesinde sigortalı, asansörlü evden eve nakliyat ve ofis taşıma hizmeti. Ücretsiz ekspertiz ve sabit fiyat için hemen arayın.`,
    alternates: { canonical: `${site.domain}/istanbul-nakliye/${ilce}` },
  };
}

export default async function DistrictPage({ params }) {
  const { ilce } = await params;
  const district = getDistrict(ilce);
  if (!district) return notFound();

  const nearbyDistricts = districts.filter((d) => d.slug !== ilce).slice(0, 10);

  return (
    <div className="bg-white">
      <PageHero
        title={`${district.name} Evden Eve Nakliyat`}
        subtitle={`${district.name} ve çevresinde sigortalı, marangozlu ve asansörlü profesyonel taşımacılık hizmeti`}
        breadcrumb={[
          { href: "/istanbul-nakliye", label: "İstanbul Nakliye" },
          { label: district.name },
        ]}
      />

      <section className="container-page py-16 grid lg:grid-cols-12 gap-10">
        {/* Sol İçerik */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-xs">
            <Placeholder label={`${district.name} Nakliyat`} className="h-64 sm:h-72" />
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 text-[#334155] leading-relaxed text-base">
            <p>
              <strong className="text-[#0b1f3a] font-bold">{site.name}</strong> olarak, {district.name} ilçesinde yıllardır yüzlerce başarılı taşınma operasyonu gerçekleştirdik. Semtin sokak yapısı, site yönetimi kuralları ve otopark koşullarını çok iyi bilen deneyimli ekibimizle sürecin aksamadan ilerlemesini sağlıyoruz.
            </p>
            <p>
              {district.name} nakliye hizmetimizde eşyalarınız birinci sınıf koruyucu ambalaj malzemeleriyle sarılır, mobilyalarınız marangozlarımız tarafından sökülür ve yeni evinizde istediğiniz odaya kurularak teslim edilir.
            </p>
          </div>

          {/* Bölge Avantajları */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <h3 className="font-extrabold text-xl text-[#0b1f3a] mb-5 tracking-tight">
              {district.name} Bölgesinde Standart Sunduklarımız
            </h3>
            <div className="grid sm:grid-cols-2 gap-3.5">
              {[
                `${district.name} için aynı gün ücretsiz ekspertiz`,
                "Bina dışı modüler asansör kurulumu",
                "Mobilya söküm ve anahtar teslim montaj",
                "Beyaz eşya sökümü ve tesisat bağlantısı",
                "%100 resmi sözleşme ve nakliye sigortası",
                "Sürprizsiz, sabit ve şeffaf fiyat garantisi",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-[#334155] p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1d4ed8] font-bold text-xs flex items-center justify-center shrink-0">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sağ Panel */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0b1f3a] to-[#1e3a8a] text-white shadow-xl">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-1">
              Bölgesel Fiyat Teklifi
            </div>
            <h3 className="text-xl font-extrabold text-white mb-2">
              {district.name} Nakliye Fiyatı
            </h3>
            <p className="text-xs text-slate-200 mb-5 leading-relaxed">
              Oda sayısı ve kat durumuna göre en uygun teklif için hemen bizi arayın.
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
                <span>WhatsApp&apos;tan Fiyat Al</span>
              </a>
            </div>
          </div>

          {/* İlgili Hizmetler */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <h3 className="font-bold text-[#0b1f3a] text-base mb-4 border-b border-slate-100 pb-3">
              {district.name} Hizmet Seçenekleri
            </h3>
            <ul className="space-y-2.5">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/hizmetlerimiz/${s.slug}`}
                    className="flex items-center gap-2 text-sm text-[#475569] hover:text-[#1d4ed8] font-medium"
                  >
                    <span>{s.icon}</span>
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Yakın İlçeler */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container-page">
          <h3 className="font-bold text-[#0b1f3a] mb-4 text-base">
            Diğer İstanbul İlçelerindeki Hizmetlerimiz
          </h3>
          <div className="flex flex-wrap gap-2">
            {nearbyDistricts.map((d) => (
              <Link
                key={d.slug}
                href={`/istanbul-nakliye/${d.slug}`}
                className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-[#334155] hover:border-[#1d4ed8] hover:text-[#1d4ed8] transition"
              >
                {d.name} Nakliye
              </Link>
            ))}
            <Link
              href="/istanbul-nakliye"
              className="px-3.5 py-1.5 rounded-lg bg-blue-50 text-xs font-bold text-[#1d4ed8] hover:bg-blue-100 transition"
            >
              Tüm İlçeler →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
