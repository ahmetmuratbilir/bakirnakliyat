import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";

// Sadece masaüstü: sade iletişim şeridi. Mobilde alt çubuk bu işi görür.
export default function TopBar() {
  return (
    <div className="hidden bg-navy-900 text-sm text-navy-100 lg:block">
      <div className="container-page flex h-10 items-center justify-between gap-6">
        <p className="flex items-center gap-2">
          <MapPin aria-hidden="true" className="size-4 text-copper-500" strokeWidth={2} />
          İstanbul geneli ve şehirlerarası · Sözleşmeli ve faturalı taşımacılık
        </p>
        <div className="flex items-center gap-6">
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors hover:text-white">
            <Mail aria-hidden="true" className="size-4" strokeWidth={2} />
            {site.email}
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="flex items-center gap-2 font-semibold text-white transition-colors hover:text-copper-500"
          >
            <Phone aria-hidden="true" className="size-4 text-copper-500" strokeWidth={2} />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
