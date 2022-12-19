import { ICard } from "../models";
import "../styles/card.css";

interface CardProps {
  card: ICard;
}

export function Cards(cards: CardProps) {
  return (
    <div className="card_card">
      <img
        className="card_card-img"
        src={cards.card.photos[0]}
        alt={cards.card.productName}
      />
      <p>{cards.card.brand}</p>
      <p>{cards.card.productName}</p>
      <p>{cards.card.category}</p>
      <p>{cards.card.price}</p>
      <p>{cards.card.stock}</p>
      <div className="card-buttons">
        <button>Add me!</button>
        <button>Click me!</button>
      </div>
    </div>
  );
}
