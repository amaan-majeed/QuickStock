import React, { useState } from "react";
import logo from "../images/Orange QS.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../services/authService";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const initialState = {
  password: "",
  password2: ""
};

export default function ResetPassword() {
  const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);  
    const [formData, setformData] = useState(initialState);
    const { password, password2 } = formData;
    const {resetToken} = useParams();
    
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setformData({ ...formData, [name]: value });
    };

  const reset = async (e) => {
      e.preventDefault();
      
      console.log(resetToken)

    if (!password || !password2) {
      return toast.error("All Fields are required");
    }

    if (password !== password2) {
      return toast.error("Passwords do not match");
    }

    const userData = {
        password
    };

    setIsLoading(true);

    try {
      await resetPassword(userData, resetToken);
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
          <form onSubmit={reset} className="login-form">
            <div className="mb-20px">
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                className="form-control fs-13px h-45px border-0 input-text"
              />
            </div>

            <div className="mb-20px">
              <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={handleInputChange}
                className="form-control fs-13px h-45px border-0 input-text"
              />
            </div>

            <div className="mb-20px">
              <button
                type="submit"
                className="btn btn-theme d-block w-100 h-45px btn-lg login-btn"
              >
                Reset Password
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
