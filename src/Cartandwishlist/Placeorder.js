import React, { useState } from 'react';
import './Placeorder.css';
import { FaShoppingCart, FaHeart, FaUser, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PlaceOrder = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false); // State for GIF display

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Order Details:', formData);

    try {
      const response = await axios.post('http://localhost:8080/api/place', formData);
      // Log response from the server

      // After successful order placement, display the confirmation GIF
      setOrderPlaced(true); 

      // Redirect to the landing page after a delay
      setTimeout(() => {
        navigate('/land');
      }, 5500);
       // Adjust delay as per your GIF duration
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Error placing order!');
    }
  };

  return (
    <div className="c0nt4in3r">
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
          <span className="icon-wrapper" onClick={() => navigate('/cart')}>
            <FaShoppingCart className="icon" title="Cart" />
          </span>
          <span className="icon-wrapper" onClick={() => navigate('/wish')}>
            <FaHeart className="icon" title="Wishlist" />
          </span>
          <span className="icon-wrapper" onClick={() => navigate('/profile')}>
            <FaUser className="icon" title="Profile" />
          </span>
        </div>
      </nav>

      <div className="place-order-container1">
        {orderPlaced ? (
          <div className="order-confirmation">
            <img 
              src="https://cdn.dribbble.com/users/5804730/screenshots/14516978/media/b0978897e159ccefcd7f6e25e6c4b4ca.gif" 
              alt="Order Placed"
              className="confirmation-gif"
            />
          </div>
        ) : (
          <>
            <h1>Place Order</h1>
            <div className="total-amount"></div>
            <form  className="order-form">
              <label>
                Full Name:
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
              </label>
              <label>
                Address:
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
              </label>
              <label>
                City:
                <input type="text" name="city" value={formData.city} onChange={handleChange} required />
              </label>
              <label>
                Postal Code:
                <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
              </label>
              <label>
                Phone Number:
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
              </label>
              <button type="submit" className="submit-order" onClick={handleSubmit}>Submit Order</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PlaceOrder;
