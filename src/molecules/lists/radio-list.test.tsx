import React from "react";
import { render } from "@testing-library/react";
import { RadioList } from "./radio-list";
import faker from "faker";

describe("RadioList", () => {
    test("when default props, renders items", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByText } = render(
            <RadioList items={[<span>{expected}</span>]} />
        );

        // Assert
        expect(getByText(expected)).not.toBeNull();
    });
});
