import React from 'react';

import { Link } from "react-router-dom";
import cartFooterImg from "../src/assets/cart-footer.PNG"; 

function CartFooter(){
    return(
        <>
        <div className='cart-footer'>
            {/* left image */}
            <div className='cart-footer-left'>
                <img src={cartFooterImg} alt='cartfooterimg' className='cart-footer-img'/>
            </div>

            {/* right links */}
            <div className='cart-footer-right'>
                <Link to='/help' className='cart-footer-link'>Need Help?</Link>
                <Link to="/help" className="cart-footer-link">Contact Us</Link>
            </div>
        </div>
        </>
    );
};
export default CartFooter;