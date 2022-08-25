import "../index/index.css";
import { NavLink, useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { Link as Scroll, animateScroll } from "react-scroll";
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
  ImgCart,
} from "./header-style";

const Header = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const Location = useLocation()
  const Navigate =  useNavigate()
  const handleScroll = () => {
    if(Location.pathname != "/"){
      Navigate("/")
      animateScroll.scrollTo(700)
    }
  }
  return (
    <header>
      <StyledHeader>
        <StyledContainer>
          <StyledNavbar>
            <StyledLogo
              src={id ? "/images/gambar/cydt.png" : "./images/gambar/cydt.png"}
              alt="Logo"
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
                     <Scroll
                        className="span-logout"
                        to="products"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                        onClick={handleScroll}
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
            {user ? (
              <NavLink to="/cart">
                <ImgCart
                  src={
                    id
                      ? "/images/gambar/cart-arrow-down-solid.svg"
                      : "./images/gambar/cart-arrow-down-solid.svg"
                  }
                  alt="ini test"
                />
              </NavLink>
            ) : (
              ""
            )}
          </StyledNavbar>
        </StyledContainer>
      </StyledHeader>
    </header>
  );
};


export default Header;
