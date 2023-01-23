import "./toggle-btn.scss";

function Toggle({ changeAppMode }: any) {
  return (
    <div id="toggle" onClick={changeAppMode}>
      <i className="material-icons-outlined">light_mode</i>
      <i className="material-icons-outlined">dark_mode</i>
    </div>
  );
}

export default Toggle;
