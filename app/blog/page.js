import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";
import { posts } from "@/data/posts";

export const metadata = {
  title: "Nakliyat Rehberi & Blog",
  description: `${site.name} Blog — Taşınma rehberleri, ambalajlama püf noktaları, nakliyat sözleşmesi ve kurumsal ofis taşıma tavsiyeleri.`,
  alternates: { canonical: `${site.domain}/blog` },
};

const formatDate = (d) => new Date(d).toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" });

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Nakliyat & Taşınma Rehberi"
        subtitle="Taşınma sürecinizi kolaylaştıracak uzman tavsiyeleri, paketleme teknikleri ve sektörel ipuçları."
        breadcrumb={[{ label: "Blog" }]}
      />

      <section className="section bg-white">
        <ul className="container-page grid max-w-5xl gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug} className="reveal">
              <article className="group relative flex h-full flex-col rounded-panel border border-line bg-white p-7 shadow-card transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:border-copper-500/50 hover:shadow-lift sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-copper-50 px-3 py-1 text-sm font-semibold text-copper-700 ring-1 ring-inset ring-copper-100">
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-subtle">
                    <Clock aria-hidden="true" className="size-4" strokeWidth={2} />
                    {post.readTime} okuma
                  </span>
                </div>

                <h2 className="mt-5 text-xl font-extrabold leading-snug text-navy-900">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="rounded-sm after:absolute after:inset-0 after:rounded-panel group-hover:text-copper-700"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="mt-3 flex-1 leading-relaxed text-muted">{post.summary}</p>

                <div className="mt-6 flex items-center justify-between border-t border-line pt-5 text-sm">
                  <time dateTime={post.date} className="text-subtle">
                    {formatDate(post.date)}
                  </time>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-copper-700">
                    Yazıyı Oku
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:translate-x-1"
                      strokeWidth={2.25}
                    />
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
