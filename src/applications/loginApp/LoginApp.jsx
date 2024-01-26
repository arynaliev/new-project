import React, { useState } from "react";
import "./loginApp.style.css";

const credentials = {
  password: 12345,
  username: "Geek",
};

const LoginApp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
    //  console.log(username);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    //  console.log(password);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      username === credentials.username &&
      password === credentials.password
    ) {
      setIsSuccess(true);
    }
    //  console.log("form submitted");
  };

  return (
    <div className="loginApp-container">
      <form onSubmit={onSubmitHandler}>
        <div className="form-item">
          <label>Username</label>
          <input name="username" onChange={onUsernameChange} />
        </div>

        <div className="form-item">
          <label>Password</label>
          <input name="password" onChange={onPasswordChange} />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginApp;
