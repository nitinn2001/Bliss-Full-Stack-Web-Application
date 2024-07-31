import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./AllProductsProduct.css"

const AllProductsProduct = ({product}) => {
    const [imageIndex,setImageIndex] = useState(0)

    const navigate = useNavigate()

    const handleImageClick = (productId) => {
        navigate(`/products/${productId}`)
    }

  return (
        <div onClick={() => handleImageClick(product._id)} className='each-product'>
            <div className="image-container">
                <img src={product.images[imageIndex]} alt="product-image" />
                <button onClick={() => setImageIndex((prev) => prev === 0 ? 0 : prev - 1)} className="nav-button left">&#10094;</button>
                <button onClick={() => setImageIndex((prev) => prev === product.images.length - 1 ? product.images.length - 1 : prev + 1)} className="nav-button right">&#10095;</button>
            </div>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <p className='description'>{product.description}</p>
            <button className='add-to-button'><h2>ADD TO BAG</h2></button>
        </div>

  )
}

export default AllProductsProduct