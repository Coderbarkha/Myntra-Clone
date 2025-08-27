import { useState } from "react";
import "../styles/global.css"; // import CSS

function FilterPrice() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);

  const min = 0;
  const max = 5000;

  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    if (value <= maxPrice) setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    if (value >= minPrice) setMaxPrice(value);
  };

  return (
    <div className="filter-price">
      {/* Heading */}
      <h4 className="fw-bold fs-6 text-dark m-0  price-heading">PRICE</h4>

      {/* Slider wrapper */}
      <div className="slider-container">
        {/* Grey base line */}
        <div className="slider-track"></div>

        {/* Pink active line */}
        <div
          className="slider-range"
          style={{
            left: `${(minPrice / max) * 100}%`,
            right: `${100 - (maxPrice / max) * 100}%`,
          }}
        ></div>

        {/* Min slider */}
        <input
          type="range"
          min={min}
          max={max}
          step="100"
          value={minPrice}
          onChange={handleMinChange}
          className="thumb thumb-left"
        />

        {/* Max slider */}
        <input
          type="range"
          min={min}
          max={max}
          step="100"
          value={maxPrice}
          onChange={handleMaxChange}
          className="thumb thumb-right"
        />
      </div>

      {/* Price Label */}
      <div className="price-label">
        ₹{minPrice} - ₹{maxPrice}+
      </div>
      <hr style={{ borderColor: "#9d9d9eff", margin: "2" }} />
    </div>
  );
}

export default FilterPrice;
