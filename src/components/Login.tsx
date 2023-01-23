import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Input from "./form/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // get value from Outlet
  const {
    jwtToken,
    setJwtToken,
  }: { jwtToken: string; setJwtToken: (jwtToken: string) => void } =
    useOutletContext();

  const {
    alertClassName,
    setalAlertClassName,
  }: {
    alertClassName: string;
    setalAlertClassName: (alertClassName: string) => void;
  } = useOutletContext();

  const {
    alertMessage,
    setalAlertMessage,
  }: {
    alertMessage: string;
    setalAlertMessage: (alertMessage: string) => void;
  } = useOutletContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("email/password", email, password);
    if (email === "admin.example.com") {
      setJwtToken("abc");
      setalAlertClassName("d-none");
      setalAlertMessage("");
    } else {
      setalAlertClassName("alert-danger");
      setalAlertMessage("Invalid credentials");
    }
  };
  return (
    <div className="col-md-6 offset-md-3">
      <h2>Login</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <Input
          title="Email Address"
          type="email"
          className="form-control"
          name="email"
          autoComplete="email-new"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        ></Input>

        <Input
          title="Password"
          type="password"
          className="form-control"
          name="password"
          autoComplete="password-new"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        ></Input>
        <hr />
        <input type="submit" className="btn btn-primary" value="login" />
      </form>
    </div>
  );
};

export default Login;
