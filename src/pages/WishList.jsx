// src/pages/Wishlist.jsx
import React from "react";
import { Heart, Plus } from "lucide-react"; // Plus icon
import { Link } from "react-router-dom";      // for Continue Shopping navigation
import wishlistimg from "../assets/wishlist.png";
import "../styles/global.css";

function Wishlist() {
  return (
    <div className="wishlist-container">
      {/* Heading */}
      <h4 className="wishlist-title">YOUR WISHLIST IS EMPTY</h4>
      {/* subtext */}
      <p className="wishlist-sub">
        Add items that you like to your wishlist. Review<br></br> them anytime and easily move them to the bag.
      </p>
     <div className="wishlist-img">
      <img src={wishlistimg}/>
     </div>
      {/* Continue Shopping button (link to /products) */}
      <Link to="/products" className="continue-link">
        <button className="continue-btn">CONTINUE SHOPPING</button>
      </Link>
    </div>
  );
}

export default Wishlist;
