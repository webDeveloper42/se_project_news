import "./NoResults.css";
import NotFound from "../../assets/not-found.svg";
function NoResults() {
  return (
    <div className="no-results">
      <div className="no-results__content">
        <img className="no-results__img" src={NotFound} />
        <div className="no-results__title">Nothing Found</div>
        <div className="no-results__text">
          Sorry, but nothing matched <br /> your search terms.
        </div>
      </div>
    </div>
  );
}
export default NoResults;
