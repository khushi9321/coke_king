import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './ProductList.css';

// Navbar Component
const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Front Man_001',
    email: 'Frontman@gmail.com',
    phone: '123-456-7890',
    address: '123 Main St, Springfield ,unknown island',
  });
  const [showUserForm, setShowUserForm] = useState(false);

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  const toggleUserForm = () => {
    setShowUserForm((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
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
        </form>

        <div className="skin-type-filter">
          <Link to="/products/oily" className="skin-type-option">Oily Skin</Link>
          <Link to="/products/dry" className="skin-type-option">Dry Skin</Link>
          <Link to="/products/combination" className="skin-type-option">Combination Skin</Link>
          <Link to="/products/sensitive" className="skin-type-option">Sensitive Skin</Link>
          <button className="cart-button" onClick={() => navigate('/cart')}> Add to Cart</button>
              <button className="skin-type-option" onClick={handleLogout}>Logout</button>
              <button
                className="view-user-data-btn"
                onClick={toggleUserForm}
              >
                Personal Info
              </button>
        </div>
      </nav>

      {showUserForm && (
        <div className="user-data-overlay">
          <div className="user-data-form">
          <img 
          src="https://cdn3d.iconscout.com/3d/free/preview/free-front-man-mask-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--squid-game-squidgame-face-pack-sports-games-illustrations-3770325@0.png?f=webp&h=700" 
          alt="User" 
          className="user-image" 
        />
            <h3>Your Information </h3>
            <form>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={userData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Address:</label>
                <textarea
                  name="address"
                  value={userData.address}
                  onChange={handleInputChange}
                />
              </div>
            </form>
            <button
              className="close-btn"
              onClick={() => setShowUserForm(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


// ProductList Component
const ProductList = () => {
  const [products, setProducts] = useState([
    {
      _id: '1',
      name: 'Cleansing Gel',
      description: 'Gentle cleansing gel for oily skin',
      price: '299',
      imageUrl: '/path/to/image.jpg',
    },
    {
      _id: '2',
      name: 'Moisturizer',
      description: 'Hydrating moisturizer for dry skin',
      price: '499',
      imageUrl: '/path/to/image.jpg',
    },
      // Oily Skin
      {
        _id: '1',
        name: 'Aloe Vera Gel',
        description: 'Soothing gel for skin hydration.',
        price: 600.00,
        skinType: 'oily',
        imageUrl: 'https://images.pexels.com/photos/14798574/pexels-photo-14798574.jpeg?auto=compress&cs=tinysrgb&w=600',
      }, 
        {
        _id: '2',
        name: 'Oil Control Face Wash',
        description: 'Deep cleansing face wash for excess oil.',
        price: 500.99,
        skinType: 'oily',
        imageUrl: 'https://images.pexels.com/photos/17466173/pexels-photo-17466173/free-photo-of-transformative-makeup-for-the-bold-and-beautiful.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        _id: '3',
        name: 'Mattifying Moisturizer',
        description: 'Lightweight moisturizer for oily skin.',
        price: 450.87,
        skinType: 'oily',
        imageUrl: 'https://via.placeholder.com/250x180?text=Mattifying+Moisturizer',
      },
      {
        _id: '4',
        name: 'Clay Mask',
        description: 'Purifying clay mask for oil absorption.',
        price: 354.99,
        skinType: 'oily',
        imageUrl: 'https://via.placeholder.com/250x180?text=Clay+Mask',
      },
      {
        _id: '5',
        name: 'Pore Minimizer Toner',
        description: 'Toner to tighten pores and reduce oiliness.',
        price: 808.98,
        skinType: 'oily',
        imageUrl: 'https://via.placeholder.com/250x180?text=Pore+Minimizer+Toner',
      },
      // Dry Skin
      {
        _id: '6',
        name: 'Hydrating Cream',
        description: 'Rich cream for deep hydration.',
        price: 590.56,
        skinType: 'dry',
        imageUrl: 'https://via.placeholder.com/250x180?text=Hydrating+Cream',
      },
      {
        _id: '7',
        name: 'Shea Butter Lotion',
        description: 'Lotion enriched with shea butter for soft skin.',
        price: 450.98,
        skinType: 'dry',
        imageUrl: 'https://via.placeholder.com/250x180?text=Shea+Butter+Lotion',
      },
      {
        _id: '8',
        name: 'Gentle Milk Cleanser',
        description: 'Mild cleanser for dry, sensitive skin.',
        price: 500.00,
        skinType: 'dry',
        imageUrl: 'https://via.placeholder.com/250x180?text=Gentle+Milk+Cleanser',
      },
      {
        _id: '9',
        name: 'Overnight Repair Mask',
        description: 'Overnight mask to restore skin moisture.',
        price: 879.98,
        skinType: 'dry',
        imageUrl: 'https://via.placeholder.com/250x180?text=Overnight+Repair+Mask',
      },
      {
        _id: '10',
        name: 'Hyaluronic Acid Serum',
        description: 'Serum to lock in moisture and smooth skin.',
        price: 650.98,
        skinType: 'dry',
        imageUrl: 'https://via.placeholder.com/250x180?text=Hyaluronic+Acid+Serum',
      },
      // Combination Skin
      {
        _id: '11',
        name: 'Balancing Gel Moisturizer',
        description: 'Hydrating gel for combination skin.',
        price: 450.00,
        skinType: 'combination',
        imageUrl: 'https://via.placeholder.com/250x180?text=Balancing+Gel+Moisturizer',
      },
      {
        _id: '12',
        name: 'T-Zone Control Serum',
        description: 'Serum for oily T-zone and dry cheeks.',
        price: 659.90,
        skinType: 'combination',
        imageUrl: 'https://via.placeholder.com/250x180?text=T-Zone+Control+Serum',
      },
      {
        _id: '13',
        name: 'Gentle Exfoliating Scrub',
        description: 'Mild exfoliant for balanced skin.',
        price: 349.50,
        skinType: 'combination',
        imageUrl: 'https://via.placeholder.com/250x180?text=Gentle+Exfoliating+Scrub',
      },
      {
        _id: '14',
        name: 'Hydration and Matte Primer',
        description: 'Dual-action primer for combination skin.',
        price: 549.58,
        skinType: 'combination',
        imageUrl: 'https://via.placeholder.com/250x180?text=Hydration+and+Matte+Primer',
      },
      {
        _id: '15',
        name: 'Balancing Toner',
        description: 'Toner to balance hydration and control oil.',
        price: 450.67,
        skinType: 'combination',
        imageUrl: 'https://via.placeholder.com/250x180?text=Balancing+Toner',
      },
      // Sensitive Skin
      {
        _id: '16',
        name: 'Calming Chamomile Cream',
        description: 'Cream to soothe sensitive skin.',
        price: 545.89,
        skinType: 'sensitive',
        imageUrl: 'https://via.placeholder.com/250x180?text=Calming+Chamomile+Cream',
      },
      {
        _id: '17',
        name: 'Fragrance-Free Moisturizer',
        description: 'Moisturizer designed for sensitive skin.',
        price: 567.99,
        skinType: 'sensitive',
        imageUrl: 'https://via.placeholder.com/250x180?text=Fragrance-Free+Moisturizer',
      },
      {
        _id: '18',
        name: 'Anti-Redness Serum',
        description: 'Serum to reduce redness and irritation.',
        price: 450.00,
        skinType: 'sensitive',
        imageUrl: 'https://via.placeholder.com/250x180?text=Anti-Redness+Serum',
      },
      {
        _id: '19',
        name: 'SPF 50 Sunscreen',
        description: 'Gentle sunscreen for sensitive skin.',
        price: 567.87,
        skinType: 'sensitive',
        imageUrl: 'https://via.placeholder.com/250x180?text=SPF+50+Sunscreen',
      },
      {
        _id: '20',
        name: 'Soothing Green Tea Mask',
        description: 'Mask to calm sensitive skin.',
        price: 150.87,
        skinType: 'sensitive',
        imageUrl: 'https://via.placeholder.com/250x180?text=Soothing+Green+Tea+Mask',
      }
    // Add more products as needed
  ]);

  const handleSearch = (query) => {
    // Implement search functionality (this is just a placeholder)
    alert(`Searching for: ${query}`);
  };

  const navigate = useNavigate();
  const handleCart = () => {
    navigate('/cart');
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <div className="product-list">
        <h1>Featured Skincare Products</h1>
        <div className="products-container">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className="product-card">
                <img src={product.imageUrl} alt={product.name} className="product-image" />
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p className="price">₹{product.price}</p>
                  <button
      className="add-to-cart-btn"
      onClick={() => handleCart(product)}
    >
      🛒 Add to Cart
    </button>
                </div>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
      <h3>About SkinTypes</h3>
     <div className='footer'>
     <p className='skin-type-description'>
        <h3 className='skin-type'>
        <h4>Oily Skin</h4>
        <p>Oily skin is characterized by excess oil production, leading to shiny and greasy skin. Look for products that balance oil and mattify your skin.</p>
        </h3>
        <h3 className='skin-type'>
    {/* dry: 'Dry skin feels tight, flaky, and may have rough patches. Look for moisturizing products that help retain skin hydration.', */}
    <h4>Dry Skin</h4>
    <p>Dry skin feels tight, flaky, and may have rough patches. Look for moisturizing products that help retain skin hydration.</p>
        </h3>
        <h3 className='skin-type'>
    {/* combination: 'Combination skin has areas that are oily, typically the T-zone, and other areas that are dry or normal. Look for balancing products.', */}
    <h4>Combination Skin</h4>
    <p>Combination skin has areas that are oily, typically the T-zone, and other areas that are dry or normal. Look for balancing products.</p>
        </h3>
        <h3 className='skin-type'>
    {/* sensitive: 'Sensitive skin may react to certain ingredients or external factors. Use gentle products that calm and soothe irritation.', */}
    <h4>Sensitive Skin</h4>
            <p>Sensitive skin may react to certain ingredients or external factors. Use gentle products that calm and soothe irritation.</p>

        </h3>
      </p>
      </div>
    </div>
  );
};

export default ProductList;
