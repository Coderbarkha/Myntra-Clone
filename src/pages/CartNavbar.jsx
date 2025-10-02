import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import myntraLogo from "../assets/myntralogo.jfif";

function CartNavbar(){
    return(
    <>
    <div className='cart-navbar'>
        {/* left logo */}
        <div className='cart-nav-left'>
        <img src={myntraLogo} alt="Myntra Logo" className="cart-logo" />
        </div>

        {/* Middle - Steps */}
      <div className="cart-nav-center">
        <div className="step active">BAG</div>
        <div className="line"></div>
        <div className="step">ADDRESS</div>
        <div className="line"></div>
        <div className="step">PAYMENT</div>
      </div>


      {/* Right - Secure */}
      <div className="cart-nav-right">
        <FaCheckCircle className="secure-icon" />
        <span>100% SECURE</span>
      </div>


    </div>
    </>
    );
};

export default CartNavbar;
