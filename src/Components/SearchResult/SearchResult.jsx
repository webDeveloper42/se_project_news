import "./SearchResult.css";
import "../../vendor/fonts.css";
import CardSection from "../CardSection/CardSection";
function SearchResult({ results }) {
  return (
    <div className="search">
      <div className="search__header">
        <h2 className="search__title">Search Results</h2>
      </div>
      <CardSection results={results} />
      <div className="search__btn-container">
        <button className="search__btn-show-more">Show more</button>
      </div>
    </div>
  );
}
export default SearchResult;
