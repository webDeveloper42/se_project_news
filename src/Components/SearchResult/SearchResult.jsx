import "./SearchResult.css";
import CardSection from "../CardSection/CardSection";

function SearchResult({ results, hasMore, onShowMore }) {
  return (
    <div className="search">
      <h2 className="search__title">Search Results</h2>
      <CardSection results={results} />
      {hasMore && (
        <div className="search__btn-container">
          <button className="search__btn-show-more" onClick={onShowMore}>
            Show more
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchResult;
