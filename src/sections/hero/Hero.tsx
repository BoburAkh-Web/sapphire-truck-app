import { ArrowRight, Calculator, Phone } from "lucide-react";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import { heroData, siteData } from "../../data";
import { getHeroImage } from "../../data/images";

function Hero() {
  const slide = heroData.slides[0];
  const mainPhone = siteData.phones[0];

  return (
    <section className="relative isolate -mt-17 flex min-h-[calc(100svh-2rem)] items-center overflow-hidden pt-17 pb-20">
      <img
        src={getHeroImage(slide.image)}
        alt={slide.alt}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#14162e]/90 via-[#14162e]/60 to-transparent" />
      <Container>
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/20 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-white uppercase">
            <span className="size-1.5 rounded-full bg-brand-red" />
            {heroData.badge}
          </p>

          <h1 className="mt-8 max-w-3xl text-4xl leading-[0.97] font-extrabold tracking-tight text-white uppercase italic sm:text-5xl lg:text-6xl xl:text-7xl">
            {heroData.title.start}{" "}
            <span className="bg-linear-to-r from-[#ff4f58] to-brand-red bg-clip-text text-transparent">
              {heroData.title.highlight}
            </span>{" "}
            {heroData.title.end}
          </h1>

          <p className="mt-8 max-w-152 text-base leading-7 text-white/80 sm:text-[19px]">
            {heroData.description}
          </p>

          <div className="mt-11 flex flex-wrap items-center gap-4">
            <Button href="#contact" variant="accent" size="lg">
              <Calculator className="size-5" />
              Calculate the cost
              <ArrowRight className="size-4" />
            </Button>
            <Button href={mainPhone.href} variant="outline" size="lg">
              <Phone className="size-5" />
              {mainPhone.label}
            </Button>
          </div>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-2.5"
      >
        {heroData.slides.map((item, index) => (
          <span
            key={item.id}
            className={`h-1.5 rounded-full ${
              index === 0 ? "w-14 bg-brand-red" : "w-8 bg-white/60"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 -z-10 h-2 bg-linear-to-r from-brand-blue via-[#8f2f78] to-brand-red" />
    </section>
  );
}

export default Hero;
