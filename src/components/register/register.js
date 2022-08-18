import "./register.css";
import { NavLink } from "react-router-dom";
import Header from "components/header/header";
import { auth, registerWithEmailAndPassword } from "config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Register = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e, params) => {
    e.preventDefault();
    if (params === "register") {
      console.log(signUp.email, signUp.password, signUp.name);
      await registerWithEmailAndPassword(signUp.name, signUp.email, signUp.password);
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
                  <span>Register</span>
                </div>
                <form action="" id="RegForm">
                  <input
                    type="text"
                    onChange={(e) =>
                      setSignUp({ ...signUp, name: e.target.value })
                    }
                    placeholder="Username"
                    value={signUp.name}
                  />

                  <input
                    type="email"
                    onChange={(e) =>
                      setSignUp({ ...signUp, email: e.target.value })
                    }
                    placeholder="Email"
                    value={signUp.email}
                  />

                  <input
                    type="password"
                    onChange={(e) =>
                      setSignUp({ ...signUp, password: e.target.value })
                    }
                    placeholder="Password"
                    value={signUp.password}
                  />

                  <button
                    type="submit"
                    onClick={(e) => handleSubmit(e, "register")}
                    className="btn"
                  >
                    Register
                  </button>
                  <NavLink to="/login">Switch To Login</NavLink>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
