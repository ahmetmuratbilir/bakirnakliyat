import { services } from "@/data/services";

// Header, mobil menü ve footer aynı listeyi kullanır.
export const navLinks = [
  { href: "/", label: "Anasayfa" },
  {
    label: "Kurumsal",
    href: "/kurumsal",
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
    overviewLabel: "Tüm Hizmetler",
    children: services.map((s) => ({ href: `/hizmetlerimiz/${s.slug}`, label: s.title })),
  },
  { href: "/istanbul-nakliye", label: "İstanbul Nakliye" },
  { href: "/sehirler-arasi-nakliyat", label: "Şehirlerarası" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export const corporateLinks = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/kurumsal", label: "Kurumsal & Araç Filosu" },
  { href: "/misyonumuz", label: "Misyonumuz" },
  { href: "/vizyonumuz", label: "Vizyonumuz" },
  { href: "/blog", label: "Blog & Rehberler" },
  { href: "/iletisim", label: "İletişim & Teklif" },
];
