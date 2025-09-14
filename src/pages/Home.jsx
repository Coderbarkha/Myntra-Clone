import React from "react";
import banner from "../assets/myntra-banner.PNG";
import myntrahero from "../assets/myntra-hero2.PNG";
import sliderimage1 from "../assets/sliderimg1.PNG";
import "../styles/global.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="banner-container">
        <img
          src={banner}
          className="w-full h-[400px] object-cover myntra-banner"
          alt="myntra banner"
        />
        <img
          src={myntrahero}
          className="w-full h-[400px] object-cover myntra-banner"
          alt="myntra hero"
        />
        <img
          src={sliderimage1}
          className="w-full h-[400px] object-cover myntra-banner"
          alt="slider image 1"
        />

      </div>
    </div>
  );
};

export default Home;
