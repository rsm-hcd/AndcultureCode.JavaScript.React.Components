import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { InputFormField, InputFormFieldInvalidClass } from "./input-form-field";
import faker from "faker";
import { AccessibilityLabels } from "../../enums/accessibility-labels";

describe("InputFormField", () => {
    test("when default props, renders input with label", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByLabelText } = render(
            <InputFormField label={expected} onChange={() => {}} />
        );

        // Assert
        expect(getByLabelText(expected)).not.toBeNull();
    });

    test("when errorsMessages prop set, renders with error messages", () => {
        // Arrange
        const errorMessages = [faker.random.words(), faker.random.words()];
        const label = faker.random.words();

        // Act
        const { getByText } = render(
            <InputFormField
                errorMessages={errorMessages}
                label={label}
                onChange={() => {}}
            />
        );

        // Assert
        expect(getByText(errorMessages[0])).not.toBeNil();
        expect(getByText(errorMessages[1])).not.toBeNil();
    });

    test("when errorsMessage prop set, renders with error message", () => {
        // Arrange
        const label = faker.random.words();
        const testErrorMessage = faker.random.words();

        // Act
        const { getByText } = render(
            <InputFormField
                errorMessage={testErrorMessage}
                label={label}
                onChange={() => {}}
            />
        );

        // Assert
        expect(getByText(testErrorMessage)).not.toBeNil();
    });

    test(`when isValid prop set to false, renders with ${InputFormFieldInvalidClass} class name`, () => {
        // Arrange
        const label = faker.random.words();

        // Act
        const { container } = render(
            <InputFormField isValid={false} label={label} onChange={() => {}} />
        );
        const result = container.getElementsByClassName(
            InputFormFieldInvalidClass
        );

        // Assert
        expect(result).toHaveLength(1);
    });

    test(`when isValid prop set to true, renders without ${InputFormFieldInvalidClass} class name`, () => {
        // Arrange
        const label = faker.random.words();

        // Act
        const { container } = render(
            <InputFormField isValid={true} label={label} onChange={() => {}} />
        );
        const result = container.getElementsByClassName(
            InputFormFieldInvalidClass
        );

        // Assert
        expect(result).toHaveLength(0);
    });

    test("when required prop set, renders with required text", () => {
        // Arrange
        const label = faker.random.words();
        const requiredText = "*";

        // Act
        const { container } = render(
            <InputFormField label={label} onChange={() => {}} required={true} />
        );
        const htmlLabelTag = container.getElementsByTagName("label");

        // Assert
        expect(htmlLabelTag[0].textContent).toContain(requiredText);
    });

    test(`when showLabelForScreenReadersOnly prop set, renders with ${AccessibilityLabels.ScreenReadersOnlyClass} class name`, () => {
        // Arrange
        const label = faker.random.words();

        // Act
        const { container } = render(
            <InputFormField
                label={label}
                onChange={() => {}}
                showLabelForScreenReadersOnly={true}
            />
        );
        const htmlLabelTag = container.getElementsByTagName("span");

        // Assert
        expect(htmlLabelTag[0].classList).toContain(
            AccessibilityLabels.ScreenReadersOnlyClass
        );
    });

    test("when onChange set, calls handler upon change", () => {
        // Arrange
        let isChecked = false;
        const label = faker.random.word();
        const handleChange = () => (isChecked = true);
        const inputTestId = "inputTestId";

        // Act
        const { getByTestId } = render(
            <InputFormField
                inputTestId={inputTestId}
                label={label}
                onChange={handleChange}
            />
        );

        fireEvent.change(getByTestId(inputTestId), {
            target: { value: faker.random.word() },
        });

        // Assert
        expect(isChecked).toBeTrue();
    });
});
