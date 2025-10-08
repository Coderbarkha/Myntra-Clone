import React from "react";
import myntralogo from "../assets/myntralogo.jfif";
import "../styles/global.css";
import { Link } from "react-router-dom";

function Navbar({ hideProfile }) {
  // simple slug function for link paths
const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

// sample dynamic data: array of columns; har column me groups array (title + optional items)
const menMega = [
  [ // column 1
    {
      title: "Topwear",
      items: [
        "T-Shirts",
        "Casual Shirts",
        "Formal Shirts",
        "Sweatshirts",
        "Sweaters",
        "Jackets",
        "Blazers & Coats",
        "Suits",
        "Rain Jackets",
      ],
    },
    {
      title: "Indian & Festive Wear",
      items: [
        "Kurtas & Kurta Sets",
        "Sherwanis",
        "Nehru Jackets",
        "Dhotis",
      ],
    },
  ],
  [ // column 2
    {
      title: "Bottomwear",
      items: [
        "Jeans",
        "Casual Trousers",
        "Formal Trousers",
        "Shorts",
        "Track Pants & Joggers",
      ],
    },
    {
      title: "Other",
      items: [], // heading without sub-items
    },
  ],
  [ // column 3
    {
      title: "Innerwear And Sleepwear",
      items: [
        "Briefs and Trunks",
        "Boxers",
        "Vests",
        "Sleepwear & Loungewear",
        "Thermals",
      ],
    },
    {
      title: "Plus Size",
      items: [],
    },
  ],
  [ // column 4
    {
      title: "Footwear",
      items: [
        "Casual Shoes",
        "Sports Shoes",
        "Formal Shoes",
        "Sneakers",
        "Sandals & Floaters",
        "Flip Flops",
        "Socks",
      ],
    },
  ],
];

  return (
    <nav className="navbar navbar-expand-lg navbar-light px-3">
      {/* Logo */}
      <a className="navbar-brand logo" href="#">
        <img src={myntralogo} alt="myntra logo" width="100" />
      </a>

      {/* Middle Nav Links */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav fw-bold">
       <li className="nav-item position-relative mx-2 mega-parent">
    <Link className="nav-link" to="/products/men">Men</Link>

  <div className="mega-menu">
    <div className="row">
      <div className="col">
        <h6 className="mega-heading">Topwear</h6>
        <ul className="list-unstyled mega-list">
          <li><Link to="/products/men/tshirts">T-Shirts</Link></li>
          <li><Link to="/products/men/casual-shirts">Casual Shirts</Link></li>
          <li><Link to="/products/men/casual-shirts">Formal Shirts</Link></li>
          <li><Link to="/products/men/casual-shirts">SweatShirts</Link></li>
          <li><Link to="/products/men/casual-shirts">Sweaters</Link></li>
          <li><Link to="/products/men/casual-shirts">Jackets</Link></li>
          <li><Link to="/products/men/casual-shirts">Blazers & Coats</Link></li>
          <li><Link to="/products/men/casual-shirts">Casual Shirts</Link></li>
          <li><Link to="/products/men/casual-shirts">Suits</Link></li>
          <li><Link to="/products/men/casual-shirts">Rain Jackets</Link></li>
        </ul>

        <h6 className="mega-heading">Indian & Festive Wear</h6>
        <ul className="list-unstyled mega-list">
          <li><Link to="/products/men/kurtas">Kurtas & Kurta Sets</Link></li>
          <li><Link to="/products/men/casual-shirts">Sherwanis</Link></li>
          <li><Link to="/products/men/casual-shirts">Nehru Jackets</Link></li>
          <li><Link to="/products/men/casual-shirts">Dhotis</Link></li>
        </ul>
      </div>

      <div className="col">
        <h6 className="mega-heading">Bottomwear</h6>
        <ul className="list-unstyled mega-list">
          <li><Link to="/products/men/jeans">Jeans</Link></li>
          ...
        </ul>
      </div>

      <div className="col">
        <h6 className="mega-heading">Footwear</h6>
        <ul className="list-unstyled mega-list">
          <li><Link to="/products/men/sneakers">Sneakers</Link></li>
          ...
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

        <Link className="text-center me-4 cursor-pointer navbar-link" to="/cart">
          <i className="bi bi-bag "></i>
          <div>Bag</div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
