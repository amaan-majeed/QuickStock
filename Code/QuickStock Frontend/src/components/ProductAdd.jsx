import React from 'react';

export default function ProductAdd() {
  return (
    <>
      <div className="main" id="main">
        <h1 className="add-product-header">Product</h1>
        <div className="col-lg-6 col-md-12 form-container">
          <div className="product-name">
            <p>Product Name</p>
            <input type="text" placeholder="Product Name" />
          </div>

          <div className="product-category">
            <p>Product Category</p>
            <input type="text" placeholder="Product Category" />
          </div>

          <div className="product-price">
            <p>Product Price</p>
            <input type="text" placeholder="Product Price" />
          </div>

          <div className="product-quantity">
            <p>Product Quantity</p>
            <input type="text" placeholder="Product Quantity" />
          </div>
          <div className="submit-container">
            <input type="submit" placeholder="Submit" className='btn btn-success'/>
          </div>
        </div>
      </div>
    </>
  );
}
