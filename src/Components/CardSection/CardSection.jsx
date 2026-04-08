import "./CardSection.css";
import Card from "../Card/Card";
import { cards } from "../../utils/constants";

function CardSection() {
  return (
    <div className="cards">
      <div className="cards__content">
        <div className="cards__list">
          {cards.slice(0, 3).map((card) => (
            <Card key={card.id} card={card} isUserCard={false} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardSection;
