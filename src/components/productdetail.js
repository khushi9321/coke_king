
// ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../utils/CartContext';
import './productdetail.css';

const ProductDetail = () => {
  const { productId } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch product details by ID (you can replace this with a database call if necessary)
    const fetchProductDetails = () => {
      const productData = [
        {
          _id: '1',
          name: 'Acne face wash',
          description: 'Removes dirt, oil, sweat, and makeup...',
          price: '299',
          imageUrl: 'image_url_here',
        },
        {
          _id: '2',
          name: 'Cerave cleanser',
          description: 'Developed with dermatologists...',
          price: '499',
          imageUrl: 'image_url_here',
        },
        // Add all other products here...
      ];

      const product = productData.find((p) => p._id === productId);
      setProduct(product);
    };

    fetchProductDetails();
  }, [productId]);

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="product-detail">
      {product ? (
        <div className="product-detail-container">
          <img src={product.imageUrl} alt={product.name} className="product-image" />
          <div className="product-info">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>₹{product.price}</p>
            <button onClick={handleAddToCart}>🛒 Add to Cart</button>
            
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetail;
