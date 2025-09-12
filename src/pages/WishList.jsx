// src/pages/Wishlist.jsx
import React from "react";
import { Heart } from "lucide-react"; // icon

function Wishlist() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      {/* Heart Icon */}
      <Heart size={60} className="text-gray-400 mb-4" strokeWidth={1} />

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-2">YOUR WISHLIST IS EMPTY</h2>

      {/* Subtext */}
      <p className="text-gray-600 mb-6 max-w-md">
        Add items that you like to your wishlist. Review them anytime and easily
        move them to the bag.
      </p>

      {/* Continue Shopping Button */}
      <button className="px-6 py-2 border border-blue-500 text-blue-500 font-semibold uppercase rounded hover:bg-blue-50">
        Continue Shopping
      </button>
    </div>
  );
}

export default Wishlist;
