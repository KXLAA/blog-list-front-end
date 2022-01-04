import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Blog from "./Blog";
// CI=true npm test

test("renders content", () => {
  const blog = {
    title: "Article",
    author: "John Mapple",
    url: "test url ",
    likes: 9,
  };

  const component = render(<Blog blog={blog} />);
  component.debug();

  expect(component.container).toHaveTextContent("Article by John Mapple");
});
