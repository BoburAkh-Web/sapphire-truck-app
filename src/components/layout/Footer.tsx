import {
  AlarmClock,
  ArrowRight,
  Calculator,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import type { ReactNode } from "react";
import { footerData, navigationData, siteData } from "../../data";
import Container from "../ui/Container";
import logo from "../../assets/logo/logo.png";
const currentYear = new Date().getFullYear();
function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 text-lg font-bold text-white">
      <span className="h-0.5 w-5 bg-brand-red" />
      {children}
    </h2>
  );
}

function Footer() {
  const [mainPhone, ...otherPhones] = siteData.phones;

  return (
    <footer className="bg-[#1b1c45] text-white/75">
      <Container className="grid gap-12 pt-14 pb-10 lg:grid-cols-[2.2fr_1fr_1.5fr] lg:gap-14">
        <div>
          <img
            src={logo}
            alt="Sapphire Transportation"
            className="h-12 w-auto"
          />

          <p className="mt-5 text-xl font-bold text-white">
            {footerData.tagline.start}{" "}
            <span className="text-brand-red">
              {footerData.tagline.highlight}
            </span>
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed">
            {footerData.description}
          </p>

        </div>

        <nav aria-label="Footer">
          <FooterHeading>{footerData.menuTitle}</FooterHeading>
          <ul className="mt-6 space-y-4">
            {navigationData.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group flex items-center gap-3 transition hover:text-white"
                >
                  <ArrowRight className="size-4 text-brand-red transition group-hover:translate-x-1" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <FooterHeading>{footerData.contactTitle}</FooterHeading>
          <ul className="mt-6 space-y-5">
            <li className="flex gap-3">
              <Phone className="mt-1 size-5 shrink-0 text-brand-red" />
              <div>
                <a
                  href={mainPhone.href}
                  className="text-2xl font-extrabold text-white hover:text-brand-red"
                >
                  {mainPhone.label}
                </a>
                {otherPhones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="mt-1 block text-sm hover:text-white"
                  >
                    {phone.label}
                  </a>
                ))}
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-5 shrink-0 text-brand-red" />
              <a href={`mailto:${siteData.email}`} className="hover:text-white">
                {siteData.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-5 shrink-0 text-brand-red" />
              {siteData.address}
            </li>
          </ul>
        </div>
      </Container>

      <Container className="pb-10">
        <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-3 font-semibold text-white">
            <Globe className="size-5 shrink-0 text-brand-red" />
            {footerData.coverage}
          </p>

          <a
            href="#truck-types"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red px-5 py-3 font-bold text-white transition hover:bg-brand-red/90"
          >
            {footerData.ctaLabel}
            <Calculator className="size-5" />
          </a>
        </div>
      </Container>

      <Container className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2">
          <AlarmClock className="size-5 text-brand-red" />
          {footerData.workingHoursLabel}
          <span className="font-bold text-white">
            {siteData.workingHours.footer}
          </span>
        </p>

        <p>
          © {currentYear} {footerData.copyright}
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
