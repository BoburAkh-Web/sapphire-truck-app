import { useRef } from "react";
import { ArrowRight, Check, Truck } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import { processData } from "../../data";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import Icon from "../../components/ui/Icon";
import { containerVariants, itemVariants } from "../../utils/animations";

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

function Process() {
  const stepsRef = useRef<HTMLOListElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Ro'yxat ekranga kirganda 0, pastki qismi ekran o'rtasiga yetganda 1
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start 0.75", "end 0.5"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });
  const truckTop = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      className="bg-linear-125 from-[#bde0f7] to-[#e8f2fb] py-22"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 px-4 py-1 text-xs font-bold tracking-[0.2em] text-brand-blue"
            >
              <span className="size-1.5 rounded-full bg-brand-red" />
              {processData.badge}
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="mt-4 text-4xl leading-tight font-extrabold tracking-tight text-[#14162e] sm:text-[2.8rem]"
            >
              {processData.title}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-lg leading-relaxed text-slate-600"
            >
              {processData.description}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8">
              <Button href={processData.button.href} size="lg">
                {processData.button.label}
                <ArrowRight className="size-4" />
              </Button>
            </motion.div>
          </div>

          <ol ref={stepsRef} className="relative space-y-5">
            {!prefersReducedMotion && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-6 -left-9 hidden w-6 lg:block"
              >
                <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[repeating-linear-gradient(to_bottom,rgb(62_64_149/0.35)_0_6px,transparent_6px_12px)]" />
                <motion.div
                  style={{ scaleY: progress }}
                  className="absolute inset-y-0 left-1/2 w-0.5 origin-top -translate-x-1/2 rounded-full bg-brand-red"
                />
                <motion.div
                  style={{ top: truckTop }}
                  className="absolute left-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-red text-white shadow-lg shadow-brand-red/40"
                >
                  <Truck className="size-4 rotate-90" />
                </motion.div>
              </div>
            )}

            <motion.span
              aria-hidden="true"
              variants={lineVariants}
              className="absolute inset-y-8 left-7 w-px origin-top bg-brand-blue/25"
            />

            {processData.steps.map((step) => (
              <motion.li
                key={step.id}
                variants={itemVariants}
                className="relative flex items-center gap-5 rounded-3xl bg-white p-5 shadow-[0_20px_40px_-10px] shadow-brand-blue/25 transition-[translate,box-shadow] duration-300 hover:translate-x-2 hover:shadow-[0_24px_48px_-10px] hover:shadow-brand-blue/35"
              >
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                  <Icon name={step.icon} className="size-6" />
                </span>

                <div className="flex-1">
                  <p className="text-xs font-bold tracking-wide text-brand-red">
                    STEP {String(step.id).padStart(2, "0")}
                  </p>
                  <p className="mt-1 font-semibold text-[#14162e]">
                    {step.text}
                  </p>
                </div>

                <Check
                  aria-hidden="true"
                  className="size-5 shrink-0 text-brand-blue"
                />
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </Container>
    </section>
  );
}

export default Process;
