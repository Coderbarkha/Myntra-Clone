import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="min-h-screen">
        <Routes>
          {/* Default route → Products page */}
          <Route path="/" element={<Products />} />

          {/* Products Listing Page */}
          <Route path="/products" element={<Products />} />

          {/* Single Product Details Page */}
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
