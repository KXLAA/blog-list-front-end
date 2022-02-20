/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { initializeBlogs } from "./reducers/blogsReducer";
import { useDispatch, useSelector } from "react-redux";
import BlogList from "./components/BlogList";
import { initializeUser } from "./reducers/userReducer";
import Notification from "./components/Notification";
import { AddNewBlog } from "./components/AddNewBlog";
import { Login } from "./components/Login";
import Header from "./components/Header";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(initializeBlogs());
    dispatch(initializeUser());
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
    <>
      <Notification />
      <Header />
      <AddNewBlog />
      <BlogList />
    </>
  );
};

export default App;
