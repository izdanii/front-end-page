// import App from '../App';
import "./index.css";
import { NavLink } from "react-router-dom";
import Header from "../header/header.js";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";


const Index = () => {
  return (
    <>
    <Header />
      <div className="row">
        <div className="col-2 background-black">
          <h1>
            Can You Do This
            <br />
            To Your Lifestyle?
          </h1>
          <p>
            Your lifestyle it's your choice.
            <br />
            You can do anything to your fashion.
            <br />
            You just need to relax and adjusting.
          </p>

          <a>
                    <Scroll className="span-logout"
                      to="products"
                      spy={true}
                      smooth={true}
                      offset={-20}
                      duration={500}
                    >
                      <a className="btn">
                         Explore Now! &#x27A3;
                      </a>
                    </Scroll>
                    </a>
        </div>
      <div className="col-2 background-black">
        <img src="./images/gambar/wadon1.png" alt="wadonnn" />
      </div>
    </div>
      <FeaturedProduct />
      </>
  );
};


const FeaturedProduct = () => {
  return (
    <header>
      <div id = "products" className="small-container">
        <h2>Featured Products</h2>
        <div className="row">
          <div className="col-4">
            <NavLink to="/product-details">
              <a href="product-details.html">
                <img src="./images/gambar/product1.jpg" alt="" />
                <h4>GG Black Gold</h4>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-o"></i>
                </div>
                <p>Rp,400.000</p>
              </a>
            </NavLink>
          </div>
            <div className="col-4">
          <Link to="/product-details1">
              <a href="product-details.html">
                <img src="./images/gambar/product2.jpg" alt="" />
                <h4>White Your Hustle</h4>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-o"></i>
                </div>
                <p>Rp,500.000</p>
              </a>
          </Link>
            </div>
          <div className="col-4">
          <NavLink to="/product-details2">
            <a href="product-details.html">
              <img src="./images/gambar/fashion2.jpg" alt="" />
              <h4>White Shoes Company</h4>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <p>Rp,950.000</p>
            </a>
          </NavLink>
          </div>

        <div className="row">
          <div className="col-4">
        <NavLink to="/product-details3">
            <a href="product-details.html">
              <img src="./images/gambar/product4.jpg" alt="" />
              <h4>Mamba Paradise</h4>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <p>Rp,250.000</p>
            </a>
          </NavLink>
          </div>
          

          <div className="col-4">
          <NavLink to="/product-details4">
            <a href="product-details.html">
              <img src="./images/gambar/product5.jpg" alt="" />
              <h4>Nike White Shoes</h4>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <p>Rp,300.000</p>
            </a>
          </NavLink>
          </div>

          <div className="col-4">
            <NavLink to = "/product-details5">
            <a href="product-details.html">
              <img src="./images/gambar/product7.jpg" alt="" />
              <h4>Pink Hoodie Skies</h4>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <p>Rp,600.000</p>
            </a>
            </NavLink>
          </div>

        </div>
        </div>
        </div>
    </header>
  );
};

export default Index;
