import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./reducers/blogsReducer";
import notificationReducer from "./reducers/notificationReducer";
import authReducer from "./reducers/authReducer";
import usersReducer from "./reducers/usersReducer";

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    notification: notificationReducer,
    auth: authReducer,
    users: usersReducer,
  },
});

export default store;
