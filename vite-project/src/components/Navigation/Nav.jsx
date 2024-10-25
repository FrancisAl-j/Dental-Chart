import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <h1>Logo</h1>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/list">
          <li>Patients</li>
        </Link>

        <li>About</li>
      </ul>
    </header>
  );
};

export default Nav;
