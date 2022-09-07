import React from "react";
import Description from "../Description/Description";
import Rating from "../Rating/Rating";
import UserName from "../UserName/UserName";

export default function Comment() {
  return (
    <div>
      <div>
        <UserName />
        <Rating />
      </div>
      <Description />
    </div>
  );
}
