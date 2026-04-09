import "./Main.css";
import { useState } from "react";
import Hero from "../Hero/Hero";
import Author from "../Author/Author";
import SearchResult from "../SearchResult/SearchResult";
import NoResults from "../NoResults/NoResults";
import LoadingResults from "../LoadingResults/LoadingResults";
import { cards } from "../../utils/constants";

function Main() {
  const [searchStatus, setSearchStatus] = useState("idle");
  const [searchResults, setSearchResults] = useState([]);

  function handleSearch(query) {
    if (!query.trim()) {
      setSearchStatus("idle");
      setSearchResults([]);
      return;
    }

    setSearchStatus("loading");

    setTimeout(() => {
      const q = query.toLowerCase();
      const matches = cards.filter(
        (card) =>
          card.title.toLowerCase().includes(q) ||
          card.description.toLowerCase().includes(q) ||
          card.tag.toLowerCase().includes(q) ||
          card.source.toLowerCase().includes(q)
      );

      if (matches.length > 0) {
        setSearchResults(matches);
        setSearchStatus("results");
      } else {
        setSearchResults([]);
        setSearchStatus("no-results");
      }
    }, 800);
  }

  return (
    <main className="main">
      <Hero onSearch={handleSearch} />
      {searchStatus === "loading" && <LoadingResults />}
      {searchStatus === "results" && <SearchResult results={searchResults} />}
      {searchStatus === "no-results" && <NoResults />}
      <Author />
    </main>
  );
}

export default Main;
