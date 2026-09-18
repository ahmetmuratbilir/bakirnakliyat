import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0b1f3a] text-slate-300 border-t border-slate-800">
      <div className="container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 text-sm">
        {/* Sütun 1 — Marka & Güven */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl font-extrabold text-lg bg-[#1d4ed8] text-white shadow-md">
              B
            </div>
            <div>
              <div className="font-extrabold text-lg text-white leading-tight tracking-tight">
                BAKIR NAKLİYAT
              </div>
              <div className="text-[11px] font-semibold text-blue-400">
                Güvenle, Her Yere
              </div>
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed text-xs sm:text-sm mb-5">
            15 yılı aşkın sektör deneyimiyle İstanbul genelinde ve tüm Türkiye&apos;de sigortalı, marangozlu ve asansörlü evden eve nakliyat çözümleri.
          </p>
          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2 text-slate-300">
              <span className="text-[#1d4ed8]">📍</span>
              <span>{site.address.line1}, {site.address.line2}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#1d4ed8]">📞</span>
              <a href={`tel:${site.phoneTel}`} className="font-bold text-white hover:text-blue-400 transition">
                {site.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#1d4ed8]">✉</span>
              <a href={`mailto:${site.email}`} className="text-slate-400 hover:text-white transition">
                {site.email}
              </a>
            </div>
          </div>
        </div>

        {/* Sütun 2 — Temel Hizmetler */}
        <div>
          <h4 className="font-bold text-white text-base mb-5 tracking-tight border-l-2 border-[#1d4ed8] pl-2.5">
            Hizmetlerimiz
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/hizmetlerimiz/${s.slug}`}
                  className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sütun 3 — Kurumsal */}
        <div>
          <h4 className="font-bold text-white text-base mb-5 tracking-tight border-l-2 border-[#1d4ed8] pl-2.5">
            Kurumsal
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            {[
              { href: "/hakkimizda", label: "Hakkımızda" },
              { href: "/kurumsal", label: "Kurumsal & Araç Filosu" },
              { href: "/misyonumuz", label: "Misyonumuz" },
              { href: "/vizyonumuz", label: "Vizyonumuz" },
              { href: "/resimler", label: "Fotoğraf Galerisi" },
              { href: "/blog", label: "Blog & Rehberler" },
              { href: "/iletisim", label: "İletişim & Teklif" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sütun 4 — Hızlı İletişim & Lokasyonlar */}
        <div>
          <h4 className="font-bold text-white text-base mb-5 tracking-tight border-l-2 border-[#1d4ed8] pl-2.5">
            Hızlı Ulaşım
          </h4>
          <div className="space-y-3">
            <a
              href={`tel:${site.phoneTel}`}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#1d4ed8] text-white font-bold text-xs hover:bg-blue-600 transition shadow-md"
            >
              <span>📞</span>
              <span>Hemen Ara: {site.phoneDisplay}</span>
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition shadow-md"
            >
              <span>💬</span>
              <span>WhatsApp Teklif Hattı</span>
            </a>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div>
                <Link href="/istanbul-nakliye" className="hover:text-white underline">
                  İstanbul 39 İlçe Nakliye Rehberi
                </Link>
              </div>
              <div>
                <Link href="/sehirler-arasi-nakliyat" className="hover:text-white underline">
                  Şehirlerarası Nakliyat Seferleri
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Telif & Güven Çubuğu */}
      <div className="border-t border-slate-800 bg-[#081629] py-5 text-xs text-slate-400">
        <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {year} {site.name}. Tüm hakları saklıdır. Lisanslı ve Sigortalı Evden Eve Nakliyat.</p>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-semibold">🔒 SSL Güvenli Bağlantı</span>
            <span>•</span>
            <span className="text-slate-300">Resmi Taşımacılık Belgesi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
