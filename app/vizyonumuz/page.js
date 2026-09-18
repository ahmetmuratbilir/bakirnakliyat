import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";

export const metadata = {
  title: "Vizyonumuz | Bakır Nakliyat",
  description: `${site.name} vizyonu: Türkiye'nin en saygın, teknolojik ve müşteri odaklı lojistik markası olmak.`,
  alternates: { canonical: `${site.domain}/vizyonumuz` },
};

const pillars = [
  { icon: "🌐", title: "Teknolojik Entegrasyon", text: "Online canlı ekspertiz, dijital sözleşme ve anlık SMS araç takip altyapısını Türkiye genelinde yaygınlaştırmak." },
  { icon: "🌱", title: "Yeşil Lojistik", text: "Karbon ayak izini azaltan Euro 6 çevre dostu motorlu araçlar ve geri dönüştürülebilir ambalaj malzemeleri kullanmak." },
  { icon: "🏅", title: "Kurumsal Referans Liderliği", text: "İstanbul ve çevre illerde kurumsal ofis ve fabrika taşımacılığında ilk akla gelen güvenilir çözüm ortağı olmak." },
  { icon: "🤝", title: "Eğitimli Personel Kültürü", text: "Tüm taşıma ve marangoz ekibimize düzenli iş güvenliği, müşteri iletişimi ve hassas eşya taşıma eğitimleri vermek." },
];

export default function VizyonumuzPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Gelecek Vizyonumuz"
        subtitle="Lojistik ve taşımacılık standartlarını ileriye taşıyan yenilikçi hedeflerimiz."
        breadcrumb={[{ label: "Vizyonumuz" }]}
      />

      <section className="container-page py-16 max-w-4xl space-y-12">
        <div className="space-y-4 text-base sm:text-lg text-[#334155] leading-relaxed">
          <p>
            Vizyonumuz; taşımacılık sektöründe geleneksel ve denetimsiz yöntemleri geride bırakarak, kurumsal şirket disiplini ile müşteri memnuniyetini en üst düzeyde buluşturan ulusal bir marka olmaktır.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="p-7 rounded-2xl bg-slate-50 border border-slate-200"
            >
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="font-extrabold text-lg text-[#0b1f3a] mb-2">{p.title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
