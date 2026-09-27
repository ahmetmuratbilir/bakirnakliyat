import { FileText, Phone } from "lucide-react";
import { site } from "@/data/site";
import Button from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

/** Detay sayfalarının yan panelindeki lacivert teklif kutusu. */
export default function QuoteCard({ eyebrow, title, text, whatsappLabel, showForm = false }) {
  return (
    <div className="rounded-panel bg-navy-900 p-6 text-white sm:p-7">
      <p className="eyebrow eyebrow-on-dark">{eyebrow}</p>
      <h3 className="mt-3 text-xl font-extrabold">{title}</h3>
      <p className="mt-2 leading-relaxed text-navy-100">{text}</p>
      <div className="mt-6 space-y-2.5">
        <Button href={`tel:${site.phoneTel}`} variant="light" size="lg" icon={Phone} className="w-full">
          {site.phoneDisplay}
        </Button>
        <Button href={site.whatsapp} variant="whatsapp" size="lg" icon={WhatsAppIcon} className="w-full">
          {whatsappLabel}
        </Button>
        {showForm && (
          <Button href="/iletisim" variant="ghostDark" size="lg" icon={FileText} className="w-full">
            Online Teklif Formu
          </Button>
        )}
      </div>
    </div>
  );
}
