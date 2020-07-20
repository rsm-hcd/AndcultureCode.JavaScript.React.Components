import React from "react";
import { render } from "@testing-library/react";
import { PasswordFormField } from "./password-form-field";
import faker from "faker";

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
});
