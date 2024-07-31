import axios from "axios";
import { toast } from "react-toastify";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/products`;

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

const productService = {
  createProduct,
  getAllProducts,
};

export default productService