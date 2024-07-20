import React, { useState } from "react";
import logo from "../images/Orange QS.png";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword, ValidateEmail } from "../services/authService";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

export default function Forgot() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');


  const forgot = async (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error("Enter Email");
    }

    if (!ValidateEmail(email)) {
      toast.error("Please enter a valid email");
    }
      
    const userData = {
        email
    }

    setIsLoading(true);

    try {
      await forgotPassword(userData);
      setEmail("")
      navigate("/login");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="login-cover">
        <div className="login-container">
          <div className="brand mb-20px">
            <img src={logo} alt="" />
            <h2>QuickStock</h2>
          </div>
          <form onSubmit={forgot} className="login-form">
            <div className="mb-20px">
              <input
                type="email"
                placeholder="Email Address"
                className="form-control fs-13px h-45px border-0 input-text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-20px">
              <button
                type="submit"
                className="btn btn-theme d-block w-100 h-45px btn-lg login-btn"
              >
                Get Reset Email
              </button>
            </div>
            <div className="text-grey-300 inline text-center">
              <Link to="/login" className="text-white ">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
