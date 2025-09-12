import React from "react";
import myntralogo from "../assets/myntralogo.jfif";
import "../styles/global.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-3">
      {/* Logo */}
      <a className="navbar-brand logo" href="#">
        <img src={myntralogo} alt="myntra logo" width="100" />
      </a>

      {/* Middle Nav Links */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav fw-bold">
          <li className="nav-item  mx-2">
            <a className="nav-link active" href="#">Men</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#">Women</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#">Kids</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#">Beauty</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#">Genz</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#">
              Studio <span className="text-danger">NEW</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Right Side: Search + Icons */}
      <div className="d-flex align-items-center">
        {/* Search Bar */}
        <div className="search-bar me-4">
          <i className="bi bi-search search-icon"></i>
          <input
            type="text"
            className="form-control"
            placeholder="Search for products, brands and more"
          />
        </div>

        {/* Icons */}
        <div className="text-center me-4">
          <i className="bi bi-person "></i>
          <div>Profile</div>
        </div>
        <Link to="/wishlist" className="text-center me-4 cursor-pointer">
  <i className="bi bi-heart"></i>
  <div>Wishlist</div>
</Link>
        <div className="text-center">
          <i className="bi bi-bag "></i>
          <div>Bag</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
