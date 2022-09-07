import React, { createContext, useEffect, useState } from "react";
import { findAllListings } from "../services/listings";

const ListingContext = createContext();

export default function ListingProvider({ children }) {
  const [listings, setListings] = useState("");
  const [singleListing, setSingleListing] = useState("");

  //use effect to get listings then save to listings setListings

  //function to get single listing from api call in services then save to state setSingleListing

  useEffect(() => {
    findAllListings({
      /*order by :rating*/
    })
      .then(setListings)
      .catch(console.error);
  }, []);

  const getSingleListing = (id) => {
    //getSingleListing from listing services
    //then setSingleListing
  };

  //createCommentForListing

  //deleteCommentForListing

  //updateCommentForListing

  return (
    <ListingContext.Provider
      value={{
        listings,
        singleListing,
        getSingleListing,
      }}
    >
      {children}
    </ListingContext.Provider>
  );
}
