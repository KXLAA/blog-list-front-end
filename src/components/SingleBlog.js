import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { like } from "../reducers/blogsReducer";

const SingleBlog = () => {
  const dispatch = useDispatch();
  let { blogId } = useParams();
  const blogs = useSelector((state) => state.blogs);
  const blog = blogs.find((n) => n.id === blogId);

  console.log(blog);
  return (
    <div data-testid="togglableContent">
      <p>{blog.url}</p>
      {blog.likes}
      <button onClick={() => dispatch(like(blog.id))}>like</button>
      <p>{blog?.user?.name}</p>
    </div>
  );
};

export default SingleBlog;
