import React, { useState } from 'react';
import { Search, X } from "lucide-react";

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

  const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

  // Filtered list
  const filteredCategory = categories.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-3">
          {/* Header with Search */}
          <div className="d-flex justify-content-between align-items-center mb-2">
            {!showSearch && <h4 className="fw-bold fs-6 text-dark m-0">Category</h4>}
    
            {!showSearch ? (
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  backgroundColor: "#f0f0f0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => setShowSearch(true)}
              >
                <Search size={16} color="gray" />
              </div>
            ) : (
              <div
                className="d-flex align-items-center"
                style={{
                  background: "#f5f5f6",
                  borderRadius: "20px",
                  padding: "4px 8px",
                  width: "100%",
                  maxWidth: "220px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                <input
                  type="text"
                  placeholder="Search Category"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    fontSize: "14px",
                    flex: 1,
                  }}
                />
                <X
                  size={18}
                  style={{ cursor: "pointer", marginLeft: "6px" }}
                  onClick={() => {
                    setSearchTerm("");
                    setShowSearch(false);
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
