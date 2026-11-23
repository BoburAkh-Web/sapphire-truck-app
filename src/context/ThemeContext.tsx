import { createContext, useContext, useEffect, type ReactNode } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
type ThemeProviderProps = {
  children: ReactNode;
};

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useLocalStorageState<Theme>("theme", "dark");
  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
}

function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}

export { ThemeProvider, useTheme };
