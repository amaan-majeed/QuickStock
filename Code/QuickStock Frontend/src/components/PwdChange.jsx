import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import userService from '../redux/features/user/userService';

const initialState = {
    oldPassword: "",
    password: "",
    confirmPassword: ""
}

export default function PwdChange() {
    const [userDetails, setUserDetails] = useState(initialState);

    const { oldPassword, password, confirmPassword} = userDetails;
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUserDetails({ ...userDetails, [name]: value })
    };

    const userData = {
        oldPassword,
        password,
        confirmPassword
    };

    const sendData = {
        oldPassword,
        password
    }


    const SavePassword = async (e) => {
        e.preventDefault()
        
        if ( !password || !confirmPassword ){
          toast.error("Passwords do not Match")
        }

        if (!oldPassword || !password || !confirmPassword) {
          toast.error("Please enter all the Fields")
        } else {
          try {
            console.log(userData);
            const result = await userService.changePassword(sendData);
            console.log(result)
            navigate("/dashboard");
          } catch (error) {
            toast.error(error.message);
          }
        } 
      }

      const cancelEdit = (e) => {
        e.preventDefault();
        navigate("/dashboard")
      }
  

  return (
    <>
    
      {/* {isLoading && <Loader />} */}
      <div className="main" id="main">
        <h1 className="add-product-header">Change Password</h1>
        <form
          onSubmit={SavePassword}
          className="col-lg-6 col-md-12 form-container"
        >
          <div className="product-name">
            <p>Current Password</p>
            <input
              type="password"
              placeholder="Curent Password"
              name="oldPassword"
              value={userDetails?.oldPassword}
              onChange={handleInputChange}
            />
          </div>
          <div className="product-sku">
            <p>New Password</p>
            <input
              type="password"
              placeholder="New Password"
              name="password"
              value={userDetails?.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="product-category">
            <p>Confirm new Password</p>
            <input
              type="password"
              placeholder="Confirm new Password"
              name="confirmPassword"
              value={userDetails?.confirmPassword}
              onChange={handleInputChange}
            />
          </div>

          <div className="btn-container">
            <div className="submit-container">
              <input
                type="submit"
                placeholder="Change password"
                className="btn btn-success"
                value={"Change Password"}
              />
            </div>
            <div className="cancel-container">
            <input
                type="button"
                placeholder="Cancel"
                className="btn btn-danger"
                onClick={cancelEdit}
                value={"Cancel"}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
