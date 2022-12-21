import {useState} from "react";
import {ICard} from "../models";
import './../styles/CartItemStyles.css'

interface CartItemProps {
    data: ICard
}

const CartItem = (props: CartItemProps) => {

    const [quantity, setQuantity] = useState(1);

    function Increment() {
        setQuantity(quantity + 1)
    }

    function Decrement() {
        setQuantity(quantity - 1)
        if (quantity < 1) setQuantity(0)
    }

    return (
        <div className='cart-item'>
            <img className='cart-item__image' src={props.data.photos[0]} alt='item presentation'/>
            <div className='cart-item__info'>
                <p className='cart-item__brand'>{props.data.brand}</p>
                <p className='cart-item__product-name'>{props.data.productName}</p>
                <p className='cart-item__category'>{props.data.category}</p>
            </div>
            <div className='cart-item__quantity'>
                <button className='button-quantity' onClick={Decrement}>-</button>
                <p className='total-quantity'>{quantity}</p>
                <button className='button-quantity' onClick={Increment}>+</button>
            </div>
            <div className='cart-item__price-wrap'>
                <p className='cart-item__price'>${props.data.price}</p>
            </div>
            <p className='cart-item__remove'>Remove</p>
        </div>
    );
};

export default CartItem;