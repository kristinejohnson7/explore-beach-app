import React, { createContext, useState } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  const [authToken, setAuthToken] = useState("");
  const [bearerHeader, setBearerHeader] = useState({});

  //create user

  //login user

  //get logged in user

  //forgot password

  //update user

  //delete user

  return (
    <AuthContext.Provider
      value={{
        user,
        //data here
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
