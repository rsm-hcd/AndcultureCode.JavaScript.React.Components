import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import {
    RadioInput,
    RadioInputSelectedClassName,
} from "./radio-input";
import faker from "faker";
import uuid from "uuid";

describe("RadioInput", () => {
    test("when default props, renders button with label", () => {
        // Arrange
        const expected = faker.random.word();

        // Act
        const { getByLabelText } = render(
            <RadioInput
                checked={false}
                id={uuid()}
                label={expected}
                name={faker.random.word()}
            />
        );

        // Assert
        expect(getByLabelText(expected)).not.toBeNull();
    });

    test(`when checked prop is true, renders check ${RadioInputSelectedClassName} class name`, () => {
        // Arrange
        const expected = faker.random.word();

        // Act
        const { container } = render(
            <RadioInput
                checked={true}
                id={uuid()}
                label={expected}
                name={faker.random.word()}
            />
        );
        const result = container.querySelector(
            "." + RadioInputSelectedClassName
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
            <RadioInput
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
