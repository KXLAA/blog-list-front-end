import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../reducers/authReducer";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  return (
    <div>
      {" "}
      <h1 style={{ textAlign: "center" }}>BLOGS</h1>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <p
          style={{
            paddingBottom: "8px",
          }}
        >
          {user.username} Logged In{" "}
        </p>
        <button onClick={() => dispatch(logOut())}>Log Out</button>
      </div>
    </div>
  );
};

export default Header;
