import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  Clock,
  CreditCard,
  FileSignature,
  MapPin,
  PackageCheck,
  Phone,
  Plus,
  Route,
  ShieldCheck,
  Tag,
  Wrench,
} from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { districts } from "@/data/districts";
import { cities } from "@/data/cities";
import { faqs } from "@/data/faqs";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Photo from "@/components/ui/Photo";
import ServiceCard from "@/components/ServiceCard";
import Gallery from "@/components/gallery/Gallery";
import CtaBand from "@/components/CtaBand";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

const heroBadges = [
  { icon: ClipboardCheck, label: "Ücretsiz Ekspertiz" },
  { icon: FileSignature, label: "Sözleşmeli Hizmet" },
  { icon: CreditCard, label: "Kredi Kartına Taksit" },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Talep Halinde Nakliyat Sigortası",
    text: "Talep etmeniz halinde taşımanıza özel nakliyat sigortası düzenlenir.",
  },
  {
    icon: FileSignature,
    title: "Resmi & Yazılı Sözleşme",
    text: "İş başlangıcında imzalanan taşıma sözleşmesi ile taşınma günü, saati ve tüm taahhütler yasal korumada.",
  },
  {
    icon: Tag,
    title: "Net & Sabit Fiyat Güvencesi",
    text: "Ekspertiz sonrasında verilen fiyat kesindir, taşıma günü sürpriz masraf yoktur.",
  },
  {
    icon: Clock,
    title: "Dakik & Planlı Operasyon",
    text: "Belirlenen randevu saatinde kapınızdayız.",
  },
  {
    icon: PackageCheck,
    title: "Hijyenik Çift Kat Ambalaj",
    text: "Mobilya, beyaz eşya ve hassas parçalar patpat naylon, havalı köpük ve streç filmle korunur.",
  },
  {
    icon: Wrench,
    title: "Uzman Marangoz & Montaj",
    text: "Gardırop, yatak odası takımı ve beyaz eşyalarınız profesyonel ustalarımızca sökülüp yeni adreste kurulur.",
  },
];

const steps = [
  {
    num: "01",
    title: "Hızlı Ekspertiz",
    text: "Telefon, WhatsApp veya yerinde keşif ile eşya hacmini belirleyip en uygun aracı tespit ediyoruz.",
  },
  {
    num: "02",
    title: "Sabit Fiyat Teklifi",
    text: "Taşınma gününün tüm detaylarını içeren, ek masraf içermeyen resmi teklifinizi sunuyoruz.",
  },
  {
    num: "03",
    title: "Özenli Paketleme & Taşıma",
    text: "Taşıma günü profesyonel kadromuz ve asansörlü araçlarımızla eşyalarınızı hasarsız taşıyoruz.",
  },
  {
    num: "04",
    title: "Kurulum & Anahtar Teslim",
    text: "Mobilyalarınızı monte ediyor, beyaz eşyalarınızı bağlıyor ve evinizi yaşama hazır teslim ediyoruz.",
  },
];

const galleryItems = [
  { slug: "paletli-parsiyel-yuk-tasima", caption: "Paletli parsiyel yük" },
  { slug: "gece-sevkiyat-forklift-palet-yukleme", caption: "Forklift ile gece sevkiyatı" },
  { slug: "eticaret-koli-depo-sevkiyat", caption: "Depodan koli sevkiyatı" },
  { slug: "bakir-nakliyat-guvenli-ambalaj", caption: "Streçli paletli koli yükü" },
  { slug: "tekstil-rulo-tasimaciligi", caption: "Tekstil rulosu taşıma" },
  { slug: "insaat-iskele-malzemesi-tasima", caption: "Şantiye malzemesi sevkiyatı" },
  { slug: "yapi-market-boya-teslimat", caption: "Yapı market teslimatı" },
  { slug: "bakir-nakliyat-koli-istifleme", caption: "Panelvanda koli istifi" },
];

// Başakşehir merkezli: yakın ilçeler + en çok aranan şehirler (iç bağlantı)
const featuredDistricts = ["basaksehir", "esenyurt", "bahcelievler", "bagcilar", "kucukcekmece", "beylikduzu"]
  .map((slug) => districts.find((d) => d.slug === slug))
  .filter(Boolean);
