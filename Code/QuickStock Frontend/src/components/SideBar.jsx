import React from 'react';
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <div className="side-bar" id="side-bar">
        <ul>
          <li>
            <Link to="/" className="no-style">
              <i className="fa-solid fa-house"></i> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="no-style">
              <i className="fa-solid fa-house"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="no-style">
              <i className="fa-solid fa-cart-plus"></i>Products
            </Link>
          </li>
          <li>
            <Link to="/profile" className="no-style">
              <i className="fa-solid fa-user"></i>Profile
            </Link>
          </li>
          <li>
            <Link to="/editprofile" className="no-style">
              <i className="fa-solid fa-user-plus"></i>Edit Profile
            </Link>
          </li>
          <li>
            <Link to="/" className="no-style">
              <i className="fa-solid fa-chart-line"></i>ML Prediction
            </Link>
          </li>
          <li>
            <Link to="/" className="no-style">
              <i className="fa-solid fa-clipboard"></i>Past record
            </Link>
          </li>
          <li>
            <Link to="/login" className="no-style">
              <i className="fa-solid fa-clipboard"></i>Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="no-style">
              <i className="fa-solid fa-clipboard"></i>Register
            </Link>
          </li>
          <li>
            <Link to="/forgot" className="no-style">
              <i className="fa-solid fa-clipboard"></i>Forgot
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
