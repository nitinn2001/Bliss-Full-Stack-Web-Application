import React, { useContext } from 'react'
import "./AllProducts.css"
import { all_products } from '../../assets/assets'
import AllProductsProduct from '../../components/AllProductsProduct/AllProductsProduct'
import { StoreContext } from '../../../context/StoreContext'


const AllProducts = () => {

  const {allProducts } = useContext(StoreContext)

  return (<>
      <div className='all-products'>
        <div className="products-container">
            {allProducts.map((item,index)=>{
                return(<AllProductsProduct key={index} product={item}/>)
            })}
        </div>
    </div>
    <p className='bottom-text'>Self-care, your daily skincare routine, your regular moment of bliss. Whatever you want to call it, our products are all about putting your skin first from your face to your feet! Stock up on the products you need to soothe, hydrate, replenish and restore the skin you’re in. Shop fan-favorites like our iconic Lemon & Sage body care products, or opt for targeted facial treatments to tackle discoloration, dullness, wrinkles and anti-aging needs. Add the perfect mineral SPF to your day-to-day regimen, complete with vitamin-enriched serums to strengthen and brighten your complexion. Plus, our vegan, cruelty-free clean beauty range is well suited for a range of skin types and concerns.</p>
  </>
  )
}

export default AllProducts