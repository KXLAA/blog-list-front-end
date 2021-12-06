import React, { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import loginService from "./services/login";
import Notification from "./components/Notification";
import { AddNewBlog } from "./components/AddNewBlog";
import { Login } from "./components/Login";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    url: "",
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [notify, setNotify] = useState(null);

  useEffect(() => {
    const getUsrBlogs = async () => {
      const userBlogs = await blogService.getAll();
      setBlogs(userBlogs);
    };
    getUsrBlogs();
  }, []);

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

  const handleNewBlogChange = ({ target }) => {
    setNewBlog((prevInputData) => ({
      ...prevInputData,
      [target.name]: target.value,
    }));
    console.log(newBlog);
  };

  const createBlog = async (event) => {
    event.preventDefault();

    const blogObject = {
      title: newBlog.title,
      author: newBlog.author,
      url: newBlog.url,
    };

    blogService.create(blogObject).then((returnedBlog) => {
      setBlogs(blogs.concat(returnedBlog));
    });

    setNotify(`a new blog ${newBlog.title} by ${newBlog.author} added`);
    setTimeout(() => {
      setNotify(null);
    }, 5000);

    setNewBlog({ title: "", author: "", url: "" });
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
    <div>
      <Notification notification={notify} />
      <h2>blogs</h2>
      <p>
        {user.username} Logged In{" "}
        <button onClick={handleLogOut}>Log Out</button>
      </p>

      <AddNewBlog
        createBlog={createBlog}
        newBlog={newBlog}
        handleNewBlogChange={handleNewBlogChange}
      />

      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default App;
