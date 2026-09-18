import { districts } from "@/data/districts";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { posts } from "@/data/posts";
import { site } from "@/data/site";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/hakkimizda",
    "/kurumsal",
    "/misyonumuz",
    "/vizyonumuz",
    "/hizmetlerimiz",
    "/istanbul-nakliye",
    "/sehirler-arasi-nakliyat",
    "/blog",
    "/iletisim",
  ].map((path) => ({
    url: `${site.domain}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${site.domain}/hizmetlerimiz/${s.slug}`,
    lastModified: new Date(),
  }));

  const districtRoutes = districts.map((d) => ({
    url: `${site.domain}/istanbul-nakliye/${d.slug}`,
    lastModified: new Date(),
  }));

  const cityRoutes = cities.map((c) => ({
    url: `${site.domain}/sehirler-arasi-nakliyat/${c.slug}`,
    lastModified: new Date(),
  }));

  const postRoutes = posts.map((p) => ({
    url: `${site.domain}/blog/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...districtRoutes, ...cityRoutes, ...postRoutes];
}
