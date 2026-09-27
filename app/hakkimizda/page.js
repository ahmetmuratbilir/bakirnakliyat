import { ArrowRight, Award, Clock, Handshake, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Photo from "@/components/ui/Photo";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export const metadata = {
  title: "Hakkımızda",
  description: `${site.name} hakkında kurumsal bilgiler, deneyim ve kalite standartlarımız.`,
  alternates: { canonical: `${site.domain}/hakkimizda` },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Müşteri Memnuniyeti",
    text: "Önceliğimiz eşyalarınızı sıfır hasarla taşımak ve sürecin her anında huzurunuzu korumaktır.",
  },
  {
    icon: Handshake,
    title: "Şeffaflık & Dürüstlük",
    text: "Fiyat tekliflerimiz nettir; sonradan ortaya çıkan gizli masraflarla asla karşılaşmazsınız.",
  },
  {
    icon: Award,
    title: "Kalite & Özen",
    text: "Kullandığımız ambalaj malzemelerinden araç bakımına kadar her detayda en yüksek standartları uygularız.",
  },
  {
    icon: Clock,
    title: "Zamanında Teslim",
    text: "Belirlenen randevu saatine harfiyen uyarak hayatınızın olağan akışını aksatmayız.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero
        title="Hakkımızda"
        subtitle={`${site.name} — ${site.yearsOfExperience} yıldır İstanbul ve Türkiye genelinde güven inşa ediyoruz.`}
        breadcrumb={[{ label: "Hakkımızda" }]}
      />

      <section className="section bg-white">
        <div className="container-page max-w-4xl">
          <div className="space-y-5 text-lead text-muted">
            <p>
              <strong className="font-bold text-navy-900">{site.name}</strong>, {site.founded} yılında
              İstanbul&apos;da profesyonel, güvenilir ve dürüst nakliyat hizmeti sunma vizyonuyla kurulmuştur.
            </p>
            <p>
              Sektördeki en büyük sorun olan güvensizlik ve belirsiz fiyatlandırmaları ortadan kaldırmak amacıyla tüm
              operasyonlarımızı resmi sözleşme, talep halinde nakliyat sigortası ve sabit fiyat garantisi üzerine inşa
              ettik.
            </p>
            <p>
              Bugün bünyemizdeki kapalı kasa araç filosu, teleskopik dış cephe asansörleri ve alanında uzman
              marangoz-taşıma personeliyle binlerce ailenin ve yüzlerce kurumsal firmanın taşınma sürecini başarıyla
              yönettik.
            </p>
          </div>

          <figure className="reveal relative my-12 aspect-4/3 overflow-hidden rounded-panel bg-navy-50 shadow-lift sm:aspect-video">
            <Photo slug="paletli-parsiyel-yuk-tasima" fill sizes="(min-width: 960px) 832px, calc(100vw - 2rem)" imgClassName="object-[50%_60%]" />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-navy-950/85 via-navy-950/10 to-transparent"
            />
            <figcaption className="absolute inset-x-6 bottom-6 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.08em] text-copper-500">Özmal Araç Filosu</p>
              <h2 className="mt-1 text-xl font-extrabold sm:text-2xl">Kapalı Kasa Güvenli Sevkiyat Araçlarımız</h2>
            </figcaption>
          </figure>

          <div className="border-t border-line pt-12">
            <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">Temel Değerlerimiz</h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {values.map(({ icon: Icon, title, text }) => (
                <li key={title} className="reveal rounded-card border border-line bg-surface p-6">
                  <span className="grid size-12 place-items-center rounded-xl bg-white text-copper-600 shadow-card ring-1 ring-line">
                    <Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-navy-900">{title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 text-center">
            <Button href="/iletisim" size="lg" iconRight={ArrowRight}>
              Bizimle İletişime Geçin
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
