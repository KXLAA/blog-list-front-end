import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AddNewBlog } from "./AddNewBlog";

test("<AddNewBlog /> updates parent state and calls onSubmit", () => {
  const createBlog = jest.fn();

  const component = render(<AddNewBlog createBlog={createBlog} />);

  const input = component.container.querySelector("input");
  const form = component.container.querySelector("form");
  const author = component.container.querySelector("#author");
  //   const link = component.container.querySelector("#link");
  //   const title = component.container.querySelector("#title"); CI=true npm test

  fireEvent.change(input, {
    target: { value: "testing of forms could be easier" },
  });
  fireEvent.submit(form);

  expect(createBlog.mock.calls).toHaveLength(1);
  expect(createBlog.mock.calls[0][0].content).toBe(
    "testing of forms could be easier"
  );
});
