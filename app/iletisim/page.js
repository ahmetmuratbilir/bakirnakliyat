import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import ContactForm from "@/components/ContactForm";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";
import { site } from "@/data/site";
import { services } from "@/data/services";

export const metadata = {
  title: "İletişim & Teklif Formu",
  description: `${site.name} ile iletişime geçin. Ücretsiz ekspertiz, sabit fiyat teklifi ve nakliye randevusu için hemen arayın veya formu doldurun.`,
  alternates: { canonical: `${site.domain}/iletisim` },
};

// Form seçenekleri: tüm hizmetler + şehirlerarası ve ticari yük
const serviceOptions = [
  ...services.map((s) => s.title).slice(0, 2),
  "Şehirlerarası Nakliyat",
  "Ticari / Paletli Yük Taşıma",
  ...services.map((s) => s.title).slice(2),
];

const contacts = [
  {
    icon: Phone,
    title: "Telefon Hattımız",
    val: site.phoneDisplay,
    sub: "7/24 Kesintisiz Destek & Fiyat",
    href: `tel:${site.phoneTel}`,
  },
  {
    icon: WhatsAppIcon,
    brand: true,
    title: "WhatsApp Destek",
    val: `WhatsApp'tan Yazın (${site.phoneDisplay})`,
    sub: "Fotoğraf & Konum Gönderimi İçin",
    href: site.whatsapp,
  },
  {
    icon: Mail,
    title: "Kurumsal E-Posta",
    val: site.email,
    sub: "Tıklayarak Doğrudan E-Posta Gönderin",
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    title: "Merkez Ofis",
    val: site.address.display,
    sub: "İstanbul / Başakşehir",
  },
];

const hours = [
  { day: "Pazartesi – Cumartesi", time: "07:30 – 20:30" },
  { day: "Pazar Günleri", time: "08:30 – 19:00" },
];

export default function IletisimPage() {
  return (
    <>
      <PageHero
        title="İletişim & Fiyat Teklifi"
        subtitle="Taşınma detaylarınızı paylaşın, uzman ekibimiz en geç 15 dakika içinde sabit fiyat teklifinizi hazırlasın."
        breadcrumb={[{ label: "İletişim" }]}
      />

      <section className="section bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          {/* Sol: iletişim bilgileri */}
          <div className="min-w-0 space-y-8 lg:col-span-5">
            <div>
              <p className="eyebrow">Müşteri Hizmetleri</p>
              <h2 className="mt-3 text-2xl font-extrabold text-navy-900 sm:text-3xl">Bizimle İletişime Geçin</h2>
              <p className="mt-3 leading-relaxed text-muted">
                Sorularınız, ücretsiz yerinde ekspertiz talepleriniz ve rezervasyon için haftanın 7 günü
                hizmetinizdeyiz.
              </p>
            </div>

            <ul className="space-y-3">
              {contacts.map(({ icon: Icon, brand, title, val, sub, href }) => {
                const external = href?.startsWith("http");
                return (
                  <li
                    key={title}
                    className="relative flex items-start gap-4 rounded-card border border-line bg-white p-5 shadow-card transition-[border-color,box-shadow] has-[a:hover]:border-copper-500/50 has-[a:hover]:shadow-lift"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-copper-50 text-copper-600 ring-1 ring-copper-100">
                      {brand ? (
                        <Icon className="size-5.5" />
                      ) : (
                        <Icon aria-hidden="true" className="size-5.5" strokeWidth={1.9} />
                      )}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-subtle">{title}</p>
                      {href ? (
                        <a
                          href={href}
                          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="mt-0.5 block wrap-anywhere font-bold text-navy-900 after:absolute after:inset-0 after:rounded-card hover:text-copper-700"
                        >
                          {val}
                        </a>
                      ) : (
                        <p className="mt-0.5 font-bold text-navy-900">{val}</p>
                      )}
                      <p className="mt-0.5 text-sm text-subtle">{sub}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="rounded-card border border-line bg-surface p-6">
              <h3 className="flex items-center gap-2 font-bold text-navy-900">
                <Clock aria-hidden="true" className="size-5 text-copper-600" strokeWidth={2} />
                Çalışma Saatlerimiz
              </h3>
              <dl className="mt-4 space-y-2.5">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4">
                    <dt className="text-muted">{h.day}:</dt>
                    <dd className="font-semibold text-navy-900 tabular-nums">{h.time}</dd>
                  </div>
                ))}
                <div className="flex justify-between gap-4 border-t border-line pt-2.5 font-semibold text-copper-700">
                  <dt>Acil Taşınma &amp; Nöbetçi Ekip:</dt>
                  <dd>7 / 24 Açık</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Sağ: teklif formu */}
          <div className="min-w-0 lg:col-span-7">
            <div className="rounded-panel border border-line bg-white p-6 shadow-lift sm:p-10">
              <h3 className="text-2xl font-extrabold text-navy-900">Hızlı Teklif Formu</h3>
              <p className="mb-8 mt-2 text-muted">
                Bilgilerinizi girin, form <strong className="font-semibold text-navy-900 wrap-anywhere">{site.email}</strong>{" "}
                adresimize iletilsin veya tek tıkla WhatsApp üzerinden aktarın.
              </p>
              <ContactForm serviceOptions={serviceOptions} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
