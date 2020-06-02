import React from "react";
import { render } from "@testing-library/react";
import AvatarManagement from "../AvatarManagement";
import avatarListData from "../../../data/mockData";

describe("AvatarManagement", () => {
  test("should render properly and avatar changed", () => {
    const props = {
      avatarList: avatarListData,
      onChangeAvatar: jest.fn(),
      avatarSelected: { src: "avatar2.png", id: 2 },
    };
    const { getByTestId, rerender, getByRole } = render(
      <AvatarManagement {...props} />
    );
    expect(getByTestId("avatarMgmt")).toHaveClass("avatarContainer");
    const propsUpdated = {
      avatarList: avatarListData,
      onChangeAvatar: jest.fn(),
      avatarSelected: { src: "avatar1.png", id: 1 },
    };
    rerender(<AvatarManagement {...propsUpdated} />);
    expect(getByRole("img")).toHaveAttribute("src", "/avatar1.png");
  });
});
