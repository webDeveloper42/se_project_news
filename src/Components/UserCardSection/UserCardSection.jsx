import "./UserCardSection.css";
import Card from "../Card/Card";
import { useContext } from "react";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext";

function UserCardSection() {
  const { savedCards, allCards } = useContext(CurrentUserContext);
  const userCards = allCards.filter((card) => savedCards.includes(card.id));

  return (
    <section className="user-cards">
      <div className="user-cards__content">
        <div className="user-cards__list">
          {userCards.map((card) => (
            <Card key={card.id} card={card} isUserCard={true} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default UserCardSection;
