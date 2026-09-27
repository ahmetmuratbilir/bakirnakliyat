"use client";

import { useId, useState } from "react";
import { ChevronDown, CircleCheck, Lock, Mail, RotateCcw } from "lucide-react";
import { site } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

// wa.me uluslararası biçim ister (başında 0 olmadan): 905384110960
const WHATSAPP_NUMBER = site.phoneIntl.replace(/\D/g, "");

const field =
  "block w-full rounded-btn border border-line-strong bg-white px-4 py-3 text-base text-ink placeholder:text-subtle transition-[border-color,box-shadow] focus:border-copper-600 focus:outline-none focus:ring-4 focus:ring-copper-100";
const label = "mb-2 block text-sm font-semibold text-navy-900";

function Required() {
  return (
    <>
      <span aria-hidden="true" className="text-copper-600">
        {" "}
        *
      </span>
      <span className="sr-only"> (zorunlu)</span>
    </>
  );
}

/**
 * Teklif formu. Şimdilik e-posta istemcisi (mailto) veya WhatsApp üzerinden
 * iletir; sunucusuz form servisi bağlanana kadar davranış korunmuştur.
 * `serviceOptions` sunucudan gelir (hizmet verisi istemci paketine girmesin).
 */
export default function ContactForm({ serviceOptions }) {
  const id = useId();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: serviceOptions[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setFormData((d) => ({ ...d, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`Yeni Nakliyat Teklif Talebi: ${formData.name}`);
    const body = encodeURIComponent(
      `Sayın Bakır Nakliyat Yetkilisi,\n\n` +
        `Aşağıdaki nakliyat hizmeti için fiyat teklifi talep ediyorum:\n\n` +
        `Ad Soyad: ${formData.name}\n` +
        `Telefon: ${formData.phone}\n` +
        `Hizmet Türü: ${formData.serviceType}\n` +
        `Taşınma Detayları: ${formData.message}\n\n` +
        `En kısa sürede dönüşünüzü rica ederim.`
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Merhaba Bakır Nakliyat, web sitenizden teklif almak istiyorum:\n\n` +
        `Ad Soyad: ${formData.name || "Belirtilmedi"}\n` +
        `Telefon: ${formData.phone || "Belirtilmedi"}\n` +
        `Hizmet: ${formData.serviceType}\n` +
        `Detay: ${formData.message || "Fiyat bilgisi almak istiyorum."}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  if (submitted) {
    return (
      <div role="status" className="rounded-panel border border-line bg-surface p-8 text-center sm:p-10">
        <CircleCheck aria-hidden="true" className="mx-auto size-14 text-whatsapp" strokeWidth={1.75} />
        <h3 className="mt-4 text-2xl font-extrabold text-navy-900">Teklif Talebiniz Hazırlandı!</h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted">
          Talebiniz <strong className="text-navy-900 wrap-anywhere">{site.email}</strong> adresine iletilmek üzere e-posta
          istemcinize aktarıldı. Dilerseniz beklememek için doğrudan WhatsApp üzerinden de iletebilirsiniz:
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleWhatsAppSend}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-btn bg-whatsapp px-6 font-semibold text-white transition-colors hover:bg-whatsapp-dark"
          >
            <WhatsAppIcon className="size-5" />
            WhatsApp ile Hemen İlet
          </button>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-btn bg-white px-6 font-semibold text-navy-900 ring-1 ring-inset ring-line-strong transition-colors hover:ring-navy-900"
          >
            <RotateCcw aria-hidden="true" className="size-4.5" strokeWidth={2} />
            Yeni Form Doldur
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-ad`} className={label}>
            Adınız &amp; Soyadınız
            <Required />
          </label>
          <input
            id={`${id}-ad`}
            type="text"
            required
            autoComplete="name"
            placeholder="Örn: Ahmet Yılmaz"
            value={formData.name}
            onChange={update("name")}
            className={field}
          />
        </div>
        <div>
          <label htmlFor={`${id}-tel`} className={label}>
            Telefon Numaranız
            <Required />
          </label>
          <input
            id={`${id}-tel`}
            type="tel"
            inputMode="tel"
            required
            autoComplete="tel"
            placeholder="05XX XXX XX XX"
            value={formData.phone}
            onChange={update("phone")}
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-hizmet`} className={label}>
          Hizmet Türü
        </label>
        <div className="relative">
          <select
            id={`${id}-hizmet`}
            value={formData.serviceType}
            onChange={update("serviceType")}
            className={`${field} appearance-none pr-11`}
          >
            {serviceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-subtle"
            strokeWidth={2}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-detay`} className={label}>
          Taşınma Detayları (Nereden &amp; Nereye, Oda Sayısı, Kat)
        </label>
        <textarea
          id={`${id}-detay`}
          rows={4}
          placeholder="Örn: Kadıköy 3. kattan Başakşehir 5. kata taşınacak 2+1 ev eşyası..."
          value={formData.message}
          onChange={update("message")}
          className={`${field} resize-y`}
        />
      </div>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row">
        <button
          type="submit"
          className="inline-flex min-h-13 flex-1 items-center justify-center gap-2 rounded-btn bg-copper-600 px-6 font-semibold text-white shadow-sm transition-colors hover:bg-copper-700"
        >
          <Mail aria-hidden="true" className="size-5" strokeWidth={2} />
          E-Posta ile Teklif İste
        </button>
        <button
          type="button"
          onClick={handleWhatsAppSend}
          className="inline-flex min-h-13 items-center justify-center gap-2 rounded-btn bg-whatsapp px-6 font-semibold text-white shadow-sm transition-colors hover:bg-whatsapp-dark"
        >
          <WhatsAppIcon className="size-5" />
          WhatsApp Teklif
        </button>
      </div>

      <p className="flex items-center justify-center gap-2 pt-1 text-center text-sm text-subtle">
        <Lock aria-hidden="true" className="size-4 shrink-0" strokeWidth={2} />
        <span>
          Mesajınız doğrudan <strong className="font-semibold text-navy-900 wrap-anywhere">{site.email}</strong> adresimize
          iletilir.
        </span>
      </p>
    </form>
  );
}
