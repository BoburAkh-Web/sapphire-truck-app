import type { ChangeEvent } from "react";
import { trucksData } from "../../data";
import { useQuoteStore } from "../../store/quoteStore";

const SLIDER_MAX = Math.max(...trucksData.milesPresets);
function MilesInput() {
  const miles = useQuoteStore((state) => state.miles);
  const setMiles = useQuoteStore((state) => state.setMiles);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.valueAsNumber;
    setMiles(Number.isNaN(value) ? 0 : value);
  }

  return (
    <div>
      <label htmlFor="miles" className="text-sm font-semibold text-white">
        {trucksData.milesLabel}
      </label>
      <input
        id="miles"
        type="number"
        inputMode="numeric"
        min={0}
        value={miles || ""}
        onChange={handleChange}
        className="mt-2 w-full rounded-xl bg-white px-4 py-3 text-lg font-semibold text-[#14162e] outline-none focus-visible:ring-4 focus-visible:ring-brand-red/40"
      />
      <input
        type="range"
        min={0}
        max={SLIDER_MAX}
        step={10}
        value={Math.min(miles, SLIDER_MAX)}
        onChange={(event) => setMiles(event.target.valueAsNumber)}
        aria-label={trucksData.milesLabel}
        className="mt-5 w-full accent-brand-red"
      />

      <div className="mt-4 flex flex-wrap gap-2">
        {trucksData.milesPresets.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => setMiles(preset)}
            aria-pressed={miles === preset}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
              miles === preset
                ? "border-brand-red bg-brand-red text-white"
                : "border-white/20 text-white hover:bg-white/10"
            }`}
          >
            {preset} mi
          </button>
        ))}
      </div>
    </div>
  );
}

export default MilesInput;
