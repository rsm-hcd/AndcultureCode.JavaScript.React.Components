import React from "react";
import { render } from "@testing-library/react";
import {
    SelectFormField,
    InvalidSelectFormValueClass,
} from "./select-form-field";
import faker from "faker";
import uuid from "uuid";

describe("SelectFormField", () => {
    test("when default props, renders SelectFormField with label", () => {
        // Arrange
        const label = faker.random.words();
        const selectLabel = faker.random.word();
        const selectValue = faker.random.word();

        // Act
        const { getByText } = render(
            <SelectFormField
                onChange={() => {}}
                label={label}
                id={uuid()}
                values={[{ value: selectValue, label: selectLabel }]}
            />
        );

        // Assert
        expect(getByText(label)).not.toBeNil();
    });

    test("when has errorsMessages prop, renders select form field with error message", () => {
        // Arrange
        const expected = faker.random.words();
        const testErrorMessage = faker.random.words();
        const selectLabel = faker.random.word();
        const selectValue = faker.random.word();

        // Act
        const { getByText } = render(
            <SelectFormField
                label={expected}
                onChange={() => {}}
                id={uuid()}
                errorMessages={[testErrorMessage]}
                values={[{ value: selectValue, label: selectLabel }]}
            />
        );

        // Assert
        expect(getByText(testErrorMessage)).not.toBeNil();
    });

    test("when has errorsMessage prop, renders select form field with error message", () => {
        // Arrange
        const expected = faker.random.words();
        const testErrorMessage = faker.random.words();
        const selectLabel = faker.random.word();
        const selectValue = faker.random.word();

        // Act
        const { getByText } = render(
            <SelectFormField
                label={expected}
                onChange={() => {}}
                id={uuid()}
                errorMessage={testErrorMessage}
                values={[{ value: selectValue, label: selectLabel }]}
            />
        );

        // Assert
        expect(getByText(testErrorMessage)).not.toBeNil();
    });

    test(`when isValid prop is false, renders with ${InvalidSelectFormValueClass} class name`, () => {
        // Arrange
        const label = faker.random.words();
        const selectLabel = faker.random.word();
        const selectValue = faker.random.word();

        // Act
        const { container } = render(
            <SelectFormField
                onChange={() => {}}
                label={label}
                isValid={false}
                id={uuid()}
                values={[{ value: selectValue, label: selectLabel }]}
            />
        );
        const result = container.querySelector(
            "." + InvalidSelectFormValueClass
        );

        // Assert
        expect(result).not.toBeNil();
    });

    test(`when isValid prop is true, renders without ${InvalidSelectFormValueClass} class name`, () => {
        // Arrange
        const label = faker.random.words();
        const selectLabel = faker.random.word();
        const selectValue = faker.random.word();

        // Act
        const { container } = render(
            <SelectFormField
                onChange={() => {}}
                label={label}
                isValid={true}
                id={uuid()}
                values={[{ value: selectValue, label: selectLabel }]}
            />
        );
        const result = container.querySelector(
            "." + InvalidSelectFormValueClass
        );

        // Assert
        expect(result).toBeNil();
    });

    test("when required prop set, renders with required text", () => {
        // Arrange
        const label = faker.random.words();
        const requiredText = "*";
        const selectLabel = faker.random.word();
        const selectValue = faker.random.word();

        // Act
        const { container } = render(
            <SelectFormField
                onChange={() => {}}
                label={label}
                required={true}
                id={uuid()}
                values={[{ value: selectValue, label: selectLabel }]}
            />
        );
        const htmlLabelTag = container.getElementsByTagName("label");

        // Assert
        expect(htmlLabelTag[0].textContent).toContain(requiredText);
    });
});
