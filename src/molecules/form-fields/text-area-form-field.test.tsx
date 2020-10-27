import React from "react";
import { render } from "@testing-library/react";
import {
    InvalidInputClassName,
    TextAreaFormField,
} from "./text-area-form-field";
import faker from "faker";

describe("TextAreaFormField", () => {
    test("when default props, renders input with label", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByLabelText } = render(
            <TextAreaFormField label={expected} onChange={() => {}} />
        );

        // Assert
        expect(getByLabelText(expected)).not.toBeNull();
    });

    test("when has errorMessages prop, renders text area form field with error message", () => {
        // Arrange
        const expected = faker.random.words();
        const testErrorMessage = faker.random.words();

        // Act
        const { getByText } = render(
            <TextAreaFormField
                label={expected}
                onChange={() => {}}
                errorMessages={[testErrorMessage]}
            />
        );

        // Assert
        expect(getByText(testErrorMessage)).not.toBeNil();
    });

    test("when has errorMessage prop, renders text area form field with error message", () => {
        // Arrange
        const expected = faker.random.words();
        const testErrorMessage = faker.random.words();

        // Act
        const { getByText } = render(
            <TextAreaFormField
                label={expected}
                onChange={() => {}}
                errorMessage={testErrorMessage}
            />
        );

        // Assert
        expect(getByText(testErrorMessage)).not.toBeNil();
    });

    test(`when isValid prop is false, renders with ${InvalidInputClassName} class name`, () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { container } = render(
            <TextAreaFormField
                label={expected}
                onChange={() => {}}
                isValid={false}
            />
        );
        const result = container.querySelector("." + InvalidInputClassName);

        // Assert
        expect(result).not.toBeNil();
    });

    test(`when isValid prop is true, renders without ${InvalidInputClassName} class name`, () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { container } = render(
            <TextAreaFormField
                label={expected}
                onChange={() => {}}
                isValid={true}
            />
        );
        const result = container.querySelector("." + InvalidInputClassName);

        // Assert
        expect(result).toBeNil();
    });

    test("when required prop set, renders with required text", () => {
        // Arrange
        const expected = faker.random.words();
        const requiredText = "*";

        // Act
        const { container } = render(
            <TextAreaFormField
                label={expected}
                onChange={() => {}}
                required={true}
            />
        );
        const htmlLabelTag = container.getElementsByTagName("label");

        // Assert
        expect(htmlLabelTag[0].textContent).toContain(requiredText);
    });
});
