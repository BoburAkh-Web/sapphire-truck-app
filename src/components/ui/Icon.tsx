import {
  FileCheck,
  Globe,
  Headset,
  Mail,
  MapPin,
  Package,
  PackageCheck,
  Radar,
  Truck,
  Warehouse,
  Zap,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

// 1a: nom → ikonka komponenti
const icons: Record<string, LucideIcon> = {
  "file-check": FileCheck,
  globe: Globe,
  headset: Headset,
  mail: Mail,
  "map-pin": MapPin,
  package: Package,
  "package-check": PackageCheck,
  radar: Radar,
  truck: Truck,
  warehouse: Warehouse,
  zap: Zap,
};

// 1b: Icon komponenti
type IconProps = LucideProps & {
  name: string;
};

function Icon({ name, ...props }: IconProps) {
  const IconComponent = icons[name];

  if (!IconComponent) {
    throw new Error(`Icon not found: ${name}`);
  }

  return <IconComponent {...props} />;
}

export default Icon;
