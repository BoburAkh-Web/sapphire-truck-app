import Header from "./components/layout/Header";
import TopBar from "./components/layout/TopBar";
import Hero from "./sections/hero/Hero";

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
