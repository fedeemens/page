import { useState } from "react";
import "./toggle-btn.scss";

function Toggle({ changeAppMode }: any) {
  const [darkActive, setDarkActive] = useState(false);

  function switchMode() {
    setDarkActive(!darkActive);
    changeAppMode();
  }

  return (
    <div
      className={darkActive ? "dark-mode" : ""}
      id="toggle"
      onClick={switchMode}
    >
      <i className="material-icons-outlined">light_mode</i>
      <i className="material-icons-outlined">dark_mode</i>
    </div>
  );
}

export default Toggle;
