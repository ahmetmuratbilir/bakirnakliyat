import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";

export const metadata = {
  title: "Kurumsal & Araç Filosu | Bakır Nakliyat",
  description: `${site.name} şirket profili, yasal taşımacılık lisansları ve araç filosu bilgileri.`,
  alternates: { canonical: `${site.domain}/kurumsal` },
};

const fleet = [
  { type: "Kapalı Kasa Panelvan & Kamyonet", count: "6 Adet", use: "Şehir içi parça eşya ve dar sokak taşımaları" },
  { type: "Orta Boy Kapalı Kasa Kamyon", count: "9 Adet", use: "Standart 2+1 ve 3+1 evden eve nakliyat operasyonları" },
  { type: "Büyük Boy Şehirlerarası Kamyon", count: "5 Adet", use: "Uzun mesafe komple ev ve ofis taşımacılığı" },
  { type: "Bina Dışı Teleskopik Asansör Aracı", count: "4 Adet", use: "20. kata kadar dış cepheden güvenli eşya indirme-bindirme" },
  { type: "Ağır Yük & Hafriyat Kamyonu", count: "4 Adet", use: "Şantiye, moloz ve tadilat atığı sevkiyatı" },
];

export default function KurumsalPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Kurumsal Profil & Araç Filomuz"
        subtitle={`${site.name} olarak yasal yetki belgeleri, modern araç parkı ve uzman teknik kadromuzla hizmetinizdeyiz.`}
        breadcrumb={[{ label: "Kurumsal" }]}
      />

      <section className="container-page py-16 max-w-4xl space-y-12">
        <div className="space-y-4 text-base sm:text-lg text-[#334155] leading-relaxed">
          <h2 className="text-2xl font-extrabold text-[#0b1f3a] tracking-tight">
            Şirket Profili & Standartlarımız
          </h2>
          <p>
            {site.name}, Karayolu Taşıma Kanunu ve ilgili yönetmeliklerin gerektirdiği K3 Yetki Belgesi&apos;ne sahip, Ticaret Odası kayıtlı resmi bir taşımacılık şirketidir.
          </p>
          <p>
            Müşterilerimizin can ve mal güvenliğini en üstte tutarak; araçlarımızın periyodik muayeneleri, kasko ve nakliyat emtea sigortaları düzenli olarak güncellenmektedir.
          </p>
        </div>

        {/* Araç Filosu Tablosu */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0b1f3a] mb-6 tracking-tight">
            Özmal Araç Filomuz
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-[#0b1f3a] text-xs font-bold uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Araç Türü</th>
                  <th className="px-6 py-4">Adet</th>
                  <th className="px-6 py-4">Kullanım Amacı</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#334155]">
                {fleet.map((item, i) => (
                  <tr key={item.type} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="px-6 py-4 font-bold text-[#0b1f3a]">{item.type}</td>
                    <td className="px-6 py-4 font-extrabold text-[#1d4ed8]">{item.count}</td>
                    <td className="px-6 py-4 text-[#64748b]">{item.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
