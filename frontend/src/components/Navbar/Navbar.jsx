import React, { useState } from 'react';
import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState("");
  const navigate = useNavigate()
  return (
    <div className='nav-bar'>
      <div className="nav-top">
        <p className="shipping-text">
          <a href="#">Free shipping on U.S orders $50+. Free returns. International shipping!</a>
        </p>
      </div>
      <div className="nav-bottom">
        <div className="nav-bottom-1">
          <button className='side-bar'>
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 5V19M16 8H18M16 11H18M16 14H18M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <Link to='/'><img className='bliss-logo' src="https://www.blissworld.com/cdn/shop/files/Bliss_Logo_White_3x_6c3396d6-15e0-4c23-a933-633783887842_140x@2x.png?v=1675358315" alt="Bliss Logo" /></Link>
          <ul className='side-icons'>
            <li className='search-icon'>
              {/* <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg> */}
              
            </li>
            <li>
              <Link to='/cart'><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10L15 4M21 10H3M21 10L19.6431 16.7845C19.2692 18.6542 17.6275 20 15.7208 20H8.27922C6.37249 20 4.73083 18.6542 4.35689 16.7845L3 10M3 10L9 4" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></Link>
            </li>
            <li>
              <Link to="/login"><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg></Link>
            </li>
          </ul>
        </div>
        <div className="nav-bottom-2">
          <ul className='options'>
            <li onClick={() => setToggle("Shop")} className={toggle === "Shop" ? "active" : ""}><Link to="/collections/all-products">Shop All</Link></li>
            <li onClick={() => setToggle("Best")} className={toggle === "Best" ? "best-sellers active" : "best-sellers"}>
              <Link to="/collections/skin-and-body-best-sellers">Best Sellers</Link>
              <div className="best-seller-popup">
                <p>Shop All Best Sellers</p>
                <p>Shop Skincare Best Sellers</p>
                <p>Shop Body Best Sellers</p>
              </div>
            </li>
            <li onClick={() => setToggle("Skin")} className={toggle === "Skin" ? "skin-care active" : "skin-care"}>
                <Link to="/collections/skincare">Skin Care</Link>
                <div className="skincare-popup">
                    <div className="category">
                        <h2>BY CATEGORY</h2>
                        <ul>
                            <li>Shop All Skincare</li>
                            <li>Best Sellers</li>
                            <li>Moisturizers & SPF's</li>
                            <li>Serums</li>
                            <li>Cleansers</li>
                            <li>Eye and Lips</li>
                            <li>Exfoliators and Treatments</li>
                            <li>Toners</li>
                            <li>Face Masks</li>
                            <li>Travel size and minis</li>
                            <li>Accessories</li>
                        </ul>
                    </div>
                    <div className="category">
                        <h2>BY COLLECTIONS</h2>
                        <ul>
                            <li>Drench & Quench x @courtneyshields</li>
                            <li>Block Star</li>
                            <li>Clear Genius</li>
                            <li>Bright Idea</li>
                            <li>Makeup Melt</li>
                            <li>Rose Gold Rescue</li>
                            <li>Mighty Biome</li>
                            <li>Youth Got This</li>
                            <li>BlissPRO</li>
                            <li>Disappearing Act</li>
                        </ul>
                    </div>
                    <div className="category">
                        <img src='https://www.blissworld.com/cdn/shop/files/skincare-2_370x230@2x.png?v=1676997627' alt='spf image'/>
                        <h2>Your invisible SPF Block Star</h2>
                        <p className='spf'>No white-cast ever</p>
                    </div>
                </div>
                </li>
            <li onClick={() => setToggle("Concern")} className={toggle === "Concern" ? "concern active" : "concern"}>
              <Link to="/collections/skin-and-body-best-sellers">Shop by Concern</Link>
              <div className="concern-popup">
                <p>Anti aging and fine lines</p>
                <p>Oily & blemish prone</p>
                <p>Brightness and Radiance</p>
                <p>Calming and Smoothing</p>
                <p>Dry</p>
                <p>Body Care</p>
                <p>I'm not sure</p>
              </div>
            </li>
            <li onClick={() => setToggle("Body")} className={toggle === "Body" ? "body active" : "body"}>
              <Link to="/collections/body-care-products">Body Care</Link>
              <div className="skincare-popup">
                <div className="category">
                  <h2>BODY AND HAIR CARE</h2>
                    <ul>
                        <li>Shop All Body & Hair Care</li>
                        <li>Best Sellers</li>
                        <li>Body Moisturizers</li>
                        <li>Body Wash and Scrubs</li>
                        <li>Hair removal</li>
                        <li>Hair Care</li>
                        <li>Body Firming</li>
                        <li>Accessories</li>
                    </ul>
                </div>
                      <div className="category">
                          <h2>BY COLLECTIONS</h2>
                          <ul>
                              <li>Lemon and Sage</li>
                              <li>Fabgirl</li>
                              <li>FabulLips</li>
                              <li>Exclusive Pro Sizes</li>
                          </ul>
                      </div>
                      <div className="category">
                          <img src='https://www.blissworld.com/cdn/shop/files/Bliss_Lemon_Sage_Product_Family_Full_Image-ECommerce_JPG_37099f6f-c166-4de9-84df-d03c445c0ad9_370x230@2x.jpg?v=1698812134' alt='body care image'/>
                          <h2>The Scent that started it all!</h2>
                          <p className='spf'>Shop the supreme citrus that puts us on the map!</p>
                      </div>
                </div>
            </li>
            <li onClick={() => setToggle("Sets")} className={toggle === "Sets" ? "sets active" : "sets"}>
              <Link to="/collections/sets-and-kits">Sets & Kits</Link>
              <div className="concern-popup">
                <p>Anti aging and fine lines</p>
                <p>Oily & blemish prone</p>
                <p>Brightness and Radiance</p>
                <p>Calming and Smoothing</p>
                <p>Dry</p>
                <p>Body Care</p>
                <p>I'm not sure</p>
              </div>
            </li>
            <li onClick={() => setToggle("Accessories")} className={toggle === "Accessories" ? "active" : ""}><Link to="/collections/accessories">Accessories</Link></li>
            <li onClick={() => setToggle("Quiz")} className={toggle === "Quiz" ? "active" : ""}><Link to="/collections/find-your-routine">Skin Quiz</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
