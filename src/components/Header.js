import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
