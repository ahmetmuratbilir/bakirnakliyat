# Bakır Nakliyat — Kurumsal Web Sitesi

Next.js 16 (App Router) + Tailwind CSS 4 ile geliştirilmiştir.

## Kurulum

```bash
npm install
npm run dev
```

Site http://localhost:3000 adresinde açılır.

## Build

```bash
npm run build
npm run start
```

## Proje Yapısı

- `app/` — sayfalar (App Router)
  - `hizmetlerimiz/[slug]` — 7 hizmet sayfası, `data/services.js` üzerinden üretilir
  - `istanbul-nakliye/[ilce]` — 39 ilçe SEO sayfası, `data/districts.js` üzerinden üretilir
  - `sehirler-arasi-nakliyat/[sehir]` — şehirlerarası sayfalar, `data/cities.js` üzerinden üretilir
  - `sitemap.js`, `robots.js` — otomatik SEO dosyaları
- `data/` — site geneli içerik ve iletişim bilgileri (`site.js`), ilçe/şehir/hizmet listeleri
- `components/` — Header, Footer, PageHero, Placeholder, CtaBand

## Yapılacaklar (siz doldurun)

1. `data/site.js` içindeki telefon, adres, e-posta ve sosyal medya linklerini güncelleyin.
2. `public/logo.png` gerçek logo dosyanızla değiştirin (şu an yüklediğiniz logo kullanılıyor).
3. `components/Placeholder.js` ile gösterilen yer tutucu görselleri `public/images/` altına
   koyacağınız gerçek fotoğraflarla değiştirin (Next.js `<Image>` bileşeni ile).
4. `app/resimler/page.js` — "Bizden Görüntüler" galerisini gerçek fotoğraflarla doldurun.
5. `app/blog/page.js` — örnek blog yazılarını gerçek içerikle değiştirin veya CMS bağlayın.
6. `data/site.js` içindeki `domain` alanını gerçek alan adınızla güncelleyin (sitemap/SEO için).

## GitHub'a Yükleme

```bash
git init
git add .
git commit -m "İlk sürüm: Bakır Nakliyat sitesi"
git branch -M main
git remote add origin https://github.com/ahmetmuratbilir/bakirnakliyat.git
git push -u origin main
```

## Dağıtım (Deploy)

Proje Vercel, Netlify veya Node destekleyen herhangi bir sunucuda çalışır.
En kolay yol: [vercel.com](https://vercel.com) hesabınızı GitHub reponuza bağlamak.
