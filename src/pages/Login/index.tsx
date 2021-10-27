import React from "react";
import { useHistory } from "react-router-dom";

// @ts-ignore
import logo from "../../logo.svg";

const Login = (): any => {
  const history = useHistory();

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => history.push("home")}>Home</button>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

export default Login;
