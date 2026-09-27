import { Award, Handshake, Leaf, MonitorSmartphone } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";

export const metadata = {
  title: "Vizyonumuz",
  description: `${site.name} vizyonu: Türkiye'nin en saygın, teknolojik ve müşteri odaklı lojistik markası olmak.`,
  alternates: { canonical: `${site.domain}/vizyonumuz` },
};

const pillars = [
  {
    icon: MonitorSmartphone,
    title: "Teknolojik Entegrasyon",
    text: "Online canlı ekspertiz, dijital sözleşme ve anlık SMS araç takip altyapısını Türkiye genelinde yaygınlaştırmak.",
  },
  {
    icon: Leaf,
    title: "Yeşil Lojistik",
    text: "Karbon ayak izini azaltan Euro 6 çevre dostu motorlu araçlar ve geri dönüştürülebilir ambalaj malzemeleri kullanmak.",
  },
  {
    icon: Award,
    title: "Kurumsal Referans Liderliği",
    text: "İstanbul ve çevre illerde kurumsal ofis ve fabrika taşımacılığında ilk akla gelen güvenilir çözüm ortağı olmak.",
  },
  {
    icon: Handshake,
    title: "Eğitimli Personel Kültürü",
    text: "Tüm taşıma ve marangoz ekibimize düzenli iş güvenliği, müşteri iletişimi ve hassas eşya taşıma eğitimleri vermek.",
  },
];

export default function VizyonumuzPage() {
  return (
    <>
      <PageHero
        title="Gelecek Vizyonumuz"
        subtitle="Lojistik ve taşımacılık standartlarını ileriye taşıyan yenilikçi hedeflerimiz."
        breadcrumb={[{ label: "Vizyonumuz" }]}
      />

      <section className="section bg-white">
        <div className="container-page max-w-4xl space-y-12">
          <p className="text-lead text-muted">
            Vizyonumuz; taşımacılık sektöründe geleneksel ve denetimsiz yöntemleri geride bırakarak, kurumsal şirket
            disiplini ile müşteri memnuniyetini en üst düzeyde buluşturan ulusal bir marka olmaktır.
          </p>

          <ul className="grid gap-5 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, text }) => (
              <li key={title} className="reveal rounded-card border border-line bg-surface p-7">
                <span className="grid size-12 place-items-center rounded-xl bg-white text-copper-600 shadow-card ring-1 ring-line">
                  <Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
                </span>
                <h2 className="mt-4 text-lg font-extrabold text-navy-900">{title}</h2>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
