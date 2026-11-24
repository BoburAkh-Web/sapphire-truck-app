import { Truck } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { trucksData } from "../../data";
import { itemVariants } from "../../utils/animations";
import { formatPriceRange } from "../../utils/pricing";

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.8 } },
};

// Truck kattalashgan sari chip ham kengayadi; joylashuvi zigzag (faqat xl dan boshlab)
const chipLayouts = [
  "xl:mr-0 xl:w-56",
  "xl:mr-16 xl:w-60",
  "xl:mr-4 xl:w-64",
  "xl:mr-20 xl:w-72",
];

// Mobil va planshetda — gorizontal scroll qatori, katta ekranda — o'ng tomonda suzuvchi chiplar
function TruckChips() {
  return (
    <motion.ul
      aria-label="Truck types"
      variants={listVariants}
      initial="hidden"
      animate="visible"
      className="mt-10 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] xl:absolute xl:top-1/2 xl:right-8 xl:mt-0 xl:-translate-y-1/2 xl:flex-col xl:items-end xl:gap-5 xl:overflow-visible xl:pb-0"
    >
      {trucksData.trucks.map((truck, index) => (
        <motion.li
          key={truck.id}
          variants={itemVariants}
          className={`shrink-0 ${chipLayouts[index]}`}
        >
          <div
            style={{
              animationDuration: `${5 + index}s`,
              animationDelay: `${-index * 1.3}s`,
            }}
            className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-lg shadow-black/20 backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/15 xl:motion-safe:animate-float"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-red text-white">
              <Truck className="size-5" />
            </span>
            <div>
              <p className="text-sm font-bold whitespace-nowrap text-white">
                {truck.name}
              </p>
              <p className="text-xs whitespace-nowrap text-white/70">
                {formatPriceRange(truck)}
              </p>
            </div>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default TruckChips;
