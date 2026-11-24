import { motion } from "motion/react";
import { servicesData } from "../../data";
import Container from "../../components/ui/Container";
import Icon from "../../components/ui/Icon";
import SplitTitle from "../../components/ui/SplitTitle";
import Tabs from "../../components/ui/Tabs";
import { containerVariants, itemVariants } from "../../utils/animations";

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-brand-blue bg-[radial-gradient(rgb(255_255_255/0.1)_1.5px,transparent_1.5px)] bg-size-[24px_24px] py-24 lg:py-32"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-brand-red/25 blur-3xl"
        animate={{ y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 size-96 rounded-full bg-white/10 blur-3xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-white">
              <span className="size-1.5 rounded-full bg-brand-red" />
              {servicesData.badge}
            </span>
            <SplitTitle
              text={servicesData.title}
              className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            />
          </motion.div>

          <Tabs defaultValue={servicesData.items[0].id} className="mt-12">
            <motion.div variants={itemVariants}>
              <Tabs.List className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {servicesData.items.map((item) => (
                  <Tabs.Trigger
                    key={item.id}
                    value={item.id}
                    className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-4 py-7 text-xs font-bold tracking-wide text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10 active:scale-95 data-[state=active]:border-brand-red data-[state=active]:bg-brand-red data-[state=active]:shadow-xl data-[state=active]:shadow-brand-red/40"
                  >
                    <Icon
                      name={item.icon}
                      className="size-7 transition-transform duration-300 group-hover:scale-110"
                    />
                    {item.label}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
            </motion.div>

            {servicesData.items.map((item) => (
              <Tabs.Panel
                key={item.id}
                value={item.id}
                className="mx-auto mt-14 max-w-4xl"
              >
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="rounded-3xl border border-white/10 bg-black/20 px-6 py-12 text-center shadow-2xl shadow-black/20 backdrop-blur-sm sm:px-16"
                >
                  <Icon
                    name={item.icon}
                    className="mx-auto size-12 text-brand-red"
                  />

                  <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
                    {item.heading}
                  </h3>

                  <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-white/75 sm:text-lg">
                    {item.text}
                  </p>
                </motion.div>
              </Tabs.Panel>
            ))}
          </Tabs>
        </motion.div>
      </Container>
    </section>
  );
}

export default Services;
