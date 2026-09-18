import PageHero from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata = {
  title: "İletişim",
  description: `${site.name} ile iletişime geçin. Ücretsiz ekspertiz, fiyat teklifi ve taşıma sözleşmesi için hemen arayın veya form doldurun.`,
  alternates: { canonical: `${site.domain}/iletisim` },
};

async function handleSubmit(formData) {
  "use server";
  // Burada nodemailer, Resend, EmailJS veya başka mail servisi entegre edilebilir
  // Şu an console'a yazılıyor — production'da mail API'si bağlayın
  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    serviceType: formData.get("serviceType"),
    message: formData.get("message"),
  };
  console.log("Yeni iletişim formu:", data);
  // Başarılı gönderim sonrası yönlendirme eklenebilir
}

const inputStyle = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "0.5rem",
  border: "1px solid var(--color-dark-border)",
  background: "var(--color-dark-elevated)",
  color: "var(--color-text)",
  fontSize: "0.875rem",
  outline: "none",
};

const contactCards = [
  { icon: "📞", label: "Telefon", value: site.phoneDisplay, href: `tel:${site.phoneTel}` },
  { icon: "✉️", label: "E-Posta", value: site.email, href: `mailto:${site.email}` },
  { icon: "💬", label: "WhatsApp", value: "Mesaj Gönder", href: site.whatsapp },
  { icon: "📍", label: "Adres", value: `${site.address.line1}, ${site.address.line2}`, href: null },
];

export default function IletisimPage() {
  return (
    <>
      <PageHero
        title="İletişim"
        subtitle="Ücretsiz ekspertiz ve fiyat teklifi için bizimle iletişime geçin"
        breadcrumb={[{ label: "İletişim" }]}
      />

      <section className="container-page py-16 grid md:grid-cols-2 gap-12">
        {/* Sol: İletişim Bilgileri */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-2" style={{ color: "var(--color-text)" }}>
              Hemen İletişime Geçin
            </h2>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Aynı gün dönüş garantisi veriyoruz. Taşıma detaylarınızı paylaşın, en kısa sürede
              size özel ekspertiz ve fiyat teklifi hazırlayalım.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {contactCards.map((card) => (
              <div
                key={card.label}
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{ background: "var(--color-dark-card)", border: "1px solid var(--color-dark-border)" }}
              >
                <div className="text-2xl shrink-0">{card.icon}</div>
                <div>
                  <div className="text-xs font-semibold mb-1" style={{ color: "var(--color-text-muted)" }}>
                    {card.label}
                  </div>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="font-medium transition"
                      style={{ color: "var(--color-gold)" }}
                    >
                      {card.value}
                    </a>
                  ) : (
                    <span className="font-medium text-sm" style={{ color: "var(--color-text)" }}>
                      {card.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Çalışma Saatleri */}
          <div
            className="p-5 rounded-xl"
            style={{ background: "var(--color-dark-card)", border: "1px solid var(--color-dark-border)" }}
          >
            <h3 className="font-semibold mb-3" style={{ color: "var(--color-text)" }}>
              Çalışma Saatleri
            </h3>
            <div className="space-y-1.5 text-sm">
              {[
                { days: "Pazartesi — Cumartesi", hours: "08:00 — 20:00" },
                { days: "Pazar", hours: "09:00 — 18:00" },
                { days: "Acil Taşıma Hattı", hours: "7/24" },
              ].map((row) => (
                <div key={row.days} className="flex justify-between">
                  <span style={{ color: "var(--color-text-muted)" }}>{row.days}</span>
                  <span className="font-semibold" style={{ color: row.days.includes("Acil") ? "var(--color-gold)" : "var(--color-text)" }}>
                    {row.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sağ: Form */}
        <div
          className="p-6 rounded-xl"
          style={{ background: "var(--color-dark-card)", border: "1px solid var(--color-dark-border)" }}
        >
          <h2 className="text-xl font-bold mb-5" style={{ color: "var(--color-text)" }}>
            Teklif Formu
          </h2>
          <form action={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text-muted)" }}>
                Ad Soyad <span style={{ color: "var(--color-gold)" }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Adınız Soyadınız"
                style={inputStyle}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text-muted)" }}>
                Telefon <span style={{ color: "var(--color-gold)" }}>*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="05XX XXX XX XX"
                style={inputStyle}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text-muted)" }}>
                Hizmet Türü
              </label>
              <select name="serviceType" style={inputStyle}>
                <option value="">Seçiniz...</option>
                <option value="evden-eve">Evden Eve Nakliyat</option>
                <option value="ofis">Ofis Taşıma</option>
                <option value="sehirler-arasi">Şehirlerarası Nakliyat</option>
                <option value="parca">Parça Eşya Taşıma</option>
                <option value="asansorlu">Asansörlü Taşıma</option>
                <option value="depolama">Eşya Depolama</option>
                <option value="hafriyat">Hafriyat Taşıma</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text-muted)" }}>
                Mesajınız
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Taşıma tarihi, adresten adrese, eşya bilgisi gibi detayları paylaşın..."
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>
            <button
              type="submit"
              className="w-full font-bold py-3.5 rounded-lg transition text-sm"
              style={{ background: "var(--color-gold)", color: "var(--color-dark)" }}
            >
              Teklif Talebini Gönder →
            </button>
            <p className="text-xs text-center" style={{ color: "var(--color-text-subtle)" }}>
              Bilgileriniz yalnızca teklif hazırlamak amacıyla kullanılır. Aynı gün dönüş yapılır.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
