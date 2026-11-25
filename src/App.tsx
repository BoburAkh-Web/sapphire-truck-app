import { MotionConfig } from "motion/react";
import Header from "./components/layout/Header";
import TopBar from "./components/layout/TopBar";
import Hero from "./sections/hero/Hero";
import WhyUs from "./sections/why-us/WhyUs";
import Services from "./sections/services/Services";
import Process from "./sections/process/Process";
import { useQuoteStore } from "./store/quoteStore";
import TruckTypes from "./sections/truck-types/TruckTypes";
import Contact from "./sections/contact/Contact";

function App() {
  const miles = useQuoteStore((state) => state.miles);
  const setMiles = useQuoteStore((state) => state.setMiles);
  return (
    <MotionConfig reducedMotion="user">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Process />
        <TruckTypes />
        <Contact />
      </main>
    </MotionConfig>
  );
}

export default App;
