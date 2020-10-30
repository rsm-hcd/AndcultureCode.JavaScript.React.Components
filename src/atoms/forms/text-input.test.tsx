import React from "react";
import { TextInput } from "./text-input";
import faker from "faker";
import { render, fireEvent } from "@testing-library/react";
import uuid from "uuid";

describe("TextInput", () => {
    test("when default props, renders input", () => {
        // Arrange
        const dataTestId = "dataTestId";

        // Act
        const { getByTestId } = render(
            <TextInput testId={dataTestId} onChange={() => {}} id={uuid()} />
        );

        // Assert
        expect(getByTestId(dataTestId)).not.toBeNil();
    });

    test("when onChange set, calls handler upon change", () => {
        // Arrange
        let isChecked = false;
        const dataTestId = "dataTestId";
        const handleChange = () => (isChecked = true);

        // Act
        const { getByTestId } = render(
            <TextInput
                testId={dataTestId}
                onChange={handleChange}
                id={uuid()}
            />
        );

        fireEvent.change(getByTestId(dataTestId), {
            target: { value: faker.random.word() },
        });

        // Assert
        expect(isChecked).toBeTrue();
    });

    test("when maxLength prop set, renders with given value", () => {
        // Arrange
        const dataTestId = "dataTestId";
        const maximumLength = 999;

        // Act
        const { getByTestId } = render(
            <TextInput
                testId={dataTestId}
                onChange={() => {}}
                id={uuid()}
                maxLength={maximumLength}
            />
        );

        // Assert
        expect(getByTestId(dataTestId).getAttribute("maxLength")).toBe(
            maximumLength.toString()
        );
    });
});
