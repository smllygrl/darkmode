import Header from "./components/Header/Header";
import { useContext } from "react";

import { DarkThemeContext } from "./contexts/DarkThemeContext/DarkThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton/ThemeToggleButton";

const App = () => {
  const { darkTheme } = useContext(DarkThemeContext);

  return (
    <div className={{ darkTheme } ? "theme--dark" : "theme--not-dark"}>
      <Header />
      <ThemeToggleButton />
    </div>
  );
};

export default App;
