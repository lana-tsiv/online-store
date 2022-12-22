import {Link} from "react-router-dom";
import './../styles/Cart.css'
import CartItem from "../components/CartItem";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {addItem, clearItems, ICardStore, removeItem} from "../redux/slices/cartSlice";
import cartEmpty from './../assets/image/empty.png'

const Cart = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    const {items} = useSelector((state: RootState) => state.cart);

    const dispatch = useDispatch();
    const removeAllItems = () => {
        if (items.length !== 0) {
            if (window.confirm('Do you want to remove all items?')) {
                dispatch(clearItems())
            }
        }
    }

    const onClickPlus = (data: ICardStore) => {
        dispatch(addItem(data))
    }

    const onClickMinus = (data: ICardStore) => {
        dispatch(removeItem(data))
    }

    return (
        <div className='cart-container'>
            <div className='cart-info-wrap'>
                <h2 className='cart__title'>Shoping cart</h2>
                <p onClick={removeAllItems} className='cart__remove-all'>Remove all items</p>
            </div>
            {items.length ? items.map((item) => (
                <CartItem onClickMinus={onClickMinus} onClickPlus={onClickPlus} key={item.id} data={item}/>
            )) : <div className='cart__empty-wrap'>
                <img className='cart__empty-image' src={cartEmpty} alt='empty'/>
            </div>
            }
            <div className='cart__buttons'>
                <Link className={`${items.length === 0 ? 'cart-button button-buy' : 'cart-button button-return'}`}
                      to='/' onClick={scrollToTop}>Continue shopping</Link>
                <div className='not-allowed'>
                    <button className={`cart-button button-buy ${items.length === 0 ? 'disabled' : ''}`}>Proceed to
                        checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;