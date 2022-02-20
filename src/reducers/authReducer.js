import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/login";
import blogService from "../services/blogs";

const authSlice = createSlice({
  name: "auth",
  initialState: null,
  reducers: {
    setAuthUser(state, action) {
      return action.payload;
    },
  },
});

export const { setAuthUser } = authSlice.actions;

export const initializeAuthUser = () => {
  return async (dispatch) => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      dispatch(setAuthUser(user));
      blogService.setToken(user.token);
    }
  };
};

export const login = (credentials) => {
  return async (dispatch) => {
    const user = await loginService.login(credentials);
    dispatch(setAuthUser(user));
    blogService.setToken(user.token);
    window.localStorage.setItem("loggedBlogAppUser", JSON.stringify(user));
    window.location.reload();
  };
};

export const logOut = () => {
  return async (dispatch) => {
    window.localStorage.removeItem("loggedBlogAppUser");
    window.location.reload();
    dispatch(setAuthUser(null));
  };
};

export default authSlice.reducer;
