import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./index.css";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Loginsignup from "./Pages/Loginsignup";
import Footer from "./Components/Footer/Footer";
import mobilebanner from './Components/assets/mobilebanner.webp'
import laptopbanner from './Components/assets/laptopbanner.avif'
import accessoriesbanner from './Components/assets/accessories.png'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/mobiles" element={<ShopCategory category="Mobiles" banner={mobilebanner} />} />
          <Route path="/laptops" element={<ShopCategory category="laptops" banner={laptopbanner}/>} />
          <Route path="/accessories" element={<ShopCategory category="accessories" banner={accessoriesbanner}/>} />
          <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Loginsignup/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};


export default App;
