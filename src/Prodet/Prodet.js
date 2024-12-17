import React from 'react';
import { FaShoppingCart, FaHeart, FaUser, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Prodet.css'
const Prodet = () => {
  const navigate = useNavigate();
  const next1 = () => navigate('/cart');
  const next2 = () => navigate('/wish');
  const next3 = () => navigate('/profile');
  const next = () => navigate('/Land');
  const pro = () => navigate('/prodet');
  const productDetails = {
    name: 'Mahyco MM 4060 Hybrid Maize Seed',
    price: '$250.00',
    seller: 'Mahyco Distributors',
    deliveryDate: 'Estimated delivery by Nov 15, 2024',
    imageUrl: 'https://www.mahyco.com/maize-mrm-4060.html' // Replace with actual image path
  };
  const products = [
    {
      id: 1,
      name: 'MRM 4060',
      price: 'Rs.250.00',
      image: 'https://www.mahyco.com/img/products/maize-hybrid/Untitled-6-300x300.jpg',

    },
    {
      id: 2,
      name: 'Mahyco 4010',
      price: 'Rs.150.00',
      image: 'https://www.mahyco.com/img/products/maize-hybrid/Untitled-32-300x300.jpg',
  
    },
    {
      id: 3,
      name: 'MRM 3838',
      price: 'Rs.250.00',
      image: 'https://www.mahyco.com/img/products/maize-hybrid/Maize-MRM-3838-300x300.jpg',
  
    },
    {
      id: 4,
      name: 'MRM 4066',
      price: 'Rs.250.00',
      image: 'https://www.mahyco.com/img/products/maize-hybrid/Untitled-35-300x300.jpg',
    },
  ]

  return (
    <div className="c0nt4in3r">
      <nav className="n4vb4r">
        <div className="l0g0-s3ct10n">
          <span className="agrho-text">
            <span className="agr-part" onClick={next}>Agr</span>
            <span className="ho-part" onClick={next}>Ho</span>
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

      <div className="product-details-container">
      <div className="product-image-section">
        <img src={"https://www.mahyco.com/img/products/maize-hybrid/Untitled-6-300x300.jpg"} alt={productDetails.name} className="product-image" />
      </div>
      <div className="product-info-section">
        <h1 className="product-name">{productDetails.name}</h1>
        <p className="product-price">Price: {productDetails.price}</p>
        <p className="product-seller">Seller: {productDetails.seller}</p>
        <p className="product-delivery">Delivery by: {productDetails.deliveryDate}</p>

        <div className="action-buttons">
          <button className="add-to-cart-button" onClick={next1}>
            <FaShoppingCart /> Add to Cart
          </button>
          <button className="wishlist-button" onClick={next2}>
            <FaHeart /> Add to Wishlist
          </button>
        </div>
      </div>
</div>


<div className="courses-container1">
<h1 className="popular-seeds-heading">Similar Items </h1>

<div className="course-grid1">
  {products.map(product => (
    <div key={product.id} className="course-card1">
      <img src={product.image} alt={product.name} onClick={pro}/>
      <div className="course-details">
        <h3><a  className="course-link" onClick={pro}>{product.name}</a></h3>
        <p className="course-price">{product.price}</p>
        <div className="course-buttons">
        </div>
      </div>
    </div>
  ))}
</div>
</div>
    </div>
  );
};

export default Prodet;
