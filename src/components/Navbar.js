import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img/logo.svg";

const Navbar = () => (
  <nav className="navbar">
    <ul className="nav">
      <li className="nav-item">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Products
        </Link>
      </li>
    </ul>
    <ul className="nav">
      <li className="nav-item">
        <Link to="/cart" className="nav-link">
          <button className="btn btn-primary">
            <i className="fas fa-cart-plus" />
            My Cart
          </button>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
