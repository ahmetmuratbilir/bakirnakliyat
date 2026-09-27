/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // Statik export'ta Next görsel sunucusu yok. Boyut varyantları build
    // öncesi scripts/build-images.mjs ile üretiliyor; bu loader next/image'ın
    // istediği genişliği en yakın hazır dosyaya eşler ve gerçek bir srcset
    // oluşmasını sağlar.
    loader: "custom",
    loaderFile: "./lib/image-loader.js",
    // build-images.mjs içindeki WIDTHS ile aynı tutulmalı
    deviceSizes: [480, 800, 1120],
    imageSizes: [],
    qualities: [75],
  },
};

export default nextConfig;
