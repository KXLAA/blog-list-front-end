import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/login";
import blogService from "../services/blogs";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const initializeUser = () => {
  return async (dispatch) => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      dispatch(setUser(user));
      blogService.setToken(user.token);
    }
  };
};

export const login = (credentials) => {
  return async (dispatch) => {
    const user = await loginService.login(credentials);
    dispatch(setUser(user));
    blogService.setToken(user.token);
    window.localStorage.setItem("loggedBlogAppUser", JSON.stringify(user));
    window.location.reload();
  };
};

export const logOut = () => {
  return async (dispatch) => {
    window.localStorage.removeItem("loggedBlogAppUser");
    window.location.reload();
    dispatch(setUser(null));
  };
};

export default userSlice.reducer;
