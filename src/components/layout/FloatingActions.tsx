import { ArrowRight, ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import useScrolled from "../../hooks/useScrolled";

function FloatingActions() {
  const showBackToTop = useScrolled(600);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="fixed right-5 bottom-20 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
            className="flex size-12 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg shadow-black/30 transition-colors hover:bg-brand-blue/90"
          >
            <ArrowUp className="size-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href="#contact"
        className="flex items-center gap-2 rounded-full bg-brand-red px-6 py-3.5 font-bold text-white shadow-xl shadow-brand-red/30 transition hover:bg-brand-red/90"
      >
        Request a quote
        <ArrowRight className="size-4" />
      </a>
    </div>
  );
}

export default FloatingActions;
