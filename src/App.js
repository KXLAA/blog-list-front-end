/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { initializeBlogs } from "./reducers/blogsReducer";
import { initializeUsers } from "./reducers/usersReducer";
import { useDispatch, useSelector } from "react-redux";
import BlogList from "./components/BlogList";
import { initializeAuthUser } from "./reducers/authReducer";
import Notification from "./components/Notification";
import { AddNewBlog } from "./components/AddNewBlog";
import { Login } from "./components/Login";
import Header from "./components/Header";
import Users from "./components/Users";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(initializeBlogs());
    dispatch(initializeAuthUser());
    dispatch(initializeUsers());
  }, []);

  if (!user) {
    return (
      <>
        <Notification />
        <Login />
      </>
    );
  }
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Notification />
      <Header />
      <AddNewBlog />
      <BlogList />
      <Users />
    </div>
  );
};

export default App;
