import type { Truck } from "../types/trucks";

export function formatPriceRange({ pricingType, from, to }: Truck): string {
  if (pricingType === "percent") {
    return `${from}% – ${to}%`;
  }

  return `$${from.toFixed(2)} – $${to.toFixed(2)} / mi`;
}
