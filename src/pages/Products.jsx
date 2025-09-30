// src/pages/Products.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import {products} from "../data/products";

function Products() {
  const { category, subcategory } = useParams();

  // filter logic
  const filteredProducts = products.filter(
    (p) =>
      p.category.toLowerCase() === category.toLowerCase() &&
      p.subcategory.toLowerCase() === subcategory.toLowerCase()
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        {category} → {subcategory}
      </h2>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((p) => (
            <Link
              to={`/product/${p.id}`}
              key={p.id}
              className="border p-4 rounded-lg hover:shadow-lg"
            >
              <img
                src={p.images[0]}
                alt={p.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-2 font-medium">{p.name}</h3>
              <p className="text-gray-600">
                ₹{p.price}{" "}
                <span className="line-through text-sm text-gray-400">
                  ₹{p.mrp}
                </span>
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