const featuredCities = cities.slice(0, 4);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      {/* 1 — HERO */}
      <section className="relative overflow-hidden bg-linear-to-b from-surface to-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 size-144 rounded-full bg-copper-100/60 blur-3xl"
        />
        <div className="container-page relative grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:gap-12 lg:py-20">
          <div className="lg:col-span-6">
            <p className="eyebrow">İstanbul&apos;da {site.yearsOfExperience} Yıllık Saha Tecrübesi</p>
            <h1 className="mt-4 text-display font-extrabold text-navy-900">
              Stresten Uzak, <span className="text-copper-600">Güvenli &amp; Sigortalı</span> Nakliyat
            </h1>
            <p className="mt-5 max-w-xl text-lead text-muted">
              Bakır Nakliyat ile evinizi ve ofisinizi gözünüz arkada kalmadan taşıyın. Sözleşmeli, ambalajlı,
              asansörlü ve <strong className="font-semibold text-navy-900">sürpriz ek ücret olmadan</strong>{" "}
              profesyonel hizmet.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`tel:${site.phoneTel}`} size="lg" icon={Phone}>
                Hemen Ara
              </Button>
              <Button href={site.whatsapp} variant="whatsapp" size="lg" icon={WhatsAppIcon}>
                WhatsApp&apos;tan Teklif Al
              </Button>
            </div>

            <ul className="mt-9 grid gap-3 border-t border-line pt-6 sm:grid-cols-3">
              {heroBadges.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-base font-semibold text-navy-900">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-copper-50 text-copper-600 ring-1 ring-copper-100">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.9} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="relative lg:pl-6">
              <div className="relative aspect-4/3 overflow-hidden rounded-panel bg-navy-50 shadow-float sm:aspect-5/4 lg:aspect-4/5">
                <Photo
                  slug="evden-eve-nakliyat-beyaz-esya-tasima"
                  mobileSlug="evden-eve-nakliyat-beyaz-esya-tasima-yatay"
                  fill
                  eager
                  sizes="(min-width: 1200px) 520px, (min-width: 1024px) calc(50vw - 80px), calc(100vw - 2rem)"
                  imgClassName="lg:object-[50%_72%]"
                />
              </div>

              {/* İkinci kare: ticari yük — iki iş kolunu birlikte gösterir */}
              <figure className="absolute -bottom-6 -left-2 hidden w-40 overflow-hidden rounded-card bg-white p-1.5 shadow-lift ring-1 ring-line sm:block lg:-left-4 lg:w-48">
                <div className="relative aspect-4/5 overflow-hidden rounded-[0.7rem]">
                  <Photo slug="endustriyel-palet-boya-tasima" fill sizes="192px" />
                </div>
                <figcaption className="px-1.5 pb-1 pt-2 text-xs font-semibold text-navy-900">
                  Ticari &amp; paletli yük
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — RAKAMLAR */}
      <section aria-label="Rakamlarla Bakır Nakliyat" className="border-y border-line bg-white">
        <dl className="container-page grid grid-cols-2 divide-line py-8 sm:py-10 lg:grid-cols-4 lg:divide-x">
          {site.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse items-center px-4 py-4 text-center">
              <dt className="mt-1.5 text-sm font-medium text-muted sm:text-[0.9375rem]">{s.label}</dt>
              <dd className="text-4xl font-extrabold tracking-tight text-navy-900 tabular-nums sm:text-5xl">
                {s.value}
                {s.suffix && <span className="text-copper-600">{s.suffix}</span>}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 3 — HİZMETLER */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Faaliyet Alanlarımız"
            title="Her İhtiyaca Özel Taşımacılık"
            align="left"
            className="reveal"
            action={
              <Link
                href="/hizmetlerimiz"
                className="group inline-flex min-h-11 items-center gap-1.5 font-semibold text-copper-700 hover:text-navy-900"
              >
                Tüm Hizmetleri Gör
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={2.25}
                />
              </Link>
            }
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {services.map((s) => (
              <li key={s.slug} className="reveal">
                <ServiceCard service={s} />
              </li>
            ))}
            <li className="reveal">
              <div className="flex h-full flex-col justify-between rounded-card bg-navy-900 p-6 text-white">
                <div>
                  <h3 className="text-lg font-bold">Size özel bir taşıma mı gerekiyor?</h3>
                  <p className="mt-2 text-base leading-relaxed text-navy-100">
                    Yükünüzü ve adreslerinizi anlatın, uygun aracı ve ekibi birlikte planlayalım.
                  </p>
                </div>
                <Button href="/iletisim" variant="primary" iconRight={ArrowRight} className="mt-6 self-start">
                  Teklif Al
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* 4 — NEDEN BİZ */}
      <section className="section bg-surface">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Kurumsal Standartlar"
              title="Neden Bakır Nakliyat'a Güvenmelisiniz?"
              description="Taşınma sürecinde yaşanabilecek tüm riskleri ortadan kaldıran şeffaf ve profesyonel iş modelimiz:"
              align="left"
              className="reveal mb-8!"
            />
            <div className="reveal relative hidden aspect-4/5 overflow-hidden rounded-panel shadow-lift lg:block">
              <Photo
                slug="profesyonel-ekip-koli-tahliye"
                fill
                sizes="(min-width: 1024px) 440px, 100vw"
                imgClassName="object-[50%_60%]"
              />
            </div>
          </div>
          <ul className="grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:col-span-7 lg:self-center">
            {benefits.map(({ icon: Icon, title, text }) => (
              <li key={title} className="reveal">
                <span className="grid size-12 place-items-center rounded-xl bg-white text-copper-600 shadow-card ring-1 ring-line">
                  <Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy-900">{title}</h3>
                <p className="mt-1.5 leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5 — 4 ADIMDA TAŞINMA */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Nasıl Çalışıyoruz?"
            title="4 Adımda Sorunsuz Taşınma"
            description="İlk görüşmeden yeni evinizdeki ilk güne kadar her şey planlı ve kontrol altında."
            className="reveal"
          />
          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <li key={step.num} className="reveal relative pl-16 lg:pl-0 lg:pt-16">
                {i < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-5.75 top-12 -bottom-10 w-px bg-line-strong lg:left-14 lg:-right-8 lg:top-5.75 lg:bottom-auto lg:h-px lg:w-auto"
                  />
                )}
                <span className="absolute left-0 top-0 grid size-12 place-items-center rounded-full bg-navy-900 text-[0.9375rem] font-bold text-white ring-8 ring-white">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6 — SAHA FOTOĞRAFLARI */}
      <section className="section bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Sahadan Canlı Kareler"
            title="Gerçekleşen Sevkiyatlarımız"
            description="Özmal araçlarımız, forkliftli palet yükleme ve güvenli ambalajlama operasyonlarımız."
            className="reveal"
          />
          <Gallery items={galleryItems} />
        </div>
      </section>

      {/* 7 — HİZMET BÖLGESİ */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Geniş Hizmet Ağı"
            title="İstanbul'un 39 İlçesi ve 81 İle Düzenli Sefer"
            description="İlçenize veya taşınacağınız şehre özel fiyatları ve güzergah bilgilerini inceleyin."
            className="reveal"
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {[
              {
                icon: MapPin,
                title: "İstanbul İlçeleri",
                text: "Avrupa ve Anadolu yakasındaki 39 ilçenin tamamında evden eve ve ticari taşıma.",
                href: "/istanbul-nakliye",
                cta: "Tüm İlçeleri Gör",
                chips: featuredDistricts.map((d) => ({ href: `/istanbul-nakliye/${d.slug}`, label: d.name })),
              },
              {
                icon: Route,
                title: "Şehirlerarası Seferler",
                text: "İstanbul çıkışlı şehirlerarası nakliyatta güzergaha özel planlama ve kapalı kasa taşıma.",
                href: "/sehirler-arasi-nakliyat",
                cta: "Tüm Güzergahları Gör",
                chips: featuredCities.map((c) => ({ href: `/sehirler-arasi-nakliyat/${c.slug}`, label: c.name })),
              },
            ].map(({ icon: Icon, title, text, href, cta, chips }) => (
              <article
                key={href}
                className="reveal relative flex flex-col overflow-hidden rounded-panel bg-navy-900 p-7 text-white sm:p-10"
              >
                <span className="relative grid size-14 place-items-center rounded-2xl bg-white/10 text-copper-500 ring-1 ring-inset ring-white/15">
                  <Icon aria-hidden="true" className="size-7" strokeWidth={1.75} />
                </span>
                <h3 className="relative mt-6 text-2xl font-extrabold">{title}</h3>
                <p className="relative mt-2 max-w-md leading-relaxed text-navy-100">{text}</p>
                <ul className="relative mb-8 mt-6 flex flex-wrap gap-2">
                  {chips.map((c) => (
                    <li key={c.href}>
                      <Link
                        href={c.href}
                        className="inline-flex min-h-10 items-center rounded-full px-3.5 text-sm font-medium text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/10"
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={href}
                  className="group relative mt-auto inline-flex min-h-11 items-center gap-2 self-start font-semibold text-copper-500 hover:text-white"
                >
                  {cta}
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:translate-x-1"
                    strokeWidth={2.25}
                  />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — SIK SORULAN SORULAR */}
      <section className="section border-t border-line bg-surface">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Merak Edilenler"
              title="Sık Sorulan Sorular"
              description="Aklınıza takılan başka bir konu varsa bize doğrudan yazın."
              align="left"
              className="reveal mb-6!"
            />
            <Button href={site.whatsapp} variant="whatsapp" icon={WhatsAppIcon} className="reveal">
              WhatsApp&apos;tan Sorun
            </Button>
          </div>
          <div className="space-y-3 lg:col-span-8">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="reveal group rounded-card border border-line bg-white shadow-card open:border-copper-500/40"
              >
                <summary className="flex min-h-14 items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-navy-900 sm:px-6 sm:text-lg">
                  <h3>{f.q}</h3>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-copper-50 text-copper-600 transition-transform duration-300 group-open:rotate-45">
                    <Plus aria-hidden="true" className="size-4.5" strokeWidth={2.5} />
                  </span>
                </summary>
                <p className="px-5 pb-5 leading-relaxed text-muted sm:px-6 sm:pb-6">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9 — KAPANIŞ CTA */}
      <CtaBand />
    </>
  );
}
