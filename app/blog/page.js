import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";
import { posts } from "@/data/posts";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: `${site.name} Blog — Nakliyat rehberleri, taşınma ipuçları ve sektörel bilgiler.`,
  alternates: { canonical: `${site.domain}/blog` },
};

const categoryColors = {
  Rehber: { bg: "rgba(212,160,23,0.1)", border: "rgba(212,160,23,0.3)", text: "var(--color-gold)" },
  Kurumsal: { bg: "rgba(99,179,237,0.1)", border: "rgba(99,179,237,0.3)", text: "#63b3ed" },
  "İpuçları": { bg: "rgba(72,187,120,0.1)", border: "rgba(72,187,120,0.3)", text: "#48bb78" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Nakliyat rehberleri, taşınma ipuçları ve sektörel bilgiler"
        breadcrumb={[{ label: "Blog" }]}
      />
      <section className="container-page py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl">
          {posts.map((post) => {
            const cat = categoryColors[post.category] || categoryColors["Rehber"];
            return (
              <article
                key={post.slug}
                className="p-6 rounded-xl card-hover flex flex-col"
                style={{ background: "var(--color-dark-card)", border: "1px solid var(--color-dark-border)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: cat.bg, border: `1px solid ${cat.border}`, color: cat.text }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs" style={{ color: "var(--color-text-subtle)" }}>
                    {post.readTime} okuma
                  </span>
                </div>
                <h2 className="font-bold text-base leading-snug mb-2" style={{ color: "var(--color-text)" }}>
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--color-text-muted)" }}>
                  {post.summary}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "var(--color-text-subtle)" }}>
                    {new Date(post.date).toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: "var(--color-gold)" }}>
                    Oku →
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <div
          className="mt-10 p-5 rounded-xl max-w-xl"
          style={{ background: "var(--color-dark-card)", border: "1px solid var(--color-dark-border)" }}
        >
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            Daha fazla içerik yakında eklenecek. Taşınma sürecinizle ilgili sorularınız için
            {" "}
            <Link href="/iletisim" style={{ color: "var(--color-gold)" }}>
              bizimle iletişime geçin
            </Link>
            .
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
