import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";

export const metadata = {
  title: "İletişim & Teklif Formu | Bakır Nakliyat",
  description: `${site.name} ile iletişime geçin. Ücretsiz ekspertiz, sabit fiyat teklifi ve nakliye randevusu için hemen arayın veya formu doldurun.`,
  alternates: { canonical: `${site.domain}/iletisim` },
};

async function handleSubmit(formData) {
  "use server";
  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    serviceType: formData.get("serviceType"),
    message: formData.get("message"),
  };
  console.log("İletişim Formu Talebi:", data);
}

const inputStyle = {
  width: "100%",
  padding: "0.85rem 1rem",
  borderRadius: "0.75rem",
  border: "1px solid #cbd5e1",
  background: "#ffffff",
  color: "#0f172a",
  fontSize: "0.875rem",
  outline: "none",
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
                val: "WhatsApp'tan Yazın",
                sub: "Fotoğraf & Konum Gönderimi İçin",
                href: site.whatsapp,
              },
              {
                icon: "✉️",
                title: "Kurumsal E-Posta",
                val: site.email,
                sub: "Kurumsal Teklif & Faturalandırma",
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
              Bilgilerinizi girin, ekibimiz size özel fiyat teklifini hazırlayıp hemen dönsün.
            </p>

            <form action={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#334155] mb-2 uppercase tracking-wider">
                    Adınız & Soyadınız <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Örn: Ahmet Yılmaz"
                    style={inputStyle}
                    className="focus:border-[#1d4ed8] focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#334155] mb-2 uppercase tracking-wider">
                    Telefon Numaranız <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="05XX XXX XX XX"
                    style={inputStyle}
                    className="focus:border-[#1d4ed8] focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#334155] mb-2 uppercase tracking-wider">
                  Hizmet Türü
                </label>
                <select
                  name="serviceType"
                  style={inputStyle}
                  className="focus:border-[#1d4ed8] focus:ring-2 focus:ring-blue-100 transition"
                >
                  <option value="evden-eve">Evden Eve Nakliyat</option>
                  <option value="ofis-tasima">Ofis ve Büro Taşımacılığı</option>
                  <option value="sehirler-arasi">Şehirlerarası Nakliyat</option>
                  <option value="asansorlu">Asansörlü Taşımacılık</option>
                  <option value="parca-esya">Parça Eşya Taşıma</option>
                  <option value="depolama">Eşya Depolama</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#334155] mb-2 uppercase tracking-wider">
                  Taşınma Detayları (Nereden & Nereye, Oda Sayısı, Kat)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Örn: Kadıköy 3. kattan Başakşehir 5. kata taşınacak 2+1 ev eşyası..."
                  style={{ ...inputStyle, resize: "vertical" }}
                  className="focus:border-[#1d4ed8] focus:ring-2 focus:ring-blue-100 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full font-bold py-4 rounded-xl bg-[#1d4ed8] hover:bg-[#1e40af] text-white transition text-base shadow-lg shadow-blue-600/25 cursor-pointer"
              >
                Ücretsiz Teklif Talebini Gönder →
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[#64748b] text-center pt-2">
                <span>🔒</span>
                <span>Bilgileriniz üçüncü şahıslarla asla paylaşılmaz.</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
