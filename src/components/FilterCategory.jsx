import React, { useState } from 'react';
import { IoSearchSharp, IoClose } from "react-icons/io5";  // Import IoClose also

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

  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Filtered list
  const filteredCategory = categories.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mb-3">
      {/* Heading + Search */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        {!searchOpen ? (
          <>
            <h4 className="fw-bold fs-6 text-dark m-0">CATEGORY</h4>
            <div
              className="search-circle d-flex justify-content-center align-items-center"
              onClick={() => setSearchOpen(true)}
            >
              <IoSearchSharp size={16} color="black" />
            </div>
          </>
        ) : (
          <div className="search-bar d-flex align-items-center w-100">
            <input
              type="text"
              placeholder="Search category..."
              className="flex-grow-1 bg-light px-2 py-1 border-0"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            <IoClose
              size={20}
              color="black"
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (query) {
                  setQuery("");
                } else {
                  setSearchOpen(false);
                }
              }}
            />
          </div>
        )}
      </div>

      {/* Category checkboxes */}
      <div className="d-flex flex-column">
        {filteredCategory.length > 0 ? (
          filteredCategory.map((item) => (
            <div key={item.name} className="d-flex align-items-center mb-2">
              <input
                type="checkbox"
                className="form-check-input me-2"
                name="category"
                id={`category-${item.name}`}
              />
              <label htmlFor={`category-${item.name}`}>
                {item.name} ({item.count})
              </label>
            </div>
          ))
        ) : (
          <p className="text-muted">No results found</p>
        )}
      </div>
      <hr style={{ borderColor: "#9d9d9eff", margin: "2" }} />
    </div>
  );
}

export default FilterCategory;
