import {
  Boxes,
  Forklift,
  Globe,
  Headset,
  KeyRound,
  MapPin,
  Package,
  PackageCheck,
  Plane,
  Radar,
  Send,
  Truck,
  Warehouse,
  Zap,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

// 1a: nom → ikonka komponenti
const icons: Record<string, LucideIcon> = {
  boxes: Boxes,
  forklift: Forklift,
  globe: Globe,
  headset: Headset,
  "key-round": KeyRound,
  "map-pin": MapPin,
  package: Package,
  "package-check": PackageCheck,
  plane: Plane,
  radar: Radar,
  send: Send,
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
