import { IoSearchSharp } from "react-icons/io5";

function FilterColor() {
  return (
    <div className="mb-3">
      {/* Top Row: Heading + Search */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h4 className="fw-bold fs-6 text-dark m-0">COLOR</h4>
        <div className="search-circle d-flex justify-content-center align-items-center">
          <IoSearchSharp size={16} color="black" />
        </div>
      </div>

      {/* Color Options Below */}
      <div className="d-flex align-items-center mb-2">
        <input type="checkbox" className="form-check-input me-2" />
        <div
          className="color-circle me-2"
          style={{ backgroundColor: "black" }}
        ></div>
        <span className="me-1">Black</span>
        <span className="text-muted">(42352)</span>
      </div>

      {/* Example: Add more colors later */}
      <div className="d-flex align-items-center mb-2">
        <input type="checkbox" className="form-check-input me-2" />
        <div
          className="color-circle me-2"
          style={{ backgroundColor: "red" }}
        ></div>
        <span className="me-1">Red</span>
        <span className="text-muted">(1200)</span>
      </div>
    </div>
  );
}

export default FilterColor;
