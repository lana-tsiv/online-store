import { Link } from "react-router-dom";

import { ICard } from "../models";

import "../styles/card.css";

interface CardProps {
  card: ICard;
}

export function Cards(cards: CardProps) {
  return (
    <div className="product-tile">
      <Link to="/product-card" className="link">
        <div className="product-tile__info">
          <img
            className="product-tile__img"
            src={cards.card.photos[0]}
            alt={cards.card.productName}
          />
          <p className="product-tile__brand">{cards.card.brand}</p>
          <p className="product-tile__product-name">{cards.card.productName}</p>
          <p className="product-tile__category">{cards.card.category}</p>
          <div className="price-info-wrap">
            <p className="product-tile__price">${cards.card.price}</p>
            <p className="product-tile__stock">Stock: {cards.card.stock}</p>
          </div>
        </div>
      </Link>
      <div className="product-tile__buttons">
        <button className="button__add-to-cart">Add to cart</button>
        <Link to={`/product-card/${cards.card.id}`}>
          <button className="button__details">Details</button>
        </Link>
      </div>
    </div>
  );
}
