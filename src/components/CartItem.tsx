import './../styles/CartItemStyles.css'
import {ICardStore, removeItem} from "../redux/slices/cartSlice";
import {useDispatch} from "react-redux";

interface CartItemProps {
    data: ICardStore,
    onClickMinus: (data: ICardStore) => void
    onClickPlus: (data: ICardStore) => void
}

const CartItem = (props: CartItemProps) => {
    const {onClickMinus, onClickPlus} = props

    const dispatch = useDispatch()
    const removeItemsGroup = () => {
       dispatch(removeItem(props.data));
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
                <button className='button-quantity' onClick={() => onClickMinus(props.data)}>-</button>
                <p className='total-quantity'>{props.data.count}</p>
                <button className='button-quantity' onClick={() => onClickPlus(props.data)}>+</button>
            </div>
            <div className='cart-item__price-wrap'>
                <p className='cart-item__price'>${(props.data.price * props.data.count).toFixed(2)}</p>
            </div>
            <div className='cart-item__stock-wrap'>
                <p className='cart-item__stock'>Stock: {props.data.stock}</p>
            </div>
            <p onClick={removeItemsGroup} className='cart-item__remove'>Remove</p>
        </div>
    );
};

export default CartItem;