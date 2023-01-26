import "./toggle-btn.scss";

interface Props {
  changeAppMode: () => void;
}

function Toggle({ changeAppMode }: Props) {
  return (
    <div id="toggle" onClick={changeAppMode}>
      <i className="material-icons-outlined">light_mode</i>
      <i className="material-icons-outlined">dark_mode</i>
    </div>
  );
}

export default Toggle;
