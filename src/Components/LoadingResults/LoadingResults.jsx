import "./LoadingResults.css";
function LoadingResults() {
  return (
    <section className="loading">
      <div className="loading__content">
        <div className="loading__animation"></div>
        <p className="loading__text">Searching for news...</p>
      </div>
    </section>
  );
}
export default LoadingResults;
