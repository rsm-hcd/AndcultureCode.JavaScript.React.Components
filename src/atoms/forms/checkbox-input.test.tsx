import { CheckboxInput, CheckboxDisabledClass } from "./checkbox-input";
import faker from "faker";
import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";

describe("CheckboxInput", () => {
    test("when default props, renders checkbox", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByText } = render(
            <CheckboxInput
                onChange={() => {}}
                label={expected}
                checked={false}
            />
        );

        // Assert
        expect(getByText(expected)).not.toBeNil();
    });

    test(`when disabled prop set to true, renders with ${CheckboxDisabledClass} class`, () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { container } = render(
            <CheckboxInput
                onChange={() => {}}
                label={expected}
                checked={false}
                disabled={true}
            />
        );
        const result = container.querySelector("." + CheckboxDisabledClass);

        // Assert
        expect(result).not.toBeNil();
    });

    test("when onChange set, calls handler upon change", async () => {
        // Arrange
        let isChecked = false;
        const handleChange = () => (isChecked = true);
        const label = faker.random.word();

        // Act
        const { getByLabelText } = render(
            <CheckboxInput
                onChange={handleChange}
                label={label}
                checked={isChecked}
            />
        );

        fireEvent.click(getByLabelText(label));

        // Assert
        expect(isChecked).toBeTrue();
    });
});
