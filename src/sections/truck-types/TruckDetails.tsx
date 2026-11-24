import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { trucksData } from "../../data";
import { getTruckImage } from "../../data/images";
import { useQuoteStore, useSelectedTruck } from "../../store/quoteStore";
import { formatRate } from "../../utils/pricing";

const swapMotion = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: "easeOut" },
} as const;

function TruckDetails() {
  const truck = useSelectedTruck();
  const selectNextTruck = useQuoteStore((state) => state.selectNextTruck);
  const selectPrevTruck = useQuoteStore((state) => state.selectPrevTruck);

  const position = trucksData.trucks.indexOf(truck) + 1;
  const total = trucksData.trucks.length;

  return (
    <div className="p-8 sm:p-12">
      <div className="flex flex-wrap items-start justify-between gap-4 sm:flex-nowrap">
        <div>
          <p className="text-xs font-semibold tracking-[0.15em] whitespace-nowrap text-brand-red sm:tracking-[0.22em]">
            {trucksData.selectedLabel}
          </p>
          <motion.h3
            key={truck.id}
            {...swapMotion}
            className="mt-2 text-3xl font-extrabold text-white sm:text-4xl"
          >
            {truck.name}
          </motion.h3>
        </div>

        <div className="flex items-center gap-2 text-white sm:gap-3">
          <button
            type="button"
            onClick={selectPrevTruck}
            aria-label="Previous truck"
            className="flex size-10 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"
          >
            <ArrowLeft className="size-4" />
          </button>
          <span className="text-sm font-bold whitespace-nowrap">
            {String(position).padStart(2, "0")} / {total}
          </span>
          <button
            type="button"
            onClick={selectNextTruck}
            aria-label="Next truck"
            className="flex size-10 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="relative mt-8 flex h-32 items-center justify-center sm:mt-13">
        <div className="absolute inset-x-[12%] bottom-0 h-8 rounded-[50%] bg-black/50 blur-xl" />
        <AnimatePresence mode="wait">
          <motion.img
            key={truck.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            src={getTruckImage(truck.image)}
            alt={truck.name}
            className="relative h-full w-auto max-w-full object-contain"
          />
        </AnimatePresence>
      </div>
      <div className="mt-4 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <div className="rounded-2xl bg-white/10 px-4 py-3 text-white">
          {truck.pricingType === "perMile" && (
            <p className="text-xs text-white/60">{trucksData.perMileLabel}</p>
          )}
          <p className="text-xl font-extrabold">{formatRate(truck)}</p>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">
          <Check className="size-3.5 text-brand-red" />
          {trucksData.quickPay}
        </span>
      </div>
    </div>
  );
}

export default TruckDetails;
