import React from "react";
import { render } from "@testing-library/react";
import { Tooltip } from "./tooltip";
import faker from "faker";

describe("Tooltip", () => {
    test("when default props, renders children", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByText } = render(
            <Tooltip content={<span>content</span>}>
                <span>{expected}</span>
            </Tooltip>
        );

        // Assert
        expect(getByText(expected)).not.toBeNull();
    });
});
