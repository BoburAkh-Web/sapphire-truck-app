import { Check, Truck } from "lucide-react";
import { trucksData } from "../../data";
import { useQuoteStore } from "../../store/quoteStore";
import { formatRate } from "../../utils/pricing";

function TruckPicker() {
  const truckId = useQuoteStore((state) => state.truckId);
  const setTruckId = useQuoteStore((state) => state.setTruckId);

  return (
    <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {trucksData.trucks.map((truck) => {
        const isSelected = truck.id === truckId;

        return (
          <li key={truck.id}>
            <button
              type="button"
              onClick={() => setTruckId(truck.id)}
              aria-pressed={isSelected}
              className={`relative flex size-full flex-col rounded-2xl border p-5 text-left text-white transition ${
                isSelected
                  ? "border-brand-red bg-linear-125 from-brand-blue to-brand-red shadow-xl shadow-brand-red/30"
                  : "border-white/15 bg-black/20 hover:bg-black/30"
              }`}
            >
              {isSelected && (
                <Check className="absolute top-4 right-4 size-5 rounded-full bg-white p-0.5 text-brand-red" />
              )}

              <span className="text-xs font-semibold text-white/60">
                {String(truck.id).padStart(2, "0")}
              </span>
              <Truck className="mt-4 size-8" />
              <span className="mt-4 font-bold">{truck.name}</span>
              {truck.pricingType === "perMile" && (
                <span className="text-xs text-white/60">
                  {trucksData.perMileLabel}
                </span>
              )}
              <span className="mt-auto pt-1 text-lg font-extrabold">
                {formatRate(truck)}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TruckPicker;
