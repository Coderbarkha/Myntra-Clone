import { useState } from "react"

function FilterPrice(){
    const[minPrice]=useState(0);
    const[maxPrice,setmaxPrice]=useState(5000);
    const handleChange=(e)=>{
        setmaxPrice(e.target.value);
    };
    return(
        <div className="mb-6">
            <h5 className="font-semibold mb-2">Price</h5>
            <input
        type="range"
        min={minPrice}
        max="5000"
        step="100"
        value={maxPrice}
        onChange={handleChange}
        className="w-full cursor-pointer accent-pink-500"
      />
      {/* Labels */}
        <div>
        <span>₹{minPrice}</span>
        <span>₹{maxPrice}</span>
        </div>
         </div>
    )
}

export default FilterPrice;