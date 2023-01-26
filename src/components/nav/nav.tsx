import "./nav.scss";
import Toggle from "./toggle-btn/toggle-btn";

interface Props {
  changeAppMode: () => void;
}

function Nav({ changeAppMode }: Props) {
  return (
    <nav className="nav">
      <p className="nav-title">Emens Fede</p>
      <div className="nav-links">
        <p>linkedin</p>
        <Toggle changeAppMode={changeAppMode} />
        <p>menu hamburg</p>
      </div>
    </nav>
  );
}

export default Nav;
