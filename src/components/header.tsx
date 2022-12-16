import "../styles/header.css";

import logo from "../assets/image/logo.jpg";
import basket from "../assets/image/basket.png";
import cream from "../assets/image/cream.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="header-logo" />
      <div className="header-center">
        <img src={cream} alt="cream" />
        <h1>Cosmetics</h1>
      </div>

      <img src={basket} alt="basket" />
    </header>
  );
};

export default Header;
