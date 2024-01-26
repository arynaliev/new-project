import React, { useState } from "react";
import "./loginApp.style.css";
import Message from "../../components/message/Message";

const credentials = {
  password: "12345",
  username: "Geek",
};

const LoginApp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tryCount, setTryCount] = useState(3);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      username === credentials.username &&
      password === credentials.password
    ) {
      setIsSuccess(true);
      setIsSubmitted(true);
    } else {
      setIsSuccess(false);
      setIsSubmitted(true);
      setUsername("");
      setPassword("");
      setTryCount(tryCount - 1);
    }
    //  console.log("form submitted");
  };

  const showErrorMessage = () => {
    if (tryCount > 0) {
      return <Message type="error">You have {tryCount} attempts!</Message>;
    } else {
      return <Message type="error">Your account is locked!</Message>;
    }
  };

  return (
    <div className="loginApp-container">
      {isSubmitted && isSuccess ? (
        <Message type={"success"}>Success </Message>
      ) : (
        <form onSubmit={onSubmitHandler}>
          <div className="form-item">
            <label>Username</label>
            <input
              name="username"
              onChange={onUsernameChange}
              value={username}
            />
          </div>

          <div className="form-item">
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={onPasswordChange}
            />
          </div>

          <button disabled={tryCount === 0} type="submit">
            Login
          </button>
          {isSubmitted && !isSuccess ? showErrorMessage() : null}
        </form>
      )}
    </div>
  );
};

export default LoginApp;
