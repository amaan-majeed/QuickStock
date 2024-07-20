import React, { useState } from 'react';
import logo from '../images/Orange QS.png';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { registerUser, ValidateEmail } from '../services/authService';
import { useDispatch } from 'react-redux';
import { SET_LOGIN, SET_NAME } from '../redux/features/auth/authSlice';
import Loader from '../components/Loader';


const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
    
}

export default function SignUp() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setformData] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)
  const { name, email, password, password2 } = formData
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value })
  }

  const register = async (e) => {
    e.preventDefault()
    if (!name || !password || !email) {
      return toast.error("All Fields are required");
    }

    if (password !== password2) {
      return toast.error("Passwords do not match");
    }

    // if (password.length < 6) {
    //   return toast.error("Must be greater than 6 characters");
    // }

    if (!ValidateEmail(email)) {
      toast.error("Please enter a valid email");
    }
    console.log(formData)

    const UserData = {
      name, email, password
    }

    setIsLoading(true)
    try {
      const data = await registerUser(UserData);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.name));
      navigate('/')
      setIsLoading(false)
    }
    catch (error){
      setIsLoading(false)
      console.log(error.message)
    }
  }

  return (
    <>
      <div className="login-cover">
        {isLoading && <Loader/>}
        <div className="login-container">
          <div className="brand mb-20px">
            <img src={logo} alt="" />
            <h2>QuickStock</h2>
          </div>
          
          <form onSubmit={register} className="login-form">
            <div className="mb-20px">
              <input
                type="text"
                placeholder="Username"
                name = "name"
                value={name}
                onChange={handleInputChange}
                className="form-control fs-13px h-45px border-0 input-text"
              />

            </div> 

            <div className="mb-20px">
              <input
                type="email"
                placeholder="Email Address"
                name = "email"
                value={email}
                onChange={handleInputChange}
                className="form-control fs-13px h-45px border-0 input-text"
              />
            </div>

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
              <p>Already have an account?</p>
              <Link to="/login" className="text-white">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
