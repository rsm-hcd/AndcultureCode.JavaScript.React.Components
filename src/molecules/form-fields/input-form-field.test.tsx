import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {
    InputFormField,
    InvalidInputFormValueClass,
    ShowLabelForScreenReadersOnlyClass,
} from "./input-form-field";
import faker from "faker";

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
        const expected = faker.random.words();
        const firstErrorMessage = faker.random.words();
        const secondErrorMessage = faker.random.words();

        // Act
        const { getByText } = render(
            <InputFormField
                label={expected}
                onChange={() => {}}
                errorMessages={[firstErrorMessage, secondErrorMessage]}
            />
        );

        // Assert
        expect(getByText(firstErrorMessage)).not.toBeNil();
        expect(getByText(secondErrorMessage)).not.toBeNil();
    });

    test("when errorsMessage prop set, renders with error message", () => {
        // Arrange
        const expected = faker.random.words();
        const testErrorMessage = faker.random.words();

        // Act
        const { getByText } = render(
            <InputFormField
                label={expected}
                onChange={() => {}}
                errorMessage={testErrorMessage}
            />
        );

        // Assert
        expect(getByText(testErrorMessage)).not.toBeNil();
    });

    test(`when isValid prop set to false, renders with ${InvalidInputFormValueClass} class name`, () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { container } = render(
            <InputFormField
                label={expected}
                onChange={() => {}}
                isValid={false}
            />
        );
        const result = container.getElementsByClassName(
            InvalidInputFormValueClass
        );

        // Assert
        expect(result).toHaveLength(1);
    });

    test(`when isValid prop set to true, renders without ${InvalidInputFormValueClass} class name`, () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { container } = render(
            <InputFormField
                label={expected}
                onChange={() => {}}
                isValid={true}
            />
        );
        const result = container.getElementsByClassName(
            InvalidInputFormValueClass
        );

        // Assert
        expect(result).toHaveLength(0);
    });

    test("when required prop set, renders with required text", () => {
        // Arrange
        const expected = faker.random.words();
        const requiredText = "*";

        // Act
        const { container } = render(
            <InputFormField
                label={expected}
                onChange={() => {}}
                required={true}
            />
        );
        const htmlLabelTag = container.getElementsByTagName("label");

        // Assert
        expect(htmlLabelTag[0].textContent).toContain(requiredText);
    });

    test(`when showLabelForScreenReadersOnly prop set, renders with ${ShowLabelForScreenReadersOnlyClass} class name`, () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { container } = render(
            <InputFormField
                label={expected}
                onChange={() => {}}
                showLabelForScreenReadersOnly={true}
            />
        );
        const htmlLabelTag = container.getElementsByTagName("span");

        // Assert
        expect(htmlLabelTag[0].classList).toContain(
            ShowLabelForScreenReadersOnlyClass
        );
    });

    test("when onChange set, calls handler upon change", () => {
        // Arrange
        let isChecked = false;
        const expected = faker.random.word();
        const handleChange = () => (isChecked = true);
        const inputTestId = "inputTestId";

        // Act
        const { getByTestId } = render(
            <InputFormField
                label={expected}
                onChange={handleChange}
                inputTestId={inputTestId}
            />
        );

        fireEvent.change(getByTestId(inputTestId), {
            target: { value: faker.random.word() },
        });

        // Assert
        expect(isChecked).toBeTrue();
    });
});
