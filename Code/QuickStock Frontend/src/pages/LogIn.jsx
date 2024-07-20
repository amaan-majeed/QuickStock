import React, { useState } from "react";
import logo from "../images/Orange QS.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser, ValidateEmail } from "../services/authService";
import { toast } from "react-toastify";
import { SET_LOGIN, SET_NAME } from "../redux/features/auth/authSlice";
import Loader from "../components/Loader";


const initialState = {
  email: "",
  password: ""
};

export default function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setformData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();
    
    if ( !password || !email ) {
      return toast.error("All Fields are required");
    }

    if (!ValidateEmail(email)) {
      toast.error("Please enter a valid email");
    }

    const UserData = {
      email,
      password,
    };
    setIsLoading(true);
    try {
      const data = await loginUser(UserData);
      console.log(data)
      dispatch(SET_LOGIN(true));
      dispatch(SET_NAME(data.name));
      navigate("/dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  }
  return (
    <>
      {isLoading && <Loader />}
      <div className="login-cover">
        <div className="login-container">
          <div className="brand mb-20px">
            <img src={logo} alt="" />
            <h2>QuickStock</h2>
          </div>
          <form onSubmit={login} className="login-form">
            <div className="mb-20px">
              <input
                type="email"
                placeholder="Email Address"
                className="form-control fs-13px h-45px border-0 input-text"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-20px">
              <input
                type="password"
                placeholder="Password"
                className="form-control fs-13px h-45px border-0 input-text"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-20px">
              <input type="checkbox" id="rememberMe" />
              <label
                className="form-check-label fs-13px text-gray-300"
                htmlFor="rememberMe"
              >
                Remember Me
              </label>
            </div>
            <div className="mb-20px">
              <button
                type="submit"
                className="btn btn-theme d-block w-100 h-45px btn-lg login-btn"
              >
                Sign me in
              </button>
            </div>
            <div className="text-grey-300 inline">
              <p>Don't have an account</p>
              <Link to="/signup" className="text-white">
                Sign Up
              </Link>
            </div>
            <div className="text-grey-300 inline">
              <p>Forgot your password</p>
              <Link to="/forgot" className="text-white">
                Reset Password
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
