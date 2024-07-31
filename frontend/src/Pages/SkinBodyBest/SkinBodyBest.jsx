import React, { useContext, useEffect } from 'react'
import "./SkinBodyBest.css"
import AllProductsProduct from '../../components/AllProductsProduct/AllProductsProduct'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../../context/StoreContext'

const SkinBodyBest = ({category}) => {

    const {allProducts} = useContext(StoreContext)

    useEffect(()=>{
        console.log(category)
    })

  return (
            <div className='skin-body-best'>
                <div className="skin-concern-filter">
                    <h2>SELECT YOUR SKIN CONCERN</h2>
                    <div className="main-filter">
                        <Link to="/collections/skincare-by-concern-fine-lines"><img src="https://www.blissworld.com/cdn/shop/files/Bliss_Shop_by_Concern_LP_Anti_Aging_Filter_Image_3x_fe3ea03f-f22b-455e-9d54-9822815ddf9c.jpg?v=1714753165&width=600" alt="" /></Link>
                        <Link to="/collections/skincare-by-concern-acne-blemishes"><img src="https://www.blissworld.com/cdn/shop/files/Bliss_Shop_by_Concern_LP_Acne-Oily_Skin_Filter_Image_3x_060ad1a1-b07c-4804-9871-655571f3cfba.jpg?v=1714753164&width=600" alt="" /></Link>
                        <Link to="/collections/skincare-by-concern-dullness"><img src="https://www.blissworld.com/cdn/shop/files/Bliss_Shop_by_Concern_LP_Dullness_Filter_Image_3x_340f32cf-e8a8-4262-a684-0d664d7e58ce.jpg?v=1714753165&width=600" alt="" /></Link>
                        <Link to="/collections/skincare-by-concern-dryness"><img src="https://www.blissworld.com/cdn/shop/files/Bliss_Shop_by_Concern_LP_Dry_Skin_Filter_Image_3x_5365fc07-a8d5-4b8d-b8cf-469bdde6d04c.jpg?v=1715270801&width=600" alt="" /></Link>
                        <Link to="/collections/body-care-products"><img src="https://www.blissworld.com/cdn/shop/files/Bliss_Shop_by_Concern_LP_Moisturizers-Firmness_Filter_Image_3x_91b93bb9-fcf4-4f7b-aeec-363b54971b88.jpg?v=1715270800&width=600" alt="" /></Link>
                        <Link to="/collections/skin-and-body-best-sellers"><img src="https://www.blissworld.com/cdn/shop/files/Bliss_Shop_by_Concern_LP_I_m_Not_Sure_Filter_Image_3x_eb24b10e-f965-42f3-ac3b-9c727e6c756e.jpg?v=1715270800&width=600" alt="" /></Link>
                    </div>
                    <>
                    <div className='all-products'>
                        <div className="products-container">
                        {allProducts.map((item, index) => {
                            if (!category || category === item.category) {
                                return <AllProductsProduct key={index} product={item} />;
                            }
                            return null;
                            })}
                        </div>
                    </div>
                    </>
                </div>
            </div>
  )
}

export default SkinBodyBest