// İstanbul çıkışlı şehirlerarası nakliyat güzergahları
export const cities = [
  { slug: "ankara-nakliye", name: "Ankara" },
  { slug: "bursa-nakliye", name: "Bursa" },
  { slug: "izmir-nakliye", name: "İzmir" },
  { slug: "kocaeli-nakliye", name: "Kocaeli" },
  { slug: "sakarya-nakliye", name: "Sakarya" },
  { slug: "tekirdag-nakliye", name: "Tekirdağ" },
  { slug: "kirklareli-nakliye", name: "Kırklareli" },
  { slug: "bolu-nakliye", name: "Bolu" },
  { slug: "eskisehir-nakliye", name: "Eskişehir" },
];

export function getCity(slug) {
  return cities.find((c) => c.slug === slug);
}
