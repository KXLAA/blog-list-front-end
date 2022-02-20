/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { initializeBlogs } from "./reducers/blogsReducer";
import { initializeUsers } from "./reducers/usersReducer";
import { useDispatch, useSelector } from "react-redux";
import { initializeAuthUser } from "./reducers/authReducer";
import Notification from "./components/Notification";
import { Login } from "./components/Login";
import Header from "./components/Header";
import User from "./components/User";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;
