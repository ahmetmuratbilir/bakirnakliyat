import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

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
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: site.name,
  image: `${site.domain}/logo.png`,
  telephone: site.phoneTel,
  email: site.email,
  foundingDate: site.founded,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: "İstanbul",
    addressCountry: "TR",
  },
  url: site.domain,
  areaServed: "İstanbul",
  sameAs: Object.values(site.social),
  priceRange: "$$",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="h-full">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
