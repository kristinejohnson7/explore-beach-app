import axios from "axios";
import { API_URL } from "../constants";

export const createUser = (body, options) => {
  return axios.post(API_URL, body, { options });
};

//loginUser

//getLoggedInUser

//forgotPassword

//resetPassword

//updateUser

//deleteUser
