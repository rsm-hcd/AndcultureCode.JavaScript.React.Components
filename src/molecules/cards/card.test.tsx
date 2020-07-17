import React from "react";
import { render } from "@testing-library/react";
import { Card } from "./card";
import faker from "faker";

describe("Card", () => {
    test("when default props, renders card", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByText } = render(<Card label={expected} />);

        // Assert
        expect(getByText(expected)).not.toBeNull();
    });

    test("when default props with children, renders card", () => {
        // Arrange
        const label = faker.random.words();
        const expected = faker.random.words();

        // Act
        const { getByText } = render(<Card label={label}>{expected}</Card>);

        // Assert
        expect(getByText(expected)).not.toBeNull();
    });
});
