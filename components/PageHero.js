import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { site } from "@/data/site";

export default function PageHero({ title, subtitle, breadcrumb }) {
  const crumbs = breadcrumb ? [{ label: "Anasayfa", href: "/" }, ...breadcrumb] : null;

  const breadcrumbJsonLd = crumbs && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${site.domain}${c.href === "/" ? "" : c.href}` } : {}),
    })),
  };

  return (
    <section className="relative overflow-hidden border-b border-line bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_70%_30%,var(--color-copper-100),transparent_60%)] opacity-70 md:block"
      />
      <div className="container-page relative py-7 sm:py-10 md:py-16">
        {crumbs && (
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <nav aria-label="Sayfa konumu" className="mb-3 sm:mb-5">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-subtle">
                {crumbs.map((c, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    {i > 0 && <ChevronRight aria-hidden="true" className="size-3.5 text-line-strong" />}
                    {c.href ? (
                      <Link href={c.href} className="rounded-sm transition-colors hover:text-copper-700">
                        {c.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="font-semibold text-navy-900">
                        {c.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </>
        )}

        <h1 className="max-w-4xl text-display font-extrabold text-navy-900">{title}</h1>

        {subtitle && <p className="mt-3 max-w-2xl text-lead text-muted sm:mt-4">{subtitle}</p>}
      </div>
    </section>
  );
}
