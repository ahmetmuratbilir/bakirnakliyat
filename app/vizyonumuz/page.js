import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";

export const metadata = {
  title: "Vizyonumuz",
  description: `${site.name}'ın vizyonu: Türkiye'nin en güvenilir nakliyat markası olmak ve taşıma süreçlerini dijital teknoloji ile dönüştürmek.`,
  alternates: { canonical: `${site.domain}/vizyonumuz` },
};

const goals = [
  { icon: "🏆", title: "Sektör Liderliği", text: "2030 yılına kadar İstanbul merkezli nakliyat sektöründe marka bilinirliği ve müşteri memnuniyeti endekslerinde lider konuma ulaşmak." },
  { icon: "📱", title: "Dijital Dönüşüm", text: "Online ekspertiz, gerçek zamanlı araç takibi ve dijital taşıma sözleşmesi altyapısını tüm müşterilere sunmak." },
  { icon: "🌍", title: "Coğrafi Genişleme", text: "İstanbul ve Marmara Bölgesi'nin ötesinde Türkiye genelinde güvenilir nakliyat ağını kurmak." },
  { icon: "♻️", title: "Yeşil Operasyon", text: "Araç filosunun %50'sini elektrikli ve düşük emisyonlu araçlara dönüştürerek çevre dostu nakliyatta öncü olmak." },
];

export default function VizyonumuzPage() {
  return (
    <>
      <PageHero
        title="Vizyonumuz"
        subtitle="Nereye gidiyoruz ve geleceği nasıl şekillendireceğiz?"
        breadcrumb={[{ label: "Vizyonumuz" }]}
      />
      <section className="container-page py-16 max-w-4xl">
        <div className="space-y-5 text-base leading-relaxed mb-12" style={{ color: "var(--color-text-muted)" }}>
          <p>
            Vizyonumuz yalnızca büyümek değil, doğru büyümektir. Müşteri güveni, operasyonel mükemmellik
            ve çevresel sorumluluk üçgeninde, Türkiye&apos;nin en güvenilir nakliyat markası olmak için
            çalışıyoruz.
          </p>
          <p>
            Teknoloji, bu yolculuğumuzun merkezindedir. Yapay zeka destekli ekspertiz sistemleri, IoT
            tabanlı araç takibi ve müşteri memnuniyeti algoritmaları ile nakliyat deneyimini yeniden
            tasarlıyoruz.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {goals.map((g) => (
            <div
              key={g.title}
              className="p-6 rounded-xl"
              style={{ background: "var(--color-dark-card)", border: "1px solid var(--color-dark-border)" }}
            >
              <div className="text-3xl mb-3">{g.icon}</div>
              <h3 className="font-bold mb-2" style={{ color: "var(--color-text)" }}>{g.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{g.text}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
