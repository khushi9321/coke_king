// WishlistPage.js
import React, { useState } from 'react';
import './wishlistpage.css'; // Add styling if needed

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([
    {
      _id: '1',
      name: 'Acne Face Wash',
      description: 'Removes dirt, oil, sweat, and makeup...',
      price: '299',
      imageUrl: 'https://via.placeholder.com/250x180?text=Acne+Face+Wash',
    },
    {
      _id: '2',
      name: 'Cerave Cleanser',
      description: 'Gentle face wash with ceramides...',
      price: '499',
      imageUrl: 'https://via.placeholder.com/250x180?text=Cerave+Cleanser',
    },
    // Add more products as needed
  ]);

  const handleRemoveFromWishlist = (productId) => {
    setWishlist(wishlist.filter((product) => product._id !== productId));
  };

  return (
    <div className="wishlist-page">
      <h1>Your Wishlist</h1>
      {wishlist.length > 0 ? (
        <div className="wishlist-container">
          {wishlist.map((product) => (
            <div key={product._id} className="wishlist-card">
              <img src={product.imageUrl} alt={product.name} className="wishlist-image" />
              <div className="wishlist-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="price">₹{product.price}</p>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveFromWishlist(product._id)}
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default WishlistPage;
