import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";
import { posts } from "@/data/posts";
import Link from "next/link";

export const metadata = {
  title: "Nakliyat Rehberi & Blog | Bakır Nakliyat",
  description: `${site.name} Blog — Taşınma rehberleri, ambalajlama püf noktaları, nakliyat sözleşmesi ve kurumsal ofis taşıma tavsiyeleri.`,
  alternates: { canonical: `${site.domain}/blog` },
};

export default function BlogPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Nakliyat & Taşınma Rehberi"
        subtitle="Taşınma sürecinizi kolaylaştıracak uzman tavsiyeleri, paketleme teknikleri ve sektörel ipuçları."
        breadcrumb={[{ label: "Blog" }]}
      />

      <section className="container-page py-16">
        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#1d4ed8] transition-all group"
            >
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-blue-50 text-[#1d4ed8] border border-blue-100">
                  {post.category}
                </span>
                <span className="text-xs text-[#64748b] font-medium">
                  ⏱ {post.readTime} okuma
                </span>
              </div>

              <h2 className="text-xl font-extrabold text-[#0b1f3a] leading-snug mb-3 group-hover:text-[#1d4ed8] transition">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              <p className="text-sm text-[#475569] leading-relaxed mb-6 flex-1">
                {post.summary}
              </p>

              <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                <span className="text-[#94a3b3]">
                  {new Date(post.date).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#1d4ed8] hover:text-[#1e40af] flex items-center gap-1 group-hover:translate-x-1 transition"
                >
                  <span>Yazıyı Oku</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
