import "./App.css";
import Index from "./components/index";
import ProductsDetails from "./components/product-details/product-details";
import ProductsDetails1 from "./components/product-details/product-details1";
import ProductsDetails2 from "./components/product-details/product-details2";
import ProductsDetails3 from "./components/product-details/product-details3";
import ProductsDetails4 from "./components/product-details/product-details4";
import ProductsDetails5 from "./components/product-details/product-details5";


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
        <Route path="/product-details1" element={<ProductsDetails1 />} />
        <Route path="/product-details2" element={<ProductsDetails2 />} />
        <Route path="/product-details3" element={<ProductsDetails3 />} />
        <Route path="/product-details4" element={<ProductsDetails4 />} />
        <Route path="/product-details5" element={<ProductsDetails5 />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
