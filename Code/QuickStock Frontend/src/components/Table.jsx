// import React, { useEffect, useState } from 'react';
// import productService from '../redux/features/product/productService';
// import { selectIsLoggedIn } from '../redux/features/auth/authSlice';
// import { useSelector } from 'react-redux';
// import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { toast } from "react-toastify";
import productService from "../redux/features/product/productService";
import { Link } from "react-router-dom";

export default function Table(props) {

  const DeleteProduct = async (id) => {
    console.log(id)
    if (!id) {
      toast.error("ID not recieved")
    } else {
      try {
        console.log("try block Delete")
        productService.deleteProduct(id);
      } catch (error) {
        toast.error(error.message);
      }
    }
  }

  const confirmDelete = (id) => {
    confirmAlert({
      title: 'Delete Product',
      message: 'Are you sure to do delete this product.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => DeleteProduct(id)
        },
        {
          label: 'Cancel',
        }
      ]
    });
  }

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
          {props.productsList.map((product, index) => {
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
                  <Link to={`/productsdetail/${_id}`}>
                    <span>
                      <AiOutlineEye size={25} color={"#2196f3"} />
                    </span>
                  </Link>
                  <span>
                    <FaEdit size={20} color={"#009688"} />
                  </span>
                  <span className="hover-pointer">
                    <FaTrashAlt size={20} color={"#e91e63"} onClick={() => {confirmDelete(_id)}}/>
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
