import "./product-details.css";
import Header from "components/header/header";
import {NavLink, useParams} from "react-router-dom";
import { useFetchProduct } from "hooks/useFetchProduct";


const ProductsDetails = () => {
  let {id} = useParams()
  let data = useFetchProduct(id)
  let product = data.product
  console.log(id)
  return (
    <>
    <Header />
    <div className="small-container single-product">
      <div className="row">
        <div className="col-2">
          <img src={`/${product.url}`}width="100%" id="ProductImg" />

          <div className="small-img-row">
            <div className="small-img-col">
              <img src={`/${product.url}`}class="small-img" />
            </div>
            <div className="small-img-col">
              <img src={`/${product.url}`}class="small-img" />
            </div>
            <div className="small-img-col">
              <img src={`/${product.url}`}class="small-img" />
            </div>
            <div className="small-img-col">
              <img src={`/${product.url}`}class="small-img" />
            </div>
          </div>
        </div>
        <div className="col-2">
          <h2>{product.name}</h2>
          <h4>Rp. {product.price}</h4>
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
            {product.description}
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductsDetails;
