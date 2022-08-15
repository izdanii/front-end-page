import "./register.css"
const Register = () => {
    return(
        <div class="account-page">
        <div class="container">
          <div class="row">
            <div class="col-2">
              <div class="form-container">
                <div class="form-btn">
                  <span onclick="login()">Register</span>
                </div>
                <form action="" id="RegForm">
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
    
                    <button type="submit" class="btn">Register</button>
                    <a href="login.html">Switch To Login</a>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Register;