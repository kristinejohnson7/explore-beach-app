import React from "react";
import Logo from "../Logo/Logo";

export default function NavBar() {
  return (
    <nav>
      <Logo />
      <div>
        <ul>
          <li>About</li>
          <li>Listings</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  );
}
