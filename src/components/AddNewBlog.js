import React from "react";

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
      className="formDiv"
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
            type="text"
            id="title"
            value={newBlog.title}
            name="title"
            onChange={handleNewBlogChange}
          />
          <p>author</p>
          <input
            type="text"
            id="author"
            value={newBlog.author}
            name="author"
            onChange={handleNewBlogChange}
          />
          <p>Link to Blog</p>
          <input
            type="text"
            id="link"
            value={newBlog.url}
            name="url"
            onChange={handleNewBlogChange}
          />
          <button type="submit">Create</button>
        </form>
      )}
      {showBlogForm ? (
        <button onClick={() => setShowBlogForm(!showBlogForm)}>Cancel</button>
      ) : (
        <button onClick={() => setShowBlogForm(!showBlogForm)}>
          Create new blog
        </button>
      )}
    </div>
  );
};
