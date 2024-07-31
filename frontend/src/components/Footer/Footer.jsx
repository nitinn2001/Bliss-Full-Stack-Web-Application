import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="prefooter-3">
          <div className="prefooter-3-title">
            <h2>Discover even more to love from our sister brands</h2>
          </div>
          <div className="sister-brands">
            <a href='https://www.laurageller.com/' target='_blank'><img src="https://www.blissworld.com/cdn/shop/files/laura_geller_1.png?v=1717092943&width=600" alt="" /></a>
            <a href='https://www.laurageller.com/' target='_blank'><img src="https://www.blissworld.com/cdn/shop/files/julep_1.png?v=1717092944&width=600" alt="" /></a>
            <a href='https://www.laurageller.com/' target='_blank'><img src="https://www.blissworld.com/cdn/shop/files/coverfx_1.png?v=1717092943&width=600" alt="" /></a>
          </div>
        </div>
        <div className="footer-1">
            <h2>free shipping on orders $45+</h2>
            <h2>we ship internationally</h2>
        </div>
        <div className="main-footer">
            <div className="footer-2-left">
                <div className="common-items">
                    <h2>COMPANY</h2>
                    <ul className="common-list">
                        <li>Who We Are</li>
                        <li>Find a Bliss Near You</li>
                        <li>Shop</li>
                        <li>Privacy Policy</li>
                        <li>Terma & Conditions</li>
                        <li>Accessibility Statement</li>
                    </ul>
                </div>
                <div className="common-items">
                    <h2>FOR YOU</h2>
                    <ul className="common-list">
                        <li>Gift Cards</li>
                        <li>Contact Us</li>
                        <li>Shipping</li>
                        <li>Returns</li>
                        <li>Payment & Gift Cards</li>
                    </ul>
                </div>
                <div className="common-items">
                    <h2>QUICK SHOP</h2>
                    <ul className="common-list">
                        <li>Skincare</li>
                        <li>Body Care</li>
                        <li>Travel Size</li>
                        <li>Fabgirl</li>
                        <li>Serums</li>
                        <li>SPF</li>
                        <li>Accessories</li>
                    </ul>
                </div>
                <div className="stay-in-touch">
                    <h2>STAY IN TOUCH</h2>
                    <div className="touch-form">
                        <form>
                            <div className="email-form">
                                <p>Sign up for our newsletter to recieve 20% off your first order!</p>
                                <div className="email-input-submit">
                                    <input type='email' name='email' placeholder='Email Address'/>
                                    <button>SUBMIT</button>
                                </div>
                                <p className='text-small'>By signing up for our newsletter, you agree to our terms and privacy policy.</p>
                            </div>
                            <br />
                            <div className="email-form">
                                <p>Prefer texting? Sign up for texts to receive SMS exclusive offers plus 20% off your first order.</p>
                                <div className="email-input-submit">
                                    <input type='text' name='number' placeholder='Phone Number'/>
                                    <button>SUBMIT</button>
                                </div>
                                <p className='text-small'>* By submitting this form and signing up for texts, you consent to receive marketing text messages (e.g. promos, cart reminders) from Bliss World at the number provided, including messages sent by autodialer. Consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP or clicking the unsubscribe link (where available). Privacy Policy & Terms.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-2-right">
                <h4>@blissworld</h4>
                <div className="social-media-icons">
                    <a href='https://www.facebook.com/blissworld/' target='_blank'><img src="https://cdn.shopify.com/s/files/1/0702/9017/8333/files/FB_Icon_3x_2bac5f83-7ad5-4e7d-9827-b63a02ac75a9.png?v=1677555274" alt="" /></a>
                    <a href='https://www.pinterest.com/blissworld/' target='_blank'><img src="https://cdn.shopify.com/s/files/1/0702/9017/8333/files/Pinterest_Icon_3x_d086b6e0-0fda-40d4-9d89-8d965fc8ad17.png?v=1677555274" alt="" /></a>
                    <a href='https://www.instagram.com/bliss/' target='_blank'><img src="https://cdn.shopify.com/s/files/1/0702/9017/8333/files/IG_Icon_3x_489a17ea-3252-4165-a9af-39eab18e5b83.png?v=1677555274" alt="" /></a>
                    <a href='https://www.youtube.com/user/blissbeautyblog' target='_blank'><img src="https://cdn.shopify.com/s/files/1/0702/9017/8333/files/YT_Icon_3x_d592299d-007b-4eeb-a0f4-e070a910f23e.png?v=1677555274" alt="" /></a>
                    <a href='' target='_blank'><img src="https://cdn.shopify.com/s/files/1/0702/9017/8333/files/TikTok_Icon_59211691-3d4a-43e6-b1d8-d74912adb2cc.png?v=1718641888" alt="" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer