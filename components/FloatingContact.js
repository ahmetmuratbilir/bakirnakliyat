"use client";
import { site } from "@/data/site";

export default function FloatingContact() {
  return (
    <>
      {/* ============================================================ */}
      {/* 1. MASAÜSTÜ FLOATING BUTONLAR (Sağ Alt Köşe)                 */}
      {/* ============================================================ */}
      <aside aria-label="Hızlı İletişim Butonları" className="hidden sm:flex flex-col items-end gap-3 fixed bottom-7 right-7 z-50">
        {/* WhatsApp Butonu */}
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp'tan Yazın"
          className="group flex items-center gap-2.5 pl-3.5 pr-2 py-2 rounded-full bg-white border border-emerald-200 text-slate-800 shadow-xl hover:shadow-2xl hover:border-emerald-400 transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="flex flex-col items-end text-right">
            <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">
              WhatsApp Hattı
            </span>
            <span className="text-xs font-extrabold text-slate-800">
              Anında Fiyat Al
            </span>
          </div>

          <div className="relative w-11 h-11 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition">
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full"></span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </div>
        </a>

        {/* Telefon / Hemen Ara Butonu */}
        <a
          href={`tel:${site.phoneTel}`}
          aria-label="Hemen Telefon Edin"
          className="group flex items-center gap-2.5 pl-3.5 pr-2 py-2 rounded-full bg-white border border-blue-200 text-slate-800 shadow-xl hover:shadow-2xl hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="flex flex-col items-end text-right">
            <span className="text-[11px] font-bold text-[#1d4ed8] uppercase tracking-wider">
              Hemen Arayın
            </span>
            <span className="text-xs font-extrabold text-[#0b1f3a]">
              {site.phoneDisplay}
            </span>
          </div>

          <div className="w-11 h-11 rounded-full bg-[#1d4ed8] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </div>
        </a>
      </aside>

      {/* ============================================================ */}
      {/* 2. MOBİL SABİT BUTON ÇUBUĞU (Bilir Nakliyat Tarzı Ekran Altı) */}
      {/* ============================================================ */}
      <nav aria-label="Mobil Hızlı İletişim" className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl flex items-center gap-2.5">
        {/* Telefon ile Ara */}
        <a
          href={`tel:${site.phoneTel}`}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 px-3 rounded-xl bg-[#1d4ed8] text-white font-extrabold text-xs tracking-wide shadow-lg shadow-blue-600/30 active:scale-95 transition"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <span>HEMEN ARA</span>
        </a>

        {/* WhatsApp ile Yaz */}
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 px-3 rounded-xl bg-[#25d366] text-white font-extrabold text-xs tracking-wide shadow-lg shadow-emerald-600/30 active:scale-95 transition"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span>WHATSAPP</span>
        </a>
      </nav>
    </>
  );
}
