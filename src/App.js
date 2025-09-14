import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Wishlist from "./pages/WishList";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
