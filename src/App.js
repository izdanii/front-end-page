import "./App.css";
import Index from "./components/index";
import ProductsDetails from "./components/product-details/product-details";
import Login from "./components/login/Login";
import Register from "./components/register/register";
import Cart from "./components/cart/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import header from index

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/product-details" element={<ProductsDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
