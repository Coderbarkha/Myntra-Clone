import React, { useState } from "react";
import { Heart, ShoppingBag, Eye } from "lucide-react"; // icons

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="border rounded-lg overflow-hidden shadow-sm bg-white"
      style={{ width: "220px", cursor: "pointer" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Section */}
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-300"
        />

        {/* Hover Buttons */}
        {hovered && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-3">
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
              <Heart size={18} />
            </button>
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
              <ShoppingBag size={18} />
            </button>
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
              <Eye size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-2">
        <h6 className="font-semibold text-sm text-gray-800 truncate">
          {product.brand}
        </h6>
        <p className="text-sm text-gray-600 truncate">{product.name}</p>

        {/* Price Section */}
        <div className="flex items-center gap-2 mt-1">
          <span className="font-semibold text-gray-900">₹{product.price}</span>
          <span className="line-through text-gray-400 text-sm">
            ₹{product.mrp}
          </span>
          <span className="text-green-600 text-sm">
            {product.discount}% OFF
          </span>
        </div>

        {/* Rating */}
        <div className="text-sm text-gray-600 mt-1">
          ⭐ {product.rating} ({product.reviews})
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
