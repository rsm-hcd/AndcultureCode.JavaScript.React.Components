import React, { Component } from "react";
import faker from "faker";
import { render, fireEvent, screen } from "@testing-library/react";
import { AccessibleList } from "./accessible-list";
import { KeyboardKeys } from "../../constants/keyboard-keys";

describe("AccessibleList", () => {
    test("when default props, renders items", () => {
        // Arrange
        const expected = faker.random.word();

        // Act
        const { getByText } = render(
            <AccessibleList focusFirstItem={false}>
                <button>{expected}</button>
            </AccessibleList>
        );

        // Assert
        expect(getByText(expected)).not.toBeNil();
    });

    test("when onEsc set, calls handler upon escape pressed", () => {
        // Arrange
        let isChecked = false;
        const buttonText = faker.random.word();
        const onEscHandler = () => {
            isChecked = true;
        };

        // Act
        const { getByText } = render(
            <AccessibleList focusFirstItem={true} onEsc={onEscHandler}>
                <button>{buttonText}</button>
            </AccessibleList>
        );
        fireEvent.keyDown(getByText(buttonText), { key: KeyboardKeys.Escape });

        // Assert
        expect(isChecked).toBeTrue();
    });

    test("when invalid react element, does not render in list", () => {
        // Arrange
        const buttonText = [faker.random.word(), faker.random.word()];

        // Act
        const { container } = render(
            <AccessibleList focusFirstItem={true}>
                <button>{buttonText[0]}</button>
                {null}
                {undefined}
                <button>{buttonText[1]}</button>
            </AccessibleList>
        );

        // Assert
        expect(container.innerHTML).not.toContain("null");
        expect(container.innerHTML).not.toContain("undefined");
    });

    it("when onClick set, calls handler upon click", async () => {
        // Arrange
        let isChecked = false;
        const handleClick = () => {
            isChecked = true;
        };
        const buttonText = faker.random.word();

        // Act
        const { getByText } = render(
            <AccessibleList focusFirstItem={true}>
                <button onClick={handleClick}>{buttonText}</button>
            </AccessibleList>
        );
        fireEvent.click(getByText(buttonText));

        // Assert
        expect(isChecked).toBeTrue();
    });
});
