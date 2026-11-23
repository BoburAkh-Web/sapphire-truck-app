import Container from "../ui/Container";
import logo from "../../assets/logo/logo.png";
import { navigationData, siteData } from "../../data";
import { Menu, Phone, X } from "lucide-react";
import Button from "../ui/Button";
import useScrolled from "../../hooks/useScrolled";
import { useState } from "react";

function Header() {
  const mainPhone = siteData.phones[0];
  const isScrolled = useScrolled(20);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled
          ? "border-line bg-page/80 backdrop-blur-lg"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-18 items-center justify-between gap-6">
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
                  className="text-sm font-medium text-fg-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-6 lg:flex">
          <a href={mainPhone.href} className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-surface-2 text-accent">
              <Phone className="size-4" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-xs text-fg-muted">Call Us anytime</span>
              <span className="text-sm font-semibold">{mainPhone.label}</span>
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
          className="flex size-10 items-center justify-center rounded-lg text-fg lg:hidden"
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>
      {isMenuOpen && (
        <div
          id="mobile-menu"
          onClick={() => setIsMenuOpen(false)}
          className="border-t border-line bg-page lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navigationData.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 font-medium hover:bg-surface"
              >
                {link.label}
              </a>
            ))}

            <a
              href={mainPhone.href}
              className="mt-2 flex items-center gap-3 rounded-lg px-3 py-3 text-fg-muted"
            >
              <Phone className="size-4 text-accent" />
              {mainPhone.label}
            </a>

            <Button href="#contact" className="mt-2">
              Request a quote
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}

export default Header;
