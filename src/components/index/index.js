// import App from '../App';
import "./index.css";
import { NavLink } from "react-router-dom";
import Header from "../header/header.js";
import { Link as Scroll } from "react-scroll";
import { useFetchProducts } from "hooks/useFetchProducts";
import { 
  Row,
  RowManta,
Column2,
H1,
P,
Btn,
Wadon1,
SmallContainer, 
Column4,
Col4Img,
Rating} from "./index-style";
import { Loading } from "components/loading/loading";


const Index = () => {
  return (
    <>
    <Header />
      <RowManta>
        <Column2>
          <H1>
            Can You Do This
            <br />
            To Your Lifestyle?
          </H1>
          <P>
            Your lifestyle it's your choice.
            <br />
            You can do anything to your fashion.
            <br />
            You just need to relax and adjusting.
          </P>
                    <Scroll className="span-logout"
                      to="products"
                      spy={true}
                      smooth={true}
                      offset={-60}
                      duration={500}
                    >
                      <Btn>
                         Explore Now! &#x27A3;
                      </Btn>
                    </Scroll>
        </Column2>
        <Wadon1 src="./images/gambar/wadon1.png" alt="wadonnn" />
    </RowManta>
      <FeaturedProduct />
      </>
  );
};

const FeaturedProduct = () => {
  let products = useFetchProducts()
  let productList = []
  let productList2 = []
  if (products.products.length>0 && !products.Loading){
    for (let i = 0; i<=2; i++) {
        productList.push(<Column4 key={i} id="products">
    <NavLink to={`/product-details/${products.products[i].id}`}>
      <a href="product-details.html">
        <Col4Img src={products.products[i].url}  alt="" />
        <h4>{products.products[i].name}</h4>
        <Rating>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-o"></i>
        </Rating>
        <p>Rp, {products.products[i].price}</p>
      </a>
    </NavLink>
  </Column4>)
    }

    for (let i = 3; i<=5; i++) {
      productList2.push(<Column4 key={i}>
  <NavLink to={`/product-details/${products.products[i].id}`}>
    <a href="product-details.html">
      <Col4Img src={products.products[i].url}  alt="" />
      <h4>{products.products[i].name}</h4>
      <Rating>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
      </Rating>
      <p>Rp, {products.products[i].price}</p>
    </a>
  </NavLink>
</Column4>)
  }

  } else {
    productList=""
  }
  return (
    <header>
      <SmallContainer>
        <h2>Featured Products</h2>
        <Row>
          {
            products.Loading?
            <Loading /> : productList
          }
        </Row>
        <Row>
        {
            products.Loading?
            <Loading /> : productList2
          }
        </Row>
        </SmallContainer>
    </header>
  );
};

export default Index;
