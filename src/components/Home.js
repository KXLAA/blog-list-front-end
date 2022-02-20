import React from "react";
import BlogList from "./BlogList";
import AddNewBlog from "./AddNewBlog";
import Users from "./Users";

const Home = () => {
  return (
    <div>
      <AddNewBlog />
      <BlogList />
      <Users />
    </div>
  );
};

export default Home;
