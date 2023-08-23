import { useContext } from "react";

import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  type ThemeTypes,
} from "./ThemeContext";

interface I {
  toggleTheme(): void;
  theme: ThemeTypes;
}

const useTheme = (): I => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};

export default useTheme;
