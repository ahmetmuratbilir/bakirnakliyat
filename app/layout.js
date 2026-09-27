import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import MobileCallBar from "@/components/MobileCallBar";
import { site } from "@/data/site";
import { navLinks } from "@/data/navigation";

// Plus Jakarta Sans (OFL, lisans: app/fonts/OFL-PlusJakartaSans.txt) — Türkçe alt küme.
// Google'ın "latin" + "latin-ext" ikilisi 2 dosya / 48 KB idi; bu tek dosya 18 KB ve
// 400-800 arası gerçek değişken ağırlık içerir. Anasayfada LCP metin olduğu için
// font boyutu doğrudan LCP'yi etkiliyor. Yeniden üretmek için (fonttools):
//   fonttools varLib.instancer "PlusJakartaSans[wght].ttf" wght=400:800 -o j.ttf
//   pyftsubset j.ttf --unicodes="U+0020-007E,U+00A0-00FF,U+011E-011F,U+0130-0131,
//     U+015E-015F,U+2013-2014,U+2018-201A,U+201C-201E,U+2022,U+2026,U+2039-203A,
//     U+20BA,U+2122,U+2190-2193" --layout-features+=tnum,locl --flavor=woff2
//     --no-hinting --desubroutinize --output-file=PlusJakartaSans-tr.woff2
const jakarta = localFont({
  src: "./fonts/PlusJakartaSans-tr.woff2",
  weight: "400 800",
  variable: "--font-jakarta",
  // "optional": font ilk ~100ms'de gelmezse o açılışta yedek fontla devam edilir,
  // sonradan değiştirilmez. "swap" ile yedek font (daha geniş) mobilde hero
  // paragrafını 4 satıra kırıyor, font gelince 3 satıra düşüp görseli 29px
  // zıplatıyordu (canlıda ölçülen CLS 0.169). 18 KB + preload ile çoğu
  // ziyarette font zamanında gelir; sonraki sayfalar önbellekten.
  display: "optional",
  preload: true,
  adjustFontFallback: "Arial",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  // iPhone çentik/ana ekran çubuğu alanı için env(safe-area-inset-*) aktif olsun
  viewportFit: "cover",
  themeColor: "#12263f",
};

export const metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `İstanbul Evden Eve Nakliyat ve Yük Taşıma | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "istanbul nakliyat",
    "evden eve nakliyat",
    "ofis taşıma",
    "eşya depolama",
    "asansörlü nakliyat",
    "şehirler arası nakliyat",
    "bakır nakliyat",
    "sigortalı nakliyat",
    "istanbul şehir içi nakliye",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  robots: { index: true, follow: true },
  verification: {
    google: "fhxUi9_eLgiiBRn21GClXacd7P7UEsGudhsYO5CyZE0",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.domain,
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/og-default.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

// Google Isletme Profili kaydi tamamlanana kadar acik adres yayinlanmiyor;
// bu yuzden "hizmet alani isletmesi" (areaServed) modeli kullaniliyor.
// site.hasStreetAddress true olunca PostalAddress otomatik devreye girer.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "@id": `${site.domain}/#organization`,
  name: site.name,
  legalName: site.legalName,
  image: `${site.domain}/og-default.jpg`,
  logo: `${site.domain}/logo-480.png`,
  url: site.domain,
  telephone: site.phoneIntl,
  email: site.email,
  foundingDate: site.founded,
  description: site.description,
  slogan: site.slogan,
  address: {
    "@type": "PostalAddress",
    ...(site.hasStreetAddress ? { streetAddress: site.address.street } : {}),
    addressLocality: site.address.district,
    addressRegion: site.address.city,
    addressCountry: site.address.country,
  },
  areaServed: site.areaServed.map((name) => ({ "@type": "City", name })),
  currenciesAccepted: "TRY",
  priceRange: "$$",
  sameAs: Object.values(site.social),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.domain}/#website`,
  url: site.domain,
  name: site.name,
  inLanguage: "tr-TR",
  publisher: { "@id": `${site.domain}/#organization` },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`h-full ${jakarta.variable}`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-btn focus:bg-navy-900 focus:px-4 focus:py-3 focus:font-semibold focus:text-white"
        >
          İçeriğe geç
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([jsonLd, websiteJsonLd]),
          }}
        />
        <TopBar />
        <Header navLinks={navLinks} />
        <main id="icerik" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
