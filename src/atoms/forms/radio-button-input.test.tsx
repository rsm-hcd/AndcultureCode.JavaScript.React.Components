import React from "react";
import { render } from "@testing-library/react";
import { RadioButton } from "./radio-button-input";
import faker from "faker";
import uuid from "uuid";

describe("RadioButton", () => {
    test("when default props, renders button with label", () => {
        // Arrange
        const expected = faker.random.word();

        // Act
        const { getByLabelText } = render(
            <RadioButton
                checked={false}
                id={uuid()}
                label={expected}
                name={faker.random.word()}
            />
        );

        // Assert
        expect(getByLabelText(expected)).not.toBeNull();
    });
});
