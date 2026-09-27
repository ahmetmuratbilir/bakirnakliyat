const FOUNDED = 2009;
const YEARS = new Date().getFullYear() - FOUNDED;

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

  founded: String(FOUNDED),
  // Tek kaynak: metinlerdeki "X yıl tecrübe" ifadeleri bundan türetilir.
  yearsOfExperience: YEARS,

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

  // Logodaki slogan; anasayfa H1, footer ve JSON-LD buradan okur
  slogan: "Güvenle, Her Yere",
  // Meta açıklama (≤155 karakter) + şema açıklaması
  description:
    "İstanbul evden eve nakliyat, ofis taşıma, parça eşya ve paletli yük taşımada sözleşmeli, faturalı hizmet. Ücretsiz ekspertizle net fiyat teklifi alın.",

  // Sitede kullanılan güven ifadeleri tek yerden yönetilir; abartılı veya
  // doğrulanamayan iddia barındırmaz.
  trustPoints: [
    "Kayıtlı şahıs firması",
    "Yazılı taşıma sözleşmesi",
    "Talep halinde nakliyat sigortası",
    "Faturalı hizmet",
  ],

  stats: [
    { value: String(YEARS), suffix: "+", label: "Yıl Saha Tecrübesi" },
    { value: "39", suffix: "", label: "İstanbul İlçesi" },
    { value: "7/24", suffix: "", label: "Acil Sevkiyat" },
    { value: "3", suffix: "", label: "Özmal Araç" },
  ],

  social: {
    instagram: "https://www.instagram.com/yasar.bkrrrr/",
  },
};
