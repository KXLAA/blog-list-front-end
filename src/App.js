import React, { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import loginService from "./services/login";
import Notification from "./components/Notification";

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
  const [errorMessage, setErrorMessage] = useState(null);

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
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
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

    setNewBlog({ title: "", author: "", url: "" });
  };

  if (user === null) {
    return (
      <div>
        <Notification message={errorMessage} />
        <h2>Log in to application</h2>
        <form onSubmit={handleLogin}>
          <div>
            username
            <input
              type="text"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            password
            <input
              type="text"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">login</button>
        </form>
      </div>
    );
  }
  return (
    <div>
      <Notification message={errorMessage} />
      <h2>blogs</h2>
      <p>
        {user.username} Logged In{" "}
        <button onClick={handleLogOut}>Log Out</button>
      </p>

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

      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default App;
