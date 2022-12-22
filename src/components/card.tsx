import { Link } from "react-router-dom";

import { ICard } from "../models";

import "../styles/card.css";

import { useState } from "react";

interface CardProps {
  card: ICard;
  onClickAddItem: (data: ICard) => void;
}

export function Cards({ onClickAddItem, card }: CardProps) {
  const [stock, setStock] = useState(card.stock);

  return (
    <div className="product-tile">
      <Link to="/product-card" className="link">
        <div className="product-tile__info">
          <img
            className="product-tile__img"
            src={card.photos[0]}
            alt={card.productName}
          />
          <p className="product-tile__brand">{card.brand}</p>
          <p className="product-tile__product-name">{card.productName}</p>
          <p className="product-tile__category">{card.category}</p>
          <div className="price-info-wrap">
            <p className="product-tile__price">${card.price}</p>
            <p className="product-tile__stock">Stock: {stock}</p>
          </div>
        </div>
      </Link>
      <div className="product-tile__buttons">
        <div className="not-allowed">
          <button
            className={`button__add-to-cart ${stock === 0 ? "disabled" : ""}`}
            onClick={() => {
              if (stock > 0) {
                onClickAddItem(card);
                setStock(stock - 1);
              }
            }}
          >
            Add to cart
          </button>
        </div>
        <Link to={`/product-card/${card.id}`}>
          <button className="button__details">Details</button>
        </Link>
      </div>
    </div>
  );
}
