import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";
import Link from "next/link";

export const metadata = {
  title: "Hakkımızda",
  description: `${site.name} — İstanbul'un güvenilir nakliyat firması. ${site.founded}'dan bu yana binlerce mutlu müşteri ve sıfır sorunlu taşıma anlayışıyla hizmet sunuyoruz.`,
  alternates: { canonical: `${site.domain}/hakkimizda` },
};

const values = [
  { icon: "🎯", title: "Müşteri Odaklılık", text: "Her taşıma sürecinde müşteri memnuniyeti önceliğimizdir. Geri bildirimleriniz hizmetlerimizin sürekli iyileşmesini sağlar." },
  { icon: "🤝", title: "Güven ve Dürüstlük", text: "Verdiğimiz söz tutulur. Fiyat tekliflerimiz net, sözleşmelerimiz açık ve süreçlerimiz şeffaftır." },
  { icon: "⭐", title: "Mükemmellik", text: "Her taşımayı ilk ve son iş gibi titizlikle yaparız. Kalite standartlarımızdan hiçbir zaman ödün vermeyiz." },
  { icon: "🌱", title: "Sürdürülebilirlik", text: "Çevre dostu ambalaj malzemeleri kullanır, hafriyat taşımacılığında yasal bertaraf noktalarını tercih ederiz." },
];

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero
        title="Hakkımızda"
        subtitle={`${site.name} — Güvenin ve profesyonelliğin adresi`}
        breadcrumb={[{ label: "Hakkımızda" }]}
      />

      <section className="container-page py-16 md:py-20 max-w-4xl">
        <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          <p>
            <strong style={{ color: "var(--color-text)" }}>{site.name}</strong>, {site.founded} yılında
            İstanbul&apos;da kurulan bir nakliyat ve lojistik firmasıdır. Kuruluşumuzdan bu yana temel
            ilkemiz değişmedi: Her taşımayı sigorta güvencesi, yazılı sözleşme ve şeffaf fiyatlandırmayla
            gerçekleştirmek.
          </p>
          <p>
            15 yılı aşkın deneyimimiz boyunca 5.000&apos;den fazla aileye ve yüzlerce kuruma hizmet verdik.
            Evden eve taşımadan kurumsal ofis taşımacılığına, parça eşya hizmetinden şehirlerarası
            güzergahlara kadar geniş bir portföy oluşturduk. Her hizmet kategorisinde uzmanlaşmış
            ekiplerimiz ve bu kategorilere özgü araç-gereç standartlarımızla sektörde fark yaratıyoruz.
          </p>
          <p>
            Bakır Nakliyat&apos;ta bir taşıma ekibinin çok ötesindeyiz. Sizin için en iyi taşınma
            deneyimini tasarlayan bir çözüm ortağıyız. Ekspertizden montaja, ambalajdan depolamaya kadar
            sürecin her adımında yanınızdayız.
          </p>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-bold mb-8 gold-line inline-block" style={{ color: "var(--color-text)" }}>
            Değerlerimiz
          </h2>
          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex gap-4 p-5 rounded-xl"
                style={{ background: "var(--color-dark-card)", border: "1px solid var(--color-dark-border)" }}
              >
                <div className="text-2xl shrink-0">{v.icon}</div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "var(--color-text)" }}>
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {v.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/iletisim"
            className="inline-block font-semibold px-7 py-3 rounded-lg transition"
            style={{ background: "var(--color-gold)", color: "var(--color-dark)" }}
          >
            Bizimle İletişime Geçin →
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
