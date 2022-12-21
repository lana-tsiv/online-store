import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { dataCard } from "../data/dataCard";
import { ICard } from "../models";

import "./../styles/ProductDetails.css";

const ProductDetailsPage = () => {
  const { pathname } = useLocation();
  const [currCard, setCurrCard] = useState<ICard>({
    id: 0,
    productName: "",
    brand: "",
    category: "",
    description: "",
    price: 0,
    stock: 0,
    photos: [],
  });
  const currentId = pathname.split("/")[2];

  useEffect(() => {
    dataCard.forEach((item) => {
      if (item.id.toString() === currentId.toString()) {
        setCurrCard(item);
      }
    });
  }, [currentId, setCurrCard]);

  return (
    <div className="product-details">
      <div className="product-details-image">
        <img
          className="product-details-image-photo"
          src={currCard.photos[0]}
          alt="view of product"
        />
      </div>
      <div className="product-details__info">
        <p className="product-details__brand">{currCard.brand}</p>
        <p className="product-details__price">{currCard.price}</p>
        <p className="product-details__product-name">{currCard.productName}</p>
        <p className="product-details__category">{currCard.category}</p>
        <p className="product-details__description">{currCard.description}</p>
        <button>Add to cart</button>
      </div>
      {/* <div className="details-item__price-wrap">
      </div>
      <p className="details-item__remove">Remove</p> */}
    </div>
  );
};

export default ProductDetailsPage;
