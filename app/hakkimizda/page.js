import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";
import Link from "next/link";

export const metadata = {
  title: "Hakkımızda | Bakır Nakliyat",
  description: `${site.name} hakkında kurumsal bilgiler, deneyim ve kalite standartlarımız.`,
  alternates: { canonical: `${site.domain}/hakkimizda` },
};

const values = [
  { icon: "🛡️", title: "Müşteri Memnuniyeti", text: "Önceliğimiz eşyalarınızı sıfır hasarla taşımak ve sürecin her anında huzurunuzu korumaktır." },
  { icon: "🤝", title: "Şeffaflık & Dürüstlük", text: "Fiyat tekliflerimiz nettir; sonradan ortaya çıkan gizli masraflarla asla karşılaşmazsınız." },
  { icon: "🏆", title: "Kalite & Özen", text: "Kullandığımız ambalaj malzemelerinden araç bakımına kadar her detayda en yüksek standartları uygularız." },
  { icon: "⚡", title: "Zamanında Teslim", text: "Belirlenen randevu saatine harfiyen uyarak hayatınızın olağan akışını aksatmayız." },
];

export default function HakkimizdaPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Hakkımızda"
        subtitle={`${site.name} — 15 yıldır İstanbul ve Türkiye genelinde güven inşa ediyoruz.`}
        breadcrumb={[{ label: "Hakkımızda" }]}
      />

      <section className="container-page py-16 md:py-20 max-w-4xl">
        <div className="space-y-6 text-base sm:text-lg text-[#334155] leading-relaxed">
          <p>
            <strong className="text-[#0b1f3a] font-bold">{site.name}</strong>, {site.founded} yılında İstanbul&apos;da profesyonel, güvenilir ve dürüst nakliyat hizmeti sunma vizyonuyla kurulmuştur.
          </p>
          <p>
            Sektördeki en büyük sorun olan güvensizlik ve belirsiz fiyatlandırmaları ortadan kaldırmak amacıyla tüm operasyonlarımızı resmi sözleşme, tam kasko nakliye sigortası ve sabit fiyat garantisi üzerine inşa ettik.
          </p>
          <p>
            Bugün bünyemizdeki kapalı kasa araç filosu, teleskopik dış cephe asansörleri ve alanında uzman marangoz-taşıma personeliyle binlerce ailenin ve yüzlerce kurumsal firmanın taşınma sürecini başarıyla yönettik.
          </p>
        </div>

        {/* Kurumsal Filo Görseli */}
        <div className="my-10 relative h-72 sm:h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-md">
          <Image
            src="/images/bakir-nakliyat-filo-araci.webp"
            alt="Bakır Nakliyat Araç Filosu"
            fill
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-300">Özmal Araç Filosu</span>
            <h3 className="text-lg sm:text-xl font-extrabold mt-1">Kapalı Kasa Güvenli Sevkiyat Araçlarımız</h3>
          </div>
        </div>

        {/* Kurumsal Değerler */}
        <div className="pt-8 border-t border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#0b1f3a] mb-8 tracking-tight">
            Temel Değerlerimiz
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-[#0b1f3a] text-lg mb-1">{v.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/iletisim"
            className="inline-block font-bold px-8 py-4 rounded-xl bg-[#1d4ed8] text-white hover:bg-[#1e40af] transition shadow-lg shadow-blue-600/20 text-sm"
          >
            Bizimle İletişime Geçin →
          </Link>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
