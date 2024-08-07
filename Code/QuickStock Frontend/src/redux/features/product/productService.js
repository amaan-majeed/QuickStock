import axios from "axios";
import { toast } from "react-toastify";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/products/`;

// Create New Product
const createProduct = async (formData) => {
  console.log("Prod Service - Create New Product", formData)
  const response = await axios.post(API_URL, formData)
  toast.success("Product added Successfully");
  return response.data
}

// Get All Products
const getAllProducts = async () => {
  console.log("Prod Service - All Products")
  const response = await axios.get(API_URL)
  return response.data
}

// Get All Products
const deleteProduct = async (id) => {
  console.log("Prod Service - Delete Product")
  try {
    const response = await axios.delete(API_URL + id)
    return response.data
  } catch (error) {
    toast.error(error)
  }
}

// Get All Products
const getProduct = async (id) => {
  console.log("Prod Service - Fetch Product")
  try {
    const response = await axios.get(API_URL + id)
    return response.data
  } catch (error) {
    toast.error(error)
  }
}



const productService = {
  createProduct,
  getAllProducts,
  deleteProduct,
  getProduct
};

export default productService