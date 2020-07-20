import React from "react";
import { render } from "@testing-library/react";
import { UnorderedList } from "./unordered-list";
import faker from "faker";

describe("UnorderedList", () => {
    test("when default props, renders items", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByText } = render(<UnorderedList listItems={[expected]} />);

        // Assert
        expect(getByText(expected)).not.toBeNull();
    });
});
