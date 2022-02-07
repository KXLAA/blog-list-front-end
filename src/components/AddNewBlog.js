import React from "react";
import PropTypes from "prop-types";

export const AddNewBlog = ({
  createBlog,
  newBlog,
  handleNewBlogChange,
  setShowBlogForm,
  showBlogForm,
}) => {
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
          onSubmit={createBlog}
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
          <button type="submit" data-testid="create">
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
          Create new blog
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
