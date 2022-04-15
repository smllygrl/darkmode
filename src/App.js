import "./styling/main.scss";

import { useContext } from "react";
import { DarkThemeContext } from "./contexts/DarkThemeContext/DarkThemeContext";

import Header from "./components/Header/Header";
import ThemeToggleButton from "./components/ThemeToggleButton/ThemeToggleButton";

const App = () => {
  const { darkTheme } = useContext(DarkThemeContext);
  console.log(darkTheme);

  return (
    <div className={{ darkTheme } ? "theme--dark" : "theme--not-dark"}>
      <Header />
      <ThemeToggleButton />
    </div>
  );
};

export default App;
