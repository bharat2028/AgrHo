import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Login from './login/Login.js';
import Signup from './login/Signup.js';
import LandingPage from './Dash/LandingPage.js';
import Product from './product/Product.js';
import Narr from './Narr/Narr.js';
import Cart from './Cartandwishlist/Cart.js';
import Wish from './Cartandwishlist/wish.js';
import PlaceOrder from './Cartandwishlist/Placeorder.js';
import Profile from './Profile/Profile.js';
import Blog from './Blog/Blog.js';
import Prodet from './Prodet/Prodet.js';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/up" element={<Signup/>}/>
      <Route path="/land" element={<LandingPage/>}/>
      <Route path="/pro" element={<Product/>}/>      
      <Route path="/new" element={<Narr/>}/>      
      <Route path="/cart" element={<Cart/>}/>      
      <Route path="/wish" element={<Wish/>}/>      
      <Route path="/order" element={<PlaceOrder/>}/>      
      <Route path="/profile" element={<Profile/>}/>      
      <Route path="/blog" element={<Blog/>}/> 
      <Route path="/prodet" element={<Prodet/>}/> 

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
