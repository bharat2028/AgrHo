import React, { useState } from 'react';
import { FaShoppingCart, FaHeart, FaUser, FaSearch } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const next1 = () => navigate('/cart');
  const next2 = () => navigate('/wish');
  const next3 = () => navigate('/profile');
  const next = () => navigate('/Land');
  const pro = () => navigate('/prodet');

  const products = [
    { id: 1, name: 'MRM 4060', price: 'Rs.250.00', image: 'https://www.mahyco.com/img/products/maize-hybrid/Untitled-6-300x300.jpg' },
    { id: 2, name: 'Mahyco 4010', price: 'Rs.150.00', image: 'https://www.mahyco.com/img/products/maize-hybrid/Untitled-32-300x300.jpg' },
    { id: 3, name: 'MRM 3838', price: 'Rs.250.00', image: 'https://www.mahyco.com/img/products/maize-hybrid/Maize-MRM-3838-300x300.jpg' },
    { id: 4, name: 'MRM 4066', price: 'Rs.250.00', image: 'https://www.mahyco.com/img/products/maize-hybrid/Untitled-35-300x300.jpg' },
  ];

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search Seeds" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="search-icon" />
        </div>
        <div className="icon-s3ct10n">
          <span className="icon-wrapper" onClick={next1}><FaShoppingCart className="icon" title="Cart" /></span>
          <span className="icon-wrapper" onClick={next2}><FaHeart className="icon" title="Wishlist" /></span>
          <span className="icon-wrapper" onClick={next3}><FaUser className="icon" title="Profile" /></span>
        </div>
      </nav>

      {/* Welcome Section with Carousel */}
      <div className="content-carousel-section">
        <div className="welcome-text">
          <h1>
            <span className="welcome-part">Welcome</span>
            <span className="agrho-part">to AgrHo!</span>
          </h1>
          <p>Discover our new Hybrid seeds</p>
        </div>
        <div className="carousel-c0nt4in3r">
          <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={1000}>
            <div>
              <img src="https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" />
            </div>
            <div>
              <img src="https://images.pexels.com/photos/2583755/pexels-photo-2583755.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2" />
            </div>
            <div>
              <img src="https://tse4.mm.bing.net/th?id=OIP.djSd70AJWT-briQMlTJ6mQHaE7&pid=Api&P=0&h=180" alt="Image 3" />
            </div>
          </Carousel>
        </div>
      </div>

      {/* Products Section */}
      <div className="courses-container1">
        <h1 className="popular-seeds-heading">Popular Seeds</h1>
        <div className="course-grid1">
          {filteredProducts.map(product => (
            <div key={product.id} className="course-card1">
              <img src={product.image} alt={product.name} onClick={pro} />
              <div className="course-details">
                <h3><a className="course-link" onClick={pro}>{product.name}</a></h3>
                <p className="course-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default LandingPage;
