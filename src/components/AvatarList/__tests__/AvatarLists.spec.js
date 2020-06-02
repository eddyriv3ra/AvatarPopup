import React from "react";
import { render, screen } from "@testing-library/react";
import AvatarList from "../AvatarList";
import avatarListData from "../../../data/mockData";

describe("AvatarList", () => {
  test("Should render each Avatar", () => {
    const props = {
      onClick: jest.fn(),
      avatarList: avatarListData,
      avatarLoading: true,
      avatarSelected: { src: "avatar2.png", id: 2 },
    };
    render(<AvatarList {...props} />);

    expect(screen.getAllByRole("listitem")).toHaveLength(6);
  });
});
