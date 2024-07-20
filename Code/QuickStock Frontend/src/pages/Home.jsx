import React from 'react';
import logo from '../images/Orange QS.png'
import { Link } from 'react-router-dom';
import { ShowOnLogin, ShowOnLogout } from '../components/HiddenLinks';

export default function Home() {
  return (
    <>
      <div className="login-cover">
        <div className="navbar-wrapper">
          <div className="navbar">
            <div className="left">
              <div className="logo">
                <img src={logo} alt="" />
                <p className="logo-text">QuickStock</p>
              </div>
            </div>

            <div className="right">
              <ShowOnLogout>
                <Link to="/signup" className="no-style black">
                  Register
                </Link>
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
              </ShowOnLogout>
              
              <ShowOnLogin>
                <Link to="/dashboard" className="btn btn-primary">
                  Dashbaord
                </Link>
              </ShowOnLogin>
            </div>
          </div>
        </div>
        <div className="home-hero">
          <h1>Inventory and Stock Management Solution</h1>
          <p>
            Inventory system to control and manage products in the warehouse in
            real time and integrated to make it easier to develop your business.
          </p>
        </div>
      </div>
    </>
  );
}
