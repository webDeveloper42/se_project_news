import "./Hero.css";
import HeroPNG from "../../assets/hero.png";
function Hero() {
  return (
    <div className="hero">
      <img className="hero__img" src={HeroPNG} alt="Hero Picture" />
      <div className="hero__content">
        <div className="hero__title">What's going on in the world?</div>
        <div className="hero__description">
          Find the latest news on any topic and save them in your personal
          account.
        </div>
        <div className="hero__searchbar">
          <input
            type="text"
            placeholder="Enter topic"
            className="hero__searchbar-input"
          />
          <button className="hero__searchbar-btn">Search</button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
