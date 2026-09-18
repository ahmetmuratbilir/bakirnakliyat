import Link from "next/link";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
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
              <div className="relative bg-white rounded-3xl p-3 sm:p-4 shadow-2xl border border-slate-200/90">
                <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 group">
                  <Image
                    src="/images/bakir-nakliyat-filo-araci.webp"
                    alt="Bakır Nakliyat Özmal Kapalı Kasa Taşıma Aracı"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition duration-500"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/90 via-transparent to-black/20" />

                  {/* Rozetler */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-[#0b1f3a] shadow-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>34 RIL 010 • Özmal Nakliyat Filosu</span>
                  </div>

                  {/* Alt Bilgi */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-semibold text-blue-200 uppercase tracking-wider">
                      Güvenli & Korumalı Taşımacılık
                    </div>
                    <div className="text-base sm:text-lg font-extrabold mt-0.5">
                      Kapalı Kasa Araçlarımızla Hasarsız Sevkiyat
                    </div>
                  </div>
                </div>

                {/* Öne Çıkan Bilgi Kartı */}
                <div className="mt-4 p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#1d4ed8] text-white flex items-center justify-center font-bold text-sm">
                      ✓
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0b1f3a]">
                        Aynı Gün İstanbul İçi Taşıma
                      </div>
                      <div className="text-[11px] text-[#475569]">
                        Özel sabitlemeli kasa ve asansör desteği
                      </div>
                    </div>
                  </div>
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="text-xs font-bold px-3 py-2 rounded-lg bg-[#1d4ed8] text-white hover:bg-blue-700 transition shrink-0"
                  >
                    Hemen Ara
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

      {/* Sahadan Canlı Operasyon Kareleri */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#1d4ed8] bg-blue-50 px-3 py-1 rounded-md border border-blue-100 inline-block mb-3">
                Sahadan Canlı Kareler
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1f3a] tracking-tight">
                Gerçekleşen Sevkiyatlarımız
              </h2>
              <p className="mt-2 text-sm text-[#475569]">
                Özmal araçlarımız, forkliftli palet yükleme ve güvenli ambalajlama operasyonlarımız.
              </p>
            </div>
            <Link
              href="/resimler"
              className="text-sm font-bold text-[#1d4ed8] hover:text-[#1e40af] flex items-center gap-1.5 group"
            >
              <span>Tüm Fotoğrafları İncele</span>
              <span className="group-hover:translate-x-1 transition">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                src: "/images/bakir-nakliyat-palet-yukleme.webp",
                title: "Forklift ile Paletli Yükleme",
                badge: "Depolama & Fabrika",
              },
              {
                src: "/images/bakir-nakliyat-koli-istifleme.webp",
                title: "Korumalı Koli Yerleşimi",
                badge: "Özenli İstif",
              },
              {
                src: "/images/bakir-nakliyat-gece-sevkiyat.webp",
                title: "7/24 Kesintisiz Sefer",
                badge: "Şehirlerarası",
              },
              {
                src: "/images/bakir-nakliyat-guvenli-ambalaj.webp",
                title: "Özel Fuar & Palet Ambalajı",
                badge: "%100 Hasarsız",
              },
            ].map((photo) => (
              <div
                key={photo.title}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-extrabold text-[#0b1f3a] shadow-xs">
                    {photo.badge}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs sm:text-sm font-bold leading-snug">{photo.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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
