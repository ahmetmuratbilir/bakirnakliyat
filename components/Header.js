"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { site } from "@/data/site";
import Button from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function Logo() {
  return (
    <Link href="/" aria-label={`${site.name} — Anasayfa`} className="flex shrink-0 items-center gap-2.5 rounded-lg">
      <Image
        src="/logo-mark.png"
        alt=""
        width={203}
        height={144}
        unoptimized
        preload
        className="h-10 w-auto lg:h-11"
      />
      <span className="flex flex-col leading-none">
        <span className="text-[1.3125rem] font-extrabold tracking-[0.04em] text-navy-900">BAKIR</span>
        <span className="mt-1 text-[0.6875rem] font-bold tracking-[0.34em] text-copper-600">NAKLİYAT</span>
      </span>
    </Link>
  );
}

const desktopLink =
  "inline-flex items-center rounded-lg px-2 py-2 text-sm font-semibold text-navy-900/80 transition-colors hover:bg-navy-50 hover:text-navy-900 aria-[current=page]:text-copper-600 xl:px-3 xl:text-[0.9375rem]";

function DesktopDropdown({ item, pathname }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const buttonRef = useRef(null);
  const closeTimer = useRef(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (e) => {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const openNow = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 160);
  };

  const active = isActive(pathname, item.href) || item.children.some((c) => isActive(pathname, c.href));

  return (
    <li
      ref={wrapRef}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <div className="flex items-center">
        <Link
          href={item.href}
          onClick={() => setOpen(false)}
          aria-current={active ? "page" : undefined}
          className={`${desktopLink} pr-1 xl:pr-1`}
        >
          {item.label}
        </Link>
        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={`${item.label} alt menüsü`}
          onClick={() => setOpen((o) => !o)}
          className="grid size-7 place-items-center rounded-md text-navy-900/60 transition-colors hover:bg-navy-50 hover:text-navy-900"
        >
          <ChevronDown
            aria-hidden="true"
            className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            strokeWidth={2.25}
          />
        </button>
      </div>

      <div id={menuId} hidden={!open} className="absolute left-0 top-full z-50 w-72 pt-3">
        <ul className="rounded-card border border-line bg-white p-2 shadow-float">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === child.href ? "page" : undefined}
                className="flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-navy-900 transition-colors hover:bg-copper-50 hover:text-copper-700 aria-[current=page]:bg-copper-50 aria-[current=page]:text-copper-700"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function MobileMenu({ pathname, navLinks }) {
  const dialogRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    dialogRef.current?.showModal();
    setIsOpen(true);
  };
  const close = () => dialogRef.current?.close();

  // Sayfa değişince kapan
  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  const mobileRow =
    "flex min-h-12 w-full items-center justify-between rounded-lg px-3 text-base font-semibold text-navy-900 transition-colors hover:bg-navy-50 aria-[current=page]:text-copper-600";

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="mobil-menu"
        className="grid size-11 place-items-center rounded-btn text-navy-900 ring-1 ring-inset ring-line transition-colors hover:bg-navy-50 lg:hidden"
      >
        <Menu aria-hidden="true" className="size-6" strokeWidth={2} />
        <span className="sr-only">Menüyü aç</span>
      </button>

      <dialog
        id="mobil-menu"
        ref={dialogRef}
        aria-label="Site menüsü"
        onClose={() => setIsOpen(false)}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        className="drawer fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-none w-[min(88vw,24rem)] max-w-none border-0 bg-white p-0 shadow-float"
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-4">
            <Logo />
            <button
              type="button"
              onClick={close}
              className="grid size-11 place-items-center rounded-btn text-navy-900 ring-1 ring-inset ring-line transition-colors hover:bg-navy-50"
            >
              <X aria-hidden="true" className="size-6" strokeWidth={2} />
              <span className="sr-only">Menüyü kapat</span>
            </button>
          </div>

          <nav
            aria-label="Mobil menü"
            className="flex-1 overflow-y-auto overscroll-contain px-3 py-4"
            onClick={(e) => {
              if (e.target.closest("a")) close();
            }}
          >
            <ul className="space-y-1">
              {navLinks.map((item) =>
                item.children ? (
                  <li key={item.label}>
                    <details name="mobil-menu-grup" className="group">
                      <summary className={mobileRow}>
                        {item.label}
                        <ChevronDown
                          aria-hidden="true"
                          className="size-5 text-subtle transition-transform duration-200 group-open:rotate-180"
                          strokeWidth={2.25}
                        />
                      </summary>
                      <ul className="mb-2 ml-3 mt-1 space-y-0.5 border-l-2 border-copper-100 pl-3">
                        {item.overviewLabel && (
                          <li>
                            <Link
                              href={item.href}
                              aria-current={pathname === item.href ? "page" : undefined}
                              className="flex min-h-11 items-center rounded-lg px-3 text-base font-semibold text-copper-600 hover:bg-copper-50"
                            >
                              {item.overviewLabel}
                            </Link>
                          </li>
                        )}
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              aria-current={pathname === child.href ? "page" : undefined}
                              className="flex min-h-11 items-center rounded-lg px-3 text-base text-muted hover:bg-navy-50 hover:text-navy-900 aria-[current=page]:font-semibold aria-[current=page]:text-copper-600"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                      className={mobileRow}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="shrink-0 space-y-2.5 border-t border-line p-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
            <Button href="/iletisim" variant="primary" size="lg" iconRight={ArrowRight} className="w-full">
              Teklif Al
            </Button>
            <div className="grid grid-cols-2 gap-2.5">
              <Button href={`tel:${site.phoneTel}`} variant="outline" icon={Phone}>
                Ara
              </Button>
              <Button href={site.whatsapp} variant="whatsapp" icon={WhatsAppIcon}>
                WhatsApp
              </Button>
            </div>
            <a
              href={`mailto:${site.email}`}
              className="flex min-h-11 items-center justify-center gap-2 text-sm text-subtle hover:text-navy-900"
            >
              <Mail aria-hidden="true" className="size-4" strokeWidth={2} />
              {site.email}
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}

// navLinks sunucudaki layout'tan gelir: hizmet verisi istemci paketine girmesin.
export default function Header({ navLinks }) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo />

        <nav aria-label="Ana menü" className="hidden lg:block">
          <ul className="flex items-center gap-0.5 xl:gap-1">
            {navLinks
              .filter((item) => !item.mobileOnly)
              .map((item) =>
                item.children ? (
                  <DesktopDropdown key={item.label} item={item} pathname={pathname} />
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                      className={desktopLink}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* Button kendi inline-flex sınıfını taşıdığı için görünürlük kapsayıcıda */}
          <div className="hidden sm:block">
            <Button href="/iletisim" variant="primary" iconRight={ArrowRight}>
              Teklif Al
            </Button>
          </div>
          <MobileMenu pathname={pathname} navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}
