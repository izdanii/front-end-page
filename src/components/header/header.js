import "../index/index.css"
import { NavLink } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

const Header = () =>{
    return(
<header>
<div className="header">
  <div className="container">
    <div className="navbar">
      <div className="logo">
        <img
          src="./images/gambar/cydt.png"
          width="90px"
          alt="Ini gambar"
        />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <a>Home</a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <a>Account</a>
            </NavLink>
          </li>
            <li>
               <a>
                <Scroll to="products" spy={true} smooth={true} offset={-20} duration={500}>Product</Scroll>
                </a>
            </li>
        </ul>
      </nav>
      <NavLink to="/cart">
        <img
          src="./images/gambar/cart.png"
          width="30px"
          height="30px"
          alt="ini test"
        />
      </NavLink>
    </div>
    </div>
    </div>
</header>
    )
}

export default Header;
