import React from "react";
import { render } from "@testing-library/react";
import { InputFormField } from "./input-form-field";
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
});
