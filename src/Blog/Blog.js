import React, { useState } from 'react';
import { FaShoppingCart, FaHeart, FaUser, FaSearch } from 'react-icons/fa';
import './Blog.css';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();
  const next1 = () => navigate('/cart');
  const next2 = () => navigate('/wish');
  const next3 = () => navigate('/profile');
  const next = () => navigate('/land');

  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Mahyco Seed Overview',
      image: 'https://www.mahyco.com/img/products/maize-hybrid/Untitled-32-300x300.jpg',
      description: 'Mahyco seeds are known for their high success rate and are widely used by farmers for their superior crop yield. With a germination success rate of 98%, these seeds ensure maximum productivity per acre. Average crop yield per acre is estimated at 40 quintals, making it one of the top choices for sustainable farming.',
      additionalInfo: 'The Mahyco MM 4010 (also known as MRM 4010) is a high-yield hybrid maize seed that has several beneficial qualities, making it suitable for medium-duration crop cycles, typically maturing in about 95-100 days.',
      purchaseInfo: 'Over 10,000 farmers have purchased the Mahyco MM 4010 seeds this year, reflecting its high demand and trust among the farming community.'
    },
    {
      id: 2,
      title: 'Kaveri 25K55 Seed',
      image:"https://agroshopy.com/image/cache/catalog/25K55-kaveri.jpg-228x228.jpg",
      description: 'Kaveri 25K55 is a high-quality hybrid maize seed developed to provide superior yields in both rain-fed and irrigated conditions. The seed is known for its disease resistance and drought tolerance.',
      additionalInfo: 'The Kaveri 25K55 hybrid maize variety matures in approximately 90-100 days and produces high-quality grain with a strong resistance to pests and diseases.',
      purchaseInfo: 'Farmers who have adopted Kaveri 25K55 have seen an increase in their crop yield by over 20%, making it a preferred choice in many regions.'
    },
    {
      id: 3,
      title: 'DMH 8255',
      image: 'https://www.rallis.com/Upload/Images/thumbnail/DMH8255-med.png',
      description: 'DMH 8255 is an elite hybrid maize seed that provides exceptional yield potential and disease resistance, ensuring optimal production in a variety of environmental conditions.',
      additionalInfo: 'With a fast maturity cycle, the DMH 8255 hybrid maize is ready to harvest in around 95-100 days. It is a perfect choice for farmers looking to maximize productivity while managing environmental stress.',
      purchaseInfo: 'DMH 8255 has been widely adopted by farmers in several regions, showing consistent growth in demand due to its excellent performance.'
    }
  ];

  // Filter blog posts based on the search term
  const filteredBlogs = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

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
            placeholder="Search Blog Titles"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <FaSearch className="search-icon" />
        </div>
        <div className="icon-s3ct10n">
          <span className="icon-wrapper" onClick={next1}><FaShoppingCart className="icon" title="Cart" /></span>
          <span className="icon-wrapper" onClick={next2}><FaHeart className="icon" title="Wishlist" /></span>
          <span className="icon-wrapper" onClick={next3}><FaUser className="icon" title="Profile" /></span>
        </div>
      </nav>

      {/* Blog Content Section */}
      <div className="blog-content">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map(post => (
            <div key={post.id} className="blog-post">
              <div className="image-grid">
                <img src={post.image} alt={post.title} className="blog-image" />
              </div>
              <div className="blog-details">
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-description">{post.description}</p>
                <br />
                <p className="blog-description">{post.additionalInfo}</p>
                <div className="purchase-stats">
                  <h3 className="purchase-title">Purchases</h3>
                  <p className="purchase-info">{post.purchaseInfo}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#777' }}>No blog posts match your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
