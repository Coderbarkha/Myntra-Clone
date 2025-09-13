import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import FilterSidebar from "../components/FilterSidebar";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center mt-10">Product Not Found</h2>;
  }

  return (
    <div className="p-6 flex gap-10">
      <div className="w-1/4 border-r p-4">
        <FilterSidebar />
      </div>
      {/* Left side: images */}
      <div className="w-1/2">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-auto object-cover rounded-md shadow"
        />
      </div>

      {/* Right side: info */}
      <div className="w-1/2">
        <h2 className="text-2xl font-bold">{product.brand}</h2>
        <p className="text-lg text-gray-700 mb-2">{product.name}</p>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl font-semibold text-gray-900">
            ₹{product.price}
          </span>
          <span className="line-through text-gray-400">₹{product.mrp}</span>
          <span className="text-green-600">{product.discount}% OFF</span>
        </div>

        <div className="mb-4 text-gray-600">
          ⭐ {product.rating} ({product.reviews} Reviews)
        </div>

        <button className="px-6 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700">
          Add to Bag
        </button>
        <button className="ml-3 px-6 py-2 border rounded-lg hover:bg-gray-100">
          Wishlist
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
