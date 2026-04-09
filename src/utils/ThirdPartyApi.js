const BASE_URL = import.meta.env.PROD
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const searchNews = (query) => {
  const to = new Date();
  const from = new Date();
  from.setDate(from.getDate() - 7);

  const params = new URLSearchParams({
    q: query,
    apiKey: API_KEY,
    from: from.toISOString().split("T")[0],
    to: to.toISOString().split("T")[0],
    pageSize: 100,
  });

  return fetch(`${BASE_URL}?${params}`).then((res) => {
    if (!res.ok) {
      return Promise.reject(new Error(`Error: ${res.status}`));
    }
    return res.json();
  });
};
