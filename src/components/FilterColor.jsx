import { IoSearchSharp, IoClose } from "react-icons/io5";
import { useState } from "react";

function FilterColor() {
  const [showMore, setShowMore] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Main Colors
  const mainColors = [
    { name: "Black", color: "black", count: 42352 },
    { name: "White", color: "white", count: 30179 },
    { name: "Blue", color: "blue", count: 27123 },
    { name: "Green", color: "green", count: 17868 },
    { name: "Navy blue", color: "#000080", count: 17529 },
    { name: "Grey", color: "grey", count: 15884 },
    { name: "Red", color: "#D2042D", count: 11705 },
  ];

  // Extra Colors
  const extraColors = [
    { name: "Beige", color: "#F5F5DC", count: 8145 },
    { name: "Maroon", color: "maroon", count: 8108 },
    { name: "Yellow", color: "yellow", count: 7639 },
    { name: "Olive", color: "#808000", count: 6838 },
    { name: "Brown", color: "brown", count: 6138 },
    { name: "Pink", color: "pink", count: 6063 },
    { name: "Purple", color: "purple", count: 4435 },
    { name: "Orange", color: "orange", count: 4330 },
    { name: "Mustard", color: "#FFCE1B", count: 3684 },
    { name: "Teal", color: "teal", count: 3574 },
    { name: "Peach", color: "#FFE5B4", count: 3050 },
    { name: "Off white", color: "#FAF9F6", count: 2951 },
    { name: "Lavender", color: "lavender", count: 2344 },
    { name: "Rust", color: "#B7410E", count: 2037 },
    { name: "Multi", color: "linear-gradient(135deg, #ff7a7a 0%, #ffd27a 50%, #7ad0ff 100%)", count: 1962 },
    { name: "Sea Green", color: "seagreen", count: 1961 },
    { name: "Cream", color: "#FFFDD0", count: 1840 },
    { name: "Turquoise Blue", color: "turquoise", count: 1807 },
    { name: "Charcoal", color: "#36454F", count: 1646 },
    { name: "Grey Melange", color: "#CCCAC9", count: 1561 },
    { name: "Burgundy", color: "#800020", count: 1128 },
    { name: "Mauve", color: "#e0b0ff", count: 925 },
    { name: "Khaki", color: "khaki", count: 760 },
    { name: "Coral", color: "coral", count: 624 },
    { name: "Coffee Brown", color: "#6F4E37", count: 579 },
    { name: "Lime Green", color: "limegreen", count: 497 },
    { name: "Taupe", color: "#483C32", count: 284 },
    { name: "Gold", color: "gold", count: 217 },
    { name: "Rose", color: "#F33A6A", count: 200 },
    { name: "Camel Brown", color: "#C19A6B", count: 168 },
    { name: "Tan", color: "#D2B48C", count: 161 },
    { name: "Fluorescent Green", color: "#39FF14", count: 153 },
    { name: "Violet", color: "violet", count: 150 },
    { name: "Silver", color: "silver", count: 140 },
    { name: "Steel", color: "#71797E", count: 92 },
    { name: "Magenta", color: "magenta", count: 75 },
    { name: "Assorted", color: "assorted", count: 71 },
    { name: "Nude", color: "#F2D2BD", count: 55 },
    { name: "Metallic", color: "#C0C0C0", count: 35 },
    { name: "Rose Gold", color: "#B76E79", count: 26 },
    { name: "Copper", color: "#B87333", count: 17 },
    { name: "Bronze", color: "#B08D57", count: 9 },
    { name: "Champagne", color: "#F7E7CE", count: 3 },
    { name: "Transparent", color: "rgba(255,255,255,0.6)", count: 1 },
    { name: "Skin", color: "#FFCC99", count: 1 },
  ];

  // Merge All Colors
  const allColors = [...mainColors, ...extraColors];

  // Filtered list
  const filteredColors = allColors.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  // 🔹 Color Row
  const ColorRow = ({ color, name, count }) => (
    <div className="d-flex align-items-center mb-2">
      <input type="checkbox" className="form-check-input me-2" />
      <div className="color-circle me-2" style={{ backgroundColor: color }}></div>
      <span className="me-1">{name}</span>
      <span className="text-muted">({count})</span>
    </div>
  );

  return (
    <div className="mb-3">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        {!searchOpen ? (
          <>
            <h4 className="fw-bold fs-6 text-dark m-0">COLOR</h4>
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
              placeholder="Search color..."
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

      {/* List */}
      {!searchOpen ? (
        <>
          {mainColors.map((c, i) => (
            <ColorRow key={i} {...c} />
          ))}
          {showMore &&
            extraColors.map((c, i) => (
              <ColorRow key={mainColors.length + i} {...c} />
            ))}
          <div
            className="more-color"
            onClick={() => setShowMore(!showMore)}
            style={{ cursor: "pointer" }}
          >
            {showMore ? "Show Less" : "45+ more"}
          </div>
        </>
      ) : (
        <>
          {filteredColors.length > 0 ? (
            filteredColors.map((c, i) => <ColorRow key={i} {...c} />)
          ) : (
            <p className="text-muted">No Results Found</p>
          )}
        </>
      )}
    <hr style={{ borderColor: "#9d9d9eff", margin: "2" }} />
    </div>

  );
}

export default FilterColor;
