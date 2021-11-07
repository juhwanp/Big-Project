import { useState } from "react";
import Logo from "../pictures/logo-title-nobg.png";
import LoginButton from "../pictures/login-button.png";
import RegisterButton from "../pictures/register-button.png";
import { Link } from "react-router-dom";
import "./login.css";
import axios from "axios";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
    } catch (error) {
      console.log("ERROR");
    }
  };
  return (
    <div className="div-login">
      <div className="div-login-logo">
        <img src={Logo} alt="logo" className="logo-img" />
      </div>
      <div className="div-login-form">
        <form onSubmit={submitHandler}>
          <div className="login-form-group">
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              className="login-input"
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="login-form-group">
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              className="login-input"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button onSubmit={submitHandler}>
            <img src={LoginButton} alt="login" className="login-button" />
          </button>
          <div className="new-user-div">
            <p>New User?</p>
          </div>
          <Link to="/register">
            <button>
              <img
                src={RegisterButton}
                alt="register"
                className="register-button"
              />
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
