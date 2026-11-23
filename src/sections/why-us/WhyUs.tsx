import { motion } from "motion/react";
import { whyUsData } from "../../data";
import Container from "../../components/ui/Container";
import Icon from "../../components/ui/Icon";
import { containerVariants, itemVariants } from "../../utils/animations";

function WhyUs() {
  return (
    <section
      id="about"
      className="bg-linear-125 from-brand-blue via-[#8f2f78] to-brand-red py-16"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-280 gap-10 lg:grid-cols-[3fr_4fr] lg:items-center"
        >
          <div>
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1 text-[11px] leading-3.5 font-bold tracking-[0.2em] text-white uppercase"
            >
              <span className="size-1.5 rounded-full bg-brand-red" />
              {whyUsData.badge}
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="mt-6 text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-[2.7rem]"
            >
              {whyUsData.title}
            </motion.h2>

            <motion.span
              variants={itemVariants}
              className="mt-8 block h-1 w-22 rounded-full bg-white/50"
            />
          </div>

          <ul className="grid gap-6 sm:grid-cols-2">
            {whyUsData.items.map((item) => (
              <motion.li
                key={item.id}
                variants={itemVariants}
                className="rounded-3xl border border-white/20 bg-white/10 p-6.5 backdrop-blur-sm"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-red text-white">
                  <Icon name={item.icon} className="size-6" />
                </span>

                <h3 className="mt-6 text-lg leading-6 font-bold text-white capitalize">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-sm leading-5 text-white/80">
                  {item.text}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}

export default WhyUs;
