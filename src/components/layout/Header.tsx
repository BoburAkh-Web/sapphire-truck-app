import Container from "../ui/Container";
import logo from "../../assets/logo/logo.png";
import { navigationData, siteData } from "../../data";
import { Headset, Menu, Phone, X } from "lucide-react";
import Button from "../ui/Button";
import useScrolled from "../../hooks/useScrolled";
import { useState } from "react";

function Header() {
  const mainPhone = siteData.phones[0];
  const isScrolled = useScrolled(20);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header
      className={`sticky top-0 z-50 text-white shadow-[inset_0_-1px_0_rgb(255_255_255/0.1)] transition-colors duration-300 ${
        isScrolled ? "bg-[#0b0c17]/85 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <Container className="flex h-17 items-center justify-between gap-6">
        <a href="#home" className="shrink-0">
          <img
            src={logo}
            alt="Sapphire Transportation"
            className="h-10 w-auto"
          />
        </a>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigationData.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm font-semibold text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-red after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <a href={mainPhone.href} className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Headset className="size-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-xs text-white/70">Call Us anytime</span>
              <span className="text-[15px] font-bold">{mainPhone.label}</span>
            </span>
          </a>
          <Button href="#contact">Request a quote</Button>
        </div>
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="relative flex size-10 items-center justify-center rounded-lg lg:hidden"
        >
          <Menu
            className={`absolute size-6 transition-all duration-300 motion-reduce:transition-none ${
              isMenuOpen
                ? "rotate-90 scale-50 opacity-0"
                : "rotate-0 scale-100 opacity-100"
            }`}
          />
          <X
            className={`absolute size-6 transition-all duration-300 motion-reduce:transition-none ${
              isMenuOpen
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-50 opacity-0"
            }`}
          />
        </button>
      </Container>
      <div
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        onClick={() => setIsMenuOpen(false)}
        className={`grid bg-[#0b0c17] transition-[grid-template-rows,opacity] duration-500 ease-in-out motion-reduce:transition-none lg:hidden ${
          isMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden border-t border-white/10">
          <Container className="flex flex-col gap-1 py-4">
            {navigationData.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 font-semibold hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}

            <a
              href={mainPhone.href}
              className="mt-2 flex items-center gap-3 rounded-lg px-3 py-3 text-white/70"
            >
              <Phone className="size-4" />
              {mainPhone.label}
            </a>

            <Button href="#contact" className="mt-2">
              Request a quote
            </Button>
          </Container>
        </div>
      </div>
    </header>
  );
}

export default Header;
