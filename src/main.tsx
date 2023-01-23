import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import Home from "./components/home/home";
import Nav from "./components/nav/nav";

function App() {
  const [mode, setMode] = useState("light");

  function changeAppMode() {
    setMode(mode == "light" ? "dark" : "light");
  }

  return (
    <div id={mode}>
      <Nav changeAppMode={changeAppMode} />
      <Home />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
