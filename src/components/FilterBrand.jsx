import React, { useState } from "react";
import { X, Search } from "lucide-react";

function FilterBrand() {
  const brands = [
    {name:"98 Degree North",count:237},
    {name:"7 alt by Pantaloons",count:234},
    {name:"7 Cavalry",count:190},
    {name:"3Colors",count:131},
    {name:"4 TRIPLE O FIVE O BY MUFTI",count:59},
    {name:"3BROS",count:34},
    {name:"9FIGR",count:22},
    {name:"513",count:21},
    {name:"24 Street",count:10},
    {name:"18th HighStreet",count:5},
    {name:"15BUTTONS",count:5},
    {name:"8SECONDS",count:2},
    { name: "Adidas Neo", count: 5432 },
    { name: "Adidas", count: 21098 },
    { name: "Arrow", count: 13450 },
    { name: "Being Human", count: 9870 },
    { name: "Calvin Klein", count: 7654 },
    { name: "Diesel", count: 5432 },
    { name: "Fossil", count: 3210 },
    { name: "Gap", count: 2765 },
    { name: "HRX by Hrithik Roshan", count: 98765 },
    { name: "H&M", count: 76543 },
    { name: "Jack & Jones", count: 43210 },
    { name: "Levi's", count: 65432 },
    { name: "Nike", count: 32109 },
    { name: "Puma", count: 87654 },
    { name: "Roadster", count: 123456 },
    { name: "Tommy Hilfiger", count: 8765 },
    { name: "U.S. Polo Assn.", count: 54321 },
    { name: "Van Heusen", count: 7650 },
    { name: "WROGN", count: 10987 },
    { name: "Zara", count: 8888 },
  ];

  const alphabets = ["#", ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))];

  const [showMore, setShowMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredLetter, setHoveredLetter] = useState(null);

  const filteredBrands = brands.filter((b) =>
    b.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-3">
      {/* Header with Search Icon */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h4 className="fw-bold fs-6 text-dark m-0">BRAND</h4>
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
          onClick={() => setShowMore(true)}
        >
          <Search size={16} color="gray" />
        </div>
      </div>

      {/* Top brands */}
      <div className="d-flex flex-column">
        {brands.slice(0, 5).map((item) => (
          <div key={item.name} className="d-flex align-items-center mb-2">
            <input type="checkbox" className="form-check-input me-2" id={`brand-${item.name}`} />
            <label htmlFor={`brand-${item.name}`}>
              {item.name} ({item.count})
            </label>
          </div>
        ))}

        {/* +1375 More */}
        <span
          className="mt-1"
          style={{
            color: "rgb(252, 86, 113)",
            cursor: "pointer",
            fontWeight: "400",
          }}
          onClick={() => setShowMore(true)}
        >
          +1375 more
        </span>
      </div>

      {/* Side Panel */}
      {showMore && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-white shadow-lg"
          style={{ zIndex: 1050, overflow: "auto" }}
        >
          {/* Header with Search + Close */}
          <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="Search Brand"
              style={{ borderColor: "blue", maxWidth: "250px" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <X size={24} className="cursor-pointer" onClick={() => setShowMore(false)} />
          </div>

          {/* Alphabet bar */}
          <div className="d-flex flex-wrap px-3 py-2">
            {alphabets.map((letter) => (
              <span
                key={letter}
                className="me-2"
                style={{
                  cursor: "pointer",
                  fontWeight: "500",
                  opacity: hoveredLetter && hoveredLetter !== letter ? 0.4 : 1,
                }}
                onMouseEnter={() => setHoveredLetter(letter)}
                onMouseLeave={() => setHoveredLetter(null)}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Divider */}
          <hr className="m-0" style={{ borderColor: "lightgray" }} />

          {/* Brand list */}
          <div className="p-3" style={{ maxHeight: "70vh", overflowY: "auto" }}>
            {filteredBrands.map((item) => {
              const firstLetter = item.name[0].toUpperCase();
              const show = !hoveredLetter || hoveredLetter === firstLetter;

              return (
                <div
                  key={item.name}
                  className="d-flex align-items-center mb-2"
                  style={{ opacity: show ? 1 : 0.3 }}
                >
                  <input type="checkbox" className="form-check-input me-2" id={`brand-panel-${item.name}`} />
                  <label htmlFor={`brand-panel-${item.name}`}>
                    {item.name} ({item.count})
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterBrand;
