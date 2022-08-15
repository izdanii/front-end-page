import '../App.css';
// import App from '../App';

const Index = () => {
return (
    <header>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <img src='./images/gambar/cydt.png' width="90px" alt='Ini gambar' />
            </div>
            <nav>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="login.html">Account</a></li>
              </ul>
            </nav>
            <img src= "./images/gambar/cart.png" width="30px" height="30px" alt="ini test" />
          </div>
          <div className="row">
            <div className="col-2">
              <h1>Can You Do This<br />To Your Lifestyle?</h1>
              <p>Your lifestyle it's your choice.<br />You can do anything to your fashion.<br />You just need to relax and adjusting.</p>
              <p href="" className="btn">Explore Now! &#x27A3;</p>
            </div>
            <div className="col-2">
              <img src="./images/gambar/wadon1.png" alt="wadonnn" />
            </div>
          </div>
        </div>
      </div>
      <Categories/>
      <FeaturedProduct/>
    </header>
  )
}

const Categories = () => {
    return(
        <header>
<div class="categories">
    <div class="small-container">
        <div class="row">
            <div class="col-3">
                <img src="fashion4.jpg" alt=''/>
            </div>
            <div class="col-3">
                <img src="fashion2.jpg" alt=''/>
            </div>
            <div class="col-3">
                <img src="fashion3.jpg" alt=''/>
            </div>
        </div>
    </div>   
</div>
    </header>
    )
}

const FeaturedProduct = () => {
    return(
        <header>
        <div class="small-container">
      <h2>Featured Products</h2>
      <div class="row">
          <div class="col-4">
              <a href="product-details.html"><img src="./images/gambar/product1.jpg" alt=''/>
              <h4>GG Black Gold</h4>
              <div class="rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
              </div>
              <p>Rp,400.000</p></a>
          </div>
          <div class="col-4">
              <a href="product-details.html"><img src="./images/gambar/product2.jpg"alt=''/> 
              <h4>White Your Hustle</h4>
              <div class="rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
              </div>
              <p>Rp,500.000</p></a>
          </div>
          <div class="col-4">
              <a href="product-details.html"><img src="./images/gambar/product3.jpg" alt=''/>
              <h4>White Shoes Company</h4>
              <div class="rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
              </div>
              <p>Rp,950.000</p></a>
          </div>
      </div>
      <div class="row">
          <div class="col-4">
              <a href="product-details.html"><img src="./images/gambar/product4.jpg" alt=''/>
              <h4>Mamba Paradise</h4>
              <div class="rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
              </div>
              <p>Rp,250.000</p></a>
          </div>
          <div class="col-4">
              <a href="product-details.html"><img src="./images/gambar/product5.jpg" alt=''/>
              <h4>Nike White Shoes</h4>
              <div class="rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
              </div>
              <p>Rp,300.000</p></a>
          </div>
          <div class="col-4">
              <a href="product-details.html"><img src="./images/gambar/product7.jpg" alt=''/>
              <h4>Pink Hoodie Skies</h4>
              <div class="rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
              </div>
              <p>Rp,600.000</p></a>
          </div>
      </div>
  
  </div>
      </header>
    )
}

export default Index;