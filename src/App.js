import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Wishlist from "./pages/WishList";
import Login from "./pages/Login";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GetHelp from "./pages/GetHelp";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";


function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<><Navbar /><Home />  <Footer /></>} />
          <Route path="/products/:category/:subcategory" element={<><Navbar/><Products /><Footer/></>} />
          <Route path="/product/:id" element={<><Navbar /><SingleProduct /><Footer /></>} />

          <Route path="/wishlist" element={<><Navbar /><Wishlist /> <Footer /></>} />
          <Route path="/cart" element={<><Cart /> </>} />
          <Route path="/login" element={<><Navbar hideProfile={true} /><Login /></>} />
          <Route path="/terms" element={<><Navbar/><TermsOfUse /><Footer/></>} />
          <Route path="/privacy" element={<><Navbar/><PrivacyPolicy /><Footer/></>} />
          <Route path="/help" element={<><Navbar/><GetHelp /><Footer/></>} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
