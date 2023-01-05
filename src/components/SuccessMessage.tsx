import './../styles/SuccessMessage.css'
import Payment from './../assets/image/payment.png'
import {InputProps} from "./ModalPopup";

const SuccessMessage = ({name}: InputProps) => {
    return (
        <div className='success-message-wrap'>
            <div className='success-message__image-wrap'>
                <img className='success-message__image' src={Payment} alt='success payment' />
            </div>
            <div className='success-message__text'>
                <h2 className='text__title'>Thank you, <span className='text__title name'>{name}!</span></h2>
                <p className='text__subtitle'>Your payment is successful</p>
            </div>
        </div>
    );
};

export default SuccessMessage;