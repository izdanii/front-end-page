import "./login.css";

const Login = () => {
  return (
    // login
    <div class="account-page">
      <div class="container">
        <div class="row">
          <div class="col-2">
            <div class="form-container">
              <div class="form-btn">
                <span onclick="login()">Login</span>
              </div>
              <form action="" id="RegForm">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />

                <button type="submit" class="btn">
                  Login
                </button>
                {/* <a href="">Forgot Password</a> */}
                <a href="register.html">Switch To Register</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
