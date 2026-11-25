import { MotionConfig } from "motion/react";
import Header from "./components/layout/Header";
import TopBar from "./components/layout/TopBar";
import Hero from "./sections/hero/Hero";
import WhyUs from "./sections/why-us/WhyUs";
import Services from "./sections/services/Services";
import Process from "./sections/process/Process";
import TruckTypes from "./sections/truck-types/TruckTypes";
import Contact from "./sections/contact/Contact";
import Footer from "./components/layout/Footer";
import FloatingActions from "./components/layout/FloatingActions";

function App() {
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
      <Footer />
      <FloatingActions />
    </MotionConfig>
  );
}

export default App;
