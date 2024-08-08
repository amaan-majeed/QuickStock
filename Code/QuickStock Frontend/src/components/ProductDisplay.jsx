import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../redux/features/product/productService';


export default function ProductDisplay() {
  const {id} = useParams();
  const [product, setProduct] = useState()

  useEffect(() => {
      const product = productService.getProduct(id);
      product?.then(data => {
        setProduct(data);
      })    
  }, [id])
  

  return (
    <>
      {/* {isLoading && <Loader />} */}
      <div className="main" id="main">
        <h1 className="add-product-header">Product</h1>
        <div className='col-lg-6 col-md-12 form-container'>
        
          <div className="product-name">
            <p>Product Name: {product?.name}</p>
            <p></p>
          </div>

          <div className="product-sku">
            <p>Product SKU: {product?.sku}</p>
          </div>

          <div className="product-category">
            <p>Product Category: {product?.category}</p>
          </div>

          <div className="product-price">
            <p>Product Price: {product?.price}</p>
          </div>

          <div className="product-quantity">
            <p>Product Quantity: {product?.quantity}</p>
          </div>
          </div>
      </div>
    </>
  )
}
