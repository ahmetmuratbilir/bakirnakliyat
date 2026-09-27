import {
  ArrowUpFromLine,
  Building2,
  HardHat,
  House,
  Package,
  Truck,
  Warehouse,
} from "lucide-react";

// data/services.js içindeki `icon` anahtarı -> lucide ikonu
const ICONS = {
  house: House,
  office: Building2,
  truck: Truck,
  package: Package,
  construction: HardHat,
  lift: ArrowUpFromLine,
  storage: Warehouse,
};

export default function ServiceIcon({ name, className = "size-6", strokeWidth = 1.75 }) {
  const Icon = ICONS[name] ?? Truck;
  return <Icon aria-hidden="true" className={className} strokeWidth={strokeWidth} />;
}
