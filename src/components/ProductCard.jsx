import React from "react";
import { Heart } from "lucide-react"; // wishlist icon

const ProductCard = ({ product }) => {
  if (!product) {
    return <div className="text-red-500">No product data</div>; // fallback UI
  }

  return (
    <div className="w-60 bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition">
      {/* Wishlist Icon */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover"
        />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100">
          <Heart size={18} />
        </button>
      </div>

      {/* Product Details */}
      <div className="p-3">
        <h3 className="font-semibold text-sm">{product.brand}</h3>
        <p className="text-gray-600 text-xs">{product.name}</p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="font-bold">₹{product.price}</span>
          <span className="line-through text-gray-400 text-sm">
            ₹{product.originalPrice}
          </span>
          <span className="text-green-600 text-sm">{product.discount}% OFF</span>
        </div>

        {/* Rating */}
        <p className="text-sm text-gray-500 mt-1">
          ⭐ {product.rating} ({product.reviews} reviews)
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
