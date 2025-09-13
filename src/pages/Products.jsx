import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";


function Products() {
  return (
    <div className="flex">

      {/* Product Grid */}
      <div className="w-3/4 p-4 grid grid-cols-4 gap-4">
        {products.map((item) => (
          <Link key={item.id} to={`/products/${item.id}`}>
            <ProductCard product={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
