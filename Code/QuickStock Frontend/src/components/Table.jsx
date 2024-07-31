import React, { useEffect, useState } from 'react';
import productService from '../redux/features/product/productService';
import { selectIsLoggedIn } from '../redux/features/auth/authSlice';
import { useSelector } from 'react-redux';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";

export default function Table() {
  const isLoggedin = useSelector(selectIsLoggedIn);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    if (isLoggedin === true) {
      const products = productService.getAllProducts();
      products.then(data => {
        setProductsList(data)
        console.log(productsList);
      })
    }
  }, [isLoggedin,productsList])
  
  return (
    <>
      
      {/* <div className="main" id="main"> */}
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">s/n</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Value</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
        <tbody>
          {productsList.map((product, index) => {
            const {_id, name, category, price, quantity} = product
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{quantity * price}</td>
                <td className="icons">
                  <span>
                    <AiOutlineEye size={25} color={"#2196f3"} />
                  </span>
                  <span>
                    <FaEdit size={20} color={"#009688"} />
                  </span>
                  <span>
                    <FaTrashAlt size={20} color={"#e91e63"} />
                  </span>
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      {/* </div> */}
    </>
  );
}
