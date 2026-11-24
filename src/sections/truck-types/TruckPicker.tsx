import { Check, Truck } from "lucide-react";
import { motion } from "motion/react";
import { trucksData } from "../../data";
import { containerVariants, itemVariants } from "../../utils/animations";
import { useQuoteStore } from "../../store/quoteStore";
import { formatRate } from "../../utils/pricing";

function TruckPicker() {
  const truckId = useQuoteStore((state) => state.truckId);
  const setTruckId = useQuoteStore((state) => state.setTruckId);

  return (
    <motion.ul
      variants={containerVariants}
      className="mt-12 grid grid-cols-2 gap-4.5 lg:grid-cols-4"
    >
      {trucksData.trucks.map((truck, index) => {
        const isSelected = truck.id === truckId;

        return (
          <motion.li key={truck.id} variants={itemVariants}>
            <button
              type="button"
              onClick={() => setTruckId(truck.id)}
              aria-pressed={isSelected}
              style={{ animationDelay: `${index * -1.5}s` }}
              className={`relative flex size-full flex-col rounded-3xl border px-5.5 py-7 text-left text-white transition hover:-translate-y-1 motion-safe:animate-float ${
                isSelected
                  ? "border-brand-red bg-linear-135 from-brand-blue via-[#8f2f78] to-brand-red shadow-xl shadow-brand-red/30"
                  : "border-white/15 bg-[#272866] hover:bg-[#2e2f75]"
              }`}
            >
              {isSelected && (
                <Check className="absolute top-4 right-4 size-6 rounded-full bg-white p-1 text-brand-red" />
              )}

              <span className="text-xs font-bold tracking-wider text-white/60">
                {String(truck.id).padStart(2, "0")}
              </span>
              <Truck className="mt-4 size-12" strokeWidth={1.5} />
              <span className="mt-3.5 font-bold">{truck.name}</span>
              {truck.pricingType === "perMile" && (
                <span className="text-xs text-white/60">
                  {trucksData.perMileLabel}
                </span>
              )}
              <span className="mt-auto text-lg font-extrabold">
                {formatRate(truck)}
              </span>
            </button>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

export default TruckPicker;
