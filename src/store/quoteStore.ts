import { create } from "zustand";
import { trucksData } from "../data";

type QuoteState = {
  truckId: number;
  miles: number;
  setTruckId: (id: number) => void;
  setMiles: (miles: number) => void;
};

export const useQuoteStore = create<QuoteState>()((set) => ({
  truckId: trucksData.trucks[0].id,
  miles: 100,

  setTruckId: (id) => set({ truckId: id }),
  setMiles: (miles) => set({ miles }),
}));
