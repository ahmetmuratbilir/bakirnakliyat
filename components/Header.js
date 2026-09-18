"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { site } from "@/data/site";
import { services } from "@/data/services";

const navLinks = [
  { href: "/", label: "Anasayfa" },
  {
    label: "Kurumsal",
    children: [
      { href: "/hakkimizda", label: "Hakkımızda" },
      { href: "/kurumsal", label: "Kurumsal" },
      { href: "/misyonumuz", label: "Misyonumuz" },
      { href: "/vizyonumuz", label: "Vizyonumuz" },
    ],
  },
  {
    label: "Hizmetlerimiz",
    href: "/hizmetlerimiz",
    children: services.map((s) => ({ href: `/hizmetlerimiz/${s.slug}`, label: s.title })),
  },
  { href: "/istanbul-nakliye", label: "İstanbul Nakliye" },
  { href: "/sehirler-arasi-nakliyat", label: "Şehirlerarası" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="sticky top-0 z-50" style={{ background: "var(--color-dark)", borderBottom: "1px solid var(--color-dark-border)" }}>
      {/* Üst bilgi bandı */}
      <div style={{ background: "var(--color-dark-card)", borderBottom: "1px solid var(--color-dark-border)" }}>
        <div className="container-page flex items-center justify-between py-2 text-xs" style={{ color: "var(--color-text-muted)" }}>
          <span className="hidden sm:flex items-center gap-1">
            <span>📍</span>
            <span>{site.address.line2} bölgesinde hizmet</span>
          </span>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="hover:opacity-80 transition"
              style={{ color: "var(--color-text-muted)" }}
            >
              ✉ {site.email}
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="font-semibold transition"
              style={{ color: "var(--color-gold)" }}
            >
              📞 {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Ana header */}
      <div className="container-page flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div
            className="flex items-center justify-center w-10 h-10 rounded-lg font-bold text-lg"
            style={{ background: "var(--color-gold)", color: "var(--color-dark)" }}
          >
            B
          </div>
          <div>
            <div className="font-bold text-lg leading-tight" style={{ color: "var(--color-text)" }}>
              Bakır Nakliyat
            </div>
            <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>
              {site.slogan}
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button
                  className="flex items-center gap-1 px-3 py-2 rounded-md transition"
                  style={{ color: "var(--color-text-muted)" }}
                  onMouseEnter={() => {}}
                >
                  {item.href ? (
                    <Link href={item.href} style={{ color: "inherit" }}>
                      {item.label}
                    </Link>
                  ) : (
                    item.label
                  )}
                  <span className="text-xs opacity-60">▾</span>
                </button>
                <div
                  className="absolute left-0 top-full hidden group-hover:block rounded-lg py-2 w-56 z-50"
                  style={{
                    background: "var(--color-dark-elevated)",
                    border: "1px solid var(--color-dark-border)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                  }}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm transition hover:opacity-100"
                      style={{ color: "var(--color-text-muted)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--color-gold)";
                        e.currentTarget.style.background = "var(--color-dark-card)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--color-text-muted)";
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md transition"
                style={{ color: "var(--color-text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-4 py-2 rounded-md transition"
            style={{
              background: "#25d366",
              color: "#fff",
            }}
          >
            WhatsApp
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="text-sm font-semibold px-5 py-2 rounded-md transition"
            style={{
              background: "var(--color-gold)",
              color: "var(--color-dark)",
            }}
          >
            Hemen Ara
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 rounded-md"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menüyü aç"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              background: "var(--color-text)",
              transform: mobileOpen ? "rotate(45deg) translateY(8px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              background: "var(--color-text)",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              background: "var(--color-text)",
              transform: mobileOpen ? "rotate(-45deg) translateY(-8px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobil Menü */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{ background: "var(--color-dark-card)", borderColor: "var(--color-dark-border)" }}
        >
          <nav className="container-page py-4 space-y-1">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <div
                    className="px-3 py-2 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--color-gold)" }}
                  >
                    {item.label}
                  </div>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-6 py-2 text-sm"
                      style={{ color: "var(--color-text-muted)" }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-sm font-medium"
                  style={{ color: "var(--color-text)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-4 flex gap-2">
              <a
                href={site.whatsapp}
                className="flex-1 text-center text-sm font-semibold py-2.5 rounded-md"
                style={{ background: "#25d366", color: "#fff" }}
              >
                WhatsApp
              </a>
              <a
                href={`tel:${site.phoneTel}`}
                className="flex-1 text-center text-sm font-semibold py-2.5 rounded-md"
                style={{ background: "var(--color-gold)", color: "var(--color-dark)" }}
              >
                Hemen Ara
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
