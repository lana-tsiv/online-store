import { Link } from "react-router-dom";
import { ICard } from "../models";
import "../styles/card.css";
import { useState } from "react";

interface CardProps {
  card: ICard;
  onClickAddItem: (data: ICard) => void;
  big?: boolean
}

export function Cards({ onClickAddItem, card, big = true}: CardProps) {
  const [stock, setStock] = useState(card.stock);

  return (
    <div className={big ? 'product-tile__big' : 'product-tile'}>
      <Link to={`/product-card/${card.id}`} className="link">
        <div className={big ? 'product-tile__info__big' : 'product-tile__info'}>
          <img
            className={big ? 'product-tile__img__big' : 'product-tile__img'}
            src={card.photos[0]}
            alt={card.productName}
          />
          <p className={big ? 'product-tile__brand__big ' : 'product-tile__brand '}>{card.brand}</p>
          <p className={big ? 'product-tile__product-name__big' : 'product-tile__product-name'}>{card.productName}</p>
          <p className={big ? 'product-tile__category__big' : 'product-tile__category'}>{card.category}</p>
          <div className={big ? 'price-info-wrap__big' : 'price-info-wrap'}>
            <p className={big ? 'product-tile__price__big' : 'product-tile__price'}>${card.price}</p>
            <p className="product-tile__stock">Stock: {stock}</p>
          </div>
        </div>
      </Link>
      <div className={big ? 'product-tile__buttons__big' : 'product-tile__buttons'}>
        <div className="not-allowed">
          <button
            className={`${big ? 'button__add-to-cart__big' : 'button__add-to-cart'} ${stock === 0 ? "disabled" : ""}`}
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
          <button className={big ? 'button__details__big' : 'button__details'}>Details</button>
        </Link>
      </div>
    </div>
  );
}
