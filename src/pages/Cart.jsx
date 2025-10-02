import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/global.css";
import cartImg from "../assets/cart.PNG";

const Cart = () => {
  return (
    <div>
      <main className="container" style={{ padding: "36px 12px" }}>
        <div className="cart-container">
          <div className="cart-empty-illustration">
            {/* use existing cart image if available, else fallback to icon */}
            {cartImg ? (
              <img src={cartImg} alt="empty cart" style={{ maxWidth: "90%", maxHeight: "90%" }} />
            ) : (
              <i className="bi bi-bag"></i>
            )}
          </div>

          <h2 className="cart-title">Your bag is empty</h2>

          <p className="cart-sub">
            Good things take time. Start exploring to add your favourites to the
            bag.
          </p>

          <Link to="/products" className="continue-link">
            <button className="continue-btn" style={{ borderRadius: 6 }}>
              Continue shopping
            </button>
          </Link>
        </div>
      </main>

    </div>
  );
};

export default Cart;
