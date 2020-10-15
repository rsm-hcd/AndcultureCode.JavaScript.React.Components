import React from "react";
import faker from "faker";
import { LinkCard } from "./link-card";
import { TestUtils } from "../../tests/test-utils";

describe("LinkCard", () => {
    test("When default props, renders LinkCard", () => {
        // Arrange
        const expected = faker.random.words();
        const label = faker.random.words();

        // Act
        const { getByText } = TestUtils.renderWithRouter(
            <LinkCard label={label}>{expected}</LinkCard>
        );

        //Assert
        expect(getByText(expected)).not.toBeNull();
    });
});
