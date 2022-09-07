import React, { useContext } from "react";
import listingContext from "../../context/listings";
import Card from "../../components/Card/Card";

export default function Listings() {
  const { listings } = useContext(listingContext);

  return (
    <section id="listings">
      {listings.map((item) => {
        return <Card item={item} />;
      })}
    </section>
  );
}
