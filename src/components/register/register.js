import "./register.css";
import { NavLink } from "react-router-dom";
import Header from "components/header/header";
import { auth, registerWithEmailAndPassword } from "config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AccountPage, FormBtn, FormContainer, Input, RegForm } from "./register-style";
import { Container } from "./register-style";
import { Row } from "./register-style";

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
      <AccountPage>
        <Container>
          <Row>
            <div className="col-2">
              <FormContainer>
                <FormBtn>
                  <span>Register</span>
                </FormBtn>
                <RegForm>
                  <Input
                    type="text"
                    onChange={(e) =>
                      setSignUp({ ...signUp, name: e.target.value })
                    }
                    placeholder="Username"
                    value={signUp.name}
                  />

                  <Input
                    type="email"
                    onChange={(e) =>
                      setSignUp({ ...signUp, email: e.target.value })
                    }
                    placeholder="Email"
                    value={signUp.email}
                  />

                  <Input
                    type="password"
                    onChange={(e) =>
                      setSignUp({ ...signUp, password: e.target.value })
                    }
                    placeholder="Password"
                    value={signUp.password}
                  />

                  <FormBtn
                    type="submit"
                    onClick={(e) => handleSubmit(e, "register")}
                    className="btn"
                  >
                    Register
                  </FormBtn>
                  <NavLink to="/login">Switch To Login</NavLink>
                </RegForm>
              </FormContainer>
            </div>
          </Row>
        </Container>
      </AccountPage>
    </>
  );
};

export default Register;
