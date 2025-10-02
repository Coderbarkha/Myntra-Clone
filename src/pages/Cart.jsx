import React from "react";
import CartNavbar from "./CartNavbar";
import CartFooter from "../CartFooter";
import { Link } from "react-router-dom";
import cartImg from "../assets/cart.PNG";
import "../styles/global.css";

function Cart() {
  // Currently this page shows the empty-cart state (like Myntra).
  // Later you can replace `isEmpty` with real cart state from context.
  const isEmpty = true;

  return (
    <>
    <CartNavbar/>
      <div className="container" style={{ padding: "36px 0" }}>
        {isEmpty ? (
          <div className="cart-container">
            <div className="cart-empty-illustration">
              <img src={cartImg} alt="Empty cart" style={{ maxWidth: "90%", maxHeight: "90%" }} />
            </div>

            <h2 className="cart-title">Hey It feels light.</h2>

            <p className="cart-sub">
              Add items you like to your bag. We’ll keep them here while you shop.
            </p>

            <Link to="/wishlist" className="wishlist-link">
              <button className="wishlist-btn">ADD ITEMS FROM WISHLIST</button>
            </Link>
          </div>
        ) : (
          <div>
            {/* TODO: render actual cart items when cart is implemented */}
            <p>Cart items will be shown here.</p>
          </div>
        )}

      </div>
        <CartFooter/>
    </>
  );
}

export default Cart;