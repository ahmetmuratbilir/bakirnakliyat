import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";

export const metadata = {
  title: "Kurumsal",
  description: `${site.name} kurumsal yapısı, araç filosu, lisans ve sertifikaları hakkında bilgi edinin.`,
  alternates: { canonical: `${site.domain}/kurumsal` },
};

const fleet = [
  { type: "Kapalı Kasa Kamyonet", count: "5 Adet", use: "Şehir içi küçük taşımalar" },
  { type: "Orta Boy Kamyon", count: "8 Adet", use: "Evden eve ve ofis taşımaları" },
  { type: "Büyük Kamyon", count: "4 Adet", use: "Şehirlerarası taşımalar" },
  { type: "Asansörlü Kamyon", count: "3 Adet", use: "Yüksek kat ve dar merdiven taşımaları" },
  { type: "Hafriyat Kamyonu", count: "4 Adet", use: "İnşaat ve tadilat atıkları" },
];

export default function KurumsalPage() {
  return (
    <>
      <PageHero
        title="Kurumsal"
        subtitle={`${site.name}'ın kurumsal yapısı, araç filosu ve sertifikaları`}
        breadcrumb={[{ label: "Kurumsal" }]}
      />
      <section className="container-page py-16 max-w-4xl space-y-12">
        <div>
          <h2 className="text-xl font-bold mb-4 gold-line inline-block" style={{ color: "var(--color-text)" }}>
            Şirket Profili
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            <p>
              {site.name}, {site.founded} yılından bu yana İstanbul ve çevre illerde faaliyet gösteren,
              profesyonel nakliyat ve lojistik hizmetleri sunan bir nakliyat şirketidir. Kurucularımızın
              sektörde 20 yılı aşan birikimi, firmamızın temel taşını oluşturmaktadır.
            </p>
            <p>
              Şirketimiz; Taşımacılık İşletme Belgesi, Karayolu Taşıma Yetki Belgesi ve Hafriyat Taşıma
              Lisansı dahil tüm yasal izin ve sertifikalara sahiptir. Operasyonlarımız, ilgili Bakanlık
              yönetmeliklerine tam uyum içinde sürdürülmektedir.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-6 gold-line inline-block" style={{ color: "var(--color-text)" }}>
            Araç Filosu
          </h2>
          <div className="mt-8 overflow-x-auto rounded-xl" style={{ border: "1px solid var(--color-dark-border)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "var(--color-dark-elevated)", borderBottom: "1px solid var(--color-dark-border)" }}>
                  <th className="text-left px-5 py-3 font-semibold" style={{ color: "var(--color-text)" }}>Araç Tipi</th>
                  <th className="text-left px-5 py-3 font-semibold" style={{ color: "var(--color-text)" }}>Adet</th>
                  <th className="text-left px-5 py-3 font-semibold" style={{ color: "var(--color-text)" }}>Kullanım Alanı</th>
                </tr>
              </thead>
              <tbody>
                {fleet.map((item, i) => (
                  <tr
                    key={item.type}
                    style={{
                      background: i % 2 === 0 ? "var(--color-dark-card)" : "var(--color-dark-elevated)",
                      borderBottom: "1px solid var(--color-dark-border)",
                    }}
                  >
                    <td className="px-5 py-3" style={{ color: "var(--color-text)" }}>{item.type}</td>
                    <td className="px-5 py-3 font-semibold" style={{ color: "var(--color-gold)" }}>{item.count}</td>
                    <td className="px-5 py-3" style={{ color: "var(--color-text-muted)" }}>{item.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: "Kuruluş Yılı", value: site.founded },
            { label: "Toplam Müşteri", value: "5.000+" },
            { label: "Araç Kapasitesi", value: "24 Araç" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl"
              style={{ background: "var(--color-dark-card)", border: "1px solid var(--color-dark-border)" }}
            >
              <div className="text-3xl font-bold" style={{ color: "var(--color-gold)" }}>{stat.value}</div>
              <div className="mt-1 text-sm" style={{ color: "var(--color-text-muted)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
