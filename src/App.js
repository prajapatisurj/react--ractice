import React, { useState } from "react";

import './App.css'
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
    </div>
  );
}

export default App;
