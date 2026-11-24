import { ArrowLeft, ArrowRight } from "lucide-react";
import { trucksData } from "../../data";
import { getTruckImage } from "../../data/images";
import { useQuoteStore, useSelectedTruck } from "../../store/quoteStore";

function TruckDetails() {
  const truck = useSelectedTruck();
  const selectNextTruck = useQuoteStore((state) => state.selectNextTruck);
  const selectPrevTruck = useQuoteStore((state) => state.selectPrevTruck);

  const position = trucksData.trucks.indexOf(truck) + 1;
  const total = trucksData.trucks.length;

  return (
    <div className="p-8 sm:p-10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-red">
            {trucksData.selectedLabel}
          </p>
          <h3 className="mt-2 text-3xl font-extrabold text-white">
            {truck.name}
          </h3>
        </div>

        <div className="flex items-center gap-3 text-white">
          <button
            type="button"
            onClick={selectPrevTruck}
            aria-label="Previous truck"
            className="flex size-9 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"
          >
            <ArrowLeft className="size-4" />
          </button>
          <span className="text-sm font-bold">
            {String(position).padStart(2, "0")} / {total}
          </span>
          <button
            type="button"
            onClick={selectNextTruck}
            aria-label="Next truck"
            className="flex size-9 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      <img
        src={getTruckImage(truck.image)}
        alt={truck.name}
        className="mx-auto mt-10 h-40 w-auto object-contain"
      />
    </div>
  );
}

export default TruckDetails;
