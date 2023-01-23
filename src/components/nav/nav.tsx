import "./nav.scss";
import Toggle from "./toggle-btn/toggle-btn";

function Nav({ changeAppMode }: any) {
  return (
    <nav className="nav">
      <p className="nav-title">Emens Federico</p>
      <div className="nav-links">
        <p>linkedin</p>
        <Toggle changeAppMode={changeAppMode} />
        <p>menu hamburg</p>
      </div>
    </nav>
  );
}

export default Nav;
