import "./UserCardSection.css";
import Card from "../Card/Card";
import { cards } from "../../utils/constants";

function UserCardSection() {
  return (
    <div className="user-cards__card-section">
      <div className="user-cards__content">
        <div className="user-cards__list">
          {cards.map((card) => (
            <Card key={card.id} card={card} isUserCard={true} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserCardSection;
