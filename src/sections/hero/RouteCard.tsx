import { Truck } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { mapData } from "../../data";

const ROUTE_PATH = "M24 70Q140 -10 256 70";
const destination =
  mapData.cities.find((city) => city.id === "los-angeles") ?? mapData.cities[0];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.8, ease: "easeOut" },
  },
};

// Joylashuvi `.hero-grid` / `.hero-aside` (index.css): mobilda tugmalar ostida, xl dan boshlab matn yonida o'ngda
function RouteCard() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="hero-aside"
    >
      <div className="rounded-3xl border border-white/20 bg-white/10 p-5 shadow-xl xl:p-7 shadow-black/20 backdrop-blur-md xl:motion-safe:animate-float">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-white/80 uppercase xl:text-xs">
            <span className="relative flex size-2">
              <span className="absolute size-full rounded-full bg-brand-red opacity-75 motion-safe:animate-ping" />
              <span className="relative size-2 rounded-full bg-brand-red" />
            </span>
            Live route
          </span>
          <Truck className="size-4 text-white/70" />
        </div>

        <svg
          viewBox="0 0 280 96"
          role="img"
          aria-label={`Route from ${mapData.hub.name} to ${destination.name}`}
          className="mt-4 h-auto w-full xl:mt-6"
        >
          <path
            d={ROUTE_PATH}
            fill="none"
            stroke="#fff"
            strokeOpacity={0.3}
            strokeWidth={1.5}
            strokeDasharray="4 6"
          />
          <motion.path
            d={ROUTE_PATH}
            fill="none"
            stroke="#fff"
            strokeOpacity={0.85}
            strokeWidth={2}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 1.2, ease: "easeInOut" }}
          />

          <circle cx={24} cy={70} r={5} fill="#ed3237" stroke="#fff" strokeWidth={2} />
          <circle cx={256} cy={70} r={4} fill="#fff" />

          {!prefersReducedMotion && (
            <circle r={3.5} fill="#fff" className="drop-shadow-[0_0_6px_#fff]">
              <animateMotion
                path={ROUTE_PATH}
                dur="4s"
                begin="2.4s"
                repeatCount="indefinite"
              />
            </circle>
          )}
        </svg>

        <div className="mt-3 flex items-start justify-between gap-4 xl:mt-4">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-white/60 uppercase xl:text-xs">
              From
            </p>
            <p className="text-sm font-bold text-white xl:text-lg">{mapData.hub.name}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-white/60 uppercase xl:text-xs">
              To
            </p>
            <p className="text-sm font-bold text-white xl:text-lg">{destination.name}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default RouteCard;
