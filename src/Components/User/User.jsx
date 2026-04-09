import "./User.css";
import { useContext } from "react";
import UserCardSection from "../UserCardSection/UserCardSection";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext";

function User() {
  const { username, savedCards, allCards } = useContext(CurrentUserContext);
  const userCards = allCards.filter((card) => savedCards.includes(card.id));
  const count = userCards.length;

  const uniqueTags = [...new Set(userCards.map((card) => card.tag).filter(Boolean))];
  const displayedTags = uniqueTags.slice(0, 3);
  const remainingCount = uniqueTags.length - displayedTags.length;

  function formatTags() {
    if (uniqueTags.length === 0) return "None";
    if (remainingCount === 0) return displayedTags.join(", ");
    return `${displayedTags.join(", ")}, and ${remainingCount} other${remainingCount > 1 ? "s" : ""}`;
  }

  return (
    <div className="user">
      <div className="user__content">
        <div className="user__header-text">
          <div className="user__header-top">Saved articles</div>
          <div className="user__header-title">
            {username}, you have {count} saved article{count !== 1 ? "s" : ""}
          </div>
          <div className="user__header-description">
            By keywords:{" "}
            <span className="user__header-tags">{formatTags()}</span>
          </div>
        </div>
        <UserCardSection />
      </div>
    </div>
  );
}

export default User;
