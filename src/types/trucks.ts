export type Truck = {
  id: number;
  name: string;
  image: string;
  pricingType: "perMile" | "percent";
  from: number;
  to: number;
};

export type TrucksData = {
  title: string;
  perMileLabel: string;
  quickPay: string;
  trucks: Truck[];
};
