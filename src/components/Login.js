/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { login } from "../reducers/userReducer";
import { useDispatch } from "react-redux";

export const Login = () => {
  const dispatch = useDispatch();
  const [userLogIn, setUserLogIn] = useState({
    username: "",
    password: "",
  });

  const handleLogInChange = ({ target }) => {
    setUserLogIn((prevInputData) => ({
      ...prevInputData,
      [target.name]: target.value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(userLogIn));
  };

  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center" }}>LOG IN</h2>
        <form
          onSubmit={handleLogin}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <p style={{ fontWeight: "bold" }}>Username</p>
          <input
            id="username"
            type="text"
            value={userLogIn.username}
            name="username"
            onChange={handleLogInChange}
          />

          <p style={{ fontWeight: "bold" }}>Password</p>
          <input
            id="password"
            type="Password"
            value={userLogIn.password}
            name="password"
            onChange={handleLogInChange}
          />

          <button type="submit" id="login-button">
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
};
