import React from 'react'
import "./BestSellers.css"
import { bestsellers } from '../../assets/assets.js'

const BestSellers = () => {
  return (
    <div className='bestsellers'>
        <img className='front-image' src={"https://www.blissworld.com/cdn/shop/files/Bliss_4th_of_July_HP_Hero_Banner-min_2000x.jpg?v=1719503279"} alt="front-image"/>
        <div className="main-bestsellers">
            <h1 className='ttitle'>SHOP OUR BEST SELLERS</h1>
            <div className="main-bestsellers-container">
            {bestsellers.map((item,index)=>{
              return (<div key={index} className='bestseller-each'>
                <img src={item.image} alt="" />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>)})}
            </div>

        </div>

    </div>
  )
}

export default BestSellers