import { create } from "zustand";
import { trucksData } from "../data";
import type { Truck } from "../types/trucks";

type QuoteState = {
  truckId: number;
  miles: number;

  selectNextTruck: () => void;
  selectPrevTruck: () => void;
  setTruckId: (id: number) => void;
  setMiles: (miles: number) => void;
};

const truckIds = trucksData.trucks.map((truck) => truck.id);

function shiftTruckId(currentId: number, step: number): number {
  const index = truckIds.indexOf(currentId);
  const nextIndex = (index + step + truckIds.length) % truckIds.length;
  return truckIds[nextIndex];
}

export const useQuoteStore = create<QuoteState>()((set) => ({
  truckId: trucksData.trucks[0].id,
  miles: 100,
  setTruckId: (id) => set({ truckId: id }),
  setMiles: (miles) => set({ miles }),

  selectNextTruck: () =>
    set((state) => ({ truckId: shiftTruckId(state.truckId, 1) })),
  selectPrevTruck: () =>
    set((state) => ({ truckId: shiftTruckId(state.truckId, -1) })),
}));

export function useSelectedTruck(): Truck {
  const truckId = useQuoteStore((state) => state.truckId);
  const truck = trucksData.trucks.find((item) => item.id === truckId);

  if (!truck) {
    throw new Error(`Truck not found: ${truckId}`);
  }

  return truck;
}
