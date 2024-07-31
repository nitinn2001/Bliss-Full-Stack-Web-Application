import React, { useContext, useEffect, useState } from 'react'
import "./Checkout.css"
import { StoreContext } from '../../../context/StoreContext'
import {useNavigate} from "react-router-dom"
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

const Checkout = () => {

    const stripe = useStripe();
    const elements = useElements();

    console.log("ghghgh",stripe,elements)

    if (!stripe || !elements) {
        // Stripe.js hasn't yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return;
      }

    const [toggle,setToggle] = useState(false)

    const [payToggle,setPayToggle] = useState("")

    const{token,user,cartItems,allProducts,getTotalAmount,logOut} = useContext(StoreContext)

    const navigate = useNavigate()

    const [deliveryData,setDeliveryData] = useState({
        firstName:"",
        lastName:"",
        address:"",
        apartment:"",
        city:"",
        state:"",
        zip:"",
        phone:""
    })

    const onChangeHandler = (e) => {
        let name = e.target.name
        let value = e.target.value
        setDeliveryData((prev)=>({...prev,[name]:value}))
    }

    useEffect(()=>{
        console.log("cartItems: ",cartItems)
        console.log("allProducts: ",allProducts)
    },[cartItems])

    useEffect(()=>{
        console.log(deliveryData)
    },[deliveryData])

  return (
    <div className='checkout'>
        <div className="checkout-navbar">
            <div className="checkout-navbar-icons">
                <img onClick={()=>navigate('/')} className='bliss-logo' src="https://www.blissworld.com/cdn/shop/files/Bliss_Logo_White_3x_6c3396d6-15e0-4c23-a933-633783887842_140x@2x.png?v=1675358315" alt="Bliss Logo" />
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10L15 4M21 10H3M21 10L19.6431 16.7845C19.2692 18.6542 17.6275 20 15.7208 20H8.27922C6.37249 20 4.73083 18.6542 4.35689 16.7845L3 10M3 10L9 4" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
        </div>
        <div className="checkout-main-content">
            <div className="main-content-left">
                <div className="left-container">
                <div className="credit-card">
                    <p className='continue'>Continue with credit card</p>
                    {(token)?<>
                        <div className="account-toggle" onClick={() => setToggle(!toggle)}>
                        <p>Account</p>
                        <p aria-expanded={toggle} aria-controls="account-content">{toggle ? "-" : "+"}</p>
                    </div>
                    <p className='email'>{user.email}</p>
                    <div id="account-content" className={`content ${toggle ? 'show' : ''}`} role="region">
                        <button onClick={()=>logOut()} className="logout">Logout</button>
                    </div>
                    </>:
                    <div className='not-logged-in'>
                        <div className="contact-option">
                            <p>Contact</p>
                            <button onClick={()=>navigate('/login')} className="login">Login</button>
                        </div>
                        <input className='contact-email' type="email" placeholder='Email' />
                        <div className="contact-checkbox">
                            <input type="checkbox" />
                            <p>Sign up to get first access to product launches & exclusive offers.</p>
                        </div>
                    </div>}
                </div>
                    <hr />
                    <div className="delivery-form">
                        <p className='title'>DELIVERY</p>
                        <form>
                            <div className="name">
                                <input onChange={onChangeHandler} className='firstName' type="text" name='firstName' placeholder='First Name'/>
                                <input onChange={onChangeHandler}  className='lastName' type="text" name='lastName' placeholder='Last Name' />
                            </div>
                            <input onChange={onChangeHandler}  type="text" name='address' placeholder='Address' />
                            <input onChange={onChangeHandler}  type="text" name='apartment' placeholder='Apartment, suite, etc. (optional)' />
                            <div className="location">
                                <input onChange={onChangeHandler}  className='city' name='city' type="text" placeholder='City'/>
                                <input onChange={onChangeHandler}  className='state' name='state' type="text" placeholder='State'/>
                                <input onChange={onChangeHandler}  className='zip' name='zip' type="number" placeholder='ZIP Code'/>
                            </div>
                            <input onChange={onChangeHandler} name='phone'  type="number" placeholder='Phone Number'/>
                            <div className="delivery-bottom">
                                <input type="checkbox" />
                                <p>Prefer texting? Sign up for texts to receive SMS exclusive offers.</p>
                            </div>
                        </form>
                    </div>
                    <br />
                    <hr />
                    <div className="shipping-method">
                        <p className='title'>Shipping Method</p>
                        <input type="text" value="Enter your shipping address to view available shipping methods." readOnly/>
                    </div>
                    <br />
                    <hr />
                    <br />
                    {/* <div className="payments">
                        <p>Payment</p>
                        <p className='top-text'>All transactions are secure and encrypted</p>
                        <div className="payment-options">
                            <div onClick={()=>setPayToggle('creditCard')} className="options-available">
                                <div className="payment-title">
                                    <div className="first">
                                        <input type="radio" checked={payToggle==='creditCard'} />
                                        <p>Credit Card</p>
                                    </div>
                                    <div className="second">
                                        <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/0169695890db3db16bfe.svg" alt="visa icon" />
                                        <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/ae9ceec48b1dc489596c.svg" alt="master card icon" />
                                        <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/f11b90c2972f3811f2d5.svg" alt="amex icon" />
                                        <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/4cde67b4ecfa33d21851.svg" alt="discover icon" />
                                    </div>
                                </div>
                                <div className={`payContent ${payToggle==="creditCard"?'payShow':''}`}>
                                    <div className="credit-card-details">
                                        <input type="text" placeholder='Card Number' />
                                        <div className="expiry-code">
                                            <input type="text" placeholder='Expiration Date (MM/YY)'/>
                                            <input type="text" placeholder='Security Code'/>
                                        </div>
                                        <input type="text" placeholder='Name On Card'/>
                                    </div>
                                </div>
                            </div>
                            <div onClick={()=>setPayToggle('payPal')} className="options-available">
                                <div className="payment-title">
                                    <div className="first">
                                        <input type="radio" checked={payToggle==='payPal'} />
                                        <p>PayPal</p>
                                    </div>
                                    <div className="second">
                                        <img className='paypal-icon' src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/250_Paypal_logo-512.png" alt="paypal icon" />
                                    </div>
                                </div>
                                <div className={`payContent ${payToggle==="payPal"?'payShow':''} `}>
                                    <div className="paypal-sezzle-details">
                                        <p>After clicking 'Pay With PayPal', you will be redirected to PayPal to complete your purchase securely. </p>
                                    </div>
                                </div>
                            </div>
                            <div onClick={()=>setPayToggle('sezzle')} className="options-available">
                                <div className="payment-title">
                                    <div className="first">
                                        <input type="radio" checked={payToggle==='sezzle'}/>
                                        <p>Buy Now, Pay Later with Sezzle</p>
                                    </div>
                                    <div className="second">
                                        <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/7282c0fd1da2ffc83ffa.svg" alt="sezzle icon" />
                                    </div>
                                </div>
                                <div className={`payContent ${payToggle==="sezzle"?'payShow':''} `}>
                                    <div className="paypal-sezzle-details">
                                        <p>After clicking “PAY NOW”, you will be redirected to Buy Now, Pay Later with Sezzle to complete your purchase securely.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {payToggle==='creditCard'?
                        <div className='remember-me'>
                            <p>Remember me</p>
                            <div className="info-save">
                                <input type="checkbox" />
                                <p>Save my information for a faster checkout</p>
                            </div>
                        </div>:<></>}


                        <button className={(payToggle==='creditCard'||payToggle==='sezzle')?'creditCard-btn':'paypal-btn'}><p>{(payToggle==='creditCard' || payToggle==='sezzle')?'Pay Now':"Pay with PayPal"}</p></button>

                    </div> */}
                </div>
            </div>
            <div className="main-content-right">
                <div className="right-container">
                    <div className="cart-items-quantity">
                        {allProducts.map((item,index)=>{
                            if(cartItems[item._id]){
                                return(
                                    <div key={index} className='each-itemm'>
                                        <div className="image-name">
                                            <img src={item.images[0]} alt="" />
                                            <p>{item.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x{cartItems[item._id]}</p>
                                        </div>
                                        <p className='price'>${item.price*cartItems[item._id]}</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div className="discount">
                        <input type="text" placeholder='Discount code or Gift card' />
                        <button className="discount-apply">Apply</button>
                    </div>
                    <div className="subtotal">
                        <p>Subtotal</p>
                        <p>${getTotalAmount()}</p>
                    </div>
                    <div className="subtotal">
                        <p>Shipping Address</p>
                        <p>Enter Shipping Address</p>
                    </div>
                    <div className="subtotal">
                        <p>Total</p>
                        <p>${getTotalAmount()}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout