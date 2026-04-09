import "./Main.css";
import { useState } from "react";
import Hero from "../Hero/Hero";
import Author from "../Author/Author";
import SearchResult from "../SearchResult/SearchResult";
import NoResults from "../NoResults/NoResults";
import LoadingResults from "../LoadingResults/LoadingResults";
import { searchNews } from "../../utils/ThirdPartyApi";

const ITEMS_PER_PAGE = 3;

function Main() {
  const [searchStatus, setSearchStatus] = useState("idle");
  const [searchResults, setSearchResults] = useState([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  function handleSearch(query) {
    if (!query.trim()) {
      setSearchStatus("idle");
      setSearchResults([]);
      setVisibleCount(ITEMS_PER_PAGE);
      return;
    }

    setSearchStatus("loading");
    setVisibleCount(ITEMS_PER_PAGE);

    searchNews(query)
      .then((data) => {
        const articles = data.articles || [];
        if (articles.length === 0) {
          setSearchResults([]);
          setSearchStatus("no-results");
        } else {
          const mapped = articles.map((article, i) => ({
            id: article.url || i,
            tag: query,
            date: new Date(article.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            title: article.title,
            description: article.description,
            source: article.source?.name?.toUpperCase() || "",
            img: article.urlToImage,
            imgAlt: article.title,
          }));
          setSearchResults(mapped);
          setSearchStatus("results");
        }
      })
      .catch(() => {
        setSearchResults([]);
        setSearchStatus("error");
      });
  }

  function handleShowMore() {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  }

  return (
    <main className="main">
      <Hero onSearch={handleSearch} />
      {searchStatus === "loading" && <LoadingResults />}
      {searchStatus === "results" && (
        <SearchResult
          results={searchResults.slice(0, visibleCount)}
          hasMore={visibleCount < searchResults.length}
          onShowMore={handleShowMore}
        />
      )}
      {searchStatus === "no-results" && <NoResults />}
      {searchStatus === "error" && (
        <p className="main__error">
          Sorry, something went wrong during the request. Please try again
          later.
        </p>
      )}
      <Author />
    </main>
  );
}

export default Main;
