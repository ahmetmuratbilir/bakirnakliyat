import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { site } from "@/data/site";

// Tek aile: ikinci bir font ailesi yuklemek ~60KB bos maliyet demekti.
// "latin-ext" alt kumesi ZORUNLU - aksi halde g, s, i, I gibi Turkce
// karakterler sistem fontuna duser (karisik glif + CLS).
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "800"],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
});

export const metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} | İstanbul Evden Eve ve Şehirlerarası Nakliyat`,
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
  openingHours: site.openingHours.schema,
  currenciesAccepted: "TRY",
  paymentAccepted: "Nakit, Kredi Kartı, Havale/EFT",
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
      <body className="min-h-full flex flex-col pb-16 sm:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([jsonLd, websiteJsonLd]),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
