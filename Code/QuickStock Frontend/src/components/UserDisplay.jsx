import React, { useEffect, useState } from 'react'
import userService from '../redux/features/user/userService';

export default function UserDisplay() {
    const [user, setUser] = useState()

    useEffect(() => {
        const user = userService.getUser();
        user?.then(data => {
            setUser(data);
        })    
    }, [])
  
  return (
    <>
    {/* {isLoading && <Loader />} */}
    <div className="main" id="main">
      <h1 className="add-product-header">User</h1>
      <div className='col-lg-6 col-md-12 form-container'>
      
        <div className="product-name">
          <p>User Name: {user?.name}</p>
        </div>

        <div className="product-sku">
          <p>User Email: {user?.email}</p>
        </div>

        <div className="product-category">
          <p>User Phone: {user?.phone}</p>
        </div>

        <div className="product-price">
          <p>User Bio: {user?.bio}</p>
        </div>

        </div>
    </div>
    </>
  )
}
