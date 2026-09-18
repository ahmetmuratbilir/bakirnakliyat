import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Placeholder from "@/components/Placeholder";
import { site } from "@/data/site";
import { services } from "@/data/services";

const benefits = [
  {
    icon: "🛡️",
    title: "Tam Sigorta Güvencesi",
    text: "Tüm taşımalarımız nakliye sigortası kapsamındadır. Eşyalarınıza gelebilecek her türlü zarar, sözleşmemiz dahilinde karşılanır.",
  },
  {
    icon: "📋",
    title: "Sözleşmeli Çalışma",
    text: "Fiyat teklifi onaylandıktan sonra imzalanan taşıma sözleşmesiyle haklarınız baştan sona güvence altına alınır.",
  },
  {
    icon: "💰",
    title: "Şeffaf Fiyatlandırma",
    text: "Ekspertiz sonrası verilen fiyat sabittir. Taşıma günü 'beklenen ücret çıktı' sürprizi kesinlikle yaşamazsınız.",
  },
  {
    icon: "⏱️",
    title: "Zamanında Hizmet",
    text: "Taşıma günü ve saatine %100 uyum sağlarız. Gecikmeler önceden bildirilir; zaman çizelgeniz asla altüst edilmez.",
  },
  {
    icon: "🧤",
    title: "Özenli Paketleme",
    text: "Kırılgan, antika ve elektronik eşyalarınız için özel ambalaj malzemeleri ve balonlu naylon kullanılır.",
  },
  {
    icon: "🔧",
    title: "Anahtar Teslim",
    text: "Mobilya sökme-montaj, beyaz eşya kurulumu ve elektrik bağlantılarını da üstleniriz. Tek telefon yeter.",
  },
];

