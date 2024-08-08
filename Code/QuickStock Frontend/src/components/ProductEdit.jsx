import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

export default function ProductEdit() {
  const {id} = useParams();
  const [product, setProduct] = useState(initialState)
  const { name, sku, category, quantity, price, description } = product
  const navigate = useNavigate()

  useEffect(() => {
    const product = productService.getProduct(id);
    product?.then(data => {
      setProduct(data);
    })
}, [id])
  
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

  const patchProduct = async (e) => {
    console.log("Product Patch Function");
    e.preventDefault()

    if (!name || !quantity || !price) {
      toast.error("Please enter all the Fields")
    } else {
      try {
        console.log(productData);
        productService.editProduct(id, productData)
        console.log("PatchProduct - Dashboard")
        navigate("/dashboard");
      } catch (error) {
        toast.error(error.message);
      }
    }
    
  }

  const cancelEdit = (e) => {
    e.preventDefault();

    navigate("/dashboard")
  }

  return (
    <>
      {/* {isLoading && <Loader />} */}
      <div className="main" id="main">
        <h1 className="add-product-header">Product</h1>
        <form
          onSubmit={patchProduct}
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
          <div className="btn-container">
            <div className="submit-container">
              <input
                type="submit"
                placeholder="Submit"
                className="btn btn-success"
              />
            </div>
            <div className="cancel-container">
            <input
                type="button"
                placeholder="Cancel"
                className="btn btn-danger"
                onClick={cancelEdit}
                value={"Cancel"}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
