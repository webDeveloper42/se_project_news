import "./Card.css";
import { useState } from "react";
import Trash from "../../assets/trash.svg";
import BookmarkDefault from "../../assets/bookmark.svg";
import BookmarkHover from "../../assets/bookmark-hover.svg";

function Card({ card, isUserCard }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card">
      <div className="card__header">
        {isUserCard && <div className="card__tag">{card.tag}</div>}
        <div
          className="card__action-btn"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={
              isUserCard
                ? Trash
                : isHovered
                ? BookmarkHover
                : BookmarkDefault
            }
            alt={isUserCard ? "Trash Icon" : "Bookmark Icon"}
          />
        </div>
        <div className="card__tooltip">
          {isUserCard ? "Remove from saved" : "Sign in to save articles"}
        </div>
        <img src={card.img} alt={card.imgAlt} className="card__img" />
      </div>
      <div className="card__texts-content">
        <div className="card__date">{card.date}</div>
        <div className="card__title">{card.title}</div>
        <div className="card__description">{card.description}</div>
        <div className="card__footer-text">{card.source}</div>
      </div>
    </div>
  );
}

export default Card;
