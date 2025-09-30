import React from "react";
import myntralogo from "../assets/myntralogo.jfif";
import "../styles/global.css";
import { Link } from "react-router-dom";

function Navbar({ hideProfile }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-3">
      {/* Logo */}
      <a className="navbar-brand logo" href="#">
        <img src={myntralogo} alt="myntra logo" width="100" />
      </a>

      {/* Middle Nav Links */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav fw-bold">
          <li className="nav-item position-relative mx-2">
            <Link className="nav-link" to="/products/men">
              Men
            </Link>

            {/* Mega Menu Box */}
            <div className="mega position-absolute bg-white border p-3">
              <div className="row">
                <div className="col">
                  <h6>Topwear</h6>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        to="/products/men/tshirts"
                        className="no-underline text-black"
                      >
                        T-Shirts
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/men/shirts"
                        className="no-underline text-black"
                      >
                        Shirts
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h6>Bottomwear</h6>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        to="/products/men/jeans"
                        className="no-underline text-black"
                      >
                        Jeans
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/men/trousers"
                        className="no-underline text-black"
                      >
                        Trousers
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item mx-2">
            <a className="nav-link" href="#">
              Women
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#">
              Kids
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#">
              Beauty
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#">
              Genz
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#">
              Studio <span className="new-badge">NEW</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Right Side: Search + Icons */}
      <div className="d-flex align-items-center">
        {/* Search Bar */}
        <div className="search-bar me-4 position-relative">
          <i className="bi bi-search search-icon"></i>
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search for products, brands and more"
          />
        </div>

        {/* Icons */}
        {!hideProfile && (
          <div className="nav-item mx-2 profile-dropdown">
            <div className="nav-link text-center">
              <i className="bi bi-person"></i>
              <div>Profile</div>
            </div>

            {/* Dropdown Box */}
            <div className="profile-box">
              <h6 className="fw-bold">Welcome</h6>
              <p className="small text-muted">
                To access account and manage orders
              </p>
              <Link to="/login">
                <button className="login-btn">Login / Signup</button>
              </Link>

              <hr />

              <ul className="list-unstyled">
                <li>Orders</li>
                <li>Wishlist</li>
                <li>Gift Cards</li>
                <li>Contact Us</li>
                <li>
                  Myntra Insider <span className="new-label">NEW</span>
                </li>
              </ul>

              <hr />

              <ul className="list-unstyled">
                <li>Myntra Credit</li>
                <li>Coupons</li>
                <li>Saved Cards</li>
                <li>Saved VPA</li>
                <li>Saved Addresses</li>
              </ul>
            </div>
          </div>
        )}

        <Link
          to="/wishlist"
          className="text-center me-4 cursor-pointer navbar-link"
        >
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
