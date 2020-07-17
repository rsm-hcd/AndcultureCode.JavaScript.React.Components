import React from "react";
import { render } from "@testing-library/react";
import { SubmitButton } from "./submit-button";
import faker from "faker";
import { ButtonStyles } from "../constants/button-styles";

describe("SubmitButton", () => {
    test("when default props, renders default buttonText", () => {
        // Arrange
        const expected = "Submit";

        // Act
        const { getByText } = render(<SubmitButton />);

        // Assert
        expect(getByText(expected)).not.toBeNull();
    });

    test("when buttonText provided, renders supplied buttonText", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByText } = render(<SubmitButton buttonText={expected} />);

        // Assert
        expect(getByText(expected)).not.toBeNull();
    });

    test("when cssClassName provided, renders with className set", () => {
        // Arrange
        const expected = ButtonStyles.Anchor;

        // Act
        const { container } = render(<SubmitButton cssClassName={expected} />);

        // Assert
        expect(container.firstChild.className).toContain(expected);
    });
});
