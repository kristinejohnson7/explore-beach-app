import React from "react";
import logo from "../../assets/logo.png";
import s from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={s.logo}>
      <img src={logo} alt="logo" />
    </div>
  );
}
