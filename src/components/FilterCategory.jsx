import React from 'react';
import { IoSearchSharp } from "react-icons/io5";

function FilterCategory() {
  const categories = [
    { name: "Tshirts", count: 245816 },
    { name: "Shirts", count: 217465 },
    { name: "Kurtas", count: 41899 },
    { name: "Sweatshirts", count: 32456 },
    { name: "Jackets", count: 24367 },
    { name: "Sweaters", count: 12820 },
    { name: "Blazers", count: 6519 },
    { name: "Tunics", count: 1 },
  ];

  return (
    <div>
      {/* Heading */}
      <div className='d-flex justify-content-between align-items-center'>
        <h4 className='fw-bold fs-6 text-dark mb-2'>Category</h4>
        <IoSearchSharp size={16} color="black" />
      </div>

      {/* Category checkboxes */}
      <div className='d-flex flex-wrap align-items-center'>
        {categories.map((item) => (
          <div key={item.name} className='d-flex align-items-center me-4 mb-2'>
            <input
              type='checkbox'
              className='form-check-input me-2'
              name='category'
              id={`category-${item.name}`}
            />
            <label htmlFor={`category-${item.name}`}>
              {item.name} ({item.count})
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterCategory;
