import "./product-details.css";
import Header from "components/header/header";
import {NavLink} from "react-router-dom";


const ProductsDetails = () => {
  return (
    <>
    <Header />
    <div className="small-container single-product">
      <div className="row">
        <div className="col-2">
          <img src="./images/gambar/product4.jpg" width="100%" id="ProductImg" />

          <div className="small-img-row">
            <div className="small-img-col">
              <img src="./images/gambar/product4.jpg" class="small-img" />
            </div>
            <div className="small-img-col">
              <img src="./images/gambar/product4.jpg" class="small-img" />
            </div>
            <div className="small-img-col">
              <img src="./images/gambar/product4.jpg" class="small-img" />
            </div>
            <div className="small-img-col">
              <img src="./images/gambar/product4.jpg" class="small-img" />
            </div>
          </div>
        </div>
        <div className="col-2">
          <p>Home / T-shirt</p>
          <h2>Mamba Paradise</h2>
          <h4>$50.00</h4>
          <select name="" id="">
            <option>Select Size</option>
            <option>XXL</option>
            <option>XL</option>
            <option>Large</option>
            <option>Medium</option>
            <option>Small</option>
          </select>
          <input type="number" />

          <NavLink to="/cart" className="btn">
            Add to Cart
          </NavLink>
          <h3>
            Product Details<i className="fa fa-indent"></i>
          </h3>
          <p className="description-product">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nemo
            nam magnam rerum sunt explicabo! Distinctio ipsam doloremque nostrum
            ipsum?
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductsDetails;
