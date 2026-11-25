import Footer from "../components/layout/Footer";
import FloatingActions from "../components/layout/FloatingActions";
import Header from "../components/layout/Header";
import TopBar from "../components/layout/TopBar";
import Contact from "../sections/contact/Contact";
import Hero from "../sections/hero/Hero";
import Process from "../sections/process/Process";
import Services from "../sections/services/Services";
import TruckTypes from "../sections/truck-types/TruckTypes";
import WhyUs from "../sections/why-us/WhyUs";

function HomePage() {
  return (
    <>
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
    </>
  );
}

export default HomePage;
