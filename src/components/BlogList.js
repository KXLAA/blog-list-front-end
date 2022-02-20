/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import Blog from "./Blog";

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs);
  const user = useSelector((state) => state.auth);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "3rem",
      }}
    >
      {" "}
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} authUser={user} />
      ))}
    </div>
  );
};

export default BlogList;
