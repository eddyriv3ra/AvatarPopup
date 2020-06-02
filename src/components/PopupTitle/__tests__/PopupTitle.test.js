import React from "react";
import { render } from "@testing-library/react";
import PopupTitle from "../PopupTitle";

test("render correctly", () => {
  const { container, getByText } = render(<PopupTitle title="Title" />);
  expect(container.firstChild).toHaveClass("title");
  expect(getByText("Title"));
});
