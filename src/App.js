import "./App.css";
import Index from "./components/index";
import ProductsDetails from "./components/product-details/product-details";
import Login from "./components/login/Login";
import Register from "./components/register/register";
import Cart from "./components/cart/cart";
// import header from index

function App() {
  return (
    <>
      <header>
        <Index />
      </header>
      <ProductsDetails />
      <Login />
      <Register />
      <Cart />
    </>
  );
}

export default App;
