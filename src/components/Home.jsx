import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Careskin</div>
        <div className="nav-buttons">
          <Link to="/login">
            <button className="nav-button">Login</button>
          </Link>
          <Link to="/signup">
            <button className="nav-button">Signup</button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome to Careskin</h1>
        <p>Your trusted destination for quality skincare products!</p>
      </div>

      {/* Products Section */}
      <div className="products-section">
        <h2>Our Products</h2>
        <div className="products">
          <div className="product">
            <Link to="/signup">
              <img
                src="https://images.pexels.com/photos/17466173/pexels-photo-17466173/free-photo-of-transformative-makeup-for-the-bold-and-beautiful.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Product 1"
              />
            </Link>
            <p>Product 1</p>
          </div>
          <div className="product">
            <Link to="/signup">
              <img
                src="https://images.pexels.com/photos/17466173/pexels-photo-17466173/free-photo-of-transformative-makeup-for-the-bold-and-beautiful.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Product 2"
              />
            </Link>
            <p>Product 2</p>
          </div>
          <div className="product">
            <Link to="/signup">
              <img
                src="https://images.pexels.com/photos/17466173/pexels-photo-17466173/free-photo-of-transformative-makeup-for-the-bold-and-beautiful.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Product 3"
              />
            </Link>
            <p>Product 3</p>
          </div>
          <div className="product">
            <Link to="/signup">
              <img
                src="https://images.pexels.com/photos/17466173/pexels-photo-17466173/free-photo-of-transformative-makeup-for-the-bold-and-beautiful.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Product 4"
              />
            </Link>
            <p>Product 4</p>
          </div>
          <div className="product">
            <Link to="/signup">
              <img
                src="https://images.pexels.com/photos/17466173/pexels-photo-17466173/free-photo-of-transformative-makeup-for-the-bold-and-beautiful.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Product 5"
              />
            </Link>
            <p>Product 5</p>
          </div>
          <div className="product">
            <Link to="/signup">
              <img
                src="https://images.pexels.com/photos/17466173/pexels-photo-17466173/free-photo-of-transformative-makeup-for-the-bold-and-beautiful.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Product 6"
              />
            </Link>
            <p>Product 6</p>
          </div>
          <div className="product">
            <Link to="/signup">
              <img
                src="https://images.pexels.com/photos/17466173/pexels-photo-17466173/free-photo-of-transformative-makeup-for-the-bold-and-beautiful.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Product 7"
              />
            </Link>
            <p>Product 7</p>
          </div>
          <div className="product">
            <Link to="/signup">
              <img
                src="https://images.pexels.com/photos/17466173/pexels-photo-17466173/free-photo-of-transformative-makeup-for-the-bold-and-beautiful.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Product 8"
              />
            </Link>
            <p>Product 8</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Contact Us: info@careskin.com | Phone: +123-456-7890</p>
        <div className="social-media">
          <a href="https://www.facebook.com/" className="social-icon">
          <img src="   https://cdn-icons-png.flaticon.com/512/5968/5968764.png " width="34" height="34" alt="" title="" class="img-small" />
          Facebook</a>
          <a href="https://www.instagram.com/" className="social-icon">
          <img src="   https://cdn-icons-png.flaticon.com/512/2111/2111463.png " width="35" height="35" alt="" title="" class="img-small" />
            Instagram</a>
          <a href="https://x.com/?lang=en&mx=2" className="social-icon">
          <img src="   https://cdn-icons-png.flaticon.com/512/5968/5968764.png " width="34" height="34" alt="" title="" class="img-small" />
            Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
