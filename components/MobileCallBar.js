import { Phone } from "lucide-react";
import { site } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

/**
 * Mobil/tablette ekranın altında sabit tek iletişim çubuğu. Masaüstünde gizli.
 * Gövdeye verilen alt boşluk (globals.css) içeriğin örtülmesini engeller.
 */
export default function MobileCallBar() {
  return (
    <nav
      aria-label="Hızlı iletişim"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-12px_rgb(15_23_42/0.18)] backdrop-blur-md lg:hidden"
    >
      <div className="grid grid-cols-2 gap-2 px-2 py-2">
        <a
          href={`tel:${site.phoneTel}`}
          className="flex min-h-12 items-center justify-center gap-2 rounded-btn bg-copper-600 font-semibold text-white transition-colors active:bg-copper-700"
        >
          <Phone aria-hidden="true" className="size-5" strokeWidth={2} />
          Ara
        </a>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 rounded-btn bg-whatsapp font-semibold text-white transition-colors active:bg-whatsapp-dark"
        >
          <WhatsAppIcon className="size-5" />
          WhatsApp
        </a>
      </div>
    </nav>
  );
}
