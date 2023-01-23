import "./home.scss";
import img from "../../assets/home-img.svg";

function home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>
          Emens
          <br />
          Fede
        </h1>
        <p>
          frontend developer /<br />
          web designer
        </p>
      </div>
      <img
        className="home-background-img"
        src={img}
        alt="home-background-img"
      />
      <img src={img} alt="home-img" />
      <p className="home-scroll">scrolldown</p>
    </div>
  );
}

export default home;
