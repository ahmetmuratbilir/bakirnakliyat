import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceIcon from "@/components/icons/ServiceIcon";

export default function ServiceCard({ service }) {
  return (
    <Link
      href={`/hizmetlerimiz/${service.slug}`}
      className="group flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-card transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:border-copper-500/60 hover:shadow-lift"
    >
      <span className="grid size-12 place-items-center rounded-xl bg-copper-50 text-copper-600 ring-1 ring-copper-100 transition-colors duration-300 group-hover:bg-copper-600 group-hover:text-white group-hover:ring-copper-600">
        <ServiceIcon name={service.icon} />
      </span>
      <h3 className="mt-5 text-lg font-bold text-navy-900">{service.title}</h3>
      <p className="mt-2 flex-1 text-base leading-relaxed text-muted">{service.short}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-base font-semibold text-copper-700">
        Hizmet Detayları
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2.25}
        />
      </span>
    </Link>
  );
}
