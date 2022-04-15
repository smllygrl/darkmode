// darkTheme, setDarkTheme
// Toggled by a button
// when darkTheme is true... does this change the class name of a things???
// How do we make this scalable for a whole application!?!

import { createContext, useState } from "react";

export const DarkThemeContext = createContext();

export const DarkThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const data = { darkTheme, setDarkTheme };

  return (
    <DarkThemeContext.Provider value={data}>
      {children}
    </DarkThemeContext.Provider>
  );
};
