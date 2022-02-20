import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Users = () => {
  const users = useSelector((state) => state.users);
  return (
    <div>
      <h1>Users</h1>
      {users.map(({ username, blogs, id }) => (
        <div key={id} style={{ display: "flex", gap: "2rem" }}>
          <Link to={`/user/${id}`}>
            <p>{username}</p>
          </Link>
          <p>{blogs.length} blogs created</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
