import React from "react";
import { render, waitForElementToBeRemoved } from "@testing-library/react";
import PopupContainer from "../PopupContainer";

describe("PopupContainer", () => {
  test("Should render popup if showPopup changes from false to truth", async () => {
    const props = {
      children: <div>Hola</div>,
      showPopup: false,
      onClick: jest.fn(),
    };

    const { queryByTestId, rerender, getByTestId } = render(
      <PopupContainer {...props} />
    );
    expect(queryByTestId("popupContainer")).not.toBeInTheDocument();
    const propsUpdate = {
      children: <div>Hola</div>,
      showPopup: true,
      onClick: jest.fn(),
    };
    rerender(<PopupContainer {...propsUpdate} />);
    expect(getByTestId("popupContainer")).toBeInTheDocument("popupContainer");
  });
});
