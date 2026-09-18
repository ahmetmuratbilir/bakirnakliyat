import Link from "next/link";

export default function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section className="bg-gradient-to-b from-[#f0f7ff] via-[#f8fafc] to-white border-b border-slate-200 py-12 md:py-16">
      <div className="container-page">
        {breadcrumb && (
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#64748b] mb-4">
            <Link href="/" className="hover:text-[#1d4ed8] transition">
              Anasayfa
            </Link>
            {breadcrumb.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span>/</span>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#1d4ed8] transition">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#1d4ed8] font-bold">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b1f3a] tracking-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-3.5 text-base sm:text-lg text-[#475569] max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
