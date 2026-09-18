import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--color-dark-card)", borderTop: "1px solid var(--color-dark-border)" }}>
      <style>{`
        .footer-link { color: var(--color-text-muted); transition: color 0.15s; text-decoration: none; }
        .footer-link:hover { color: var(--color-gold); }
        .footer-link-wa:hover { color: #25d366; }
        .footer-social { color: var(--color-text-subtle); transition: color 0.15s; }
        .footer-social:hover { color: var(--color-gold); }
      `}</style>

      <div className="container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14 text-sm">
        {/* Sütun 1 — Marka */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div
              className="flex items-center justify-center w-9 h-9 rounded-lg font-bold text-base"
              style={{ background: "var(--color-gold)", color: "var(--color-dark)" }}
            >
              B
            </div>
            <span className="font-bold text-base" style={{ color: "var(--color-text)" }}>
              Bakır Nakliyat
            </span>
          </div>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
            {site.description.slice(0, 120)}…
          </p>
          <p style={{ color: "var(--color-text-muted)" }}>{site.address.line1}</p>
          <p style={{ color: "var(--color-text-muted)" }}>{site.address.line2}</p>
          <div className="mt-3 space-y-1">
            <a href={`tel:${site.phoneTel}`} className="block font-semibold" style={{ color: "var(--color-gold)" }}>
              📞 {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="footer-link block">
              ✉ {site.email}
            </a>
          </div>
        </div>

        {/* Sütun 2 — Hizmetler */}
        <div>
          <h4 className="font-semibold mb-4 text-base" style={{ color: "var(--color-text)" }}>Hizmetlerimiz</h4>
          <ul className="space-y-2">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href={`/hizmetlerimiz/${s.slug}`} className="footer-link">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sütun 3 — Kurumsal */}
        <div>
          <h4 className="font-semibold mb-4 text-base" style={{ color: "var(--color-text)" }}>Kurumsal</h4>
          <ul className="space-y-2">
            {[
              { href: "/hakkimizda", label: "Hakkımızda" },
              { href: "/kurumsal", label: "Kurumsal" },
              { href: "/misyonumuz", label: "Misyonumuz" },
              { href: "/vizyonumuz", label: "Vizyonumuz" },
              { href: "/blog", label: "Blog" },
              { href: "/resimler", label: "Fotoğraf Galerisi" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-link">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sütun 4 — Hızlı Erişim */}
        <div>
          <h4 className="font-semibold mb-4 text-base" style={{ color: "var(--color-text)" }}>Hızlı Erişim</h4>
          <ul className="space-y-2">
            <li><a href={`tel:${site.phoneTel}`} className="footer-link">📞 Hemen Ara</a></li>
            <li><a href={site.whatsapp} className="footer-link footer-link-wa">💬 WhatsApp&apos;tan Yaz</a></li>
            <li><Link href="/iletisim" className="footer-link">📝 Teklif Formu</Link></li>
            <li><Link href="/istanbul-nakliye" className="footer-link">🗺️ İstanbul İlçeleri</Link></li>
            <li><Link href="/sehirler-arasi-nakliyat" className="footer-link">🚛 Şehirlerarası</Link></li>
          </ul>
        </div>
      </div>

      {/* Alt bar */}
      <div style={{ borderTop: "1px solid var(--color-dark-border)" }}>
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "var(--color-text-subtle)" }}>
            © {year} {site.name}. Tüm hakları saklıdır. · {site.founded}&apos;dan bu yana güvenilir nakliyat
          </p>
          <div className="flex items-center gap-4 text-xs">
            {[
              { href: site.social.facebook, label: "Facebook" },
              { href: site.social.instagram, label: "Instagram" },
              { href: site.social.linkedin, label: "LinkedIn" },
              { href: site.social.youtube, label: "YouTube" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-social">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
