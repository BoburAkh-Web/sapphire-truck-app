import { MotionConfig } from "motion/react";
import Header from "./components/layout/Header";
import TopBar from "./components/layout/TopBar";
import Hero from "./sections/hero/Hero";
import WhyUs from "./sections/why-us/WhyUs";
import Tabs from "./components/ui/Tabs";
import Services from "./sections/services/Services";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Services />
      </main>
    </MotionConfig>
  );
}

export default App;
