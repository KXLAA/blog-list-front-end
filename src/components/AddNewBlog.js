import React from "react";

export const AddNewBlog = ({ createBlog, newBlog, handleNewBlogChange }) => {
  return (
    <div>
      <h1>Create New</h1>
      <form onSubmit={createBlog}>
        <input
          type="text"
          value={newBlog.title}
          name="title"
          onChange={handleNewBlogChange}
        />
        <input
          type="text"
          value={newBlog.author}
          name="author"
          onChange={handleNewBlogChange}
        />
        <input
          type="text"
          value={newBlog.url}
          name="url"
          onChange={handleNewBlogChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
