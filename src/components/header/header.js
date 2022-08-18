import "../index/index.css";
import { NavLink } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { auth, logOut } from "config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
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
                  {user ? (
                    <span className="span-logout" onClick={logOut}>logout</span>
                  ) : (
                    <NavLink to="/login">
                      <a>Account</a>
                    </NavLink>
                  )}
                </li>
                <li>
                  <a>
                    <Scroll className="span-logout"
                      to="products"
                      spy={true}
                      smooth={true}
                      offset={-20}
                      duration={500}
                    >
                      Product
                    </Scroll>
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
  );
};

export default Header;
