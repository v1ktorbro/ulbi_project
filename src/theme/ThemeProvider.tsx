import { FC, ReactNode, useMemo, useState } from "react";

import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  type ThemeTypes,
} from "./ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeTypes) || "light";

const ThemeProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [selectTheme, setSelectTheme] = useState<ThemeTypes>(defaultTheme);

  const memoData = useMemo(
    () => ({ theme: selectTheme, setTheme: setSelectTheme }),
    [selectTheme]
  );

  return (
    <ThemeContext.Provider value={memoData}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
