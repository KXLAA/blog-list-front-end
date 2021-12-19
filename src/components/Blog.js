import React, { useState } from "react";
import blogService from "../services/blogs";
import PropTypes from "prop-types";

const Blog = ({ blog, user }) => {
  const [showDetails, setShowDetails] = useState(false);

  const updateBlog = async (event) => {
    event.preventDefault();

    const blogObject = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes + 1,
    };

    await blogService.update(blog.id, blogObject);
  };

  const deleteBlog = async (event) => {
    event.preventDefault();
    if (window.confirm(`Do you really want to delete ${blog.title}`)) {
      await blogService.deleteBlog(blog.id);
    }
  };

  return (
    <div>
      {blog.title} {blog.author}
      {showDetails ? (
        <button onClick={() => setShowDetails(!showDetails)}>hide</button>
      ) : (
        <button onClick={() => setShowDetails(!showDetails)}>view</button>
      )}
      {showDetails && (
        <div>
          <p>{blog.url}</p>
          <p>
            {blog.likes} <button onClick={updateBlog}>like</button>
          </p>
          <p>{blog?.user?.name}</p>
        </div>
      )}
      {user.username === blog.user.username && (
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
  }).isRequired,
};
