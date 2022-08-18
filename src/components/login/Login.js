import "./login.css";
import { NavLink } from "react-router-dom";
import Header from "components/header/header";
import { auth, logInWithEmailAndPassword } from "config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
  const [dataLogin, setDataLogin] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const handleSubmit = async (e, params) => {
    e.preventDefault();
    console.log("login");
    if (params === "login") {
      await logInWithEmailAndPassword(dataLogin.email, dataLogin.password);
      console.log("success", dataLogin.email, dataLogin.password);
    }
  };
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate("/");
    }
    if (error) {
      alert(error);
    }
  }, [loading, user, error, navigate]);
  return (
    <>
      <Header />
      <div className="account-page">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <div className="form-container">
                <div className="form-btn">
                  <span>Login</span>
                </div>
                <form action="" id="RegForm">
                  <input
                    type="email"
                    onChange={(e) =>
                      setDataLogin({ ...dataLogin, email: e.target.value })
                    }
                    placeholder="email"
                    value={dataLogin.email}
                  />
                  <input
                    type="password"
                    onChange={(e) =>
                      setDataLogin({ ...dataLogin, password: e.target.value })
                    }
                    placeholder="Password"
                    value={dataLogin.password}
                  />
                  <button
                    type="submit"
                    onClick={(e) => handleSubmit(e, "login")}
                    className="btn"
                  >
                    Login
                  </button>
                  <NavLink to="/register">Switch To Register</NavLink>
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
