import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import {
    RadioButton,
    RadioButtonSelectedClassName,
} from "./radio-button-input";
import faker from "faker";
import uuid from "uuid";

describe("RadioButton", () => {
    test("when default props, renders button with label", () => {
        // Arrange
        const expected = faker.random.word();

        // Act
        const { getByLabelText } = render(
            <RadioButton
                checked={false}
                id={uuid()}
                label={expected}
                name={faker.random.word()}
            />
        );

        // Assert
        expect(getByLabelText(expected)).not.toBeNull();
    });

    test(`when checked prop is true, renders check ${RadioButtonSelectedClassName} class name`, () => {
        // Arrange
        const expected = faker.random.word();

        // Act
        const { container } = render(
            <RadioButton
                checked={true}
                id={uuid()}
                label={expected}
                name={faker.random.word()}
            />
        );
        const result = container.querySelector(
            "." + RadioButtonSelectedClassName
        );

        // Assert
        expect(result).not.toBeNull();
    });

    test("when onClick set, calls handler upon click", async () => {
        // Arrange
        let calledTimes = 0;
        const handleClick = () => calledTimes++;
        const buttonText = "test button";

        // Act
        const { getByText } = render(
            <RadioButton
                onClick={handleClick}
                checked={false}
                id={uuid()}
                name={faker.random.word()}
                label={buttonText}
            />
        );

        fireEvent.click(getByText(buttonText));

        // Assert
        await wait(() => {
            expect(calledTimes).toEqual(1);
        });
    });
});
