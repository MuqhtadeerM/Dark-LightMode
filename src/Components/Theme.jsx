import { useState } from "react";
import "./Theme.css";

export default function LightDarkTheme() {
  const [theme, setTheme] = useState("theme", "dark");

  const handleButton = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);
  return (
    <div className="Toggle-Theme" data-theme={theme}>
      <div className="container">
        <p>Hello</p>
        <button onClick={handleButton}>Change Theme</button>
      </div>
    </div>
  );
}
