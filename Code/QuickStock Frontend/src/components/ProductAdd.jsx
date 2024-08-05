import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import productService from '../redux/features/product/productService';

const initialState = {
  name: "",
  sku: "",
  category: "",
  price: "",
  quantity: "",
  description: "",
}

export default function ProductAdd() {
  const [product, setProduct] = useState(initialState)
  // const [Change, setChange] = useState(false)
  const { name, sku, category, quantity, price, description } = product
  const navigate = useNavigate()
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  };

  const productData = {
    name,
    sku,
    category,
    quantity,
    price,
    description
  };

  const saveProduct = async (e) => {
    e.preventDefault()

    if (!name || !quantity || !price) {
      toast.error("Please enter all the Fields")
    } else {
      try {
        console.log(productData);
        productService.createProduct(productData)
        navigate("/dashboard");
      } catch (error) {
        toast.error(error.message);
      }
    }
    
  }

  return (
    <>
      {/* {isLoading && <Loader />} */}
      <div className="main" id="main">
        <h1 className="add-product-header">Product</h1>
        <form
          onSubmit={saveProduct}
          className="col-lg-6 col-md-12 form-container"
        >
          <div className="product-name">
            <p>Product Name</p>
            <input
              type="text"
              placeholder="Product Name"
              name="name"
              value={product?.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="product-sku">
            <p>Product SKU</p>
            <input
              type="text"
              placeholder="Product SKU"
              name="sku"
              value={product?.sku}
              onChange={handleInputChange}
            />
          </div>

          <div className="product-category">
            <p>Product Category</p>
            <input
              type="text"
              placeholder="Product Category"
              name="category"
              value={product?.category}
              onChange={handleInputChange}
            />
          </div>

          <div className="product-price">
            <p>Product Price</p>
            <input
              type="text"
              placeholder="Product Price"
              name="price"
              value={product?.price}
              onChange={handleInputChange}
            />
          </div>

          <div className="product-quantity">
            <p>Product Quantity</p>
            <input
              type="text"
              placeholder="Product Quantity"
              name="quantity"
              value={product?.quantity}
              onChange={handleInputChange}
            />
          </div>
          <div className="product-description">
            <p>Product Description</p>
            <textarea
              name="description"
              id="description"
              rows={3}
              value={description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="submit-container">
            <input
              type="submit"
              placeholder="Submit"
              className="btn btn-success"
            />
          </div>
        </form>
      </div>
    </>
  )
}
