import "./product-details.css";
import Header from "components/header/header";
import { NavLink, useNavigate, useParams} from "react-router-dom";
import { useFetchProduct } from "hooks/useFetchProduct";
import { useEffect, useState } from "react";
import { Loading } from "components/loading/loading";
import { useDispatch} from "react-redux";
import { addProductToCart, changeQuantity } from "redux/action";
import swal from "sweetalert";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "config/firebase";


const ProductsDetails = () => {
  let {id} = useParams()
  let data = useFetchProduct(id)
  let product = data.product
  let dispatch = useDispatch()
  let [user] = useAuthState(auth)

  useEffect(() => {
    window.scrollTo({top:0, behavior:"smooth"})
  },[id])

  const handlerAddToCart = () => {
    dispatch(addProductToCart(data.product))  
  }

  const navigate = useNavigate()
  const [detailOrder, setDetailOrder] = useState({
    quantity: 0
  })

  const handleCart = () => {
    if (!user) {
      swal("User Not Found", "User Not Found, Please Login", "error")
      navigate("/login")
    } else {
      const{id, name, price, url, description} = product
      const {quantity} = detailOrder
      const data = {id, name, price, url, description, quantity}
      if (quantity === 0) {
        swal("Please Fill All Field", "Please Fill All Field", "error")
      } else {
        dispatch(addProductToCart(data))
        swal("Added To Cart", "Success Added To Cart", "Success")
      }
    }
  }

  return (
    <>
    <Header />
    <div className="small-container single-product">
    {
          data.Loading?
          (<Loading />) : 
          (<div className="row">
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
            <input 
            type="number"
            min="0"
            defaultValue={0}
            onChange={(e) =>
            setDetailOrder({
              ...detailOrder,
              quantity: Number(e.target.value)
            })}
            
            />
  
            <NavLink to="/cart" className="btn" onClick={handleCart}>
              Add to Cart
            </NavLink>
            <h3>
              Product Details<i className="fa fa-indent"></i>
            </h3>
            <p className="description-product">
              {product.description}
            </p>
          </div>
        </div>)
        }
    </div>
    </>
  );
};

export default ProductsDetails;
