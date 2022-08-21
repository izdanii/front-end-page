import "../index/index.css";
import { NavLink } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { auth, logOut } from "config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { 
  StyledHeader,
   StyledContainer,
  StyledNavbar,
StyledLogo,
Nav,
Ul,
Li,
A,
SpanLogout,
ImgCart }
   from "./header-style";


const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <header>
      <StyledHeader>
        <StyledContainer>
          <StyledNavbar>
              <StyledLogo
                src="./images/gambar/cydt.png"
                alt="Ini gambar"
              />
            <Nav>
              <Ul>
                <Li>
                  <NavLink to="/">
                    <a className="bar">Home</a>
                  </NavLink>
                </Li>
                <Li>
                  <A>
                    <Scroll className="span-logout"
                      to="products"
                      spy={true}
                      smooth={true}
                      offset={-20}
                      duration={500}
                    >
                      <A>Product</A>
                    </Scroll>
                  </A>
                </Li>
                <Li>
                  {user ? (
                    <SpanLogout onClick={logOut}>logout</SpanLogout>
                  ) : (
                    <NavLink to="/login">
                      <A>Account</A>
                    </NavLink>
                  )}
                </Li>
              </Ul>
            </Nav>
            {
              user ? <NavLink to="/cart">
              <ImgCart
                src="./images/gambar/cart-arrow-down-solid.svg"
                alt="ini test"
              />
            </NavLink>
            :
            ""
            }
          </StyledNavbar>
        </StyledContainer>
      </StyledHeader>
    </header>
  );
};

export default Header;
