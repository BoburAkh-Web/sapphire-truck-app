import heroNight from "../assets/images/hero/hero-night-highway.webp";
import heroSunset from "../assets/images/hero/hero-sunset-highway.webp";
import largeStraightTruck from "../assets/images/trucks/large-straight-truck.svg";
import semiTruck from "../assets/images/trucks/semi-truck.svg";
import smallStraightTruck from "../assets/images/trucks/small-straight-truck.svg";
import sprinterVan from "../assets/images/trucks/sprinter-van.svg";

const heroImages: Record<string, string> = {
  "hero-night-highway.webp": heroNight,
  "hero-sunset-highway.webp": heroSunset,
};

export function getHeroImage(name: string): string {
  const src = heroImages[name];

  if (!src) {
    throw new Error(`Hero image not found: ${name}`);
  }

  return src;
}

const truckImages: Record<string, string> = {
  "sprinter-van.svg": sprinterVan,
  "small-straight-truck.svg": smallStraightTruck,
  "large-straight-truck.svg": largeStraightTruck,
  "semi-truck.svg": semiTruck,
};

export function getTruckImage(name: string): string {
  const src = truckImages[name];

  if (!src) {
    throw new Error(`Truck image not found: ${name}`);
  }

  return src;
}
