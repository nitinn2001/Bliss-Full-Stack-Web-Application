import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import BestSellers from './components/BestSellers/BestSellers';
import Products from './components/Products/Products';
import Prefooter from './components/Prefooter/Prefooter';
import Footer from './components/Footer/Footer';
import AllProducts from './Pages/AllProducts/AllProducts';
import SkinBodyBest from './Pages/SkinBodyBest/SkinBodyBest';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Pdp from './Pages/Pdp/Pdp';
import Cart from './Pages/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import AfterCheckout from './components/AfterCheckout/AfterCheckout';


const App = () => {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === '/checkout';

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path='/' element={
          <>
            <BestSellers />
            <Products />
            <Prefooter />
          </>
        } />
        <Route path='/cart' element={<Cart />} />
        <Route path='/collections/all-products' element={<AllProducts />} />
        <Route path='/collections/skincare' element={<AllProducts />} />
        <Route path='/collections/accessories' element={<AllProducts />} />
        <Route path='/collections/sets-and-kits' element={<AllProducts />} />
        <Route path='/collections/skin-and-body-best-sellers' element={<SkinBodyBest />} />
        <Route path='/collections/skincare-by-concern-fine-lines' element={<SkinBodyBest category={"Anti aging"} />} />
        <Route path='/collections/skincare-by-concern-acne-blemishes' element={<SkinBodyBest category={"Oily skin"} />} />
        <Route path='/collections/skincare-by-concern-dullness' element={<SkinBodyBest category={"Brightness"} />} />
        <Route path='/collections/skincare-by-concern-dryness' element={<SkinBodyBest category={"Dry Skin"} />} />
        <Route path='/collections/body-care-products' element={<SkinBodyBest category={"Body Care"} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products/:productId' element={<Pdp />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/after-checkout' element={<AfterCheckout />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </>
  );
}

export default App;
