import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Avatar from "../Avatar";

test("Should render correctly", () => {
  const props = {
    src: "avatar1.png",
    onClick: jest.fn(),
    loading: false,
  };
  const { getByTestId } = render(<Avatar {...props} />);
  expect(getByTestId("avatar-img")).toHaveClass("avatar");
});

test("Should fire onClick", () => {
  const props = {
    src: "avatar1.png",
    onClick: jest.fn(),
    loading: false,
  };
  const { getByTestId } = render(<Avatar {...props} />);
  userEvent.click(getByTestId("avatar-img"));
  expect(props.onClick).toHaveBeenCalled();
  expect(props.onClick).toHaveBeenCalledTimes(1);
});

test("Should render spinner", () => {
  const props = {
    src: "avatar1.png",
    onClick: jest.fn(),
    loading: true,
  };
  const { getByTestId } = render(<Avatar {...props} />);
  expect(getByTestId("avatar-img")).toHaveClass("loader");
});

test("Should render proper image", () => {
  const props = {
    src: "avatar1.png",
    onClick: jest.fn(),
    loading: true,
  };
  const { getByRole } = render(<Avatar {...props} />);
  expect(getByRole("img")).toHaveClass("avatar--image");
  expect(getByRole("img")).toHaveAttribute("src", "/avatar1.png");
});
