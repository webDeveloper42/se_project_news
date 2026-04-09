import "./NoResults.css";
import NotFound from "../../assets/not-found.svg";
function NoResults() {
  return (
    <section className="no-results">
      <div className="no-results__content">
        <img className="no-results__img" src={NotFound} alt="Nothing found" />
        <h3 className="no-results__title">Nothing Found</h3>
        <p className="no-results__text">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
    </section>
  );
}
export default NoResults;
