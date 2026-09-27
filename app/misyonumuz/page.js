import { Target } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";

export const metadata = {
  title: "Misyonumuz",
  description: `${site.name} misyonu: Taşınma sürecini stres ve belirsizlikten arındırarak güvenli ve konforlu bir deneyime dönüştürmek.`,
  alternates: { canonical: `${site.domain}/misyonumuz` },
};

export default function MisyonumuzPage() {
  return (
    <>
      <PageHero
        title="Misyonumuz"
        subtitle="Neden varız ve müşterilerimize hangi değerleri taahhüt ediyoruz?"
        breadcrumb={[{ label: "Misyonumuz" }]}
      />

      <section className="section bg-white">
        <div className="container-page max-w-3xl space-y-10">
          <figure className="relative overflow-hidden rounded-panel bg-navy-900 px-7 py-10 text-center sm:px-12 sm:py-14">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-copper-500" />
            <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-white/10 text-copper-500 ring-1 ring-inset ring-white/15">
              <Target aria-hidden="true" className="size-7" strokeWidth={1.75} />
            </span>
            <blockquote className="mt-6 text-xl font-extrabold leading-snug text-white sm:text-2xl">
              &quot;Taşınmayı zorlu ve yıpratıcı bir süreç olmaktan çıkarıp; sözleşmeli, sigortalı ve dakik bir güven
              yolculuğuna dönüştürmek.&quot;
            </blockquote>
          </figure>

          <div className="space-y-5 text-lead text-muted">
            <p>
              Nakliyat sektöründe yıllardır yaşanan en temel problem, güven eksikliği ve belirsizliktir.
              Müşterilerimizin taşınma günü neyle karşılaşacağını bilmemesi, ek ücret talepleri veya kırılan eşyalar
              bu sektörün kronik sorunları haline gelmiştir.
            </p>
            <p>
              {site.name} olarak misyonumuz, bu olumsuz deneyimleri tamamen ortadan kaldırmaktır. Her müşterimize
              başlangıçta ne söz verdiysek, süreç sonunda aynı memnuniyeti yaşatmak adına teknolojik araç takip
              sistemlerinden profesyonel ambalajlama tekniklerine kadar tüm gücümüzle çalışıyoruz.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
