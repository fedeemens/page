import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import Home from "./components/home/home";
import Nav from "./components/nav/nav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <h1>test</h1>,
  },
]);

function App() {
  const [mode, setMode] = useState("light");

  function changeAppMode() {
    setMode(mode == "light" ? "dark" : "light");
  }

  return (
    <div id={mode}>
      <Nav changeAppMode={changeAppMode} />
      <RouterProvider router={router} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