const steps = [
  { num: "01", title: "İletişime Geçin", text: "Telefon veya WhatsApp üzerinden bize ulaşın. Aynı gün dönüş garantisi veriyoruz." },
  { num: "02", title: "Ücretsiz Ekspertiz", text: "Uzman ekibimiz eşyalarınızı yerinde veya video ile değerlendirerek kesin fiyat sunar." },
  { num: "03", title: "Sözleşme İmzalayın", text: "Fiyat onaylandıktan sonra taşıma sözleşmesi imzalanır; tüm detaylar yazılı güvence altına alınır." },
  { num: "04", title: "Taşının, Tadını Çıkarın", text: "Güvenle taşınan eşyalarınız kurulur, yerleştirilir. Size sadece yeni alanınızın keyfini çıkarmak kalır." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0d1117 0%, #1a2233 60%, #0d1117 100%)",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Dekoratif arka plan çizgileri */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--color-gold) 0, var(--color-gold) 1px, transparent 0, transparent 50%)",
            backgroundSize: "30px 30px",
          }}
        />
        {/* Altın sarısı ışık efekti */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at top right, var(--color-gold) 0%, transparent 70%)",
          }}
        />

        <div className="container-page relative z-10 py-20 md:py-28">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
              style={{
                background: "rgba(212, 160, 23, 0.15)",
                border: "1px solid rgba(212, 160, 23, 0.3)",
                color: "var(--color-gold)",
              }}
            >
              <span>✦</span>
              <span>{site.founded}&apos;dan bu yana İstanbul&apos;un Güvenilir Nakliyat Firması</span>
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              İstanbul&apos;da{" "}
              <span style={{ color: "var(--color-gold)" }}>Profesyonel</span>
              <br />
              Nakliyat Hizmeti
            </h1>

            <p
              className="mt-6 text-lg md:text-xl max-w-xl leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              Sigortalı, sözleşmeli ve şeffaf fiyatlı taşıma anlayışıyla İstanbul içi ve
              şehirlerarası tüm nakliyat ihtiyaçlarınıza tek çatı altında çözüm sunuyoruz.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-lg text-base transition"
                style={{
                  background: "var(--color-gold)",
                  color: "var(--color-dark)",
                  boxShadow: "0 4px 20px rgba(212,160,23,0.35)",
                }}
              >
                <span>📞</span>
                <span>Hemen Ara</span>
              </a>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg text-base transition"
                style={{
                  border: "1px solid var(--color-dark-border)",
                  color: "var(--color-text)",
                  background: "var(--color-dark-card)",
                }}
              >
                <span>📝</span>
                <span>Ücretsiz Teklif Al</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section style={{ background: "var(--color-dark-card)", borderBottom: "1px solid var(--color-dark-border)" }}>
        <div className="container-page py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {site.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold" style={{ color: "var(--color-gold)" }}>
                  {stat.value}
                </div>
                <div className="mt-1 text-sm" style={{ color: "var(--color-text-muted)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className="py-20 md:py-24">
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold gold-line inline-block" style={{ color: "var(--color-text)" }}>
              Neden Bakır Nakliyat?
            </h2>
            <p className="mt-6 max-w-2xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
              İstanbul&apos;da yüzlerce nakliyat firması var. Bizi tercih etmeniz için somut nedenler:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl card-hover"
                style={{
                  background: "var(--color-dark-card)",
                  border: "1px solid var(--color-dark-border)",
                }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-base mb-2" style={{ color: "var(--color-text)" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section
        className="py-20 md:py-24"
        style={{ background: "var(--color-dark-card)", borderTop: "1px solid var(--color-dark-border)", borderBottom: "1px solid var(--color-dark-border)" }}
      >
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold gold-line inline-block" style={{ color: "var(--color-text)" }}>
              Hizmetlerimiz
            </h2>
            <p className="mt-6 max-w-xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
              Her ihtiyaca özel, uzman ekip ve sigorta güvencesiyle kapsamlı nakliyat çözümleri.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetlerimiz/${s.slug}`}
                className="block p-5 rounded-xl card-hover"
                style={{
                  background: "var(--color-dark-elevated)",
                  border: "1px solid var(--color-dark-border)",
                }}
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--color-text)" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                  {s.short}
                </p>
                <span className="text-sm font-semibold" style={{ color: "var(--color-gold)" }}>
                  Detayları İncele →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nasıl Çalışırız */}
      <section className="py-20 md:py-24">
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold gold-line inline-block" style={{ color: "var(--color-text)" }}>
              Nasıl Çalışırız?
            </h2>
            <p className="mt-6 max-w-xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
              İlk telefon görüşmesinden anahtar teslime kadar 4 adımda kusursuz taşıma deneyimi.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-xl relative"
                style={{
                  background: "var(--color-dark-card)",
                  border: "1px solid var(--color-dark-border)",
                }}
              >
                <div
                  className="text-4xl font-bold mb-4 leading-none"
                  style={{ color: "rgba(212,160,23,0.2)" }}
                >
                  {step.num}
                </div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--color-text)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section
        className="py-16"
        style={{
          background: "var(--color-dark-elevated)",
          borderTop: "1px solid var(--color-dark-border)",
          borderBottom: "1px solid var(--color-dark-border)",
        }}
      >
        <div className="container-page text-center">
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--color-text)" }}>
            İstanbul&apos;un Her İlçesine Hizmet Veriyoruz
          </h2>
          <p className="mt-3 max-w-xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
            Kendi bölgenize özel bilgi ve fiyat almak için aşağıdan ilçenizi seçin.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/istanbul-nakliye"
              className="inline-block font-semibold px-6 py-2.5 rounded-lg text-sm transition"
              style={{ background: "var(--color-gold)", color: "var(--color-dark)" }}
            >
              İstanbul İlçelerini Gör →
            </Link>
            <Link
              href="/sehirler-arasi-nakliyat"
              className="inline-block font-semibold px-6 py-2.5 rounded-lg text-sm transition"
              style={{
                background: "var(--color-dark-card)",
                border: "1px solid var(--color-dark-border)",
                color: "var(--color-text)",
              }}
            >
              Şehirlerarası Güzergahlar →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
