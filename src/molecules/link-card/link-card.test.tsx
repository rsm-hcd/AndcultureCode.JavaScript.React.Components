import React from "react";
import faker from "faker";
import { LinkCard, LinkCardIconClassName } from "./link-card";
import { TestUtils } from "../../tests/test-utils";
import { LinkCardTypes } from "../constants/link-card-types";

describe("LinkCard", () => {
    test("when default props, renders LinkCard", () => {
        // Arrange
        const expected = faker.random.words();
        const label = faker.random.words();

        // Act
        const { getByText } = TestUtils.renderWithRouter(
            <LinkCard label={label}>{expected}</LinkCard>
        );

        //Assert
        expect(getByText(expected)).not.toBeNil();
    });

    test(`when type prop is button, renders ${LinkCardTypes.Button}`, () => {
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
        const result = container.getElementsByTagName("button")[0];

        // Assert
        expect(result).not.toBeNil();
    });

    test(`when default props and include icon, renders with class name ${LinkCardIconClassName}`, () => {
        // Arrange
        const expected = faker.random.words();
        const label = faker.random.words();

        // Act
        const { container } = TestUtils.renderWithRouter(
            <LinkCard label={label} includeIcon={true}>
                {expected}
            </LinkCard>
        );
        const result = container.getElementsByClassName(
            LinkCardIconClassName
        )[0];

        // Assert
        expect(result).not.toBeNil();
        expect(result.classList).toContain(LinkCardIconClassName);
    });
});
