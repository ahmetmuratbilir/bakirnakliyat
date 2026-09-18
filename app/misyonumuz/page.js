import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";

export const metadata = {
  title: "Misyonumuz | Bakır Nakliyat",
  description: `${site.name} misyonu: Taşınma sürecini stres ve belirsizlikten arındırarak güvenli ve konforlu bir deneyime dönüştürmek.`,
  alternates: { canonical: `${site.domain}/misyonumuz` },
};

export default function MisyonumuzPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Misyonumuz"
        subtitle="Neden varız ve müşterilerimize hangi değerleri taahhüt ediyoruz?"
        breadcrumb={[{ label: "Misyonumuz" }]}
      />

      <section className="container-page py-16 max-w-3xl space-y-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-blue-50 border border-blue-200 text-center">
          <div className="text-4xl mb-4">🎯</div>
          <blockquote className="text-xl sm:text-2xl font-extrabold text-[#0b1f3a] leading-snug">
            &quot;Taşınmayı zorlu ve yıpratıcı bir süreç olmaktan çıkarıp; sözleşmeli, sigortalı ve dakik bir güven yolculuğuna dönüştürmek.&quot;
          </blockquote>
        </div>

        <div className="space-y-5 text-base sm:text-lg text-[#334155] leading-relaxed">
          <p>
            Nakliyat sektöründe yıllardır yaşanan en temel problem, güven eksikliği ve belirsizliktir. Müşterilerimizin taşınma günü neyle karşılaşacağını bilmemesi, ek ücret talepleri veya kırılan eşyalar bu sektörün kronik sorunları haline gelmiştir.
          </p>
          <p>
            {site.name} olarak misyonumuz, bu olumsuz deneyimleri tamamen ortadan kaldırmaktır. Her müşterimize başlangıçta ne söz verdiysek, süreç sonunda aynı memnuniyeti yaşatmak adına teknolojik araç takip sistemlerinden profesyonel ambalajlama tekniklerine kadar tüm gücümüzle çalışıyoruz.
          </p>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
