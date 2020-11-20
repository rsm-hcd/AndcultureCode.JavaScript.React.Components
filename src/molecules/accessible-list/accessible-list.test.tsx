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
        const buttonText1 = faker.random.word();
        const buttonText2 = faker.random.word();

        // Act
        const { container } = render(
            <AccessibleList focusFirstItem={true}>
                <button>{buttonText1}</button>
                {null}
                {undefined}
                <button>{buttonText2}</button>
            </AccessibleList>
        );
        const buttons = container.getElementsByTagName("button");

        // Assert
        expect(buttons).toHaveLength(2);
    });

    it("when onClick set, calls handler upon click", async () => {
        // Arrange
        let isChecked = false;
        const handleClick = () => {
            isChecked = true;
        };
        const buttonText1 = faker.random.word();
        const buttonText2 = faker.random.words();

        // Act
        const { getByText } = render(
            <AccessibleList focusFirstItem={true}>
                <button onClick={handleClick}>{buttonText1}</button>
                <button onClick={handleClick}>{buttonText2}</button>
            </AccessibleList>
        );

        fireEvent.keyDown(getByText(buttonText1), {
            key: KeyboardKeys.DownArrow,
        });

        // Assert
        expect(isChecked).toBeTrue();
    });
});
