import React from 'react';
import './PersonalInfoPage.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PersonalInfoPage = () => {
  const user = {
    name: 'User',
    email: 'User.123@example.com',
    mobile: '123-456-7890',
  };

  const navigate = useNavigate();

  return (
    <div className="personal-info-page">
      <div className="user-profile">
        <aside className="sidebar">
          <h2>User Profile</h2>
          <nav>
            <ul>
              <li><Link to="/Profile" activeClassName="active">Profile</Link></li>
              <li><Link to="/settings" activeClassName="active">Settings</Link></li>
              <li><Link to="/order-history" activeClassName="active">Order History</Link></li>
              <li><Link to="/Wishlist" activeClassName="active">Wishlist</Link></li>
              <li><Link to="/Contact" activeClassName="active">Contact Us</Link></li>
            </ul>
          </nav>
        </aside>
        <main className="content">
          <h3>Welcome, {user.name}!</h3>
          <p>Email: {user.email}</p>
          <p>Mobile: {user.mobile}</p>
        </main>
      </div>
      <button className="logout-btn" onClick={() => navigate('/')}>Logout</button>
    </div>
  );
};

export default PersonalInfoPage;
