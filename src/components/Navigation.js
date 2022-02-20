import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../reducers/authReducer";

const Navigation = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <Link to={"/users"}>
        <p>users</p>
      </Link>
      <Link to={"/"}>
        <p>Blogs</p>
      </Link>
      <button onClick={() => dispatch(logOut())}>Log Out</button>
    </div>
  );
};

export default Navigation;
