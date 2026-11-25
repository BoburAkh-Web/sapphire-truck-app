import { ArrowRight, Calculator, Phone } from "lucide-react";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import { heroData, siteData } from "../../data";
import { getHeroImage } from "../../data/images";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { containerVariants, itemVariants } from "../../utils/animations";
import LightStreaks from "./LightStreaks";
import RouteMap from "./RouteMap";
const SLIDE_DURATION = 6000;

function Hero() {
  const mainPhone = siteData.phones[0];
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = heroData.slides.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((current) => (current + 1) % slideCount);
    }, SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [activeIndex, slideCount]);

  return (
    <section className="relative isolate -mt-17 flex min-h-svh items-center overflow-hidden pt-17 pb-24 md:min-h-[calc(100svh-2rem)] md:pb-20">
      <div className="hero-parallax-image absolute inset-x-0 inset-y-[-10%] -z-10">
        {heroData.slides.map((slide, index) => (
          <img
            key={slide.id}
            src={getHeroImage(slide.image)}
            alt={slide.alt}
            aria-hidden={index !== activeIndex}
            style={{ objectPosition: slide.position }}
            className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <LightStreaks />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#14162e]/90 via-[#14162e]/70 to-[#14162e]/50 lg:via-[#14162e]/60 lg:to-transparent" />
      <Container className="hero-parallax-content hero-grid">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/20 px-4 py-1.5 text-[11px] font-bold tracking-[0.12em] text-white uppercase sm:text-xs sm:tracking-[0.2em]">
            <span className="size-1.5 rounded-full bg-brand-red" />
            {heroData.badge}
          </p>

          <motion.h1
            variants={itemVariants}
            className="mt-8 max-w-3xl text-4xl leading-[0.97] font-black tracking-tight text-white uppercase italic sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {heroData.title.start}{" "}
            <span className="bg-linear-to-r from-[#ff4f58] to-brand-red bg-clip-text text-transparent">
              {heroData.title.highlight}
            </span>{" "}
            {heroData.title.end}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-152 text-base leading-7 text-white/80 sm:text-[19px]"
          >
            {heroData.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col gap-4 sm:mt-11 sm:flex-row sm:items-center"
          >
            <Button
              href="#contact"
              variant="accent"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Calculator className="size-5" />
              Calculate the cost
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              href={mainPhone.href}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Phone className="size-5" />
              {mainPhone.label}
            </Button>
          </motion.div>
        </motion.div>

        <RouteMap className="hero-aside motion-safe:animate-float" />
      </Container>

      <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-2.5">
        {heroData.slides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === activeIndex}
            className={`h-1.5 cursor-pointer rounded-full transition-all duration-500 ${
              index === activeIndex
                ? "w-14 bg-brand-red"
                : "w-8 bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 -z-10 h-2 bg-linear-to-r from-brand-blue via-[#8f2f78] to-brand-red" />
    </section>
  );
}

export default Hero;
