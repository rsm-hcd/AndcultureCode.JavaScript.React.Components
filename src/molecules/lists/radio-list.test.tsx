import React from "react";
import { render } from "@testing-library/react";
import {
    COMPONENT_CLASS,
    RadioList,
    RadioListStyles,
    RadioListButtonStyleClassName,
} from "./radio-list";
import faker from "faker";

describe("RadioList", () => {
    test("when default props, renders items", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByText } = render(
            <RadioList items={[<span>{expected}</span>]} />
        );

        // Assert
        expect(getByText(expected)).not.toBeNull();
    });

    test("when items prop is empty, radio-list returns null", () => {
        // Arrange & Act
        const { container } = render(<RadioList items={[]} />);
        const result = container.querySelector("." + COMPONENT_CLASS);

        // Assert
        expect(result).toBeNil();
    });

    test(`when type prop is ${RadioListStyles.Button}, renders with class name ${RadioListButtonStyleClassName}`, () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { container } = render(
            <RadioList
                items={[<span>{expected}</span>]}
                style={RadioListStyles.Button}
            />
        );
        const result = container.querySelector(
            "." + RadioListButtonStyleClassName
        );

        // Assert
        expect(result).not.toBeNil();
    });
});
