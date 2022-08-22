import "./login.css";
import { NavLink } from "react-router-dom";
import Header from "components/header/header";
import { auth, logInWithEmailAndPassword } from "config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AccountPage, 
  FormContainer, 
  Container, 
  Row,
FormBtn,
FormCol2, 
RegForm,
Input} from "./login-style";


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
      <AccountPage>
        <Container>
          <Row>
            <div className="col-2">
              <FormContainer>
                <FormBtn>
                  <span>Login</span>
                </FormBtn>
                <RegForm>
                  <Input
                    type="email"
                    onChange={(e) =>
                      setDataLogin({ ...dataLogin, email: e.target.value })
                    }
                    placeholder="email"
                    value={dataLogin.email}
                  />
                  <Input
                    type="password"
                    onChange={(e) =>
                      setDataLogin({ ...dataLogin, password: e.target.value })
                    }
                    placeholder="Password"
                    value={dataLogin.password}
                  />
                  <FormBtn
                    type="submit"
                    onClick={(e) => handleSubmit(e, "login")}
                    className="btn"
                  >
                    Login
                  </FormBtn>
                  <br /><br />
                  <NavLink to="/register">Switch To Register</NavLink>
                </RegForm>
              </FormContainer>
            </div>
          </Row>
        </Container>
      </AccountPage>
    </>
  );
};

export default Login;
