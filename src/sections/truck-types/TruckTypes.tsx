import { trucksData } from "../../data";
import Container from "../../components/ui/Container";
import TruckPicker from "./TruckPicker";
import TruckDetails from "./TruckDetails";

function TruckTypes() {
  return (
    <section id="truck-types" className="bg-brand-blue py-24 lg:py-32">
      <Container>
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-white">
            <span className="size-1.5 rounded-full bg-brand-red" />
            {trucksData.badge}
          </span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {trucksData.title}
          </h2>
        </div>
        <TruckPicker />
        <div className="mt-8 grid overflow-hidden rounded-3xl border border-white/15 bg-black/20 lg:grid-cols-2">
          <TruckDetails />
        </div>
      </Container>
    </section>
  );
}

export default TruckTypes;
