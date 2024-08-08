import React, { useEffect, useState } from 'react';
import userService from '../redux/features/user/userService'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: "",
  email: "",
  phone: "",
  bio: ""
}



export default function ProfileTile() {
  const [user, setUser] = useState(initialState)
  const { name, email, phone, bio } = user
  const navigate = useNavigate()

  useEffect(() => {
    const user = userService.getUser();
    user?.then(data => {
      setUser(data);
    })
    }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  };


  const userData = {
      name,
      email,
      phone,
      bio
    }

    const updateProduct = async (e) => {
      console.log("User Update Function");
      e.preventDefault()
  
      if (!name || !email || !phone) {
        toast.error("Please enter all the Fields")
      } else {
        try {
          console.log(userData);
          userService.editUser(userData)
          console.log("UpdateProduct - Dashboard")
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
      <div className="main" id="main">
        <h1 className="add-product-header">User Profile</h1>
        <form className="col-lg-6 col-md-12 form-container" onSubmit={updateProduct}>
          <div className="product-name">
            <p>User Name</p>
            <input type="text" placeholder="User Name" name='name' value={user?.name} onChange={handleInputChange}/>
          </div>

          <div className="product-category">
            <p>User Email</p>
            <input type="text" placeholder="User Email" name='email' value={user?.email} onChange={handleInputChange}/>
          </div>

          <div className="product-price">
            <p>Phone Number</p>
            <input type="text" placeholder="Phone Number" name='phone' value={user?.phone} onChange={handleInputChange}/>
          </div>

          <div className="product-quantity">
            <p>User Bio</p>
            <textarea name="bio" id="bio" rows={3} value={user?.bio} onChange={handleInputChange}></textarea>
          </div>
          
          <div className="btn-container">
            <div className="submit-container">
              <input
                type="submit"
                placeholder="Submit"
                className="btn btn-success"
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
  );
}
