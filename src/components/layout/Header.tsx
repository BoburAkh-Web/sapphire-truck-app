import Container from "../ui/Container";
import logo from "../../assets/logo/logo.png";
import { navigationData, siteData } from "../../data";
import { Headset, Menu, Moon, Phone, Sun, X } from "lucide-react";
import Button from "../ui/Button";
import useScrolled from "../../hooks/useScrolled";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

function Header() {
  const mainPhone = siteData.phones[0];
  const isScrolled = useScrolled(20);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 text-white transition-colors duration-300 ${
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
                  className="text-sm font-semibold text-white transition-colors hover:text-white/70"
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
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="flex size-10 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            {theme === "dark" ? (
              <Sun className="size-5" />
            ) : (
              <Moon className="size-5" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="flex size-10 items-center justify-center rounded-lg lg:hidden"
          >
            {isMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>
      </Container>
      {isMenuOpen && (
        <div
          id="mobile-menu"
          onClick={() => setIsMenuOpen(false)}
          className="border-t border-white/10 bg-[#0b0c17] lg:hidden"
        >
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
      )}
    </header>
  );
}

export default Header;
