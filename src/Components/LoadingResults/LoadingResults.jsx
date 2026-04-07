import "./LoadingResults.css";
function LoadingResults() {
  return (
    <div className="loading">
      <div className="loading__content">
        <div className="loading__animation"></div>
        <div className="loading__text">Searching for news...</div>
      </div>
    </div>
  );
}
export default LoadingResults;
