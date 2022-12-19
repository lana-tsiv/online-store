import "../styles/header.css";
import logo from "../assets/image/logo.jpg";
import basket from "../assets/image/basket.png";
import cream from "../assets/image/cream.png";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Link to='/'>
                <img className="header__logo" src={logo} alt="header-logo"/>
            </Link>
            <div className="header-center">
                <img className="header-center__image" src={cream} alt="cream"/>
                <h1>Cosmetics</h1>
            </div>
            <div className='basket-wrap'>
                <div className='basket__price'>
                    <p className='price__text'>total price: </p>
                    <p className='price__total'>$0</p>
                </div>
                <Link to='/cart'>
                    <div className='basket-icon'>
                        <img className='basket__image' src={basket} alt="basket"/>
                        <div className='basket__quantity'>0</div>
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;