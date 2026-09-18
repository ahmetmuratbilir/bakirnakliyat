import { site } from "@/data/site";
import Link from "next/link";

export default function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, var(--color-dark-elevated) 0%, var(--color-dark-card) 100%)",
        borderBottom: "1px solid var(--color-dark-border)",
      }}
    >
      <div className="container-page py-14 md:py-18">
        {breadcrumb && (
          <nav className="mb-4 text-sm" style={{ color: "var(--color-text-subtle)" }}>
            <Link href="/" style={{ color: "var(--color-text-subtle)" }} className="hover:opacity-80">
              Anasayfa
            </Link>
            {breadcrumb.map((crumb) => (
              <span key={crumb.label}>
                <span className="mx-2">›</span>
                {crumb.href ? (
                  <Link href={crumb.href} style={{ color: "var(--color-text-subtle)" }} className="hover:opacity-80">
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ color: "var(--color-text-muted)" }}>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl md:text-4xl font-bold gold-line" style={{ color: "var(--color-text)" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-base md:text-lg max-w-2xl" style={{ color: "var(--color-text-muted)" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
