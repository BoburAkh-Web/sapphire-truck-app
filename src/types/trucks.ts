export type Truck = {
  id: number;
  name: string;
  image: string;
  pricingType: "perMile" | "percent";
  from: number;
  to: number;
};

export type TrucksData = {
  badge: string;
  title: string;
  perMileLabel: string;
  quickPay: string;
  selectedLabel: string;
  milesLabel: string;
  totalLabel: string;
  priceOnRequest: string;
  ctaLabel: string;
  milesPresets: number[];
  trucks: Truck[];
};
