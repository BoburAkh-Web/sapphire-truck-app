import type { Truck } from "../types/trucks";
import { formatCurrency } from "./formatCurrency";
export type QuoteResult =
  | { kind: "price"; min: number; max: number }
  | { kind: "onRequest" };

function roundToCents(value: number): number {
  return Math.round(value * 100) / 100;
}

export function calculateQuote(truck: Truck, miles: number): QuoteResult {
  if (truck.pricingType === "percent") {
    return { kind: "onRequest" };
  }

  return {
    kind: "price",
    min: roundToCents(truck.from * miles),
    max: roundToCents(truck.to * miles),
  };
}

export function formatRate(truck: Truck): string {
  if (truck.pricingType === "percent") {
    return `${truck.from}% - ${truck.to}%`;
  }

  return `${formatCurrency(truck.from)} - ${formatCurrency(truck.to)}`;
}

export function formatQuoteSummary(truck: Truck, miles: number): string {
  const quote = calculateQuote(truck, miles);

  const price =
    quote.kind === "price"
      ? `${formatCurrency(quote.min)} - ${formatCurrency(quote.max)}`
      : "price on request";

  return `${truck.name} · ${miles} mi · ${price}`;
}
