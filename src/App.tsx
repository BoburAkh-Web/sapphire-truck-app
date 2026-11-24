import { MotionConfig } from "motion/react";
import Header from "./components/layout/Header";
import TopBar from "./components/layout/TopBar";
import Hero from "./sections/hero/Hero";
import WhyUs from "./sections/why-us/WhyUs";
import Services from "./sections/services/Services";
import Process from "./sections/process/Process";
import { trucksData } from "./data";
import { calculateQuote } from "./utils/pricing";

function App() {
  // console.log(trucksData.trucks.map(formatRate));
  console.log(calculateQuote(trucksData.trucks[1], 100)); // { kind: "price", min: 110, max: 140 }
  console.log(calculateQuote(trucksData.trucks[3], 100)); // { kind: "onRequest" }
  return (
    <MotionConfig reducedMotion="user">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Process />
      </main>
    </MotionConfig>
  );
}

export default App;
