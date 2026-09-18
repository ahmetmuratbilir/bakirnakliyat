import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata = {
  title: "İletişim & Teklif Formu | Bakır Nakliyat",
  description: `${site.name} ile iletişime geçin. Ücretsiz ekspertiz, sabit fiyat teklifi ve nakliye randevusu için hemen arayın veya formu doldurun.`,
  alternates: { canonical: `${site.domain}/iletisim` },
};

export default function IletisimPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="İletişim & Fiyat Teklifi"
        subtitle="Taşınma detaylarınızı paylaşın, uzman ekibimiz en geç 15 dakika içinde sabit fiyat teklifinizi hazırlasın."
        breadcrumb={[{ label: "İletişim" }]}
      />

      <section className="container-page py-16 grid lg:grid-cols-12 gap-12">
        {/* Sol Bilgi Kartları */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#1d4ed8] bg-blue-50 px-3 py-1 rounded-md border border-blue-100 inline-block mb-3">
              Müşteri Hizmetleri
            </div>
            <h2 className="text-2xl font-extrabold text-[#0b1f3a] tracking-tight">
              Bizimle İletişime Geçin
            </h2>
            <p className="text-sm text-[#475569] mt-2 leading-relaxed">
              Sorularınız, ücretsiz yerinde ekspertiz talepleriniz ve rezervasyon için haftanın 7 günü hizmetinizdeyiz.
            </p>
          </div>

          <div className="space-y-3.5">
            {[
              {
                icon: "📞",
                title: "Telefon Hattımız",
                val: site.phoneDisplay,
                sub: "7/24 Kesintisiz Destek & Fiyat",
                href: `tel:${site.phoneTel}`,
              },
              {
                icon: "💬",
                title: "WhatsApp Destek",
                val: "WhatsApp'tan Yazın (0538 411 09 60)",
                sub: "Fotoğraf & Konum Gönderimi İçin",
                href: site.whatsapp,
              },
              {
                icon: "✉️",
                title: "Kurumsal E-Posta",
                val: site.email,
                sub: "Tıklayarak Doğrudan E-Posta Gönderin",
                href: `mailto:${site.email}`,
              },
              {
                icon: "📍",
                title: "Merkez Ofis",
                val: `${site.address.line1}, ${site.address.line2}`,
                sub: "İstanbul / Başakşehir",
                href: null,
              },
            ].map((c) => (
              <div
                key={c.title}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 transition"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-xl shrink-0">
                  {c.icon}
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#64748b]">{c.title}</div>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="font-bold text-sm text-[#0b1f3a] hover:text-[#1d4ed8] transition"
                    >
                      {c.val}
                    </a>
                  ) : (
                    <div className="font-bold text-sm text-[#0b1f3a]">{c.val}</div>
                  )}
                  <div className="text-xs text-[#94a3b3] mt-0.5">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Çalışma Saatleri */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-[#0b1f3a] text-sm mb-3">
              Çalışma Saatlerimiz
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-[#475569]">
                <span>Pazartesi &ndash; Cumartesi:</span>
                <span className="font-bold text-[#0b1f3a]">07:30 &ndash; 20:30</span>
              </div>
              <div className="flex justify-between text-[#475569]">
                <span>Pazar Günleri:</span>
                <span className="font-bold text-[#0b1f3a]">08:30 &ndash; 19:00</span>
              </div>
              <div className="flex justify-between text-[#1d4ed8] font-bold pt-2 border-t border-slate-200">
                <span>Acil Taşınma & Nöbetçi Ekip:</span>
                <span>7 / 24 Açık</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sağ Teklif Formu */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <h3 className="text-2xl font-extrabold text-[#0b1f3a] tracking-tight">
              Hızlı Teklif Formu
            </h3>
            <p className="text-xs sm:text-sm text-[#64748b] mt-1.5 mb-8">
              Bilgilerinizi girin, form <strong>{site.email}</strong> adresimize iletilsin veya tek tıkla WhatsApp üzerinden aktarın.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
