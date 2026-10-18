import { Truck } from "lucide-react";
import { trucksData } from "./data";
import Container from "./components/ui/Container";

function App() {
  return (
    <>
      <Container>
        <div className="m-8 rounded-xl border border-line bg-surface p-6">
          <h1 className="text-3xl font-bold">{trucksData.title}</h1>

          <p className="text-fg-muted">Per mile</p>
          <Truck className="size-10 text-brand-red" />
        </div>
      </Container>
    </>
  );
}

export default App;
