/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const User = () => {
  let { id } = useParams();
  const users = useSelector((state) => state.users);
  const user = users.find((n) => n.id === id);
  if (!user) {
    return null;
  }

  return (
    <div>
      <h1>{user?.name}</h1>
      <h2>Added Blogs</h2>
      <ul>
        {user?.blogs.map(({ title }) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
