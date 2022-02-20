import React, { useState } from "react";
import { createBlog } from "../reducers/blogsReducer";
import { useDispatch } from "react-redux";
import { setNotification } from "../reducers/notificationReducer";
import PropTypes from "prop-types";

export const AddNewBlog = () => {
  const dispatch = useDispatch();
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    url: "",
  });
  const [showBlogForm, setShowBlogForm] = useState(false);

  const handleNewBlogChange = ({ target }) => {
    setNewBlog((prevInputData) => ({
      ...prevInputData,
      [target.name]: target.value,
    }));
  };

  const addBlog = async (event) => {
    event.preventDefault();
    dispatch(createBlog(newBlog));
    dispatch(
      setNotification(
        `a new blog ${newBlog.title} by ${newBlog.author} added`,
        5000
      )
    );
    setNewBlog({ title: "", author: "", url: "" });
    setShowBlogForm(false);
  };

  return (
    <div
      style={{
        paddingTop: "16px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
        margin: "0 auto",
        paddingBottom: "16px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Create New
      </h2>
      {showBlogForm && (
        <form
          data-testid="form"
          onSubmit={addBlog}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            paddingBottom: "16px",
          }}
        >
          <p>Title</p>
          <input
            data-testid="title"
            type="text"
            id="title"
            value={newBlog.title}
            name="title"
            onChange={handleNewBlogChange}
          />
          <p>author</p>
          <input
            type="text"
            data-testid="author"
            id="author"
            value={newBlog.author}
            name="author"
            onChange={handleNewBlogChange}
          />
          <p>Link to Blog</p>
          <input
            type="text"
            data-testid="url"
            id="url"
            value={newBlog.url}
            name="url"
            onChange={handleNewBlogChange}
          />
          <button type="submit" data-testid="create" id="create">
            Create
          </button>
        </form>
      )}
      {showBlogForm ? (
        <button onClick={() => setShowBlogForm(!showBlogForm)}>Cancel</button>
      ) : (
        <button
          data-testid="create"
          onClick={() => setShowBlogForm(!showBlogForm)}
        >
          create new blog
        </button>
      )}
    </div>
  );
};

AddNewBlog.propTypes = {
  createBlog: PropTypes.func.isRequired,
  newBlog: PropTypes.object.isRequired,
  handleNewBlogChange: PropTypes.func.isRequired,
  setShowBlogForm: PropTypes.func.isRequired,
  showBlogForm: PropTypes.bool.isRequired,
};
