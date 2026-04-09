import "./UserCardSection.css";
import Card from "../Card/Card";
import { useContext } from "react";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext";

function UserCardSection() {
  const { savedCards, allCards } = useContext(CurrentUserContext);
  const userCards = allCards.filter((card) => savedCards.includes(card.id));

  return (
    <div className="user-cards__card-section">
      <div className="user-cards__content">
        <div className="user-cards__list">
          {userCards.map((card) => (
            <Card key={card.id} card={card} isUserCard={true} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserCardSection;
