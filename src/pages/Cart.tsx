import {Link} from "react-router-dom";
import './../styles/Cart.css'
import CartItem from "../components/CartItem";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {addItem, clearItems, ICardStore, removeItem} from "../redux/slices/cartSlice";
import cartEmpty from './../assets/image/empty.png'
import ReactModal from 'react-modal';
import {useState} from "react";
import Modal from "../components/ModalPopup";
import Pagination from '../components/Pagination'

export interface PaginationProps {
    limit?: number,
    total?: number,
    currentPage: number,
    page?: number,
    onPageChange: (page?:number) => void,
}

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

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    const [currentPage, setCurrentPage] = useState(1);

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
            <Pagination
                currentPage={currentPage}
                total={items.length}
                limit={1}
                onPageChange={(page=0) => setCurrentPage(page)}
            />
            <div className='cart__buttons'>
                <Link className={`${items.length === 0 ? 'cart-button button-buy' : 'cart-button button-return'}`}
                      to='/' onClick={scrollToTop}>Continue shopping</Link>
                <div className='not-allowed'>
                    <button className={`cart-button button-buy ${items.length === 0 ? 'disabled' : ''}`}
                            onClick={openModal}>Proceed to
                        checkout
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