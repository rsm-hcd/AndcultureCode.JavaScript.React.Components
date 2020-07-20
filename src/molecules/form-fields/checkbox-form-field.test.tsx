import React from "react";
import { render } from "@testing-library/react";
import { CheckboxFormField } from "./checkbox-form-field";
import faker from "faker";

describe("CheckboxFormField", () => {
    test("when default props, renders input with label", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByLabelText } = render(
            <CheckboxFormField
                checked={false}
                label={expected}
                onChange={() => {}}
            />
        );

        // Assert
        expect(getByLabelText(expected)).not.toBeNull();
    });
});
