import React from'react';
import Products from "./Products";
import banner from "../assets/myntra-banner.PNG";
const Home =()=>{
    return(
        <div className='home-container'>
            <img src={banner} className="w-full h-[400px] object-cover" alt='myntra banner'/>
        </div>
    );
}

export default Home;