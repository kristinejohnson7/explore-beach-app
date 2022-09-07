import axios from "axios";
import { API_URL } from "../constants";

export const findAllListings = (params) => {
  return axios.get(API_URL, { params });
};

//findSingleListing

//createCommentForListing

//deleteCommentForListing

//updateCommentForListing
