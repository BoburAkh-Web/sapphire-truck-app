import { ArrowRight } from "lucide-react";
import { trucksData } from "../../data";
import { useQuoteStore, useSelectedTruck } from "../../store/quoteStore";
import { formatCurrency } from "../../utils/formatCurrency";
import { calculateQuote } from "../../utils/pricing";

function QuoteTotal() {
  const truck = useSelectedTruck();
  const miles = useQuoteStore((state) => state.miles);

  const quote = calculateQuote(truck, miles);

  return (
    <div className="bg-linear-135 from-brand-blue via-[#8f2f78] to-brand-red p-8 text-white sm:p-10">
      <p className="text-sm font-semibold text-white/80">
        {trucksData.totalLabel}
      </p>

      <p
        aria-live="polite"
        className="mt-3 text-3xl font-extrabold sm:text-4xl"
      >
        {quote.kind === "price" ? (
          <>
            <span className="whitespace-nowrap">
              {formatCurrency(quote.min)}
            </span>{" "}
            -{" "}
            <span className="whitespace-nowrap">
              {formatCurrency(quote.max)}
            </span>
          </>
        ) : (
          trucksData.priceOnRequest
        )}
      </p>

      <a
        href="#contact"
        className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-bold text-brand-blue transition hover:bg-white/90"
      >
        {trucksData.ctaLabel}
        <ArrowRight className="size-4" />
      </a>
    </div>
  );
}

export default QuoteTotal;
