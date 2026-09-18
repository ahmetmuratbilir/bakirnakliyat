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
    title: `${post.title} | ${site.name}`,
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
    <div className="bg-white">
      <PageHero
        title={post.title}
        subtitle={`${post.category} · ${post.readTime} okuma · ${new Date(post.date).toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}`}
        breadcrumb={[{ href: "/blog", label: "Blog" }, { label: post.title }]}
      />

      <section className="container-page py-16 grid lg:grid-cols-12 gap-12">
        {/* Sol Makale Alanı */}
        <article className="lg:col-span-8 space-y-6 text-[#334155] leading-relaxed text-base sm:text-lg">
          {post.content.map((para, i) => (
            <p key={i} className="text-[#334155]">
              {para}
            </p>
          ))}

          <div className="pt-8 mt-10 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-[#64748b]">
              Yayınlayan: <strong className="text-[#0b1f3a]">{site.name} Editör Masası</strong>
            </div>
            <Link
              href="/iletisim"
              className="inline-block font-bold px-6 py-3.5 rounded-xl bg-[#1d4ed8] text-white hover:bg-[#1e40af] transition text-sm shadow-md"
            >
              Taşınma Teklifi Al →
            </Link>
          </div>
        </article>

        {/* Sağ Yan Panel */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-extrabold text-[#0b1f3a] text-base mb-4 border-b border-slate-200 pb-3">
              Diğer Faydalı Yazılar
            </h3>
            <div className="space-y-4">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block p-4 rounded-xl bg-white border border-slate-200 hover:border-[#1d4ed8] hover:shadow-md transition group"
                >
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#1d4ed8] mb-1">
                    {p.category}
                  </div>
                  <div className="text-sm font-bold text-[#0b1f3a] group-hover:text-[#1d4ed8] transition leading-snug">
                    {p.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <CtaBand />
    </div>
  );
}
