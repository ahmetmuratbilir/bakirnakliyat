import { Phone, ShieldCheck } from "lucide-react";
import { site } from "@/data/site";
import Button from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

export default function CtaBand() {
  return (
    <section aria-labelledby="cta-baslik" className="bg-white py-14 sm:py-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-panel bg-navy-900 px-6 py-10 sm:px-12 sm:py-14">
          {/* ince bakır üst çizgi — lacivert üzerinde temiz vurgu */}
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-copper-500" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/15">
                <ShieldCheck aria-hidden="true" className="size-4 text-copper-500" strokeWidth={2} />
                Ücretsiz Keşif & Sabit Fiyat Garantisi
              </p>
              <h2 id="cta-baslik" className="mt-4 text-h2 font-extrabold text-white">
                Taşınma Planınızı Birlikte Yapalım
              </h2>
              <p className="mt-3 text-lead text-navy-100">
                Hemen arayın veya WhatsApp&apos;tan oda fotoğraflarınızı gönderin; dakikalar içinde kesin ve
                net fiyat teklifinizi iletelim.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <Button href={`tel:${site.phoneTel}`} variant="light" size="lg" icon={Phone}>
                {site.phoneDisplay}
              </Button>
              <Button href={site.whatsapp} variant="whatsapp" size="lg" icon={WhatsAppIcon}>
                WhatsApp Teklif
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
