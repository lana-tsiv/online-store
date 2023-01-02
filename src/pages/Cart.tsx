import {Link} from "react-router-dom";
import './../styles/Cart.css'
import CartItem from "../components/CartItem";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {addItem, clearItems, ICardStore, removeItem, calcDiscount, removeCoupon} from "../redux/slices/cartSlice";
import cartEmpty from './../assets/image/empty.png'
import ReactModal from 'react-modal';
import {ChangeEvent, useEffect, useState} from "react";
import Modal from "../components/ModalPopup";
import Pagination from '../components/Pagination'

export interface PaginationProps {
    limit?: number,
    total?: number,
    currentPage: number,
    page?: number,
    onPageChange: (page?: number) => void,
}

export interface CouponProps {
    onChangeEvent?: (value: string) => void,
}

const Cart = ({onChangeEvent}: CouponProps) => {
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

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items])

    const {totalPrice, discountTotal: discountTotalStore, coupon} = useSelector((state: RootState) => state.cart);

    const [enterCoupon, setEnterCoupon] = useState('');

    const enterPromoCoupon = (event: ChangeEvent<HTMLInputElement>) => {
        setEnterCoupon(event.currentTarget.value)
        onChangeEvent && onChangeEvent(event.currentTarget.value);
    }

    const handleCalcDiscount = () => {
        if (enterCoupon === 'RS' || enterCoupon === 'EPM') {
            dispatch(calcDiscount(enterCoupon))
        }
    }

    const handleRemove = () => {
        dispatch(removeCoupon(enterCoupon))
    }

    return (
        <div className='cart-container'>
            <div className={`${items.length === 0 ? 'cart-info-wrap none' : 'cart-info-wrap'}`}>
                <h2 className='cart__title'>Shopping cart</h2>
                <p onClick={removeAllItems} className='cart__remove-all'>Remove all items</p>
            </div>
            <Pagination
                currentPage={currentPage}
                total={items.length}
                limit={1}
                onPageChange={(page = 0) => setCurrentPage(page)}
            />
            {items.length ? items.map((item) => (
                <CartItem onClickMinus={onClickMinus} onClickPlus={onClickPlus} key={item.id} data={item}/>
            )) : <div className='cart__empty-wrap'>
                <img className='cart__empty-image' src={cartEmpty} alt='empty'/>
            </div>
            }
            <div className={`${items.length === 0 ? 'none' : 'summary'}`}>
                <div className='summary__subtotal'>
                    <h2 className='subtotal-title'>Subtotal</h2>
                    <p className='subtotal-price'>${totalPrice}</p>
                </div>
                <div className='summary__discount'>
                    <div className='discount-form'>
                        <label className='discount-form__label'>Have a coupon?</label>
                        <div className='discount-form__coupon-wrap'>
                            {coupon ? coupon.map(item => (
                                <div className='discount-form__coupon' key={item}>
                                    <div className='coupon__item'>{item} <span>-10%</span></div>
                                    <button className='coupon__button' onClick={handleRemove}>Remove</button>
                                </div>
                            )) : null}
                        </div>
                        <div className='discount-form__input-wrap'>
                            <input
                                className='discount-form__input'
                                type='text'
                                placeholder='Enter promo code'
                                value={enterCoupon}
                                onChange={enterPromoCoupon}
                            />
                            <button className='discount-form__button' onClick={handleCalcDiscount}>Apply</button>
                        </div>
                        <p className='discount-form__example'>* Coupons for test: 'RS', 'EPM'</p>
                    </div>
                    <p className='discount-total'>- ${(discountTotalStore).toFixed(2)}</p>
                </div>
                <p className={discountTotalStore > 0 ? 'subtotal-price line-through' : 'none'}>${totalPrice}</p>
                <div className='summary__total'>
                    <h2 className='total-title'>Total</h2>
                    <p className='total-price'>${(totalPrice - discountTotalStore).toFixed(2)}</p>
                </div>
            </div>
            <div className='cart__buttons'>
                <Link className={`${items.length === 0 ? 'cart-button button-buy' : 'cart-button button-return'}`}
                      to='/' onClick={scrollToTop}>Continue shopping</Link>
                <div className='not-allowed'>
                    <button className={`cart-button button-buy ${items.length === 0 ? 'disabled' : ''}`}
                            onClick={openModal}>Proceed to checkout
                    </button>
                </div>
            </div>
            <ReactModal
                className='modal-popup-wrap'
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <div className='modal-popup__content'>
                    <button className='modal-popup__button-close' onClick={closeModal}>close</button>
                    <Modal/>
                </div>
            </ReactModal>
        </div>
    );
};

export default Cart;