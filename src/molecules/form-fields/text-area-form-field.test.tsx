import React from "react";
import { render } from "@testing-library/react";
import { TextAreaFormField } from "./text-area-form-field";
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
});
