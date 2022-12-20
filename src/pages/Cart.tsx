import {Link} from "react-router-dom";
import './../styles/Cart.css'
import {dataCard} from "../data/dataCard";
import {useState} from "react";
import CartItem from "../components/CartItem";

const Cart = () => {
    const scrollToTop = () => {
            window.scrollTo(0, 0)
        }

    const [cartItems, setCartItems] = useState(dataCard.filter((item, index) => index < 3));
    return (
        <div className='cart-container'>
            <div className='cart-info-wrap'>
                <h2 className='cart__title'>Shoping cart</h2>
                <p className='cart__remove-all'>Remove all items</p>
            </div>
            {cartItems.map((item) => (
                <CartItem data={item}/>
            ))}
            <div className='cart__buttons'>
                <Link className='cart-button button-return' to='/' onClick={scrollToTop}>Continue shopping</Link>
                <button className='cart-button button-buy'>Proceed to checkout</button>
            </div>
        </div>
    );
};

export default Cart;