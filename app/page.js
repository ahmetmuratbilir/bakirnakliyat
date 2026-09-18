import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Placeholder from "@/components/Placeholder";
import { site } from "@/data/site";
import { services } from "@/data/services";

const benefits = [
  {
    icon: "🛡️",
    title: "%100 Nakliye Sigortası",
    text: "Eşyalarınız paketleme anından yeni evinizde yerleşene kadar AXA / AkSigorta güvencesi altındadır.",
  },
  {
    icon: "📜",
    title: "Resmi & Yazılı Sözleşme",
    text: "İş başlangıcında imzalanan taşıma sözleşmesi ile taşınma günü, saati ve tüm taahhütler yasal korumada.",
  },
  {
    icon: "🏷️",
    title: "Net & Sabit Fiyat Güvencesi",
    text: "Ekspertiz sonrasında verilen fiyat kesindir. Taşıma günü ekstra ücret, bahşiş baskısı veya sürpriz masraf yoktur.",
  },
  {
    icon: "⏰",
    title: "Dakik & Planlı Operasyon",
    text: "Belirlenen randevu saatinde kapınızdayız. İstanbul içi taşımalar aynı gün içinde eksiksiz tamamlanır.",
  },
  {
    icon: "📦",
    title: "Hijyenik Çift Kat Ambalaj",
    text: "Mobilyalar, beyaz eşyalar ve hassas parçalar patpat naylon, havalı köpük ve streç film ile sıfır hasar prensibiyle korunur.",
  },
  {
    icon: "🛠️",
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

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Bölümü - Açık, Ferah ve Keskin Mavi */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0f7ff] via-[#f8fafc] to-white py-16 md:py-24 border-b border-slate-100">
        <div className="container-page relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Sol Metin Alanı */}
            <div className="lg:col-span-7">
              {/* Güven Rozeti */}
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-[#1d4ed8] text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#1d4ed8] animate-pulse"></span>
                <span>İstanbul&apos;da 15 Yıllık Kurumsal Güvence</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0b1f3a] leading-[1.15] tracking-tight">
                Stresten Uzak, <br />
                <span className="text-[#1d4ed8]">Güvenli & Sigortalı</span> Nakliyat
              </h1>

              <p className="mt-6 text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl">
                Bakır Nakliyat ile evinizi ve ofisinizi gözünüz arkada kalmadan taşıyın.
                Sözleşmeli, ambalajlı, asansörlü ve <strong>sürpriz ek ücret olmadan</strong> profesyonel hizmet.
              </p>

              {/* Hızlı Aksiyon Butonları */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl bg-[#1d4ed8] text-white hover:bg-[#1e40af] transition shadow-lg shadow-blue-600/25 text-base"
                >
                  <span>📞</span>
                  <span>{site.phoneDisplay}</span>
                </a>
                <Link
                  href="/iletisim"
                  className="flex items-center gap-2 font-bold px-6 py-3.5 rounded-xl bg-white text-[#0b1f3a] border-2 border-slate-200 hover:border-[#1d4ed8] hover:text-[#1d4ed8] transition shadow-xs text-base"
                >
                  <span>📝</span>
                  <span>Fiyat Teklifi Al</span>
                </Link>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-bold px-5 py-3.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition shadow-xs text-sm"
                >
                  <span>💬</span>
                  <span>WhatsApp Ekspertiz</span>
                </a>
              </div>

              {/* Güven Maddeleri */}
              <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-3 gap-4 text-xs font-semibold text-[#334155]">
                <div className="flex items-center gap-2">
                  <span className="text-base text-[#1d4ed8]">✓</span>
                  <span>Ücretsiz Ekspertiz</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base text-[#1d4ed8]">✓</span>
                  <span>Sözleşmeli Hizmet</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base text-[#1d4ed8]">✓</span>
                  <span>Kredi Kartına Taksit</span>
                </div>
              </div>
            </div>

            {/* Sağ Görsel Kart Alanı */}
            <div className="lg:col-span-5">
              <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-slate-200/80">
                <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-blue-50 border border-slate-200 flex flex-col items-center justify-center text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-3xl mb-4 border border-blue-100">
                    🚚
                  </div>
                  <p className="font-extrabold text-xl text-[#0b1f3a]">
                    Bakır Nakliyat Operasyon
                  </p>
                  <p className="text-xs text-[#64748b] mt-1 max-w-xs">
                    Özel donanımlı kapalı kasa araç filosu ve bina dışı teleskopik asansör sistemleri.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                    <span>●</span> Aktif Sevkiyatlar Devam Ediyor
                  </div>
                </div>

                {/* Öne Çıkan Bilgi Kartı */}
                <div className="mt-5 p-4 rounded-xl bg-[#eff6ff] border border-blue-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#1d4ed8]">
                      Aynı Gün Taşıma
                    </div>
                    <div className="text-sm font-extrabold text-[#0b1f3a] mt-0.5">
                      İstanbul İçi Hızlı Sevkiyat
                    </div>
                  </div>
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="text-xs font-bold px-3 py-2 rounded-lg bg-[#1d4ed8] text-white hover:bg-blue-700 transition"
                  >
                    Bilgi Al
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İstatistikler Bandı */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {site.stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-5 rounded-xl bg-slate-50 border border-slate-100"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-[#1d4ed8]">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-xs sm:text-sm font-semibold text-[#475569]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Biz? — Güven & Kalite Vurgusu */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#1d4ed8] bg-blue-50 px-3 py-1 rounded-md border border-blue-100 mb-3">
              Kurumsal Standartlar
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1f3a] tracking-tight">
              Neden Bakır Nakliyat&apos;a Güvenmelisiniz?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#475569]">
              Taşınma sürecinde yaşanabilecek tüm riskleri ortadan kaldıran şeffaf ve profesyonel iş modelimiz:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-[#0b1f3a] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#1d4ed8] bg-blue-50 px-3 py-1 rounded-md border border-blue-100 inline-block mb-3">
                Faaliyet Alanlarımız
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1f3a] tracking-tight">
                Her İhtiyaca Özel Taşımacılık
              </h2>
            </div>
            <Link
              href="/hizmetlerimiz"
              className="text-sm font-bold text-[#1d4ed8] hover:text-[#1e40af] flex items-center gap-1.5 group"
            >
              <span>Tüm Hizmetleri Gör</span>
              <span className="group-hover:translate-x-1 transition">→</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetlerimiz/${s.slug}`}
                className="flex flex-col p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#1d4ed8] transition-all group"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-lg text-[#0b1f3a] group-hover:text-[#1d4ed8] transition mb-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed flex-1 mb-5">
                  {s.short}
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1d4ed8]">
                  <span>Hizmet Detayları</span>
                  <span className="group-hover:translate-x-1 transition">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Adımda Kolay Taşınma Süreci */}
      <section className="py-20 bg-[#f8fafc] border-t border-slate-200">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1d4ed8] bg-blue-50 px-3 py-1 rounded-md border border-blue-100 inline-block mb-3">
              Nasıl Çalışıyoruz?
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1f3a] tracking-tight">
              4 Adımda Sorunsuz Taşınma
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#475569]">
              İlk görüşmeden yeni evinizdeki ilk güne kadar her şey planlı ve kontrol altında.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1d4ed8] text-white font-extrabold text-sm flex items-center justify-center mb-5 shadow-md shadow-blue-500/20">
                  {step.num}
                </div>
                <h3 className="font-bold text-base text-[#0b1f3a] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İstanbul & Şehirlerarası Hızlı Rota Çağrısı */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container-page">
          <div className="bg-gradient-to-r from-[#0b1f3a] to-[#1e3a8a] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-block text-xs font-bold uppercase tracking-wider bg-blue-500/30 text-blue-200 px-3 py-1 rounded-full mb-3">
                Geniş Hizmet Ağı
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                İstanbul&apos;un 39 İlçesi ve 81 İle Düzenli Sefer
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-200 leading-relaxed">
                İlçenize veya taşınacağınız şehre özel fiyatları ve güzergah bilgilerini inceleyin.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/istanbul-nakliye"
                className="font-bold px-6 py-3.5 rounded-xl bg-white text-[#0b1f3a] hover:bg-slate-100 transition text-sm shadow-md"
              >
                İstanbul İlçeleri →
              </Link>
              <Link
                href="/sehirler-arasi-nakliyat"
                className="font-bold px-6 py-3.5 rounded-xl bg-[#1d4ed8] text-white hover:bg-blue-600 transition text-sm shadow-md border border-blue-400/30"
              >
                Şehirlerarası Seferler →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
