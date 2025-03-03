import React, { createContext, useMemo, useState } from "react";
import { darkTheme, lightTheme } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

export const ThemeContext = createContext(); // Use PascalCase

const CustomThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
