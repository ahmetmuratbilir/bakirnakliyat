import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { posts, getPost } from "@/data/posts";
import { site } from "@/data/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `${site.domain}/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return notFound();

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={`${post.category} · ${post.readTime} okuma · ${new Date(post.date).toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}`}
        breadcrumb={[{ href: "/blog", label: "Blog" }, { label: post.title }]}
      />

      <section className="container-page py-16 grid md:grid-cols-3 gap-10">
        <article className="md:col-span-2 space-y-5">
          {post.content.map((para, i) => (
            <p key={i} className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              {para}
            </p>
          ))}

          <div className="pt-6">
            <Link
              href="/iletisim"
              className="inline-block font-semibold px-7 py-3 rounded-lg transition"
              style={{ background: "var(--color-gold)", color: "var(--color-dark)" }}
            >
              Ücretsiz Teklif Al →
            </Link>
          </div>
        </article>

        <aside className="space-y-4">
          <h3 className="font-semibold" style={{ color: "var(--color-text)" }}>Diğer Yazılar</h3>
          {otherPosts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="block p-4 rounded-lg card-hover"
              style={{ background: "var(--color-dark-card)", border: "1px solid var(--color-dark-border)" }}
            >
              <div className="text-xs font-semibold mb-1" style={{ color: "var(--color-gold)" }}>{p.category}</div>
              <div className="text-sm font-semibold leading-snug" style={{ color: "var(--color-text)" }}>{p.title}</div>
            </Link>
          ))}
        </aside>
      </section>

      <CtaBand />
    </>
  );
}
