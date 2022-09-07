import React from "react";

export default function Input({ data }) {
  const { type, name, placeholder } = data;

  return <input type={type} name={name} placeholder={placeholder} />;
}
