import React, { useState } from 'react';
import './Cart.css';
import { FaShoppingCart, FaHeart, FaUser, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  const next1 = () => navigate('/cart');
  const next2 = () => navigate('/wish');
  const next3 = () => navigate('/profile');
  const Wish = () => navigate('/wish');
  const pro = () => navigate('/prodet');
  const placeOrder = () => navigate('/order');

  const products = [
    {
      id: 1,
      name: 'MRM 4060',
      price: 250,
      image: 'https://www.mahyco.com/img/products/maize-hybrid/Untitled-6-300x300.jpg',
      link: '/Products/wheat',
    },
    {
      id: 2,
      name: 'Mahyco 4010',
      price: 150,
      image: 'https://www.mahyco.com/img/products/maize-hybrid/Untitled-32-300x300.jpg',
      link: '/Products/rice',
    },
    // Add more products as needed
  ];

  const [cartItems, setCartItems] = useState(
    products.map(product => ({ ...product, quantity: 1 }))
  );

  const [selectedPayment, setSelectedPayment] = useState('');

  const handleQuantityChange = (id, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const deliveryFee = 50; // Example delivery fee
    const platformFee = 20; // Example platform fee
    const total = subtotal + deliveryFee + platformFee;

    return { subtotal, deliveryFee, platformFee, total };
  };

  const { subtotal, deliveryFee, platformFee, total } = calculateTotal();

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
          {cartItems.map(product => (
            <div key={product.id} className="course-card1">
              <img src={product.image} alt={product.name} />
              <div className="course-details">
                <h3><a onClick={pro} className="course-link">{product.name}</a></h3>
                <p className="course-price">Rs.{product.price}</p>
                <div className="quantity-section">
                  <label>Quantity:</label>
                  <input
                    type="number"
                    min="1"
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                  />
                </div>
                <div className="course-buttons">
                  <button className="add-to-wishlist" onClick={Wish}><FaHeart />Add to Wishlist</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="summary-section">
        <h3>Order Summary</h3>
        <p>Subtotal: Rs.{subtotal}</p>
        <p>Delivery Fee: Rs.{deliveryFee}</p>
        <p>Platform Fee: Rs.{platformFee}</p>
        <h4>Total Amount: Rs.{total}</h4>
      </div>

      <div className="payment-section">
        <h3>Choose Payment Method</h3>
        <label>
          <input
            type="radio"
            name="payment"
            value="UPI"
            onChange={(e) => setSelectedPayment(e.target.value)}
          /> UPI
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="payment"
            value="Credit Card"
            onChange={(e) => setSelectedPayment(e.target.value)}
          /> Credit Card
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="payment"
            value="Debit Card"
            onChange={(e) => setSelectedPayment(e.target.value)}
          /> Debit Card
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="payment"
            value="Cash on Delivery"
            onChange={(e) => setSelectedPayment(e.target.value)}
          /> Cash on Delivery
        </label>
        <p>Selected Payment Method: {selectedPayment}</p>
      </div>
      <button className="place-order" onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default Cart;
