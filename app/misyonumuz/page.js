import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";

export const metadata = {
  title: "Misyonumuz",
  description: `${site.name}'ın misyonu: Taşıma süreçlerini kolaylaştırmak, müşteri haklarını korumak ve nakliyat sektöründe güven standardı oluşturmak.`,
  alternates: { canonical: `${site.domain}/misyonumuz` },
};

export default function MisyonumuzPage() {
  return (
    <>
      <PageHero
        title="Misyonumuz"
        subtitle="Neden varız ve ne için çalışıyoruz?"
        breadcrumb={[{ label: "Misyonumuz" }]}
      />
      <section className="container-page py-16 max-w-3xl space-y-8">
        <div
          className="p-8 rounded-2xl text-center"
          style={{
            background: "linear-gradient(135deg, var(--color-dark-elevated), var(--color-dark-card))",
            border: "1px solid var(--color-gold-dark)",
          }}
        >
          <div className="text-5xl mb-4">🎯</div>
          <p className="text-xl font-semibold leading-relaxed" style={{ color: "var(--color-text)" }}>
            &quot;Taşınmayı bir stres kaynağı olmaktan çıkarıp, hayatın yeni bir bölümüne güvenli geçiş
            deneyimine dönüştürmek.&quot;
          </p>
        </div>

        <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          <p>
            Nakliyat sektörü, ne yazık ki tüketiciler açısından güvensizliğin yüksek olduğu bir alan.
            Sonradan çıkan ücretler, kırılan eşyalar, zamanında gelmeyen ekipler… Bu sorunların tamamı
            sistemsel bir şeffaflık eksikliğinden kaynaklanır.
          </p>
          <p>
            {site.name} olarak misyonumuz bu tabloyu değiştirmektir. Sözleşmeli çalışma, önceden
            belirlenen ve değişmeyen fiyatlar, sigorta güvencesi ve net iletişim; bu dört ilke
            firmamızın DNA&apos;sını oluşturur.
          </p>
          <p>
            Her müşterimize sadece eşyalarını taşımıyoruz; onların güvenini taşıyoruz. Bu sorumluluk
            bizi her geçen gün daha iyi yapmaya zorluyor ve itmotivasyon kaynağı olmaya devam ediyor.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
