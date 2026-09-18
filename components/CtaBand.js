import { site } from "@/data/site";

export default function CtaBand() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, var(--color-gold-dark) 0%, var(--color-gold) 50%, var(--color-gold-light) 100%)",
      }}
    >
      <div className="container-page py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: "var(--color-dark)" }}
          >
            Ücretsiz Ekspertiz ve Fiyat Teklifi Alın
          </h2>
          <p className="mt-2 text-base" style={{ color: "rgba(13,17,23,0.75)" }}>
            Arayın, ekibimiz en kısa sürede size özel bir teklif hazırlasın. Sürpriz ücret yok, şeffaf fiyat.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-lg transition"
            style={{
              background: "var(--color-dark)",
              color: "var(--color-gold)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
            }}
          >
            <span>📞</span>
            <span>{site.phoneDisplay}</span>
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-lg transition"
            style={{
              background: "#fff",
              color: "#25d366",
              boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
            }}
          >
            <span>💬</span>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
