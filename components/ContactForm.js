"use client";
import { useState } from "react";
import { site } from "@/data/site";

const inputStyle = {
  width: "100%",
  padding: "0.85rem 1rem",
  borderRadius: "0.75rem",
  border: "1px solid #cbd5e1",
  background: "#ffffff",
  color: "#0f172a",
  fontSize: "0.875rem",
  outline: "none",
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: "Evden Eve Nakliyat",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Otomatik olarak mail istemcisini hazırlar ve açar
    const subject = encodeURIComponent(`Yeni Nakliyat Teklif Talebi: ${formData.name}`);
    const body = encodeURIComponent(
      `Sayın Bakır Nakliyat Yetkilisi,\n\n` +
      `Aşağıdaki nakliyat hizmeti için fiyat teklifi talep ediyorum:\n\n` +
      `👤 Ad Soyad: ${formData.name}\n` +
      `📞 Telefon: ${formData.phone}\n` +
      `📦 Hizmet Türü: ${formData.serviceType}\n` +
      `📝 Taşınma Detayları: ${formData.message}\n\n` +
      `En kısa sürede dönüşünüzü rica ederim.`
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Merhaba Bakır Nakliyat, web sitenizden teklif almak istiyorum:\n\n` +
      `👤 Ad Soyad: ${formData.name || "Belirtilmedi"}\n` +
      `📞 Telefon: ${formData.phone || "Belirtilmedi"}\n` +
      `📦 Hizmet: ${formData.serviceType}\n` +
      `📝 Detay: ${formData.message || "Fiyat bilgisi almak istiyorum."}`
    );
    window.open(`https://wa.me/${site.phoneTel}?text=${text}`, "_blank");
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto">
          ✓
        </div>
        <h3 className="text-2xl font-extrabold text-[#0b1f3a]">
          Teklif Talebiniz Hazırlandı!
        </h3>
        <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
          Talebiniz <strong>{site.email}</strong> adresine iletilmek üzere e-posta istemcinize aktarıldı. Dilerseniz beklememek için doğrudan WhatsApp üzerinden de iletebilirsiniz:
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleWhatsAppSend}
            className="w-full sm:w-auto font-bold px-6 py-3.5 rounded-xl bg-[#128c4a] text-white hover:bg-[#0f7a3f] transition text-sm shadow-md"
          >
            💬 WhatsApp ile Hemen İlet
          </button>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="w-full sm:w-auto font-semibold px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition text-sm"
          >
            Yeni Form Doldur
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#334155] mb-2 uppercase tracking-wider">
            Adınız & Soyadınız <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Örn: Ahmet Yılmaz"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={inputStyle}
            className="focus:border-[#1d4ed8] focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#334155] mb-2 uppercase tracking-wider">
            Telefon Numaranız <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="05XX XXX XX XX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            style={inputStyle}
            className="focus:border-[#1d4ed8] focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#334155] mb-2 uppercase tracking-wider">
          Hizmet Türü
        </label>
        <select
          value={formData.serviceType}
          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
          style={inputStyle}
          className="focus:border-[#1d4ed8] focus:ring-2 focus:ring-blue-100 transition"
        >
          <option value="Evden Eve Nakliyat">Evden Eve Nakliyat</option>
          <option value="Ofis ve Büro Taşımacılığı">Ofis ve Büro Taşımacılığı</option>
          <option value="Şehirlerarası Nakliyat">Şehirlerarası Nakliyat</option>
          <option value="Asansörlü Taşımacılık">Asansörlü Taşımacılık</option>
          <option value="Parça Eşya Taşıma">Parça Eşya Taşıma</option>
          <option value="Eşya Depolama">Eşya Depolama</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#334155] mb-2 uppercase tracking-wider">
          Taşınma Detayları (Nereden & Nereye, Oda Sayısı, Kat)
        </label>
        <textarea
          rows={4}
          placeholder="Örn: Kadıköy 3. kattan Başakşehir 5. kata taşınacak 2+1 ev eşyası..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          style={{ ...inputStyle, resize: "vertical" }}
          className="focus:border-[#1d4ed8] focus:ring-2 focus:ring-blue-100 transition"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          type="submit"
          className="flex-1 font-bold py-4 rounded-xl bg-[#1d4ed8] hover:bg-[#1e40af] text-white transition text-sm sm:text-base shadow-lg shadow-blue-600/25 cursor-pointer flex items-center justify-center gap-2"
        >
          <span>✉️</span>
          <span>E-Posta ile Teklif İste</span>
        </button>
        <button
          type="button"
          onClick={handleWhatsAppSend}
          className="font-bold py-4 px-6 rounded-xl bg-[#128c4a] hover:bg-[#0f7a3f] text-white transition text-sm sm:text-base shadow-lg shadow-emerald-600/25 cursor-pointer flex items-center justify-center gap-2"
        >
          <span>💬</span>
          <span>WhatsApp Teklif</span>
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 text-xs text-[#64748b] text-center pt-1">
        <span>🔒</span>
        <span>Mesajınız doğrudan <strong>{site.email}</strong> adresimize iletilir.</span>
      </div>
    </form>
  );
}
