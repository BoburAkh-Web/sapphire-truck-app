import { createContext, type ReactNode } from "react";
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
  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
}

export default ThemeProvider;
