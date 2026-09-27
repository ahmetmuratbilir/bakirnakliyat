import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { corporateLinks } from "@/data/navigation";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons/BrandIcons";

function FooterHeading({ children }) {
  return <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-white">{children}</h3>;
}

const listLink =
  "inline-flex min-h-11 items-center text-base text-navy-100 transition-colors hover:text-white sm:min-h-9";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:gap-12 lg:py-20">
        {/* 1 — Marka */}
        <div>
          <Link href="/" className="inline-block rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element -- elle optimize edilmiş WebP srcset */}
            <img
              src="/logo-light-160.webp"
              srcSet="/logo-light-160.webp 1x, /logo-light-320.webp 2x"
              alt={site.name}
              width={160}
              height={110}
              loading="lazy"
              decoding="async"
              className="h-auto w-40"
            />
          </Link>
          <p className="mt-5 max-w-xs text-base leading-relaxed">
            {site.yearsOfExperience} yılı aşkın saha deneyimiyle İstanbul genelinde ve şehirlerarası evden eve
            nakliyat, palet ve parsiyel yük taşıma çözümleri.
          </p>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center gap-2.5 rounded-btn px-3 text-[0.9375rem] font-semibold text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/10"
          >
            <InstagramIcon className="size-5" />
            Instagram
          </a>
        </div>

        {/* 2 — Hizmetler */}
        <nav aria-labelledby="footer-hizmetler">
          <FooterHeading>
            <span id="footer-hizmetler">Hizmetlerimiz</span>
          </FooterHeading>
          <ul className="mt-4">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/hizmetlerimiz/${s.slug}`} className={listLink}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 3 — Kurumsal */}
        <nav aria-labelledby="footer-kurumsal">
          <FooterHeading>
            <span id="footer-kurumsal">Kurumsal</span>
          </FooterHeading>
          <ul className="mt-4">
            {corporateLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={listLink}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 4 — İletişim */}
        <div>
          <FooterHeading>Hızlı Ulaşım</FooterHeading>
          <ul className="mt-4 space-y-1">
            <li>
              <a href={`tel:${site.phoneTel}`} className="group flex min-h-11 items-center gap-3 text-white">
                <Phone aria-hidden="true" className="size-5 text-copper-500" strokeWidth={2} />
                <span className="text-lg font-bold transition-colors group-hover:text-copper-500">
                  {site.phoneDisplay}
                </span>
              </a>
            </li>
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center gap-3 text-base transition-colors hover:text-white"
              >
                <WhatsAppIcon className="size-5 text-copper-500" />
                WhatsApp Teklif Hattı
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex min-h-11 items-center gap-3 break-all text-base transition-colors hover:text-white"
              >
                <Mail aria-hidden="true" className="size-5 shrink-0 text-copper-500" strokeWidth={2} />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3 py-2.5 text-base">
              <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-copper-500" strokeWidth={2} />
              {site.address.display}
            </li>
          </ul>
          <div className="mt-4 border-t border-white/10 pt-4">
            <Link href="/istanbul-nakliye" className={listLink}>
              İstanbul 39 İlçe Nakliye Rehberi
            </Link>
            <br />
            <Link href="/sehirler-arasi-nakliyat" className={listLink}>
              Şehirlerarası Nakliyat Seferleri
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-navy-950">
        <div className="container-page flex flex-col gap-2 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Tüm hakları saklıdır.
          </p>
          <p className="font-semibold uppercase tracking-[0.12em] text-copper-500">{site.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
