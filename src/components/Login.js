import React from "react";

export const Login = ({
  handleLogin,
  username,
  setUsername,
  setPassword,
  password,
}) => {
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
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />

          <p style={{ fontWeight: "bold" }}>Password</p>
          <input
            id="password"
            type="Password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />

          <button type="submit" id="login-button">
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
};
