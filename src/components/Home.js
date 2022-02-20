import React from "react";
import BlogList from "./BlogList";
import AddNewBlog from "./AddNewBlog";

const Home = () => {
  return (
    <div>
      <AddNewBlog />
      <BlogList />
    </div>
  );
};

export default Home;
