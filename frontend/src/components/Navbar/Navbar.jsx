import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaSearch, FaShoppingBasket } from 'react-icons/fa';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("Home");

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/' className="navbar-logo">
        <img src={assets.logo} alt="Logo" />
      </Link>

      <ul className="navbar-menu">
        <li>
          <Link to="/" onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>
            Menu
          </a>
        </li>
        <li>
          <a href='#app-donwload' onClick={() => setMenu("Mobile app")} className={menu === "Mobile app" ? "active" : ""}>
            Mobile app
          </a>
        </li>
        <li>
          <a href='#footer' onClick={() => setMenu("Contact us")} className={menu === "Contact us" ? "active" : ""}>
            Contact us
          </a>
        </li>
        <li>
          <a href='#about-section' onClick={() => setMenu("About")} className={menu === "About" ? "active" : ""}>
            About
          </a>
        </li>
      </ul>

      <div className="navbar-right">
        <div className="navbar-search">
          <FaSearch className="navbar-search-icon" />
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <Link to='/Cart' className="navbar-cart">
          <FaShoppingBasket className="navbar-basket-icon" />
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </Link>
        <button onClick={() => setShowLogin(true)} className="navbar-signin-btn">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar; 