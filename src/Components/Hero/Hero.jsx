import "./Hero.css";
import HeroPNG from "../../assets/hero.png";
import { useState } from "react";

function Hero({ onSearch }) {
  const [query, setQuery] = useState("");
  const [inputError, setInputError] = useState("");

  function handleSearch() {
    if (!query.trim()) {
      setInputError("Please enter a keyword");
      return;
    }
    setInputError("");
    onSearch(query);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleSearch();
  }

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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="hero__searchbar-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        {inputError && (
          <span className="hero__searchbar-error">{inputError}</span>
        )}
      </div>
    </div>
  );
}
export default Hero;
