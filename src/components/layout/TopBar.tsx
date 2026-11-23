import { AlarmClock, MapPin } from "lucide-react";
import { siteData } from "../../data";
import Container from "../ui/Container";

function TopBar() {
  return (
    <div
      id="home"
      className="hidden bg-linear-to-r from-brand-blue via-[#8f2f78] to-brand-red text-white md:block"
    >
      <Container className="flex h-10 items-center justify-between text-xs">
        <p className="flex items-center gap-2">
          <AlarmClock className="size-4" />
          <span className="font-bold">Working hours:</span>
          {siteData.workingHours.topBar}
        </p>

        <p className="flex items-center gap-2">
          <MapPin className="size-4" />
          <span className="font-bold">Location:</span>
          {siteData.address}
        </p>
      </Container>
    </div>
  );
}

export default TopBar;
