export type MapCity = {
  id: string;
  name: string;
  x: number;
  y: number;
  anchor: "start" | "middle" | "end";
  dx: number;
  dy: number;
};

export type MapData = {
  viewBox: { width: number; height: number };
  dotSpacing: number;
  dots: string;
  hub: MapCity;
  cities: MapCity[];
};
