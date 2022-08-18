import "./login.css";
import { NavLink } from "react-router-dom";
import Header from "components/header/header";

const Login = () => {
  return (
    <>
    <Header />
    <div className="account-page">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <div className="form-container">
              <div className="form-btn">
                <span onclick="login()">Login</span>
              </div>
              <form action="" id="RegForm">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <NavLink to = "/index">
                <button type="submit" className="btn">
                  Login
                </button>
                </NavLink>
                <NavLink to ="/register">Switch To Register</NavLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
