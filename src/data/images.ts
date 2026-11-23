import heroNight from "../assets/images/hero/hero-night-highway.webp";
import heroSunset from "../assets/images/hero/hero-sunset-highway.webp";

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
