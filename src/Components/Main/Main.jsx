import "./Main.css";
import Hero from "../Hero/Hero";
import Author from "../Author/Author";
import SearchResult from "../SearchResult/SearchResult";
// import NoResults from "../NoResults/NoResults";
// import LoadingResults from "../LoadingResults/LoadingResults";
function Main() {
  return (
    <main className="main">
      <Hero />
      <SearchResult />
      {/* <NoResults /> */}
      {/* <LoadingResults /> */}
      <Author />
    </main>
  );
}
export default Main;
