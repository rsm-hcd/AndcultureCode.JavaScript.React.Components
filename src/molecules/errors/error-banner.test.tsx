import React from "react";
import { render } from "@testing-library/react";
import { ErrorBanner } from "./error-banner";
import faker from "faker";

describe("ErrorBanner", () => {
    test("when default props, renders banner", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByText } = render(<ErrorBanner text={expected} />);

        // Assert
        expect(getByText(expected)).not.toBeNull();
    });
});
