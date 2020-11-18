import React from "react";
import faker from "faker";
import { render, fireEvent } from "@testing-library/react";
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

    test("when down arrow pressed, calls setCurrent method", () => {
        // Arrange
        const buttonText1 = faker.random.word();
        const buttonText2 = faker.random.word();

        // Act
        const { getByText } = render(
            <AccessibleList focusFirstItem={true}>
                <button>{buttonText1}</button>
                <button>{buttonText2}</button>
            </AccessibleList>
        );
        fireEvent.keyDown(getByText(buttonText1), {
            key: KeyboardKeys.DownArrow,
        });

        // Assert
    });
});
