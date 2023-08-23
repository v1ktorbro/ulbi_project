import { createContext } from "react";

export const Theme = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export type ThemeTypes = (typeof Theme)[keyof typeof Theme];

export interface IThemeContext {
  theme?: ThemeTypes;
  setTheme?(theme: ThemeTypes): void;
}

export const ThemeContext = createContext<IThemeContext>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";
