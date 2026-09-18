import { site } from "@/data/site";

export default function CtaBand() {
  return (
    <section className="bg-gradient-to-r from-[#0b1f3a] via-[#1e3a8a] to-[#1d4ed8] text-white py-14 border-t border-slate-200">
      <div className="container-page flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-bold mb-3 border border-blue-400/30">
            <span>🛡️</span>
            <span>Ücretsiz Keşif & Sabit Fiyat Garantisi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Taşınma Planınızı Birlikte Yapalım
          </h2>
          <p className="mt-2 text-sm sm:text-base text-blue-100 max-w-xl leading-relaxed">
            Hemen arayın veya WhatsApp&apos;tan oda fotoğraflarınızı gönderin; dakikalar içinde kesin ve net fiyat teklifinizi iletelim.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3.5 shrink-0">
          <a
            href={`tel:${site.phoneTel}`}
            className="flex items-center gap-2 font-extrabold px-7 py-4 rounded-xl bg-white text-[#0b1f3a] hover:bg-slate-100 transition shadow-xl text-base"
          >
            <span>📞</span>
            <span>{site.phoneDisplay}</span>
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-bold px-6 py-4 rounded-xl bg-[#128c4a] text-white hover:bg-[#0f7a3f] transition shadow-xl text-base"
          >
            <span>💬</span>
            <span>WhatsApp Teklif</span>
          </a>
        </div>
      </div>
    </section>
  );
}
