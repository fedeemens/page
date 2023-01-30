import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//scss
import "./main.scss";

//components
import Home from "./components/home/home";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Work from "./components/work/work";
import Contact from "./components/contact/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/work",
    element: <Work />,
  },
  {
    path: "/contact",
    element: <Contact />,
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
