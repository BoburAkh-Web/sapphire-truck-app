import trucksJson from "./trucks.json";
import heroJson from "./hero.json";
import navigationJson from "./navigation.json";
import processJson from "./process.json";
import servicesJson from "./services.json";
import siteJson from "./site.json";
import whyUsJson from "./why-us.json";

import type { TrucksData } from "../types/trucks";
import type { HeroData } from "../types/hero";
import type { NavLink } from "../types/navigation";
import type { ProcessData } from "../types/process";
import type { ServiceData } from "../types/services";
import type { SiteData } from "../types/site";
import type { WhyUsData } from "../types/why-us";

export const trucksData = trucksJson as TrucksData;
export const heroData = heroJson as HeroData;
export const navigationData = navigationJson as NavLink[];
export const processData = processJson as ProcessData;
export const servicesData = servicesJson as ServiceData;
export const siteData = siteJson as SiteData;
export const whyUsData = whyUsJson as WhyUsData;
