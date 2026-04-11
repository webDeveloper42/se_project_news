import "./Card.css";
import { useState, useContext } from "react";
import Trash from "../../assets/trash.svg";
import BookmarkDefault from "../../assets/bookmark.svg";
import BookmarkHover from "../../assets/bookmark-hover.svg";
import BookmarkMarked from "../../assets/bookmark-marked.svg";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext";

function Card({ card, isUserCard }) {
  const [isHovered, setIsHovered] = useState(false);
  const { isLoggedIn, savedCards, toggleSaveCard } = useContext(CurrentUserContext);
  const isSaved = savedCards.includes(card.id);

  function getBookmarkSrc() {
    if (isSaved) return BookmarkMarked;
    if (isHovered) return BookmarkHover;
    return BookmarkDefault;
  }

  function handleActionClick() {
    if (isLoggedIn) toggleSaveCard(card);
  }

  return (
    <article className="card">
      <div className="card__header">
        {isUserCard && <div className="card__tag">{card.tag}</div>}
        <div
          className="card__action-btn"
          onMouseEnter={() => { if (window.innerWidth > 768) setIsHovered(true); }}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleActionClick}
        >
          <img
            src={isUserCard ? Trash : getBookmarkSrc()}
            alt={isUserCard ? "Trash Icon" : "Bookmark Icon"}
          />
        </div>
        <div className="card__tooltip">
          {isUserCard ? "Remove from saved" : "Sign in to save articles"}
        </div>
        <img src={card.img} alt={card.imgAlt} className="card__img" />
      </div>
      <div className="card__texts-content">
        <time className="card__date">{card.date}</time>
        <h3 className="card__title">{card.title}</h3>
        <p className="card__description">{card.description}</p>
        <p className="card__footer-text">{card.source}</p>
      </div>
    </article>
  );
}

export default Card;
