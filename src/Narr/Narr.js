// Product.js
import React from 'react';
import './Narr.css';  // Ensure the correct CSS file is imported
import { FaShoppingCart, FaHeart, FaUser, FaSearch } from 'react-icons/fa'; // Import the custom hooks
import { useNavigate } from 'react-router-dom';

const Narr = () => {
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

  const cart = () => {
    navigate('/cart');
  };

  const wish = () => {
    navigate('/wish');
  };

  const Blog = () => {
    navigate('/blog');
  };

  const pro = () => {
    navigate('/prodet');
  };

  const products = [
    {
      id: 4,
      name: 'MRM 4066',
      price: 'Rs.250.00',
      image: 'https://www.mahyco.com/img/products/maize-hybrid/Untitled-35-300x300.jpg',
      link: 'https://www.mahyco.com/maize-mrm-4060.html',
    },
    {
      id: 1,
      name: 'MRM 4060',
      price: 'Rs.250.00',
      image: 'https://www.mahyco.com/img/products/maize-hybrid/Untitled-6-300x300.jpg',
      link: 'https://www.mahyco.com/maize-mrm-4060.html',
    },
    {
      id: 2,
      name: 'Mahyco 4010',
      price: 'Rs.150.00',
      image: 'https://www.mahyco.com/img/products/maize-hybrid/Untitled-32-300x300.jpg',
      link: 'https://www.mahyco.com/maize-mrm-4060.html',
    },
    {
      id: 3,
      name: 'MRM 3838',
      price: 'Rs.250.00',
      image: 'https://www.mahyco.com/img/products/maize-hybrid/Maize-MRM-3838-300x300.jpg',
      link: 'https://www.mahyco.com/maize-mrm-4060.html',
    },
    {
      id: 5,
      name: 'Mahyco 4010',
      price: 'Rs.150.00',
      image: 'https://www.mahyco.com/img/products/maize-hybrid/Untitled-32-300x300.jpg',
      link: 'https://www.mahyco.com/maize-mrm-4060.html',
    },
    {
      id: 4,
      name: 'MRM 4066',
      price: 'Rs.250.00',
      image: 'https://www.mahyco.com/img/products/maize-hybrid/Untitled-35-300x300.jpg',
      link: '/Products/wheat',
    },
    {
      id: 7,
      name: 'MRM 3838',
      price: 'Rs.250.00',
      image: 'https://www.mahyco.com/img/products/maize-hybrid/Maize-MRM-3838-300x300.jpg',
      link: '/Products/soybean',
    },
    {
      id: 6,
      name: 'MRM 4066',
      price: 'Rs.250.00',
      image: 'https://www.mahyco.com/img/products/maize-hybrid/Untitled-35-300x300.jpg',
      link: '/Products/wheat',
    },
    {
      id: 8,
      name: 'MRM 4060',
      price: 'Rs.250.00',
      image: 'https://www.mahyco.com/img/products/maize-hybrid/Untitled-6-300x300.jpg',
      link: '/Products/wheat',
    },
    {
      id: 2,
      name: 'Mahyco 4010',
      price: 'Rs.150.00',
      image: 'https://www.mahyco.com/img/products/maize-hybrid/Untitled-32-300x300.jpg',
      link: '/Products/rice',
    },
    {
      id: 1,
      name: 'MRM 4060',
      price: 'Rs.250.00',
      image: 'https://www.mahyco.com/img/products/maize-hybrid/Untitled-6-300x300.jpg',
      link: '/Products/wheat',
    },
    {
      id: 3,
      name: 'MRM 3838',
      price: 'Rs.250.00',
      image: 'https://www.mahyco.com/img/products/maize-hybrid/Maize-MRM-3838-300x300.jpg',
      link: '/Products/soybean',
    },
    // Add more products as needed
  ];

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
          <span className="icon-wrapper" onClick={next1}>
            <FaShoppingCart className="icon" title="Cart" />
          </span>
          <span className="icon-wrapper" onClick={next2}>
            <FaHeart className="icon" title="Wishlist" />
          </span>
          <span className="icon-wrapper" onClick={next3}>
            <FaUser className="icon" title="Profile" />
          </span>
        </div>
      </nav>

      <div className="course-grid1">
        {products.map((product) => (
          <div key={product.id} className="course-card1">
            <img src={product.image} alt={product.name} className="course-image1" />
            <div className="course-details">
              <h3>
                <a onClick={pro} className="course-link">{product.name}</a>
              </h3>
              <p className="course-price">{product.price}</p>
              <div className="course-buttons">
                <button className="add-to-cart" onClick={cart}>Add to Cart</button>
                <button className="add-to-cart" onClick={Blog}>Blog</button>
                <button className="add-to-wishlist" onClick={wish}>Add to Wishlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Narr;
 