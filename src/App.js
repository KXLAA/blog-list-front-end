import React, { useState, useEffect } from "react";
import { initializeBlogs } from "./reducers/blogsReducer";
import { useDispatch } from "react-redux";
import BlogList from "./components/BlogList";
import blogService from "./services/blogs";
import loginService from "./services/login";
import Notification from "./components/Notification";
import { AddNewBlog } from "./components/AddNewBlog";
import { Login } from "./components/Login";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeBlogs());
  }, [dispatch]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [notify, setNotify] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password,
      });
      window.localStorage.setItem("loggedBlogAppUser", JSON.stringify(user));
      blogService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      setNotify("Wrong credentials");
      setTimeout(() => {
        setNotify(null);
      }, 5000);
    }
  };

  const handleLogOut = () => {
    window.localStorage.removeItem("loggedBlogAppUser");
    window.location.reload();
  };

  if (user === null) {
    return (
      <>
        <Notification notification={notify} />
        <Login
          handleLogin={handleLogin}
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      </>
    );
  }
  return (
    <>
      <Notification />
      <h1 style={{ textAlign: "center" }}>BLOGS</h1>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <p
          style={{
            paddingBottom: "8px",
          }}
        >
          {user.username} Logged In{" "}
        </p>
        <button onClick={handleLogOut}>Log Out</button>
      </div>

      <AddNewBlog />
      <BlogList />
    </>
  );
};

export default App;
