import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import "./AfterCheckout.css"
import { StoreContext } from '../../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const AfterCheckout = () => {
  
  const {cartItems,allProducts} = useContext(StoreContext)
  const navigate=useNavigate()

  return (
    <div className='my-orders'>
      <h1>Order successful!</h1>
      <p>Thank you for ordering with us! </p>
      <div className="order-collection">
        {allProducts.map((item,index)=>{
          if (item._id in cartItems && cartItems[item._id]){
            return(
            <div className='each-order-item'>
              <img src={item.images[0]} alt="" />
              <p>{item.title}</p>
              <p>x {cartItems[item._id]}</p>
            </div>
            )
          }
        })}
      </div>
      <button onClick={()=>navigate('/')} className='explore'>Explore More Products!</button>
    </div>
  )
}

export default AfterCheckout