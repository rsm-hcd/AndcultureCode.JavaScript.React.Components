import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CheckboxFormField } from "./checkbox-form-field";
import faker from "faker";

describe("CheckboxFormField", () => {
    test("when default props, renders input with label", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByLabelText } = render(
            <CheckboxFormField
                checked={false}
                label={expected}
                onChange={() => {}}
            />
        );

        // Assert
        expect(getByLabelText(expected)).not.toBeNull();
    });

    test("when errorsMessage prop set, renders with error message", () => {
        // Arrange
        const label = faker.random.words();
        const testErrorMessage = "testErrorMessage";

        // Act
        const { getByText } = render(
            <CheckboxFormField
                checked={false}
                errorMessage={testErrorMessage}
                label={label}
                onChange={() => {}}
            />
        );

        // Assert
        expect(getByText(testErrorMessage)).not.toBeNil();
    });

    test("when onChange set, calls handler upon change", () => {
        // Arrange
        let isChecked = false;
        const label = faker.random.word();
        const handleChange = () => (isChecked = true);

        // Act
        const { getByText } = render(
            <CheckboxFormField
                checked={isChecked}
                label={label}
                onChange={handleChange}
            />
        );

        fireEvent.click(getByText(label));

        // Assert
        expect(isChecked).toBeTrue();
    });
});
