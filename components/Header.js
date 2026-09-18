"use client";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";
import { services } from "@/data/services";

const navLinks = [
  { href: "/", label: "Anasayfa" },
  {
    label: "Kurumsal",
    children: [
      { href: "/hakkimizda", label: "Hakkımızda" },
      { href: "/kurumsal", label: "Şirket Profili & Filo" },
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
  { href: "/resimler", label: "Galeri" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xs border-b border-slate-200">
      {/* Üst Güven Bilgi Bandı (Kurumsal Lacivert) */}
      <div className="bg-[#0b1f3a] text-slate-200 text-xs py-2">
        <div className="container-page flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="text-[#c4773f]">📍</span>
              <span>İstanbul 39 İlçe & 81 İle Şehirlerarası Sigortalı Taşımacılık</span>
            </span>
            <span className="hidden md:inline-block text-slate-400">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <span className="text-[#25d366]">✓</span>
              <span>Sözleşmeli & %100 Hasar Garantili</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`mailto:${site.email}`}
              className="hidden sm:inline-block hover:text-white transition"
            >
              ✉ {site.email}
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="font-bold text-[#d8894d] hover:text-[#f1a874] transition flex items-center gap-1"
            >
              <span>📞</span>
              <span>{site.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Ana Header */}
      <div className="container-page flex items-center justify-between py-3.5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="flex items-center justify-center w-11 h-11 rounded-xl font-extrabold text-xl bg-gradient-to-br from-[#1d4ed8] to-[#0b1f3a] text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition">
            B
          </div>
          <div>
            <div className="font-extrabold text-xl tracking-tight text-[#0b1f3a] leading-tight">
              BAKIR <span className="text-[#1d4ed8]">NAKLİYAT</span>
            </div>
            <div className="text-[11px] font-semibold tracking-wider text-[#64748b] uppercase">
              Güvenli & Profesyonel Taşımacılık
            </div>
          </div>
        </Link>

        {/* Desktop Navigasyon */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold">
          {navLinks.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown((cur) => (cur === item.label ? null : cur))}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition ${
                    openDropdown === item.label
                      ? "text-[#1d4ed8] bg-blue-50"
                      : "text-[#334155] hover:text-[#1d4ed8] hover:bg-slate-50"
                  }`}
                  aria-expanded={openDropdown === item.label}
                  onClick={() =>
                    setOpenDropdown((cur) => (cur === item.label ? null : item.label))
                  }
                >
                  {item.label}
                  <span className="text-[10px] opacity-60">
                    {openDropdown === item.label ? "▲" : "▼"}
                  </span>
                </button>

                {openDropdown === item.label && (
                  <div className="absolute left-0 top-full mt-1 bg-white rounded-xl py-2 w-64 shadow-xl border border-slate-100 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    {item.href && (
                      <Link
                        href={item.href}
                        className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1d4ed8] border-b border-slate-100 hover:bg-blue-50/60 transition"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Tümünü İncele →
                      </Link>
                    )}
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-[#475569] hover:text-[#1d4ed8] hover:bg-blue-50/50 hover:pl-5 transition-all font-medium"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg text-[#334155] hover:text-[#1d4ed8] hover:bg-slate-50 transition"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Sağ Butonlar */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-2.5 rounded-lg text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition shadow-xs"
          >
            <span>💬</span>
            <span>WhatsApp</span>
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-lg bg-[#1d4ed8] text-white hover:bg-[#1e40af] transition shadow-md shadow-blue-600/20"
          >
            <span>📞</span>
            <span>Hemen Ara</span>
          </a>
        </div>

        {/* Hamburger Menü Butonu */}
        <button
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menüyü Aç/Kapat"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobil Menü */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-5 shadow-lg">
          <nav className="space-y-2">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.label} className="py-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1d4ed8] px-3 py-1">
                    {item.label}
                  </div>
                  <div className="space-y-1 mt-1 pl-2 border-l-2 border-blue-100 ml-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-1.5 text-sm text-slate-600 hover:text-[#1d4ed8]"
                        onClick={() => setMobileOpen(false)}
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
                  className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-[#1d4ed8]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}

            <div className="pt-4 flex gap-2 border-t border-slate-100">
              <a
                href={site.whatsapp}
                className="flex-1 text-center text-xs font-bold py-2.5 rounded-lg bg-emerald-500 text-white"
              >
                WhatsApp
              </a>
              <a
                href={`tel:${site.phoneTel}`}
                className="flex-1 text-center text-xs font-bold py-2.5 rounded-lg bg-[#1d4ed8] text-white"
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
