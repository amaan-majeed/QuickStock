import React from 'react';

export default function ProfileTile() {
  return (
    <>
      <div className="main" id="main">
        <h1 className="add-product-header">User Profile</h1>
        <div className="col-lg-6 col-md-12 form-container">
          <div className="product-name">
            <p>User Name</p>
            <input type="text" placeholder="User Name" />
          </div>

          <div className="product-category">
            <p>User Email</p>
            <input type="text" placeholder="User Email" />
          </div>

          <div className="product-price">
            <p>Phone Number</p>
            <input type="text" placeholder="Phone Number" />
          </div>

          <div className="product-quantity">
            <p>User Bio</p>
            <textarea name="bio" id="bio" rows={3}></textarea>
                      {/* <input type="textarea" placeholder="Bio" /> */}
          </div>
          
          <div className="submit-container">
            <input
              type="submit"
              placeholder="Submit"
              className="btn btn-success"
            />
          </div>
        </div>
      </div>
    </>
  );
}
