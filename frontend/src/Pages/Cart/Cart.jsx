import React, { useContext, useEffect } from 'react'
import "./Cart.css"
import { StoreContext } from '../../../context/StoreContext.jsx'
import {useNavigate} from "react-router-dom"
import axios from 'axios'


const Cart = () => {

    const { allProducts, cartItems, removeOne, addOne, getTotalAmount,clearCartItems } = useContext(StoreContext)

    const navigate = useNavigate();

    const handleCheckout = async () => {
        const filteredCartItems = Object.keys(cartItems).reduce((acc, key) => {
            if (cartItems[key] > 0) {
                acc[key] = cartItems[key];
            }
            return acc;
        }, {});
        
        console.log("Filtered cart items:", filteredCartItems); // Log the filtered cart items
    
        try {
            const response = await axios.post('http://localhost:4000/api/book/checkout-session/', filteredCartItems);
            console.log("API response:", response); // Log the API response
    
            if (response.data && response.data.success) {
                console.log("Checkout session data:", response.data); // Log the session data
                window.location.href = response.data.session.url;
            } else {
                console.error("Checkout failed or response format incorrect:", response.data);
            }
        } catch (err) {
            console.error("Error during checkout:", err);
        }
    };
    
    
    
    


    useEffect(() => {
        console.log("Cart component rendered");
    },[cartItems]);

    console.log("aaaaa",cartItems)

    const hasCartItems = cartItems && Object.values(cartItems).some(quantity => quantity > 0);

    useEffect(()=>{
        console.log("cartItems:", cartItems);
        console.log("hasCartItems:", hasCartItems);
    },[cartItems,hasCartItems])

    if(hasCartItems){
        return (
        <div className='cart'>
            <div className="cart-container">
                <table>
                    <thead className='table-head'>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {allProducts.map((item, index) => {
                            if (cartItems[item._id]) {
                                return (
                                    <tr key={index} className='each-item'>
                                        <td className='product'>
                                            <img className='product-image' src={item.images[0]} alt="product-image" />
                                            <div className="title-price">
                                                <p>{item.title}</p>
                                                <p>${item.price}</p>
                                            </div>
                                        </td>
                                        <td className='quantity-container'>
                                            <div className="quantity">
                                                <p onClick={() => removeOne(item._id)} className='decrement'>-</p>
                                                <p>{cartItems[item._id]}</p>
                                                <p onClick={() => addOne(item._id)} className='increment'>+</p>
                                            </div>
                                            <p onClick={() => removeOne(item._id)}>Remove</p>
                                        </td>
                                        <td>
                                            <p>${item.price * cartItems[item._id]}</p>
                                        </td>
                                    </tr>
                                )
                            }
                            return null;
                        })}
                    </tbody>
                </table>

                <hr />
                <div className="cart-bottom">
                    <div className="cart-bottom-left">
                        <img src="https://www.blissworld.com/cdn/shop/files/LG_Updated_Payments_Image_Desktop_R2_1x_8173a2e2-11c1-41e0-8055-0e45023e3a60.png?v=1714073328" alt="payment icons" />
                    </div>
                    <div className="cart-bottom-right">
                        <div className="discount-input">
                            <input type="text" placeholder='Discount Code' />
                            <button className="discount-apply">Apply</button>
                        </div>
                        <div className="subtotal">
                            <p>Subtotal</p>
                            <p>${getTotalAmount()}</p>
                        </div>
                        <div className="subtotal">
                            <p>Total</p>
                            <p>${getTotalAmount()}</p>
                        </div>
                        <p className='sezzle-text'>or 4 interest-free payments of $27.50 with  <img src="https://media.sezzle.com/branding/2.0/Sezzle_Logo_FullColor.svg" alt="sezzle icon" /></p>
                        <p className='sezzle-text-bottom'>Shipping and taxes calculated at checkout</p>
                        <div className="buttons">
                            <button onClick={()=>handleCheckout()} className="checkout-button">CHECKOUT</button>
                            <button className="sezzle-checkout-button"><p>Checkout with </p><img src="https://media.sezzle.com/branding/2.0/Sezzle_Logo_FullColor_WhiteWM.svg" alt="sezzle icon"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    else{
        return(
            <div className='cart-container empty'>Order something!!!!</div>
        )
    }
}

export default Cart
