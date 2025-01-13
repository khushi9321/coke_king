import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import both useNavigate and Link from react-router-dom
import './Navbar.css';
// import CartPage from './CartPage';

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to /login
  };

  const handleSignupClick = () => {
    navigate('/signup'); // Navigate to /signup
  };

  return (
    <nav className="navbar">
      {/* <div className="logo">
        <h2>CareSkin</h2>
      </div>
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Search for skincare products..."
        />
        <button type="submit">Search</button>
      </form> */}

      {/* Skin Type Filter Section */}
      <div className="skin-type-filter">
        {/* <Link to="/products/oily" className="skin-type-option">
          Oily Skin
        </Link>
        <Link to="/products/dry" className="skin-type-option">
          Dry Skin
        </Link>
        <Link to="/products/combination" className="skin-type-option">
          Combination Skin
        </Link>
        <Link to="/products/sensitive" className="skin-type-option">
          Sensitive Skin
        </Link> */}
        {/* <button className="cart-button">
          <CartPage>
          🛒 Add to Cart
          </CartPage>

          </button> */}

        {/* Use buttons with onClick handlers */}
        {/* <button className="skin-type-option" onClick={handleLoginClick}>
          Log Out
        </button> */}
        {/* <button className="skin-type-option" onClick={handleSignupClick}>
          SignUp
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
