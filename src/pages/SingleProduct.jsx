import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function SingleProduct() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  // Hook always top-level
  const [mainImg, setMainImg] = useState(product ? product.images[0] : "");

  if (!product) return <div className="p-6">Product not found</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Images */}
        <div className="md:w-1/2">
          <img
            src={mainImg}
            alt={product.name}
            className="w-full h-96 object-cover rounded"
          />
          <div className="flex mt-4 gap-2">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className="w-20 h-20 object-cover cursor-pointer border rounded"
                onClick={() => setMainImg(img)}
              />
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-gray-600">
            Brand: <span className="font-medium">{product.brand}</span>
          </p>
          <p className="text-xl font-semibold">
            ₹{product.price}{" "}
            <span className="line-through text-gray-400 text-sm">
              ₹{product.mrp}
            </span>{" "}
            <span className="text-pink-500 font-medium">
              ({product.discount}% OFF)
            </span>
          </p>
          <p className="text-yellow-500">
            Rating: {product.rating} ⭐ ({product.reviews} reviews)
          </p>

          <div className="flex gap-2 mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
            <button className="border px-4 py-2 rounded hover:bg-gray-100">
              ♡ Wishlist
            </button>
          </div>

          <div className="mt-4 text-gray-700">
            <h4 className="font-semibold mb-1">Description</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
