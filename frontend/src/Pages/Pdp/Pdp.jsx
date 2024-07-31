import React, { useContext,useEffect, useState } from 'react';
import "./Pdp.css";
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../../context/StoreContext';
import axios from 'axios';

const Pdp = () => {

  const [selected,setSelected] = useState(null)

  const [quantity,setQuantity] = useState(1)

  const {allProducts,addToBag} = useContext(StoreContext)

  const productId = useParams()

  const [imageIndex,setImageIndex] = useState(0)

  const {token} = useContext(StoreContext)

  const product = allProducts.find((product)=>product._id === productId.productId)

  const toggle = (i) => {
    if(selected === i){
      return setSelected(null)
    }

    setSelected(i)
  }

  let data = [
    {
      name: "WHAT IT IS",
      description:["A cult-favorite bestselling formula, this rich, quick-absorbing Lemon & Sage moisturizer leaves even the most parched skin smooth, supple and supremely soft—never greasy.",
      "- Used for decades in our spas",
      "-Mega moisturizers shea butter and coconut oil soothe, condition and deeply nourish",
      "-Supremely scented with our iconic Lemon & Sage fragrance for an energizing pick-me-up",
      "-CLEAN & CRUELTY-FREE"]
    },
    {
      name:"HOW TO USE",
      description:["Smooth on from shoulders to toes."]
    },
    {
      name:"KEY INGREDIENTS",
      description:["Shea Butter: Rich in vitamin E, this intensive butter nourishes to combat dryness and flaking, quickly absorbing into the skin",
        "Coconut Oil: Deeply moisturizing, skin softening and naturally rejuvenating",
        "Soybean Oil: Rich in vitamins to nourish and revitalize",
        "Sodium Hyaluronate: A unique moisturizer with an even smaller molecule size than hyaluronic acid, that holds 1000 times its weight in water for lightweight hydration",
        "Candelilla Wax: A vegan substitute for beeswax that protects skin from water loss"
      ]
    }
  ]

  //api calls


  useEffect(()=>{
    console.log("Selected: ",selected)
  },[selected])

  return (
    <div className='pdp'>
      <div className="pdp-container">
        <div className="image-container">
          <img src={product.images[imageIndex]} alt="product image" />
          <button onClick={()=>setImageIndex((prev)=>prev===0?0:prev-1)} className="nav-button left">&#10094;</button>
          <button onClick={()=>setImageIndex((prev)=>prev===product.images.length-1?product.images.length-1:prev+1)} className="nav-button right">&#10095;</button>
        </div>
        <div className="right-side">
          <div className="review-section">
            <p>Write a review</p>
          </div>
          <div className="information">
            <h1>{product.title}</h1>
            <p className='italic'>{product.description}</p>
          </div>
          <div className="price">
            <p>${product.price}</p>
          </div>
          <div className="add-to-bag-container">
            <div className="quantity">
              <p className='decrement' onClick={()=>setQuantity((prev)=>prev===1?1:prev-1)}>-</p>
              <p>{quantity}</p>
              <p className='increment' onClick={()=>setQuantity((prev)=>prev+1)}>+</p>
            </div>
            <button onClick={()=>addToBag(product._id,quantity)} className="add-to-bag"><h2>ADD TO BAG</h2></button>
          </div>
          <div className="wrapper">
            <div className="accordion">
              {data.map((item, i)=>(
                <div className="item">
                  <div onClick={()=>toggle(i)} className="title">
                    <p className='titles'>{item.name}</p>
                    <span>{selected === i? '-': '+'}</span>
                  </div>
                  <div className={selected === i? 'content show': 'content'}>{item.description.map((des)=>{
                    return(
                     <p className='insides'>{des}<br /><br></br></p>
                    )
                    })}
                  </div>
                  <br />
                  <hr />
                </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <hr ></hr>
    </div>
  );
};

export default Pdp;
