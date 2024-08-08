import axios from "axios";
import { toast } from "react-toastify";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/users`;

// get User Data
const getUser = async () => {
    try {
      const response = await axios.get(`${API_URL}/getuser`);
      return response.data;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(message);
    }
};


// Edit User Data
const editUser = async (formData) => {
    try {
      const response = await axios.patch(
        `${API_URL}/updateuser`,
        formData
      );
      return response.data;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(message);
    }
};

const changePassword = async (formData) => {
  try {
    const response = await axios.patch(`${API_URL}/changepassword`, formData);
    console.log("Change Password")
    toast.success("Password Changed");
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
}


const userService = {
    getUser,
    editUser,
    changePassword
}

export default userService