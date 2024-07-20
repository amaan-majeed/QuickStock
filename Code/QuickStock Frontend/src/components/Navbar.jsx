import React from 'react';
import { useState } from "react";
import Logo from '../images/Orange QS.png'
import { logoutUser } from '../services/authService'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import {
  selectName,
  SET_LOGIN,
} from "../redux/features/auth/authSlice";

export default function Navbar() {
  const [Navbar, setNavbar] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(selectName);
    
    const toggleNavbar = () => {
        if (Navbar) {
            document.getElementById("side-bar").style.display = "none";
            document.getElementById("main").style.marginLeft = "20px";
            setNavbar(false);
        } else {
            document.getElementById("side-bar").style.display = "block";
            document.getElementById("main").style.marginLeft = "275px";
            setNavbar(true);
        }
  }
  
  const Logout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));
    navigate("/");
  };

  return (
    <>
      <div className='navbar-wrapper'>
        <div className="navbar">
          <div className="left">
            <i
              className="fa fa-bars side-bar-btn"
              onClick={() => {
                toggleNavbar();
              }}
            ></i>
            <Link to='/' className="logo">
              <img src={Logo} alt="" />
              <p className="logo-text">QuickStock</p>
            </Link>
          </div>

          <div className="right">
            <p className="name">Welcome, {name}</p>
            <button onClick={Logout} className="btn btn-primary">Logout</button>
          </div>
        </div>
      </div>
    </>
  );
}
