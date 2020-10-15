import React from "react";
import faker from "faker";
import { LinkCard } from "./link-card";
import { TestUtils } from "../../tests/test-utils";
import { LinkCardTypes } from "../constants/link-card-types";

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

    test("When type prop is button, renders LinkCard with button", () => {
        // Arrange
        const expected = faker.random.words();
        const label = faker.random.words();
        const type = LinkCardTypes.Button;

        // Act
        const { container } = TestUtils.renderWithRouter(
            <LinkCard label={label} type={type}>
                {expected}
            </LinkCard>
        );
        const result = container.getElementsByTagName(LinkCardTypes.Button)[0];

        // Assert
        expect(result).not.toBeNull();
        expect(result.classList).toContain("c-button");
        expect(container.innerHTML).toContain("button");
    });

    test("When default props and include icon, renders with class name -with-icon", () => {
        // Arrange
        const expected = faker.random.words();
        const label = faker.random.words();

        // Act
        const { container } = TestUtils.renderWithRouter(
            <LinkCard label={label} includeIcon={true}>
                {expected}
            </LinkCard>
        );
        const result = container.getElementsByClassName("-with-icon")[0];

        // Assert
        expect(result).not.toBeNull();
        expect(result.classList).toContain("-with-icon");
    });
});
