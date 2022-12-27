import Popup from "reactjs-popup";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {ICard} from "../models";
import {dataCard} from "../data/dataCard";
import Modal from "../components/ModalPopup";

import "./../styles/ProductDetails.css";
import Breadcrumbs from "../components/Breadcrumbs";

const ProductDetailsPage = () => {
    const {pathname} = useLocation();
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
        <div className='product-details-wrap'>
            <Breadcrumbs id={currCard.id} title={currCard.brand} category={currCard.category}
                         productName={currCard.productName}/>
            <div className="product-details">
                <div className="product-details__image-wrap">
                    <img
                        className="product-details__image-photo"
                        src={currCard.photos[0]}
                        alt="view of product"
                    />
                </div>
                <div className="product-details__info">
                    <p className="product-details__brand">{currCard.brand}</p>
                    <p className="product-details__product-name">{currCard.productName}</p>
                    <p className="product-details__category">{currCard.category}</p>
                    <p className="product-details__description">{currCard.description}</p>
                    <div className='product-details__price-info'>
                        <p className="product-details__price">${currCard.price}</p>
                        <p className="product-details__stock">Stock: {currCard.stock}</p>
                    </div>
                    <div className='product-details__buttons-wrap'>
                        <button className="product-details-button_add">ADD TO CART</button>
                        <Popup
                            trigger={
                                <button className="product-details-button_buy">BUY NOW</button>
                            }
                            position="center center"
                        >
                            <Modal/>
                        </Popup>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
