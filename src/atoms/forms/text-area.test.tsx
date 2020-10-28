import React from "react";
import { TextArea } from "./text-area";
import uuid from "uuid";
import { render, fireEvent } from "@testing-library/react";
import faker from "faker";

describe("TextArea", () => {
    test("when default props, renders text area", () => {
        // Arrange
        const expected = faker.random.word();

        // Act
        const { getByTestId } = render(
            <TextArea id={uuid()} onChange={() => {}} testId={expected} />
        );

        // Assert
        expect(getByTestId(expected)).not.toBeNil();
    });

    test("when onChange set, calls handler upon change", () => {
        // Arrange
        let isChecked = false;
        const handleChange = () => (isChecked = true);
        const expected = faker.random.word();

        // Act
        const { getByTestId } = render(
            <TextArea id={expected} onChange={handleChange} testId={expected} />
        );

        fireEvent.change(getByTestId(expected), {
            target: { value: faker.random.word() },
        });

        // Assert
        expect(isChecked).toBeTrue();
    });
});
