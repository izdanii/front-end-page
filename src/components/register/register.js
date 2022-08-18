import "./register.css"
import { NavLink } from "react-router-dom";
import Header from "components/header/header";

const Register = () => {
    return(
      <>
      <Header />
        <div className="account-page">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <div className="form-container">
                <div className="form-btn">
                  <span onclick="login()">Register</span>
                </div>
                <form action="" id="RegForm">
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
    
                    <button type="submit" className="btn">Register</button>
                    <NavLink to = "/login">Switch To Login</NavLink>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default Register;