import React, { useState } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaUser, FaSearch } from 'react-icons/fa'; // Import the custom hooks

const Profile = () => {
    const navigate = useNavigate();
  const next = () => {
      navigate('/');
  };
  const next1 = () => {
      navigate('/cart');
  };
  const next2 = () => {
      navigate('/wish');
  };
  const next3 = () => {
      navigate('/profile');
  };
  const cart = () => {
    navigate('/cart');
};
const wish = () => {
    navigate('/wish');
};
  const [orders, setOrders] = useState([
    { id: 1, item: 'MRM 4060', deliveryDate: '2024-11-10' },
    { id: 2, item: 'Mahyco 4010', deliveryDate: '2024-11-15' },
    { id: 3, item: 'MRM 3838', deliveryDate: '2024-11-18' },
  ]);
  
  const [expandedOrder, setExpandedOrder] = useState(null);

  const toggleOrder = (id) => {
    setExpandedOrder(expandedOrder === id ? null : id);
  };

  return (
    <div className='c0nt4in3r'>
    <nav className="n4vb4r">
      <div className="l0g0-s3ct10n">
        <span className="agrho-text">
          <span className="agr-part">Agr</span>
          <span className="ho-part">Ho</span>
        </span>
      </div>
      <ul className="n4v-l1nks">
        <li><a href="land">Home</a></li>
        <li><a href="pro">Products</a></li>
        <li><a href="new">New Arrivals</a></li>
        <li><a href="blog">Blog</a></li>
      </ul>
      <div className="search-item">
        <input type="text" className="search-input" placeholder="Search Seeds" />
        <FaSearch className="search-icon" />
      </div>
      <div className="icon-s3ct10n">
      <span className="icon-wrapper" onClick={next1}><FaShoppingCart className="icon" title="Cart" /></span>
      <span className="icon-wrapper" onClick={next2}><FaHeart className="icon" title="Wishlist" /></span>
      <span className="icon-wrapper" onClick={next3}><FaUser className="icon" title="Profile" /></span>
      </div>
    </nav>

    <div className="profile-container">
      <h2 className="profile-title">My Profile</h2>
      <div className="order-list">
        {orders.map((order) => (
          <div key={order.id} className="order-item">
            <div className="order-header" onClick={() => toggleOrder(order.id)}>
              <span>{order.item}</span>
              <button className="toggle-button">
                {expandedOrder === order.id ? 'Hide' : 'Show'} Delivery Date
              </button>
            </div>
            {expandedOrder === order.id && (
              <div className="delivery-date">Delivery Date: {order.deliveryDate}</div>
            )}
          </div>
        ))}
      </div>
      <div className="button-container">
      <button className="log" onClick={next}>Log Out</button>
    </div>
    
    </div>
    </div>
  );
};

export default Profile;
