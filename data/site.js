export const site = {
  name: "Bakır Nakliyat",
  legalName: "Bakır Nakliyat",
  domain: "https://bakirnakliyat.com",

  phoneDisplay: "0538 411 09 60",
  phoneTel: "05384110960",
  phoneIntl: "+905384110960",
  whatsapp:
    "https://wa.me/905384110960?text=Merhaba,%20nakliyat%20hizmeti%20ve%20fiyat%20teklifi%20almak%20istiyorum.",
  email: "bakirnakliyatsirketi@gmail.com",

  founded: "2009",
  // Tek kaynak: metinlerdeki "X yıl tecrübe" ifadeleri bundan türetilir.
  get yearsOfExperience() {
    return new Date().getFullYear() - Number(this.founded);
  },

  // Google İşletme Profili kaydı tamamlanana kadar açık adres yayınlanmıyor.
  // Kayıt bittiğinde `street` alanını doldurmak yeterli; footer, iletişim
  // sayfası ve JSON-LD otomatik olarak gerçek adrese geçer.
  address: {
    street: "",
    district: "Başakşehir",
    city: "İstanbul",
    country: "TR",
    display: "Başakşehir / İstanbul merkezli — İstanbul geneli hizmet",
  },
  hasStreetAddress: false,

  areaServed: [
    "İstanbul",
    "Ankara",
    "Bursa",
    "İzmir",
    "Kocaeli",
    "Sakarya",
    "Tekirdağ",
    "Kırklareli",
    "Bolu",
    "Eskişehir",
  ],

  openingHours: {
    display: "Hafta içi & hafta sonu 08:00 - 20:00 · Acil sevkiyat 7/24",
    schema: "Mo-Su 08:00-20:00",
  },

  slogan: "Güvenli Taşımacılığın Adresi",
  description:
    "Bakır Nakliyat; İstanbul içi ve şehirlerarası evden eve nakliyat, ofis taşımacılığı, palet ve parsiyel yük taşıma hizmetleri sunar. Yazılı taşıma sözleşmesi, faturalı hizmet ve talep halinde nakliyat sigortası ile eşyanız ve yükünüz güvence altındadır.",

  // Sitede kullanılan güven ifadeleri tek yerden yönetilir; abartılı veya
  // doğrulanamayan iddia barındırmaz.
  trustPoints: [
    "Kayıtlı şahıs firması",
    "Yazılı taşıma sözleşmesi",
    "Talep halinde nakliyat sigortası",
    "Faturalı hizmet",
  ],

  stats: [
    { value: "17", suffix: "+", label: "Yıl Saha Tecrübesi" },
    { value: "39", suffix: "", label: "İstanbul İlçesi" },
    { value: "7/24", suffix: "", label: "Acil Sevkiyat" },
    { value: "2", suffix: "", label: "Özmal Araç" },
  ],

  social: {
    instagram: "https://www.instagram.com/yasar.bkrrrr/",
  },
};
