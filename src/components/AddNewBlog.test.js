import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";
import { AddNewBlog } from "./AddNewBlog";

test("form calls the event handler it received as props with the right details when a new blog is created", () => {
  const fakeData = {
    title: "test user",
    author: "123passwrod",
    url: "testing.com",
  };

  render(<AddNewBlog newBlog={fakeData} />);

  const title = screen.getByTestId("title");

  const author = screen.getByTestId("author");

  const url = screen.getByTestId("url");

  const create = screen.getByTestId("create");

  fireEvent.change(title, {
    target: {
      value: fakeData.title,
    },
  });
  fireEvent.change(author, {
    target: {
      value: fakeData.author,
    },
  });
  fireEvent.change(url, {
    target: {
      value: fakeData.url,
    },
  });

  fireEvent.click(create);

  expect(screen.getByTestId("form")).toHaveFormValues({
    title: fakeData.title,
    author: fakeData.author,
    url: fakeData.url,
  });
});
