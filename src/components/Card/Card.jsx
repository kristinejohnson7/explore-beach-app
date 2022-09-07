import React from "react";
import Description from "../Description/Description";
import Image from "../Image/Image";
import SubHeader from "../SubHeader/SubHeader";
import Header from "../Headers/Header";
import Rating from "../Rating/Rating";
import Link from "../Link/Link";

export default function Card({ item }) {
  const { image, header, subheader, description, rating } = item;
  return (
    <div>
      <Image image={image} />
      <div>
        <Header title={header} />
        <SubHeader title={subheader} />
        <Description content={description} />
        <Rating rating={rating} />
        <Link />
      </div>
    </div>
  );
}
