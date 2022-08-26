import Header from "components/header/header";
import { MainProduct, ShoppingCart } from "./cart-style";
import './cart.css'
import { useSelector, useDispatch } from "react-redux/es/exports";
import { changeQuantity, removeProductToCart } from "redux/action";
import { rupiah } from "helper/helper";

const Cart = () => {
  const { data } = useSelector(state=> state.productOrder)
  const dispatch = useDispatch()
  let total = 0
  // console.log(data)
  if (data.length == 1 ) {
    const {price,quantity} = data[0]
    total = price * quantity
  } else if(data.length > 1) {
    const itemTotal = data.map(p => p.price * p.quantity )
    total = itemTotal.reduce(
      
      (previousValue, currentValue) =>  {
        console.log("previousValue", previousValue)
        console.log("currentValue", currentValue)
       return (previousValue + currentValue)
      }
    )
  }

console.log("total",total)

    return(
      <>
      <Header />
        <MainProduct className="mobile-Product">
        <ShoppingCart className="mobile-shoping">
        <div>
            <br />
            <br />
            <br />
          <div className="column-labels-flex">
            <div className="column-labels-one">
              <label className="label-image">Image</label>
              <label className="label-details">Product</label>
              <label className="label-price">Price</label>
              <label className="label-quantity">Quantity</label>
              <label className="label-removal">Remove</label>
            </div>
            <div className="column-labels-two">
              <label className="label-total">Total</label>
            </div>
          </div>
          
        </div>
        {
          data.map((product, i) => (
          <div className="product">
          <div className="product-image">
            <img src={product.url} />
          </div>
          <div className="product-details">
            <div className="product-title">{product.name}</div>
            <p className="product-description">{product.description}</p>
          </div>
          <div className="product-price">{rupiah(product.price)}</div>
          <div className="product-quantity">
            <input type="number" onClick={() => dispatch(changeQuantity(product))} value={product.quantity}/>
          </div>
          <div className="product-removal">
            <button className="remove-product" onClick={() => dispatch(removeProductToCart(product))}>
              Remove
            </button>
          </div>
          <div className="product-line-price">{rupiah(product.quantity * product.price)}</div>
        </div>
          ))
        }
        <div className="totals">
          <div className="totals-item">
            <label>Shipping</label>
            <div className="totals-value" id="cart-shipping">Free</div>
          </div>
          <div className="totals-item totals-item-total">
            <label>Grand Total</label>
            <div className="totals-value" id="cart-total">{rupiah(total)}</div>
          </div>
        </div>
            
            <button className="checkout">Checkout</button>
        {/* </div> */}

      
      </ShoppingCart>
      </MainProduct>
      </>
    ) 
}




export default Cart;