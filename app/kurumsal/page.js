import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Photo from "@/components/ui/Photo";
import { site } from "@/data/site";

export const metadata = {
  title: "Kurumsal & Araç Filosu",
  description: `${site.name} şirket profili, yasal taşımacılık lisansları ve araç filosu bilgileri.`,
  alternates: { canonical: `${site.domain}/kurumsal` },
};

// DOĞRULANMASI GEREKİYOR: bu adetler ve araç türleri kullanıcıdan teyit
// alınmadan önceki siteden aynen taşındı (bkz. tasarim-v3 özeti).
const fleet = [
  { type: "Kapalı Kasa Panelvan & Kamyonet", count: "6 Adet", use: "Şehir içi parça eşya ve dar sokak taşımaları" },
  { type: "Orta Boy Kapalı Kasa Kamyon", count: "9 Adet", use: "Standart 2+1 ve 3+1 evden eve nakliyat operasyonları" },
  { type: "Büyük Boy Şehirlerarası Kamyon", count: "5 Adet", use: "Uzun mesafe komple ev ve ofis taşımacılığı" },
  {
    type: "Bina Dışı Teleskopik Asansör Aracı",
    count: "4 Adet",
    use: "20. kata kadar dış cepheden güvenli eşya indirme-bindirme",
  },
  { type: "Ağır Yük & Hafriyat Kamyonu", count: "4 Adet", use: "Şantiye, moloz ve tadilat atığı sevkiyatı" },
];

const photos = [
  {
    slug: "bakir-nakliyat-filo-araci",
    badge: "34 RIL 010 • Özmal Filo",
    title: "Şehir İçi & Şehirlerarası Kapalı Kasa Nakliye Aracı",
    text: "Sarsıntı önleyici iç sabitleme donanımlı",
  },
  {
    slug: "bakir-nakliyat-palet-yukleme",
    badge: "Depolama & Yükleme",
    title: "Ağır Yük & Kurumsal Sevkiyat Desteği",
    text: "Forklift ve rampa uyumlu araç kasası",
  },
];

export default function KurumsalPage() {
  return (
    <>
      <PageHero
        title="Kurumsal Profil & Araç Filomuz"
        subtitle={`${site.name} olarak yasal yetki belgeleri, modern araç parkı ve uzman teknik kadromuzla hizmetinizdeyiz.`}
        breadcrumb={[{ label: "Kurumsal" }]}
      />

      <section className="section bg-white">
        <div className="container-page max-w-4xl space-y-14">
          <div>
            <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">Şirket Profili &amp; Standartlarımız</h2>
            <div className="mt-5 space-y-4 text-lead text-muted">
              <p>
                {site.name}, Karayolu Taşıma Kanunu ve ilgili yönetmeliklerin gerektirdiği K3 Yetki Belgesi&apos;ne
                sahip, Ticaret Odası kayıtlı resmi bir taşımacılık şirketidir.
              </p>
              <p>
                Müşterilerimizin can ve mal güvenliğini en üstte tutarak; araçlarımızın periyodik muayeneleri düzenli
                olarak yapılmakta, talep halinde taşımaya özel nakliyat sigortası düzenlenmektedir.
              </p>
            </div>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2">
            {photos.map((p) => (
              <li key={p.slug} className="reveal group overflow-hidden rounded-panel border border-line bg-white shadow-card">
                <div className="relative aspect-4/3 overflow-hidden bg-navy-50">
                  <Photo
                    slug={p.slug}
                    fill
                    sizes="(min-width: 640px) 400px, calc(100vw - 2rem)"
                    imgClassName="transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-sm font-semibold text-navy-900 shadow-card">
                    {p.badge}
                  </span>
                </div>
                <div className="border-t border-line bg-surface p-5">
                  <h3 className="font-bold text-navy-900">{p.title}</h3>
                  <p className="mt-1 text-sm text-subtle">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div>
            <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">Özmal Araç Filomuz</h2>
            <div className="mt-6 overflow-hidden rounded-card border border-line shadow-card sm:overflow-x-auto">
              <table className="w-full text-left max-sm:block sm:min-w-xl">
                <thead className="border-b border-line bg-surface text-sm font-bold uppercase tracking-[0.06em] text-navy-900 max-sm:sr-only">
                  <tr>
                    <th scope="col" className="px-5 py-4">
                      Araç Türü
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Adet
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Kullanım Amacı
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line max-sm:block">
                  {fleet.map((item) => (
                    <tr key={item.type} className="even:bg-surface/60 max-sm:grid max-sm:grid-cols-[1fr_auto] max-sm:gap-x-4 max-sm:px-5 max-sm:py-4">
                      <th scope="row" className="px-5 py-4 font-semibold text-navy-900 max-sm:p-0">
                        {item.type}
                      </th>
                      <td className="whitespace-nowrap px-5 py-4 font-bold text-copper-700 tabular-nums max-sm:p-0 max-sm:text-right">
                        {item.count}
                      </td>
                      <td className="px-5 py-4 text-muted max-sm:col-span-2 max-sm:p-0 max-sm:pt-1">{item.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
