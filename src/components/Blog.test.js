import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/react";
import Blog from "./Blog";

const user = {
  id: "string",
  name: "string",
  username: "string",
};
const blog = {
  title: "Component testing is done with react-testing-library",
  author: "Test Author",
  url: "testurl.com",
  likes: 4,
  user: user,
};

it("renders the blog's title & author, only by default", () => {
  const component = render(
    <Blog blog={blog} user={user} updateBlog={console.log} />
  );
  expect(component.container).toHaveTextContent(
    "Component testing is done with react-testing-library by Test Author"
  );
});

describe("shows blog's url and number of likes are shown when the button is clicked", () => {
  beforeEach(() => {
    render(<Blog blog={blog} user={user} updateBlog={console.log} />);
  });

  test("at start the children are not displayed", () => {
    const child = screen.queryByTestId("togglableContent");
    expect(child).not.toBeInTheDocument();
  });

  test("after clicking the button, children are displayed", () => {
    const button = screen.getByText("view");
    fireEvent.click(button);
    const child = screen.getByTestId("togglableContent");
    expect(child).toBeInTheDocument();
  });
});

test("clicking the button calls event handler once", () => {
  const mockHandler = jest.fn();
  render(<Blog blog={blog} user={user} updateBlog={mockHandler} />);
  const view = screen.getByText("view");
  fireEvent.click(view);

  const like = screen.getByText("like");
  fireEvent.click(like);
  fireEvent.click(like);

  expect(mockHandler.mock.calls).toHaveLength(2);
});
