import "./CardSection.css";
import Card from "../Card/Card";

function CardSection({ results }) {
  return (
    <div className="cards">
      <div className="cards__content">
        <div className="cards__list">
          {results.map((card) => (
            <Card key={card.id} card={card} isUserCard={false} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardSection;
