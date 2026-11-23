import { MotionConfig } from "motion/react";
import Header from "./components/layout/Header";
import TopBar from "./components/layout/TopBar";
import Hero from "./sections/hero/Hero";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <TopBar />
      <Header />
      <main>
        <Hero />
      </main>
    </MotionConfig>
  );
}

export default App;
