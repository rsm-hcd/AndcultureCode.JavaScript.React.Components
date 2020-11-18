import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {
    PasswordFormField,
    PasswordFormFieldInvalidClassName,
} from "./password-form-field";
import faker from "faker";
import { InputTypes } from "../../atoms/constants/input-types";

describe("PasswordFormField", () => {
    test("when default props, renders input with label", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByLabelText } = render(
            <PasswordFormField label={expected} onChange={() => {}} />
        );

        // Assert
        expect(getByLabelText(expected)).not.toBeNull();
    });

    test("when onChange prop set, calls handler upon change", () => {
        // Arrange
        let isChecked = false;
        const handleChange = () => (isChecked = true);
        const testLabel = "testLabel";

        // Act
        const { getByLabelText } = render(
            <PasswordFormField onChange={handleChange} label={testLabel} />
        );
        fireEvent.change(getByLabelText(testLabel), {
            target: { value: faker.random.word() },
        });

        // Assert
        expect(isChecked).toBeTrue();
    });

    test("when has errorMessage prop, renders with error message", () => {
        // Arrange
        const testErrorMessage = faker.random.words();
        const testLabel = faker.random.words();

        // Act
        const { getByText } = render(
            <PasswordFormField
                errorMessage={testErrorMessage}
                label={testLabel}
                onChange={() => {}}
            />
        );

        // Assert
        expect(getByText(testErrorMessage)).not.toBeNil();
    });

    test("when required prop set, renders with required text", () => {
        // Arrange
        const requiredText = "*";
        const testLabel = faker.random.words();

        // Act
        const { container } = render(
            <PasswordFormField
                label={testLabel}
                onChange={() => {}}
                required={true}
            />
        );
        const htmlLabelTag = container.getElementsByTagName("label");

        // Assert
        expect(htmlLabelTag[0].textContent).toContain(requiredText);
    });

    test("when show button clicked, renders hide button", () => {
        // Arrange
        const testLabel = faker.random.words();

        // Act
        const { getByText } = render(
            <PasswordFormField
                label={testLabel}
                onChange={() => {}}
                value={faker.random.word()}
            />
        );
        const button = getByText("Show");
        fireEvent.click(button);

        // Assert
        expect(button.textContent).toContain("Hide");
    });

    test("when disabled prop set, renders with type password", () => {
        // Arrange
        const testLabel = faker.random.words();

        // Act
        const { container, getByText } = render(
            <PasswordFormField
                disabled={true}
                label={testLabel}
                onChange={() => {}}
                value={faker.random.word()}
            />
        );
        const htmlInputElement = container.getElementsByTagName("input");

        // Assert
        expect(htmlInputElement[0].type).toBe(InputTypes.Password);
    });

    test(`when isValid prop is false, renders with ${PasswordFormFieldInvalidClassName} class name`, () => {
        // Arrange
        const testLabel = faker.random.words();

        // Act
        const { container } = render(
            <PasswordFormField
                isValid={false}
                label={testLabel}
                onChange={() => {}}
            />
        );
        const result = container.getElementsByClassName(
            PasswordFormFieldInvalidClassName
        );

        // Assert
        expect(result).toHaveLength(1);
    });
});
