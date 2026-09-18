export const posts = [
  {
    slug: "tasinmadan-once-bilmeniz-gerekenler",
    title: "Taşınmadan Önce Bilmeniz Gereken 10 Kritik Adım",
    summary:
      "Taşınma sürecini stressiz geçirmek için önceden yapmanız gereken hazırlıklar ve dikkat etmeniz gereken noktalar.",
    date: "2024-08-15",
    category: "Rehber",
    readTime: "6 dk",
  },
  {
    slug: "ofis-tasima-planlama",
    title: "Kurumsal Ofis Taşımada İş Sürekliliği Nasıl Sağlanır?",
    summary:
      "Şirketlerin ofis taşıma sürecinde veri güvenliği, çalışan koordinasyonu ve süreç yönetimi konusunda uzman tavsiyeleri.",
    date: "2024-07-20",
    category: "Kurumsal",
    readTime: "8 dk",
  },
  {
    slug: "esya-paketleme-tuyolari",
    title: "Profesyonellerden Eşya Paketleme Tüyoları",
    summary:
      "Kırılgan eşyalar, elektronikler ve değerli parçaları taşırken hasar görmesini önleyecek profesyonel paketleme teknikleri.",
    date: "2024-06-10",
    category: "İpuçları",
    readTime: "5 dk",
  },
  {
    slug: "istanbul-nakliyat-rehberi",
    title: "İstanbul'da Nakliyat Firması Seçerken Nelere Dikkat Edilmeli?",
    summary:
      "Güvenilir bir nakliyat firması seçerken sormanız gereken sorular, sahte firmalardan korunma yöntemleri ve nakliye sözleşmesi detayları.",
    date: "2024-05-05",
    category: "Rehber",
    readTime: "7 dk",
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}
