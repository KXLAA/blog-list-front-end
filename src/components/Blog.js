import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeBlog } from "../reducers/blogsReducer";
import PropTypes from "prop-types";

const Blog = ({ blog, authUser }) => {
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState(false);

  const deleteBlog = async (event) => {
    event.preventDefault();
    if (window.confirm(`Do you really want to delete ${blog.title}`)) {
      dispatch(removeBlog(blog.id));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "32px",
        border: "solid black .5px",
      }}
      className="blog"
    >
      <p>
        {blog.title} by {blog.author}
      </p>
      {showDetails ? (
        <button onClick={() => setShowDetails(!showDetails)}>hide</button>
      ) : (
        <Link to={`/blog/${blog.id}`}>
          <button className="button">view</button>
        </Link>
      )}
      {authUser?.username === blog?.user?.username && (
        <button onClick={deleteBlog}>delete</button>
      )}
    </div>
  );
};

export default Blog;

Blog.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    url: PropTypes.string,
    likes: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      username: PropTypes.string,
    }),
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    username: PropTypes.string,
  }),
};
