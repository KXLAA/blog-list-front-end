import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Blog from "./Blog";
// CI=true npm test

test("the blog's title and author is rendered but not the url or number of likes by default", () => {
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

test("clicking the button twice calls event handler twice", () => {
  const blog = {
    title: "Article",
    author: "John Mapple",
    url: "test url ",
    likes: 9,
  };

  const mockHandler = jest.fn();

  const component = render(<Blog blog={blog} updateBlog={mockHandler} />);

  const button = component.getByText("like");
  fireEvent.click(button);
  fireEvent.click(button);
  expect(mockHandler.mock.calls).toHaveLength(2);
});
