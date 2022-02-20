import { createSlice } from "@reduxjs/toolkit";
import blogService from "../services/blogs";

const blogSlice = createSlice({
  name: "blog",
  initialState: [],
  reducers: {
    setBlogs(state, action) {
      return action.payload;
    },
    appendBlog(state, action) {
      state.push(action.payload);
    },

    // updateBlog(state, action) {
    //   const id = action.payload;
    //   const blogToUpdate = state.find((n) => n.id === id);
    // },
  },
});

export const { setBlogs, appendBlog, setForm } = blogSlice.actions;

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    dispatch(setBlogs(blogs));
  };
};

export const createBlog = (blogObj) => {
  return async (dispatch) => {
    const newBlog = await blogService.create(blogObj);
    dispatch(appendBlog(newBlog));
  };
};
export default blogSlice.reducer;
