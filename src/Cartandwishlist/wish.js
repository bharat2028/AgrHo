// Product.js
import React from 'react';
import './Cart.css';
import { FaShoppingCart, FaHeart, FaUser, FaSearch } from 'react-icons/fa'; // Import the custom hooks
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';
const Wish = () => {

  const products = [
    {
      id: 1,
      name: 'MRM 4060',
      price: 'Rs.250.00',
      image: 'https://www.mahyco.com/img/products/maize-hybrid/Untitled-6-300x300.jpg',
      link: '/Products/wheat',
    },
    // Add more products as needed
  ];
  const navigate = useNavigate();
  const next1 = () => {
      navigate('/cart');
  };
  const next2 = () => {
      navigate('/wish');
  };
  const next3 = () => {
      navigate('/profile');
  };
  const Cart = () => {
      navigate('/cart');
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

      <div className="courses-container1">
        <div className="course-grid1">
          {products.map(product => (
            <div key={product.id} className="course-card1">
              <img src={product.image} alt={product.name} />
              <div className="course-details">
                <h3><a href={product.link} className="course-link">{product.name}</a></h3>
                <p className="course-price">{product.price}</p>
                <div className="course-buttons">
                  <button className="add-to-cart" onClick={Cart}>Add to Cart</button>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wish;
