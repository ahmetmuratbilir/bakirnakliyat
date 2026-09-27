import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Button from "@/components/ui/Button";
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
    title: `${post.title}`,
    description: post.summary,
    alternates: { canonical: `${site.domain}/blog/${slug}` },
  };
}

const formatDate = (d) => new Date(d).toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" });

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return notFound();

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    inLanguage: "tr-TR",
    mainEntityOfPage: `${site.domain}/blog/${slug}`,
    author: { "@type": "Organization", name: site.name, url: site.domain },
    publisher: { "@id": `${site.domain}/#organization` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <PageHero
        title={post.title}
        subtitle={`${post.category} · ${post.readTime} okuma · ${formatDate(post.date)}`}
        breadcrumb={[{ href: "/blog", label: "Blog" }, { label: post.title }]}
      />

      <section className="section bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <article className="min-w-0 lg:col-span-8">
            <div className="max-w-prose space-y-6 text-lead text-ink/85">
              {post.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-subtle">
                Yayınlayan: <strong className="font-semibold text-navy-900">{site.name} Editör Masası</strong>
              </p>
              <Button href="/iletisim" iconRight={ArrowRight}>
                Taşınma Teklifi Al
              </Button>
            </div>
          </article>

          <aside className="min-w-0 lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <div className="rounded-panel border border-line bg-surface p-6 sm:p-7">
              <h2 className="font-extrabold text-navy-900">Diğer Faydalı Yazılar</h2>
              <ul className="mt-4 space-y-3">
                {otherPosts.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="group block rounded-card border border-line bg-white p-4 transition-[border-color,box-shadow] hover:border-copper-500/50 hover:shadow-card"
                    >
                      <span className="text-sm font-semibold text-copper-700">{p.category}</span>
                      <span className="mt-1 block font-bold leading-snug text-navy-900 group-hover:text-copper-700">
                        {p.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
