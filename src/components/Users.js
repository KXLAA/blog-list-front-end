import React from "react";
import { useSelector } from "react-redux";

const Users = () => {
  const user = useSelector((state) => state.users);
  console.log(user);
  return (
    <div>
      <h1>Users</h1>
      {user.map(({ username, blogs }) => (
        <div key={username} style={{ display: "flex", gap: "2rem" }}>
          <p>{username}</p>
          <p>{blogs.length} blogs created</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
