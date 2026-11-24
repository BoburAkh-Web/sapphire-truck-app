import { motion } from "motion/react";
import { trucksData } from "../../data";
import { containerVariants, itemVariants } from "../../utils/animations";
import Container from "../../components/ui/Container";
import TruckPicker from "./TruckPicker";
import TruckDetails from "./TruckDetails";
import MilesInput from "./MilesInput";
import QuoteTotal from "./QuoteTotal";

function TruckTypes() {
  return (
    <section
      id="truck-types"
      className="bg-brand-blue bg-[radial-gradient(circle_36rem_at_0%_0%,rgb(237_50_55/0.22),transparent),radial-gradient(circle_40rem_at_100%_100%,rgb(150_165_255/0.2),transparent)] py-24 lg:py-32"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={itemVariants} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-white">
              <span className="size-1.5 rounded-full bg-brand-red" />
              {trucksData.badge}
            </span>
            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {trucksData.title}
            </h2>
          </motion.div>
          <div className="mx-auto max-w-[1102px]">
            <TruckPicker />
            <motion.div
              variants={itemVariants}
              className="mt-8 grid overflow-hidden rounded-3xl border border-white/15 bg-[#272866] lg:grid-cols-[5fr_4fr]"
            >
              <TruckDetails />
              <div className="flex flex-col border-t border-white/15 lg:border-t-0 lg:border-l">
                <div className="p-8 sm:p-10">
                  <MilesInput />
                </div>
                <div className="mt-auto">
                  <QuoteTotal />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default TruckTypes;
