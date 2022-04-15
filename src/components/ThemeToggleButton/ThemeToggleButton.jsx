import { useContext } from "react";
import { DarkThemeContext } from "../../contexts/DarkThemeContext/DarkThemeContext";
import { DarkThemeProvider } from "../../contexts/DarkThemeContext/DarkThemeContext";

const ThemeToggleButton = () => {
  const { darkTheme, setDarkTheme } = useContext(DarkThemeContext);

  const handleClick = () => {
    if (darkTheme) {
      setDarkTheme(false);
    } else {
      setDarkTheme(true);
    }
  };

  // theme names in mixin: dark, not-dark

  return (
    <DarkThemeProvider>
      <button onClick={handleClick}>PUSH</button>
    </DarkThemeProvider>
  );
};

export default ThemeToggleButton;
