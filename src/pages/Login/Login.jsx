import React, { useState } from "react";
import HeroHeader from "../Headers/HeroHeader";
import Form from "../Forms/Form";
import { loginForm, signUpForm } from "../../constants";
import Button from "../../components/";

export default function Login() {
  //import auth context
  const [toggle, setToggle] = useState(false);

  const loginUser = () => {
    //login user with auth context "login user"
    //then redirect to listings page
  };

  const createUser = () => {
    //create user with auth context "create user"
  };

  return (
    <div>
      <HeroHeader />
      <Form
        data={toggle ? signUpForm : loginForm}
        submit={toggle ? createUser : loginUser}
      />
      <Button onClick={() => setToggle(true)} />
    </div>
  );
}
